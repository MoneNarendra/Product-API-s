const express = require('express')
const mongoose = require('mongoose');
const Product = require("./models/product.model")
const productRoute = require("./routes/product.route")
const cors = require("cors");
const app = express()


// Middelewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors());

app.get('/', function (req, res) {
  res.send('Hello World Ever One')
})

// Routs
app.use("/api/products", productRoute)


mongoose.connect('mongodb+srv://monenarendrakumar:FXymis6gochdXWmR@backenddb.43qoh.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB')
  .then(() => {
    console.log('Connected!')
    app.listen(3000, () => {
      console.log("Server runnig on port 3000")
    });
  })
  .catch(() =>{
    console.log("Connection Failed")
  })













  
// GET all products

// app.get("/api/products", async (req, res) => {
//   try{
//     const products = await Product.find({})
//     res.status(200).json(products)
//   } catch (error){
//     res.status(500).json({message: error.message})
//   }
// })

// GET spacific product

// app.get("/api/products/:id", async (req, res) => {
//   try{
//     const { id } = req.params;
//     const product = await Product.findById(id)
//     res.status(200).json(product)
//   } catch (error){
//     res.status(500).json({message: error.message})
//   }
  
// })

// ADD product

// app.post("/api/products",   async (req, res) => {
//   try{
//     const product = await Product.create(req.body)
//     res.status(200).json(product)

//   } catch(error){
//     res.status(500).json({
//       message: error.message
//     })
//   }
// })

// Update Product

// app.put("/api/products/:id", async (req, res) =>{
//   try{
//     const {id} = req.params
//     const product = await Product.findByIdAndUpdate(id, req.body)
//     if (!product){
//       res.status(404).json({message: "Product is not updated"})
//     }
//     const updatedProduct = await Product.findById(id)
//     res.status(200).json(updatedProduct)

//   } catch (error){
//     res.status(500).json({message: error.message})
//   }
// })


// Delete Product 

// app.delete("/api/products/:id", async (req, res) => {
//   try{
//     const {id} = req.params
//     const product = await Product.findByIdAndDelete(id)
//     if (!product){
//       res.status(404).json({message: "Product not found"})
//     }
//     res.status(200).json({message: "Product Deleted Successfully"})
//   } catch (error){
//     res.status(500).json({message: error.message})
//   }
// })
