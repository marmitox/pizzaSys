const ProductController = require('../controllers/productController.js')

const router = require('express').Router()

router.get('/', (req, res) => ProductController.getAll(req, res))
router.get('/:id', (req, res) => ProductController.getOneById(req, res))
router.post('/', (req, res) => ProductController.createRegister(req, res))
router.put('/:id', (req, res) => ProductController.updateRegister(req, res))
router.delete('/:id', (req, res) => ProductController.deleteRegister(req, res))

module.exports = router