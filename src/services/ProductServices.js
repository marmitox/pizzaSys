const dataSource = require('../models')

module.exports = class ProductService {
    static async getAllProducts () {
        return await dataSource.Product.findAll({
            include: dataSource.Price
        })
    }

    static async getOneProduct (id) {
        return await dataSource.Product.findByPk(id)
    }

    static async createProduct (data) {
        return await dataSource.Product.create(data)
    }

    static async updateProduct(id, dataToUpdate) {
        const productsUpdated = dataSource.Product.update(dataToUpdate, {
            where: {id:id}
        })

        if(productsUpdated[0]===0){
            return false
        }
        return true
    }

    static async deleteProduct(id) {
        return dataSource.Product.destroy( {where:{id:id}})
    }
}