var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


// 로그인 라우터
router.get('/login', function(req, res, next) {
  res.render('index', { title: '로그인', pageName:'users/login.ejs' });
});

// 회원가입 라우터
router.get('/join', function(req, res, next) {
  res.render('index', { title: '회원가입', pageName:'users/join.ejs' });
});

// 장바구니 라우터
router.get('/cart', function(req, res, next) {
  res.render('index', { title: '장바구니', pageName:'users/cart.ejs' });
});

// 마이페이지 라우터
router.get('/mypage', function(req, res, next) {
  res.render('index', { title: '마이페이지', pageName:'users/mypage.ejs' });
});

module.exports = router;
