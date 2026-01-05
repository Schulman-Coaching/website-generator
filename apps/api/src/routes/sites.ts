import { FastifyPluginAsync } from 'fastify';
import { createSiteSchema, updateSiteSchema, paginationSchema, ERROR_CODES } from '@website-generator/shared';

const sitesRoutes: FastifyPluginAsync = async (fastify) => {
  // List sites for current user
  fastify.get('/sites', {
    preHandler: [fastify.authenticate],
  }, async (request, reply) => {
    const pagination = paginationSchema.safeParse(request.query);
    if (!pagination.success) {
      return reply.status(400).send({
        success: false,
        error: {
          code: ERROR_CODES.VALIDATION_ERROR,
          message: 'Invalid pagination parameters',
        },
      });
    }

    // TODO: Implement list sites
    return {
      success: true,
      data: {
        items: [],
        total: 0,
        page: pagination.data.page,
        pageSize: pagination.data.pageSize,
        hasMore: false,
      },
    };
  });

  // Get single site
  fastify.get('/sites/:siteId', {
    preHandler: [fastify.authenticate],
  }, async (request, reply) => {
    const { siteId } = request.params as { siteId: string };

    // TODO: Implement get site
    // 1. Fetch site
    // 2. Verify ownership
    // 3. Return site with pages

    return reply.status(501).send({
      success: false,
      error: {
        code: 'NOT_IMPLEMENTED',
        message: 'Get site not yet implemented',
      },
    });
  });

  // Create site
  fastify.post('/sites', {
    preHandler: [fastify.authenticate],
  }, async (request, reply) => {
    const result = createSiteSchema.safeParse(request.body);
    if (!result.success) {
      return reply.status(400).send({
        success: false,
        error: {
          code: ERROR_CODES.VALIDATION_ERROR,
          message: 'Validation failed',
          details: result.error.flatten(),
        },
      });
    }

    // TODO: Implement create site
    // 1. Check plan limits
    // 2. Verify subdomain availability
    // 3. Create site
    // 4. Copy template default pages

    return reply.status(501).send({
      success: false,
      error: {
        code: 'NOT_IMPLEMENTED',
        message: 'Create site not yet implemented',
      },
    });
  });

  // Update site
  fastify.patch('/sites/:siteId', {
    preHandler: [fastify.authenticate],
  }, async (request, reply) => {
    const { siteId } = request.params as { siteId: string };
    const result = updateSiteSchema.safeParse(request.body);
    if (!result.success) {
      return reply.status(400).send({
        success: false,
        error: {
          code: ERROR_CODES.VALIDATION_ERROR,
          message: 'Validation failed',
          details: result.error.flatten(),
        },
      });
    }

    // TODO: Implement update site
    return reply.status(501).send({
      success: false,
      error: {
        code: 'NOT_IMPLEMENTED',
        message: 'Update site not yet implemented',
      },
    });
  });

  // Delete site
  fastify.delete('/sites/:siteId', {
    preHandler: [fastify.authenticate],
  }, async (request, reply) => {
    const { siteId } = request.params as { siteId: string };

    // TODO: Implement delete site
    return reply.status(501).send({
      success: false,
      error: {
        code: 'NOT_IMPLEMENTED',
        message: 'Delete site not yet implemented',
      },
    });
  });

  // Publish site
  fastify.post('/sites/:siteId/publish', {
    preHandler: [fastify.authenticate],
  }, async (request, reply) => {
    const { siteId } = request.params as { siteId: string };

    // TODO: Implement publish site
    // 1. Validate site is complete
    // 2. Generate static files
    // 3. Upload to S3/CDN
    // 4. Update site status

    return reply.status(501).send({
      success: false,
      error: {
        code: 'NOT_IMPLEMENTED',
        message: 'Publish site not yet implemented',
      },
    });
  });
};

export default sitesRoutes;
