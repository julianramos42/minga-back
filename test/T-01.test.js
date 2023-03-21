import app from "../app.js";
import chai from "chai";
import request from 'supertest'

const { expect, assert } = chai

const data = {
    title: 'Mis Mangas...',
    cover_photo: 'https://example.com/image.jpg',
    description: 'Esta es la descripción de mi manga',
}
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MTQ3MmRiMTIxNGExNTY2NmUzZWNlZSIsImlhdCI6MTY3OTQyMzU3OSwiZXhwIjoxNjc5NTA5OTc5fQ.5XfyDuL0mKscPkaJ4TFvVyEfdN7gy1IWOIUm4Mq4knM"


describe("test 01 sobre/mangas", () => {
    it("GET debe verificar que se pasa token por headers", async () => {
        const response = await request(app)
            .get('/api/mangas/')
            .set("Authorization", `Bearer ${token}`);

        assert.equal(response.request._header.authorization, `Bearer ${token}`)

    });
    it("GET api/mangas verificar que la respuesta tiene alguna propiedad con el array de objetos (mangas) ", async () => {
        const response = await request(app)
            .get('/api/mangas/')
            .auth(token, { type: "bearer" })
        expect(response.body).to.have.property("mangas")
    });
    
    it('POST api/mangas Debería retornar un objeto con una URL válida en cover_photo', async () => {
        const res = await request(app)
            .post('api/mangas/')
            .set("Authorization", `Bearer ${token}`)
            .send(data);

        expect(res.status).to.equal(201);
        expect(res.body).to.be.an('object');
        expect(res.body.manga.cover_photo).to.match(/^https?:\/\/.+$/);
    });

    it("POST api/mangas verificar que la respuesta devuelve (no autorizado) cuando no se pasa token	", async () => {
        const res = await request(app)
            .post('api/mangas/')
            .send(data)

        assert.equal(res.status, 401)
    });

   
})
