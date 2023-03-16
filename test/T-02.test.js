import app from '../app.js'
import chai from "chai";
import request from "supertest";

const { assert } = chai

describe('Test 02 sobre mangas', () => {
    // it('Verificar que la respuesta tiene alguna propiedad con el objeto manga', async () => {
    //     let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MDBlMWMxZGUzYWJmMjAwNTg3ZTEzYyIsImlhdCI6MTY3ODkyMjQzNSwiZXhwIjoxNjc5MDA4ODM1fQ.Py-0n8_0N6lg-3ZBGbT9MEi2s78W_vjePdLM2OBb4_0'
    //     const response = await request(app)
    //                             .get('/api/mangas/640a2949af04496b0861ea3b')// agarrar id dinamico
    //                             .set('Authorization', `Bearer ${token}`)
    //     assert.exists(response.body.manga)
    // })
    // it('Verificar que la respuesta devuelve un status 404 cuando no encuentra el manga', async () => {
    //     let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MDBlMWMxZGUzYWJmMjAwNTg3ZTEzYyIsImlhdCI6MTY3ODkyMjQzNSwiZXhwIjoxNjc5MDA4ODM1fQ.Py-0n8_0N6lg-3ZBGbT9MEi2s78W_vjePdLM2OBb4_0'
    //     const response = await request(app)
    //                             .get('/api/mangas?title=asdd&category=') // agarrar title o category dinamico
    //                             .set('Authorization', `Bearer ${token}`)
    //     assert.equal(response.status,404)
    // })
    // it('Verificar que el id enviado por params es un objectId', async () => {
    //     let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MDBlMWMxZGUzYWJmMjAwNTg3ZTEzYyIsImlhdCI6MTY3ODkyMjQzNSwiZXhwIjoxNjc5MDA4ODM1fQ.Py-0n8_0N6lg-3ZBGbT9MEi2s78W_vjePdLM2OBb4_0'
    //     const response = await request(app)
    //                             .get('/api/mangas/640a2949af04496b0861ea3b')// agarrar id dinamico
    //                             .set('Authorization', `Bearer ${token}`)
        
    // })
})