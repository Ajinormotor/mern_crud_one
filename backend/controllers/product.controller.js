import Product from "../model/product.model.js"
import mongoose from "mongoose";


export const getAllProduct = async(req,res) => {
    try {

        const product = await Product.find({});
        return res.status(200).json({
            success: true,
            data: product
        })
        
    } catch (error) {
    console.error(`Error: ${error.message}`)
        return res.status(500).json({
            success:false,
            message: 'Internal Server error'
        })
        
    }
}



export const  getSingleProduct = async(req,res) => {


    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({
            success:false,
            message: 'Invalid id'
        })
    }

    try {

  const product = await Product.findById(id);

if(!product){
    return res.status(404).json({
        success:false,
        message: "No record found"
    })
}

  return res.status(200).json({
    success:true,
    data: product
  })

        
    } catch (error) {
        console.error(`Error : ${error.message}`)

        return res.status(500).json({
            success: false,
            message: 'Internal Server Error'
        })
        
    }
}

export const  createProduct =  async (req,res) => {
   const product = req.body;

   if(!product.name || !product.price || !product.image){
    return res.status(400).json({
        success: false, 
        message: "Please provide all fields"
    });
}

const newProduct = new Product(product);

try {
    await newProduct.save();
    res.status(200).json({
        success: true,
        message: 'Product created successfully',
        data: newProduct
    })
    
} catch (error) {
    console.error("Error in Create product: ", error.message)
    res.status(400).json({
        success: false,
        message: 'Server Error'
    })
}

   
}

export const updateProduct = async(req,res) => {

    const {id} = req.params;
    const product = req.body

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({
            success:false,
            message: "Invalid id"
        })
    }

try {

    const updatedProduct = await Product.findByIdAndUpdate(id, product, {new: true})

    return res.status(200).json({
        success:true,
        message: 'Product updated successfully',
        data: updatedProduct
    })

    
} catch (error) {

    return res.status(500).json({
        success: false,
        message: 'Internal Server error'
    })
    
}

}

export const  deleteProduct =  async(req,res) => {


    const {id} = req.params
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({
            success:false,
            message: 'Invalid Id'
        })
    
    }
    
    try {
    
    await Product.findByIdAndDelete(id);
    return res.status(200).json({
        success: true,
        message: 'Product deleted successfully'
    })
    
        
    } catch (error) {
    
        console.error(`Error : ${error.message}`)
    
        return res.status(500).json({
            success: false,
            message: 'Internal Server Error'
        })
        
    }
    
    }