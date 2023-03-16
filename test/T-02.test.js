import app from '../app.js'
import chai from "chai";
import request from "supertest";
import mongoose from 'mongoose';

const { assert } = chai

describe('Test 02 sobre mangas', () => {
    it('Verificar que la respuesta tiene alguna propiedad con el objeto manga', async () => {
        let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MTM3ZjJmNzkxMmQ1YzE3MTQ1Zjk3NSIsImlhdCI6MTY3OTAwMjUyMSwiZXhwIjoxNjc5MDg4OTIxfQ.GzKR6tPB1irZEH49TXn5uYjjNGMpWRdEwbFtZZEGPj0'
        const response = await request(app)
                                .get('/api/mangas/64137f2f7912d5c17145f995')// agarrar id dinamico
                                .set('Authorization', `Bearer ${token}`)
        assert.exists(response.body.manga)
    })
    it('Verificar que la respuesta devuelve un status 404 cuando no encuentra el manga', async () => {
        let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MTM3ZjJmNzkxMmQ1YzE3MTQ1Zjk3NSIsImlhdCI6MTY3OTAwMjUyMSwiZXhwIjoxNjc5MDg4OTIxfQ.GzKR6tPB1irZEH49TXn5uYjjNGMpWRdEwbFtZZEGPj0'
        const response = await request(app)
                                .get('/api/mangas?title=asdd&category=') // agarrar title o category dinamico
                                .set('Authorization', `Bearer ${token}`)
        assert.equal(response.status,404)
    })
    it('Verificar que el id enviado por params es un objectId', async () => {
        let mangaId = "64137f2f7912d5c17145f995" 
        const isValid = mongoose.Types.ObjectId.isValid(mangaId)
        assert.isTrue(isValid)
    })
    it('Verificar que se pasa un token por headers', async () => {
        let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MTM3ZjJmNzkxMmQ1YzE3MTQ1Zjk3NSIsImlhdCI6MTY3OTAwMjUyMSwiZXhwIjoxNjc5MDg4OTIxfQ.GzKR6tPB1irZEH49TXn5uYjjNGMpWRdEwbFtZZEGPj0'
        let mangaId = "64137f2f7912d5c17145f995"
        const response = await request(app)
            .get('/api/mangas/' + mangaId) // agarrar title o category dinamico
            .set('Authorization', `Bearer ${token}`)
        assert.equal(response.request._header.authorization,`Bearer ${token}`)
    })
})