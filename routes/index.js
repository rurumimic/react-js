const Router = require('koa-router');
const router = new Router();

const api = require('./api');

router.use(api.routes());
router.use(api.allowedMethods());

module.exports = router;
