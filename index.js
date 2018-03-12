const koa = require('koa');
const app = new koa();

app.use(async ctx => {ctx.body = 'Hello, I am KOA'});

app.listen(3000, (err) => {
  if (err) {
    console.log('error listening on port 3000');
  } else {
    console.log('server is listening on port 3000');
  }
});

