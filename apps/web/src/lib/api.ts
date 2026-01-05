import type { ApiResponse, PaginatedResponse } from '@website-generator/shared';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

class ApiClient {
  private baseUrl: string;
  private token: string | null = null;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  setToken(token: string | null) {
    this.token = token;
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    const url = `${this.baseUrl}${endpoint}`;
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    };

    if (this.token) {
      headers['Authorization'] = `Bearer ${this.token}`;
    }

    try {
      const response = await fetch(url, {
        ...options,
        headers,
      });

      const data = await response.json();
      return data;
    } catch (error) {
      return {
        success: false,
        error: {
          code: 'NETWORK_ERROR',
          message: 'Failed to connect to server',
        },
      };
    }
  }

  // Auth
  async login(email: string, password: string) {
    return this.request<{ token: string; account: unknown }>('/api/v1/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
  }

  async register(email: string, password: string, name?: string) {
    return this.request<{ token: string; account: unknown }>('/api/v1/auth/register', {
      method: 'POST',
      body: JSON.stringify({ email, password, name }),
    });
  }

  async getMe() {
    return this.request<{ accountId: string; email: string }>('/api/v1/auth/me');
  }

  // Sites
  async listSites(page = 1, pageSize = 20) {
    return this.request<PaginatedResponse<unknown>>(
      `/api/v1/sites?page=${page}&pageSize=${pageSize}`
    );
  }

  async getSite(siteId: string) {
    return this.request<unknown>(`/api/v1/sites/${siteId}`);
  }

  async createSite(data: { name: string; templateId: string; subdomain: string }) {
    return this.request<unknown>('/api/v1/sites', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async updateSite(siteId: string, data: Record<string, unknown>) {
    return this.request<unknown>(`/api/v1/sites/${siteId}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
    });
  }

  async deleteSite(siteId: string) {
    return this.request<void>(`/api/v1/sites/${siteId}`, {
      method: 'DELETE',
    });
  }

  async publishSite(siteId: string) {
    return this.request<{ url: string }>(`/api/v1/sites/${siteId}/publish`, {
      method: 'POST',
    });
  }

  // Templates
  async listTemplates(page = 1, pageSize = 20) {
    return this.request<PaginatedResponse<unknown>>(
      `/api/v1/templates?page=${page}&pageSize=${pageSize}`
    );
  }

  async getTemplate(templateId: string) {
    return this.request<unknown>(`/api/v1/templates/${templateId}`);
  }
}

export const api = new ApiClient(API_URL);
