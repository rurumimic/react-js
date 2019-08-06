const Koa = require('koa');
const serve = require('koa-static');
const app = new Koa();

app.use(serve(__dirname + '/client/build'));

const port = process.env.PORT || 8081;
app.listen(port, () => {
  console.log(`Server started at port ` + port);
});
