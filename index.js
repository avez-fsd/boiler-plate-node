
import express from 'express'
import packageJson from './package.json' assert { type: 'json' };
const app = express()
const PORT = process.env.PORT || 3000;

app.get('/', (req, res, next) => {
    res.send({
        msg: "Success",
        version: packageJson.version
    })
})

export const server = app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`, {
      PORT
    })
})