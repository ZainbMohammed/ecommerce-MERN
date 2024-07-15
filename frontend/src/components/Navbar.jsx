import { NavLink } from "react-router-dom";
import { MdHomeFilled ,MdCategory, MdShop2,MdContacts} from 'react-icons/md'
const Navbar = ({ containerStyles }) => {

  return <>
    <nav className={`${containerStyles}`}>
      <NavLink to={'/'} className={({isActive}) => isActive ? 'active_link' : ''}>
        <div className='flexCenter gap-x-1'><MdHomeFilled />الرئيسية</div>
      </NavLink>
      <NavLink to={'/mens'} className={({isActive}) => isActive ? 'active_link' : ''}>
        <div className='flexCenter gap-x-1'><MdCategory />رجال</div>
      </NavLink>
      <NavLink to={'/womens'} className={({isActive}) => isActive ? 'active_link' : ''}>
        <div className='flexCenter gap-x-1'><MdShop2 />نساء</div>
      </NavLink>
      <NavLink to={'/kids'} className={({isActive}) => isActive ? 'active_link' : ''}>
        <div className='flexCenter gap-x-1'><MdContacts />اطفال</div>
      </NavLink>
      
      
      
    </nav>
  </>
}

export default Navbar 