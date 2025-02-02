const ProductService = require('../services/ProductServices.js')

class ProductController {
    static async getAll(req, res) {
        try {
            const allRegisters = await ProductService.getAllProducts()
            return res.status(200).send(allRegisters)
        } catch (error) {
            res.status(500).send(`${error}`)
        }
    }

    static async getOneById(req, res){
        const registerId = req.params.id
        try {
            const oneRegister = await ProductService.getOneProduct(registerId)

            return res.status(200).send(oneRegister)
        } catch (error) {
            res.status(500).send(`${error}`)
        }
    }

    static async createRegister(req, res) {
        const dataToCreate = req.body
        try {
            const newRegister = await ProductService.createProduct(dataToCreate)

            return res.status(201).send(newRegister)
        } catch (error) {
            res.status(500).send(`${error}`)
        }
    }

    static async updateRegister(req, res) {
        const id = req.params.id
        const dataToUpdate = req.body
        try {
            const isUpdated = await ProductService.updateProduct(id, dataToUpdate)
            
            if(!isUpdated){
                return res.status(400).send({message: 'Register was not updated'})
            }
            return res.status(200).send({message:'Register succefull updated'})

        } catch (error) {
            res.status(500).send(`${error}`)
        }
    }

    static async deleteRegister(req, res){
        const id = req.params.id
        try {
            await ProductService.deleteProduct(id)
            return res.status(200).send({message: `Register with id ${id} was deleted`})
        } catch (error) {
            res.status(500).send(`${error}`)
        }
    }
}

module.exports = ProductController