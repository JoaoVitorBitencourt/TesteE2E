import request from 'supertest';
import { app } from './app';

test('[e2e] CreateLesson', async () => {
    jest.setTimeout(30000);
    const response = await request(app)
    .post('/lessons')
    .send({ title: 'Nova Aula', description: 'teste' });

    expect(response.status).toBe(201);
    expect(response.body.error).toBeFalsy();
})