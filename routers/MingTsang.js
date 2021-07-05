let express = require('express');
let router = express.Router();
router.use(express.static('./public')); // 把 public 中的檔案全部丟上來
// middleware that is specific to this router

router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
// define the home page route

router.get('/', function(req, res) {
  res.send(
    'MingTsang\'s home page'+'<br>'+
    '<a href="/user/MingTsang/about"> about MingTsang</a>'+'<br>'+
    '<a href="/user/MingTsang/classA.html"> classA </a>'
    );
});

// define the about route
router.get('/about', function(req, res) {
  res.send(
    '<h1> About MingTsang </h1>'+'<br>'+
    '<a href="/user"> 回到主頁 </a>'
    );
});


module.exports = router;
