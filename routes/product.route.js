const express = require('express')
const Product = require("../models/product.model")
const router = express.Router()
const {getProducts, getProduct, addProduct, updateProduct, delteproduct} = require("../controllers/product.controller")

router.get("/", getProducts)

router.get("/:id", getProduct)

router.post("/", addProduct)

router.put("/:id", updateProduct)

router.delete("/:id", delteproduct)

module.exports = router