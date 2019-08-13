const Koa = require('koa')
const serve = require('koa-static')
const path = require('path')
const app = new Koa()

app.use(serve(path.join(__dirname, '/client/build')))

const router = require('./routes')

app.use(router.routes())
app.use(router.allowedMethods())

module.exports = app
