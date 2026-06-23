import { test, expect, request } from '@playwright/test';

test('should create, update, and delete a user through API workflow', async () => {
  const api = await request.newContext({
    baseURL: 'https://jsonplaceholder.typicode.com',
  });

  const createPayload = {
    name: 'Henry',
    job: 'QA Engineer',
  };

  const createResponse = await api.post('/users', {
    data: createPayload,
  });

  expect(createResponse.status()).toBe(201);

  const createResponseBody = await createResponse.json();


  const userId = 1;

  expect(createResponseBody.name).toBe(createPayload.name);
  expect(createResponseBody.job).toBe(createPayload.job);
  expect(createResponseBody.id).toBeDefined();

  // -------------------------
  // UPDATE USER (PUT)
  // -------------------------

  const updatePayload = {
    name: 'Henry Updated',
    job: 'Senior QA Automation Engineer',
  };

  const updateResponse = await api.put(`/users/${userId}`, {
    data: updatePayload,
  });

  expect(updateResponse.status()).toBe(200);

  const updateResponseBody = await updateResponse.json();

  expect(updateResponseBody.name).toBe(updatePayload.name);
  expect(updateResponseBody.job).toBe(updatePayload.job);



  // -------------------------
  // DELETE USER
  // -------------------------

const deleteResponse = await api.delete(`/users/${userId}`);

expect(deleteResponse.status()).toBe(200);
});