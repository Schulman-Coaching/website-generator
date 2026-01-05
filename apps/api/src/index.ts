import 'dotenv/config';
import Fastify from 'fastify';
import cors from '@fastify/cors';
import sensible from '@fastify/sensible';
import authPlugin from './plugins/auth.js';
import routes from './routes/index.js';

const PORT = parseInt(process.env.API_PORT || '3001', 10);
const HOST = process.env.API_HOST || '0.0.0.0';

async function main() {
  const fastify = Fastify({
    logger: {
      level: process.env.LOG_LEVEL || 'info',
      transport:
        process.env.NODE_ENV === 'development'
          ? {
              target: 'pino-pretty',
              options: {
                translateTime: 'HH:MM:ss Z',
                ignore: 'pid,hostname',
              },
            }
          : undefined,
    },
  });

  // Register plugins
  await fastify.register(cors, {
    origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
    credentials: true,
  });

  await fastify.register(sensible);
  await fastify.register(authPlugin);

  // Register routes
  await fastify.register(routes);

  // Global error handler
  fastify.setErrorHandler((error, request, reply) => {
    fastify.log.error(error);

    const statusCode = error.statusCode || 500;
    reply.status(statusCode).send({
      success: false,
      error: {
        code: error.code || 'INTERNAL_ERROR',
        message: statusCode === 500 ? 'Internal server error' : error.message,
      },
    });
  });

  // Start server
  try {
    await fastify.listen({ port: PORT, host: HOST });
    fastify.log.info(`Server running at http://${HOST}:${PORT}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
}

main();
