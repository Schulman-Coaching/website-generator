import { FastifyPluginAsync, FastifyRequest } from 'fastify';
import fp from 'fastify-plugin';
import jwt from '@fastify/jwt';

declare module 'fastify' {
  interface FastifyInstance {
    authenticate: (request: FastifyRequest) => Promise<void>;
  }
}

declare module '@fastify/jwt' {
  interface FastifyJWT {
    payload: { accountId: string; email: string };
    user: { accountId: string; email: string };
  }
}

const authPlugin: FastifyPluginAsync = async (fastify) => {
  const jwtSecret = process.env.JWT_SECRET;
  if (!jwtSecret) {
    throw new Error('JWT_SECRET environment variable is required');
  }

  await fastify.register(jwt, {
    secret: jwtSecret,
    sign: {
      expiresIn: '7d',
    },
  });

  fastify.decorate('authenticate', async (request: FastifyRequest) => {
    try {
      await request.jwtVerify();
    } catch (err) {
      throw fastify.httpErrors.unauthorized('Invalid or expired token');
    }
  });
};

export default fp(authPlugin, {
  name: 'auth',
});
