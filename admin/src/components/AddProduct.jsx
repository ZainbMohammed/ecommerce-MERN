import { useState } from 'react';
import upload_area from '../assets/upload_area.svg';
import { MdAdd } from 'react-icons/md'
const AddProduct = () => {

  const [image, setImage] = useState(false);
  const [productDetails, setProductDetails] = useState({
    name: '',
    image: '',
    category: 'women',
    new_price: '',
    old_price: '',
  });
  const imageHandler = (e) => {

    setImage(e.target.files[0])
  }

  const changeHandler = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value })
  }

  const addProductHandler = async () => {
    console.log(productDetails);
    let responseData;
    let product = productDetails;

    let formData = new FormData();
    formData.append('product', image);

    await fetch('http://localhost:4000/upload', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => { responseData = data });

    if (responseData.success) {
      product.image = responseData.image_url;
      console.log(product);
      await fetch('http://localhost:4000/addProduct', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(product),
      })
      .then((res) => res.json())
      .then((data)=>{
        data.success ? alert('product added successful') : alert('faield')
      })

    }
  }
  return (
    <div className='p-8 box-border bg-white w-full rounded-sm mt-4 lg:m-7'>
      <div className='mb-3'>
        <h4 className='bold-18 pb-2'>Product title:</h4>
        <input type='text' name='name' value={productDetails.name} onChange={changeHandler} placeholder='Type here ..' className='bg-primary outline-none max-w-80 w-full py-3 px-4 rounded-md' />
      </div>
      <div className='mb-3'>
        <h4 className='bold-18 pb-2'>Price:</h4>
        <input type='text' name='old_price' value={productDetails.old_price} onChange={changeHandler} placeholder='Type here ..' className='bg-primary outline-none max-w-80 w-full py-3 px-4 rounded-md' />
      </div>
      <div className='mb-3'>
        <h4 className='bold-18 pb-2'>Offer Price:</h4>
        <input type='text' name='new_price' value={productDetails.new_price} onChange={changeHandler} placeholder='Type here ..' className='bg-primary outline-none max-w-80 w-full py-3 px-4 rounded-md' />
      </div>
      <div className='mb-3 flex items-center gap-x-4'>
        <h4 className='bold-18 pb-2'>Product Catergory</h4>
        <select id='' name='category' value={productDetails.category} onChange={changeHandler} className='bg-primary ring-1 ring-slate-900/20 medium-16 rounded-sm outline-none p-1'>
          <option value='women'>Women</option>
          <option value='men'>Men</option>
          <option value='kid'>Kid</option>
        </select>
      </div>
      <div>
        <label htmlFor="file-input">
          <img src={image ? URL.createObjectURL(image) : upload_area} alt='file-input' className='w-20 rounded-sm inline-block' />
        </label>
        <input onChange={imageHandler} type='file' name='image' id='file-input' hidden className='bg-primary max-w-80 w-full py-3 px-4' />
      </div>
      <div>
        <button onClick={() => addProductHandler()} className='btn_dark_rounded mt-4 flexCenter gap-x-1'><MdAdd />Add Product</button>
      </div>

    </div>
  )
}

export default AddProduct