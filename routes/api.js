const Router = require('koa-router');
const router = new Router({
  prefix: '/api'
});

// responds to "/api"
router.get('/hello', (ctx, next) => {
  console.log('connect');
  ctx.body = {
    greet: "Hello, there."
  };
});

module.exports = router;
