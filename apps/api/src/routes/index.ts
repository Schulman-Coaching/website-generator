import { FastifyPluginAsync } from 'fastify';
import healthRoutes from './health.js';
import authRoutes from './auth.js';
import sitesRoutes from './sites.js';
import templatesRoutes from './templates.js';

const routes: FastifyPluginAsync = async (fastify) => {
  // Health checks (no prefix)
  await fastify.register(healthRoutes);

  // API v1 routes
  await fastify.register(async (api) => {
    await api.register(authRoutes);
    await api.register(sitesRoutes);
    await api.register(templatesRoutes);
  }, { prefix: '/api/v1' });
};

export default routes;
