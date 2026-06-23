import { test, expect, request } from '@playwright/test';

test('should create a new user', async () => {
  const api = await request.newContext({
    baseURL: 'https://jsonplaceholder.typicode.com',
  });

  const payload = {
    name: 'Henry',
    job: 'QA Engineer',
  };

  const response = await api.post('/users', {
    data: payload,
  });

  expect(response.status()).toBe(201);

  const responseBody = await response.json();


  const userId = responseBody.id;

  expect(responseBody.name).toBe(payload.name);
  expect(responseBody.job).toBe(payload.job);
  expect(responseBody.id).toBeDefined();
  expect(userId).toBeDefined();
});