// test/app.test.js

//npm install --save-dev jest supertest

const request = require('supertest'); 
const app = require('../app'); 

describe('API Endpoints', () => {
  
  it('should return Hello World on /home', async () => {
    const res = await request(app).get('/home');
    expect(res.statusCode).toEqual(200); 
    expect(res.text).toEqual('Hello, World! Welcome to DevOps with Vercel.'); 
  });

 
  it('should return user data on /user', async () => {
    const res = await request(app).get('/user'); 
    expect(res.statusCode).toEqual(200); 
    expect(res.body).toEqual({
      name: 'John Doe',
      email: 'john.doe@example.com',
    });
  });
});
