import app from "../app.js";
import chai from "chai";
import request from 'supertest'

const { assert } = chai

describe('test 01 sobre /mangas', () => {

    it('GET api/mangas verificar que la respuesta tiene alguna propiedad con el array de objetos (mangas)', async () => {
        let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MDIwZWQxZmYzZTM3ZTZmMGI3NmNjOCIsImlhdCI6MTY3ODk3MzMwNiwiZXhwIjoxNjc5MDU5NzA2fQ.Qk7fQp4vda--B7nkNz8_4FN9_CHUbIXprThcW-2J4JI'
       const response = await request(app)
                            .get('api/mangas')
                            .set('Authorization',`Bearer ${token}`)

                assert.exists(response.body)

                
    })
})
