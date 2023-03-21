import app from '../app.js'
import chai from 'chai'
import request from 'supertest'
const should = chai.should
const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MDI4MDUzNDM2ZmRmODIwNTA0MDE0ZCIsImlhdCI6MTY3ODg5MDI2NiwiZXhwIjoxNjc4OTc2NjY2fQ.OkMhnAblUts3FozMPOaRsXzXxyBYV7F0-C_XQEw9sl4";
describe('POST /chapters', () => {
    it("debe devolver un error 400 si pages no es un array de strings", async () => {
        const chapters = {
          manga_id: "640a2949af04496b0861ea3b",
          title: "fer777777",
          pages: [
            "https://i.postimg.cc/q76GttJr/alice-in-borderland-001-01.jpg"
          ],
          order: 1
        };
         const response =  await request(app).post('/api/chapters')
                                            .send(chapters)
                                            .auth(token, {type:'bearer'})
         console.log(response.body.chapters.pages, '')
    });
})