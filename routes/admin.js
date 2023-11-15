var express = require('express');
const adminController = require("../controllers/adminController.js");
var router = express.Router();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const jsonParser = express.json();

//Контроллеры для админ панели
>>>>>>> 651bb2ae17f6353c4cd84d984417d19fad28ff46
router.get('/',adminController.getArticleAll);
router.get('/:idArticle',adminController.getArticle)
router.post('/addArticle',adminController.addArticle);
router.post('/editArticle',adminController.editArticle);
router.post('/deleteArticle',adminController.deleteArticle);

module.exports = router;