const request = require('supertest');

const app = require('../../src/app');

test('Deve listar todos os usuários', async () => {
  const res = await request(app).get('/users');
  expect(res.status).toBe(200);
  expect(res.body.length).toBeGreaterThan(0);
});

test('Deve inserir usuário com sucesso', async () => {
  const email = `${Date.now()}date@mail.com`;
  const newUser = {
    name: 'John Travolta',
    email,
    passwd: '123456',
  };
  const res = await request(app).post('/users').send(newUser);
  expect(res.status).toBe(201);
  expect(res.body[0].name).toBe('John Travolta');
});

test('Não deve inserir usuário sem nome', async () => {
  const email = `${Date.now()}date@mail.com`;
  const newUser = {
    email,
    passwd: '123456',
  };
  const res = await request(app).post('/users').send(newUser);
  expect(res.status).toBe(400);
  expect(res.body.error).toBe('Nome é um atributo obrigatório');
});

test('Não deve inserir usuário sem email', async () => {
  const newUser = {
    name: 'John Travolta',
    passwd: '123456',
  };
  const res = await request(app).post('/users').send(newUser);
  expect(res.status).toBe(400);
  expect(res.body.error).toBe('Email é um atributo obrigatório');
});
