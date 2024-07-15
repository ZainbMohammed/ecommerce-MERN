import { NavLink } from "react-router-dom";
import { MdHomeFilled ,MdCategory, MdShop2,MdContacts} from 'react-icons/md'
const Navbar = ({ containerStyles }) => {

  return <>
    <nav className={`${containerStyles}`}>
      <NavLink to={'/'}>
        <div className='fiexCenter gap-x-1'><MdHomeFilled />الرئيسية</div>
      </NavLink>
      <NavLink to={'/mens'}>
        <div className='fiexCenter gap-x-1'><MdCategory />رجال</div>
      </NavLink>
      <NavLink to={'/womens'}>
        <div className='fiexCenter gap-x-1'><MdShop2 />نساء</div>
      </NavLink>
      <NavLink to={'/kids'}>
        <div className='fiexCenter gap-x-1'><MdContacts />اطفال</div>
      </NavLink>
      
      
      
    </nav>
  </>
}

export default Navbar 