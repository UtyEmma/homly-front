import express from 'express'
import fs from 'fs'
import path from 'path'
import React from 'react'
import ReactDomServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import App from '../src/App'

const app = express()

const PORT = "4200"

app.use('^/$', (req, res, next) => {
    const context = {};
    const app = ReactDOMServer.renderToString(
        <StaticRouter location={req.url} context={context}>
            <App />
        </StaticRouter>
    );

    fs.readFile(path.resolve('./build/index.html'), 'utf-8', (err, data) => {
        if(err){
            console.log(err)
            return res.status(500).send('An Error Occurred')
        }
        return res.send(data.replace(
            '<div id="root"></div>', 
            `<div id="root">${app}</div>`
            )
        );

    })
})


app.use(express.static(path.resolve(__dirname, '..', 'build')))

app.listen(PORT, () => {
    console.log(`App Launched on Port ${PORT}`)
})