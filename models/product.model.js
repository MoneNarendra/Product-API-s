const mongoose = require('mongoose');


const ProductSchema = mongoose.Schema(
    {
        name: {
            type: String,
            require: [true, "Please Enter the product Name"]
        },

        quantity: {
            type: Number,
            require: true,
            default: 0
        },
        price: {
            type: Number,
            require: true,
            default: 0
        },
        image: {
            type: String,
            require: false
        }
    },
    {
        timestamps: true
    }
)

const Product = mongoose.model("Product", ProductSchema)

module.exports = Product;