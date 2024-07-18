import { MdOutlineLocalOffer } from 'react-icons/md';
import {FaStar} from 'react-icons/fa';
// import {MdStar} from 'react-icons/md';
import { NavLink } from 'react-router-dom'
const Hero = () => {
    return <>
        <section className='relative bg-hero bg-center bg-cover bg-no-repeat h-screen w-full'>
            <div className='max_padd_container relative top-32 xs:top-52'>
                <h1 className='h2 max-w-[37rem]'>MarketJoy</h1>
                <p className='text-gray-90 font-light regular-16 mt-6 max-w-[33rem]'>Discover the diverse and amazing world of shopping that includes unique products to suit all ages and categories. Shop now and enjoy an unforgettable experience with our special offers and exceptional services Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, molestias!</p>
                <div className='flexStart !items-center gap-x-4 my-10'>
                    <div className='!regular-20 flexCenter gap-x-3 '>
                        <FaStar className='hover:scale-125 transition-all ease-in-out duration-200'/>
                        <FaStar className='hover:scale-125 transition-all ease-in-out duration-200'/>
                        <FaStar className='hover:scale-125 transition-all ease-in-out duration-200'/>
                        <FaStar className='hover:scale-125 transition-all ease-in-out duration-200'/>
                    </div>
                    <div className='bold-16 sm:bold-20 '>120k
                        <span className='regular-16 sm:regular-20 p-1'>Revies</span>
                    </div>
                </div>
                <div className='max-xs:flex-col flex gap-2'>
                    <NavLink to={''} className={'btn_dark_rounded flexCenter'}>
                     Market Now
                    </NavLink>
                    <NavLink to={''} className={'btn_dark_rounded flexCenter gap-x-2'}>
                        Offers <MdOutlineLocalOffer className='text-xl' />
                    </NavLink>
                </div>
            </div>
    </section >
  
  </>
}

export default Hero