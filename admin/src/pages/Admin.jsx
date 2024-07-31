import AddProduct from "../components/AddProduct";
import ListProduct from "../components/ListProduct";
import Sidebar from "../components/Sidebar";
import {Routes, Route} from 'react-router-dom';

const Admin = () => {
  return (
    <div className='lg:flex'>
      <Sidebar />
      <Routes>
        <Route path='/addProduct' element={<AddProduct /> }/>
        <Route path='/listProduct' element={<ListProduct /> }/>
      </Routes>
    </div>
  )
}

export default Admin