
import express from 'express'

const app = express()
const port = 3000;

app.get('/', (req, res, next) => {
    res.send({
        msg: "Success"
    })
})

export const server = app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`, {
      port
    })
})