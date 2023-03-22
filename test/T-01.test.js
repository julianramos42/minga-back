import app from "../app.js";
import chai from "chai";
import request from 'supertest'

const { expect, assert } = chai

const data = {
    title: 'Mis Mangas juan',
    cover_photo: 'https://example.com/image.jpg',
    description: 'Esta es la descripción de mi manga',
    category_id:'641472da1214a15666e3ece9',
}
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MTQ3MmRiMTIxNGExNTY2NmUzZWNlZSIsImlhdCI6MTY3OTQ4NzU0OSwiZXhwIjoxNjc5NTczOTQ5fQ.DcXSj-GM4Smw6kxAIvoPQWy0ICmcloBJErrClocAQO0"


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
            .post('/api/mangas/')
            .auth(token, { type: "bearer" })
            .send(data);

        expect(res.status).to.equal(200);
        expect(res.body).to.be.an('object');
        expect(res.body.manga.cover_photo).to.match(/^https?:\/\/.+$/);
    });

    it("POST api/mangas verificar que la respuesta devuelve (no autorizado) cuando no se pasa token	", async () => {
        const res = await request(app)
            .post('/api/mangas/')
            .send(data)

        assert.equal(res.status, 401)
    });


})
