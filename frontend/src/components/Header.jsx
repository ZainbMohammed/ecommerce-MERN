import { Link, NavLink } from 'react-router-dom';
import Navbar from './Navbar';
// import Logo from '../assets/logo.svg';
// import Logo from '../assets/logo.svg';
import Logo from '../assets/e-logo.png';
// import LogoutIcon from '../assets/logout.svg';
import UserIcon from '../assets/user.svg';
import { useContext, useState } from 'react';
import { MdClose, MdMenu } from 'react-icons/md';
import {FaOpencart} from 'react-icons/fa';
import { ShopContext } from '../Context/ShopContext';

const Header = () => {

    const [isMenueOpened, setIsMenueOpened] = useState(false);
    const toggleMenu = () => setIsMenueOpened(!isMenueOpened)
const {getTotalCartItems} = useContext(ShopContext);
    return (
        <header className='fixed bg-white top-0 left-0 m-auto max_padd_container w-full bg-transparent ring-1 ring-slate-900/5 z-10'>

            <div className=' flexBetween py-3 max-xs:px-2'>
                {/* logo */}
                <div>
                    <Link><img src={Logo} alt='logo' height={66} width={66} className='rounded-full'></img></Link>
                </div>

                {/* Navbar in desktop */}
                <Navbar containerStyles={'hidden md:flex gap-x-5 xl:gap-x-10 medium-15'} />

                {/* Navbar in mobile */}
                <Navbar
                    containerStyles={
                        `${isMenueOpened ? ('flex item-start flex-col gap-y-12 fixed top-20 right-8 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300')
                            : ('flex item-start flex-col gap-y-12 fixed top-20 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300 -right-[100%]')}`

                    } />

                {/* Buttons */}
                <div className='flexBetween sm:gap-x-3 bold-16'>
                    {!isMenueOpened ? (
                        <MdMenu className='md:hidden cursor-pointer hover:text-sky-600 mr-2 p-1 ring-1 ring-slate-900/30 h-8 w-8 rounded-full' onClick={toggleMenu}/>
                    ) : (
                        <MdClose className='md:hidden cursor-pointer hover:text-sky-600 mr-2 p-1 ring-1 ring-slate-900/30 h-8 w-8 rounded-full' onClick={toggleMenu} />)}

                        <div className='flexBetween sm:gap-x-6 cursor-pointer'>

                            <NavLink to={'cart-page'} className={'flex'}>
                                <FaOpencart className='p-1 w-8 h-8 ring-slate-900/30 ring-1 rounded-full'/>
                                <span className='relative flexCenter w-5 h-5 rounded-full  bg-sky-600 text-white medium-14 -top-2'>{getTotalCartItems()}</span>
                            </NavLink>
                            {/* <NavLink to={'logout'} className={'btn_secondary_rounded flexCenter gap-x-2 medium-16 hidden'}>Logout<img src={LogoutIcon} alt='logout icon' width={19} height={19} className='text-center'/></NavLink> */}
                            <NavLink to={'login'} className={'btn_secondary_rounded flexCenter gap-x-2 medium-16'}>Login<img src={UserIcon} alt='logout icon' width={19} height={19} className='text-center'/></NavLink>

                        </div>
                </div>
            </div>

        </header>

    )
}

export default Header