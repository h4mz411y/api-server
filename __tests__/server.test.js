'use strict';
const { app } = require('../src/server'); // destructing assignment
const supertest = require('supertest');
const mockRequest = supertest(app);

const { db } = require('../src/models/index');

beforeAll(async () => {
  await db.sync();
});

describe('Web server', () => {
  it('must give 404', async () => {
    const response = await mockRequest.get('/awddaw');
    expect(response.status).toBe(404);
  });
  it('must give 404', async () => {
    const response = await mockRequest.patch('/food');
    expect(response.status).toBe(404);
  });

  it('can add a food item', async () => {
    const response = await mockRequest.post('/food').send({
      name: 'banana',
      calories: 130,
    });
    expect(response.status).toBe(201);
  });

  it('can get all food items', async () => {
    const response = await mockRequest.get('/food');
    expect(response.status).toBe(200);
  });

  it('can get one record', async () => {
    const response = await mockRequest.get('/food/1');
    expect(response.status).toBe(200);
  });

  it('can update a record', async () => {
    const response = await mockRequest.put('/food/1');
    expect(response.status).toBe(201);
  });

  it('can delete a record', async () => {
    const response = await mockRequest.delete('/food/1');
    expect(response.status).toBe(204);
  });
});

afterAll(async () => {
  await db.drop();
});