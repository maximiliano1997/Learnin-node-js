const { model } = require('mongoose')
const Product = require('../models/product')


const getAllProductsStatic = async (req, res) => {
    const getProducts = await Product.find()
    console.log(getProducts.length)
    res.status(200).json({ getProducts, total: getProducts.length })
}

const getAllProducts = async (req, res) => {
    const { featured, company, name, numericFilter, sort, field } = req.query
    const queryObject = {}

    // Filtro
    if (featured) {
        queryObject.featured = featured == 'true' ? true : false;
    }

    if (company) {
        queryObject.company = company;
    }

    if (name) {
        queryObject.name = { $regex: name, $options: 'i' }
    }

    let getProducts = Product.find(queryObject)

    // Filtro >> filtro numerico
    if (numericFilter) {
        const operatorMap = {
            ">": "$gt",
            ">=": "$gte",
            "=": "$eq",
            "<": "$lt",
            "<=": "$lte",
        }

        const regEx = /\b(>|>=|=|<=|<)\b/g

        let filters = numericFilter.replace(
            regEx,
            (match) => `-${operatorMap[match]}-`
        )

        const options = ['price', 'rating'];
        filters = filters.split(',').forEach((item) => {
            const [field, operator, value] = item.split('-')

            if (options.includes(field)) {
                queryObject[field] = { [operator]: Number(value) }
                console.log(queryObject)
            }
        })

    }


    // sort
    if (sort) {
        const sortList = sort.split(',').join(' ')
        getProducts = getProducts.sort(sortList)
    } else {
        getProducts = getProducts.sort('createdAt')
    }

    // selected fields
    if (field) {
        const selectList = field.split(',').join(' ')
        getProducts = getProducts.select(selectList)
    }

    // pagination (supuestamente, pero tiene errores.... implementa algo mejor por tu cuenta..)

    if (req.query.page || req.query.limit) {
        console.log(req.query)
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 10;
        const skip = (page - 0) * limit;

        getProducts = getProducts.skip(skip).limit(limit)
    }

    const returnProducts = await getProducts
    res.status(200).json({ returnProducts, total: returnProducts.length })
}


module.exports = { getAllProducts }