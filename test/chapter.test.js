import app from '../app.js'
import chai from 'chai'
import request from 'supertest'
const { expect, assert } = chai;

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MTllNzgxY2I4Y2UyNDEzZDZiNzQzOCIsImlhdCI6MTY3OTQxOTI3NiwiZXhwIjoxNjc5NTA1Njc2fQ.2aeKbH8SN3SfxfilblKBJK18EzdeT_zA1Y5Izzz8kuI";
//cambiar el token cuando expire
describe('POST /chapters', async () => {
    it("POST api/chapters verificar que pages es un array de strings", async () => {
      const date = new Date();

      const chapters = {
        manga_id: "641472dc1214a15666e3ed0e",
        title: `chapter_${date}`,
        pages: ["https://i.postimg.cc/q76GttJr/alice-in-borderland-001-01.jpg"],
      };

      const response = await request(app)
        .post("/api/chapters")
        .send(chapters)
        .auth(token, { type: "bearer" });

      assert.equal(response.status, 201);

      //ambos son un array porque abos tienen length (largo)
      assert.equal(response.body.pages.length, chapters.pages.length);

      response.body.pages.forEach((element) => {
        assert.equal(typeof element, "string");
      });
    });
      it('GET api/chapters/:id verificar que la respuesta tiene alguna propiedad un array de url (pages)', async () => {
        const response = await request(app)
                                .get('/api/chapters/641472e51214a15666e3ee41')
                                .set('Accept', "application/json")
                                .auth(token, { type: "bearer" });
            expect(response.body.chapter).to.have.property("pages"); // Verificar que la respuesta tenga una propiedad "pages"
            expect(response.body.chapter.pages).to.be.an("array"); // Verificar que la propiedad "pages" sea un array
            expect(response.body.chapter.pages).to.satisfy((pages) => {
              // Verificar que cada elemento del array sea una URL
              return pages.every((page) => {
                return typeof page === "string" && /^https?:\/\//.test(page);
              });
            });
    })
     it("POST api/chapters verificar que la respuesta devuelve alguna propiedad con el capitulo que ha sido creado", async () => {
      const date = new Date();

       const chapters = {
         manga_id: "641472dc1214a15666e3ed0e",
         title: `chapter_${date}`,
         pages: [
           "https://i.postimg.cc/q76GttJr/alice-in-borderland-001-01.jpg",
         ],
       };
       const response = await request(app)
         .post("/api/chapters")
         .send(chapters)
         .auth(token, { type: "bearer" });

         assert.equal(response.status, 201);
         assert.equal(response.body.chapter.title, chapters.title);

     });
      it("verifica que se pase el token por headers", async () => {
        const response = await request(app)
          .get("/api/chapters/")
          .auth(token, { type: "bearer" });

        expect(response.request.header.Authorization).to.equal(
          `Bearer ${token}`
        );
      });


})
