const request = require('supertest');
const app = require('../app');

describe('Probar express', () => {
    test('Debe responder al methodo get', done => {
        request(app).get('/').then((response) => {
            expect(response.statusCode).toBe(200);
            done();
        })
    });
});