import { FastifyPluginAsync } from 'fastify';
import { paginationSchema, ERROR_CODES } from '@website-generator/shared';

const templatesRoutes: FastifyPluginAsync = async (fastify) => {
  // List all active templates (public)
  fastify.get('/templates', async (request, reply) => {
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

    // TODO: Implement list templates
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

  // Get single template (public)
  fastify.get('/templates/:templateId', async (request, reply) => {
    const { templateId } = request.params as { templateId: string };

    // TODO: Implement get template
    return reply.status(501).send({
      success: false,
      error: {
        code: 'NOT_IMPLEMENTED',
        message: 'Get template not yet implemented',
      },
    });
  });

  // Get template preview URL (public)
  fastify.get('/templates/:templateId/preview', async (request, reply) => {
    const { templateId } = request.params as { templateId: string };

    // TODO: Implement template preview
    return reply.status(501).send({
      success: false,
      error: {
        code: 'NOT_IMPLEMENTED',
        message: 'Template preview not yet implemented',
      },
    });
  });
};

export default templatesRoutes;
