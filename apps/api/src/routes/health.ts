import { FastifyPluginAsync } from 'fastify';

const healthRoutes: FastifyPluginAsync = async (fastify) => {
  fastify.get('/health', async () => {
    return {
      status: 'ok',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
    };
  });

  fastify.get('/health/ready', async () => {
    // Add database connectivity check here
    return {
      status: 'ready',
      timestamp: new Date().toISOString(),
    };
  });
};

export default healthRoutes;
