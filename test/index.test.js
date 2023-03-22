// import app from '../app.js'
// import chai from "chai";
// import request from "supertest";

// const { assert, expect } = chai

// describe('Pruebas sobre /categories', () => {
//     it('GET a /categories debe traerme todas las categorias (4)', async () => {
//         const response = await request(app)
//                                 .get('/api/categories')
//                                 .set('Accept', "application/json")

//         assert.equal(response.body.categories.length,4)
//         expect(response.body.categories.length).to.be.equal(4)
//     })

//     it('POST a /categories deberia cargar la categoria MARVEL', async () => {
//         const dc = {
//             name: "DC COMICS",
//             detail: "descripcion de DC",
//             admin_id: "63f676c249ab629c69b4a227"
//         }

//         const response = await request(app)
//                                 .post('/api/categories')
//                                 .send(dc)

//         assert.equal(response.status, 200)
//     })
// })