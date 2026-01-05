import { FastifyPluginAsync } from 'fastify';
import { loginSchema, registerSchema } from '@website-generator/shared';
import { ERROR_CODES } from '@website-generator/shared';

const authRoutes: FastifyPluginAsync = async (fastify) => {
  // Register
  fastify.post('/auth/register', async (request, reply) => {
    const result = registerSchema.safeParse(request.body);
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

    // TODO: Implement registration logic
    // 1. Check if email exists
    // 2. Hash password
    // 3. Create account
    // 4. Create subscription (free tier)
    // 5. Generate JWT

    return reply.status(501).send({
      success: false,
      error: {
        code: 'NOT_IMPLEMENTED',
        message: 'Registration not yet implemented',
      },
    });
  });

  // Login
  fastify.post('/auth/login', async (request, reply) => {
    const result = loginSchema.safeParse(request.body);
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

    // TODO: Implement login logic
    // 1. Find account by email
    // 2. Verify password
    // 3. Generate JWT

    return reply.status(501).send({
      success: false,
      error: {
        code: 'NOT_IMPLEMENTED',
        message: 'Login not yet implemented',
      },
    });
  });

  // Get current user
  fastify.get('/auth/me', {
    preHandler: [fastify.authenticate],
  }, async (request) => {
    // TODO: Fetch user details from database
    return {
      success: true,
      data: {
        accountId: request.user.accountId,
        email: request.user.email,
      },
    };
  });

  // Logout (client-side token removal, but we can blacklist if needed)
  fastify.post('/auth/logout', {
    preHandler: [fastify.authenticate],
  }, async () => {
    // TODO: Implement token blacklisting if needed
    return {
      success: true,
      data: { message: 'Logged out successfully' },
    };
  });
};

export default authRoutes;
