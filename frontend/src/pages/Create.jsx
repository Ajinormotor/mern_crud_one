import React, { useState } from 'react';
import TextInput from '@/reuseable/TextInput';
import { useProductStore } from '@/store/product';
import { toast, ToastContainer } from 'react-toastify';

const Create = () => {
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    image: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct(prev => ({ ...prev, [name]: value }));
  };

  const {createProduct} = useProductStore()

 const handleAddProduct = async(e) => {
    e.preventDefault()
    const {success, message}  = await createProduct(newProduct)
if(!success){
    toast.error(message)
    
}else{
    toast.success(message)
}

setNewProduct({
    name: '' , price: '' , image: ''
})

 }

  return (
    <section className='min-h-[80vh] w-full flex items-center justify-center'>
       
        <ToastContainer  />

      <div className='bg-black rounded-lg min-h-[300px] flex items-center justify-center w-[80%]'>
        <form className='w-[80%] flex flex-col gap-3 py-6'>

          <TextInput
            color="border border-white"
            label="Name"
            name="name"
            type="text"
            value={newProduct.name}
            setValue={handleChange}
            icon="user-heart"
          />

          <TextInput
            color="border border-white"
            label="Price"
            name="price"
            type="text"
            value={newProduct.price}
            setValue={handleChange}
            icon="money-dollar-circle"
          />

          <TextInput
            color="border border-white"
            label="Image URL"
            name="image"
            type="text"
            value={newProduct.image}
            setValue={handleChange}
            icon="image-add-line"
          />

          <button onClick={handleAddProduct}
           className='bg-white rounded-lg h-[45px] px-5 py-2 cursor-pointer'>
          Create
          </button>

        </form>
      </div>
    </section>
  );
};

export default Create;
