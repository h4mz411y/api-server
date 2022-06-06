'use strict';
const { app } = require('../src/server'); 
const supertest = require('supertest');
const mockRequest = supertest(app);
const { db } = require('../src/models/index');
beforeAll(async () => {
    await db.sync();
});
describe('server test', () => {
    it('404 error', async () => {
        const response = await mockRequest.get('/sssss');
        expect(response.status).toBe(404);
    });

    it('add new type of Food', async () => {
        const response = await mockRequest.post('/food').send({
            FoodId: 'pizza',
            FoodType: 'main'
        });
        expect(response.status).toBe(201);
    });
    it(' get food', async () => {
        const response = await mockRequest.get('/food');
        expect(response.status).toBe(200);
    });
    it('update', async () => {
        const response = await mockRequest.put('/food/1');
        expect(response.status).toBe(201);
    });
    
    it(' delete', async () => {
        const response = await mockRequest.delete('/food/1');
        expect(response.status).toBe(204);
    });
    
    it('add new type of  clothes', async () => {
        const response = await mockRequest.post('/clothes').send({
            ClothesType: 'T-shirt',
            Season: 'spring'
        });
        expect(response.status).toBe(201);
    });

    it(' get  clothes', async () => {
        const response = await mockRequest.get('/clothes');
        expect(response.status).toBe(200);
    });

    it('  update clothes', async () => {
        const response = await mockRequest.put('/clothes/1');
        expect(response.status).toBe(201);
    });
    
    it(' delete clothes', async () => {
        const response = await mockRequest.delete('/clothes/1');
        expect(response.status).toBe(204);
    });
});

afterAll(async () => {
    await db.drop();
});