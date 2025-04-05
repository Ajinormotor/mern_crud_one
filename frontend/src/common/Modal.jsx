import TextInput from '@/reuseable/TextInput';
import { useProductStore } from '@/store/product';
import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';

const Modal = ({p, setShowModal}) => {

 const [updatedProduct, setUpdatedProduct] = useState({
    name: p.name || '',
    price: p.price || '',
    image: p.image || ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProduct(prev => ({ ...prev, [name]: value }));
  };
  const {updateProduct} = useProductStore()

  const handleUpdate = async(pid, updatedProduct) => {
    const {success,message} = await  updateProduct(pid, updatedProduct)

    if(!success){
        toast.error(message)
    } else {
        toast.success("Product updated successfully")
        setShowModal(true)
      
    }
  }


  return (
    <section className='min-h-[80vh] w-full flex items-center justify-center'>

{

setShowModal  && <div  onClick={ () => setShowModal(false)}
className='bg-black opacity-30 fixed w-full h-screen z-[100] cursor-pointer top0'></div>
}

       
        <ToastContainer  />

      <div className='bg-black rounded-lg min-h-[300px] flex items-center justify-center w-[90%] md:w-[80%] z-[1000]'>
        <form className='w-[80%] flex flex-col gap-3 py-6'>

          <TextInput
            color="border border-white"
            label="Name"
            name="name"
            type="text"
            value={updatedProduct.name}
            setValue={handleChange}
            icon="user-heart"
          />

          <TextInput
            color="border border-white"
            label="Price"
            name="price"
            type="text"
            value={updatedProduct.price}
            setValue={handleChange}
            icon="money-dollar-circle"
          />

          <TextInput
            color="border border-white"
            label="Image URL"
            name="image"
            type="text"
            value={updatedProduct.image}
            setValue={handleChange}
            icon="image-add-line"
          />

          <button onClick={() => handleUpdate(p._id, updatedProduct)}
           className='bg-white rounded-lg h-[45px] px-5 py-2 cursor-pointer'>
          Update
          </button>

        </form>
      </div>

    </section>
  )
}

export default Modal