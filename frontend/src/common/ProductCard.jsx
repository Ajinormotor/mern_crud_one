import { useProductStore } from '@/store/product'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import Modal from './Modal'

const ProductCard = ({p, key}) => {

  const {deleteProduct} = useProductStore()


const handleDelete = async (pid) => {
  const {success, message} = await deleteProduct(pid)
  if(success){
    toast.success(message)
  } else{
    toast.error(message)
  }
}

const [showModal, setShowModal] = useState(false)

const handleModal = (pid)  => {
  setShowModal((prev) => prev === pid ? null : pid)
}

  return (
 <section key={key}  className='flex flex-col w-[300px] rounded-lg
 h-[330px]  bg-black'>

{

showModal  && <div  onClick={ () => setShowModal(false)}
className='bg-black opacity-0 fixed w-full h-screen z-[100] cursor-pointer '></div>
}

  

  {

showModal === p._id &&

<div className='z-[1000] fixed w-full left-0'>
<Modal  p={p} key={p._id} setShowModal={setShowModal} />
</div>
  }
 


<div className=''>
    <img src={p.image} alt=''
    className='rounded-t-lg max-w-full w-full h-[200px]'  />
</div>

<div className='p-3 flex items-center justify-between'>
<h1 className='text-white font-bold text-xl'>{p.name}</h1>
<p  className='text-white font-medium text-base opacity-70'>{p.price}</p>
</div>

<div className='flex items-center gap-2 px-3'>
    <h1 onClick={()=> handleDelete(p._id)}
    className='rounded-lg p-3 flex items-center  bg-white cursor-pointer 
    justify-center w-[40px] h-[40px]'> <i class="ri-delete-bin-2-line text-red-500"></i> </h1>

<h1 onClick={()=> handleModal(p._id)}
className='rounded-lg p-3 flex items-center  bg-white cursor-pointer
    justify-center w-[40px] h-[40px]'><i className="ri-edit-2-fill text-blue-500"></i></h1>
    

</div>
 
    
 </section>
  )
}

export default ProductCard