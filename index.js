
import express from 'express'
import packageJson from './package.json' assert { type: 'json' };
const app = express()
const port = 3000;

app.get('/', (req, res, next) => {
    res.send({
        msg: "Success",
        version: packageJson.version
    })
})

export const server = app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`, {
      port
    })
})