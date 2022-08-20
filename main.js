__path = process.cwd()

var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(__path + '/view/index.html')
})
router.get('/cotacao', (req, res) => {
    res.sendFile(__path + '/view/cotacao.html')
})
router.get('/equipe', (req, res) => {
    res.sendFile(__path + '/view/equipe.html')
})
router.get('/planeta', (req, res) => {
    res.sendFile(__path + '/view/planeta.html')
})

router.get('/css/style.css', (req, res) => {
    res.sendFile(__path + '/css/style.css')
})
router.get('/css/nav.css', (req, res) => {
    res.sendFile(__path + '/css/nav.css')
})
router.get('/js/index.js', (req, res) => {
    res.sendFile(__path + '/js/index.js')
})
router.get('/image/stevejobsiphone2g.jpg', (req, res) => {
    res.sendFile(__path + '/image/stevejobsiphone2g.jpg')
})
router.get('./image/caua-juliette.jpg', (req, res) => {
    res.sendFile(__path + '/image/caua-juliette.jpg')
})
router.get('./image/luiz-juliette.jpg', (req, res) => {
    res.sendFile(__path + '/image/luiz-juliette.jpg')
})
module.exports = router
