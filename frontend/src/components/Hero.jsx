import { MdOutlineLocalOffer } from 'react-icons/md';
import {FaStar} from 'react-icons/fa';
// import {MdStar} from 'react-icons/md';
import { NavLink } from 'react-router-dom'
const Hero = () => {
    return <>
        <section className='relative bg-hero bg-center bg-no-repeat h-screen w-full'>
            <div className='max_padd_container relative top-32 xs:top-52'>
                <h1 className='h1 max-w-[37rem]'>تيست ستور</h1>
                <p className='text-gray-90 font-light regular-16 mt-6 max-w-[33rem]'>اكتشف عالم التسوق المتنوع والمذهل الذي يضم منتجات فريدة تناسب جميع الأعمار والفئات. تسوق الآن واستمتع بتجربة لا تُنسى مع عروضنا المميزة وخدماتنا الاستثنائية</p>
                <div className='flexStart !items-center gap-x-4 my-10'>
                    <div className='!regular-20 flexCenter gap-x-3 '>
                        <FaStar className='hover:scale-125 transition-all ease-in-out duration-200'/>
                        <FaStar className='hover:scale-125 transition-all ease-in-out duration-200'/>
                        <FaStar className='hover:scale-125 transition-all ease-in-out duration-200'/>
                        <FaStar className='hover:scale-125 transition-all ease-in-out duration-200'/>
                    </div>
                    <div className='bold-16 sm:bold-20 '>17k
                        <span className='regular-16 sm:regular-20 p-1'>مراجعة</span>

                    </div>
                </div>
                <div className='max-xs:flex-col flex gap-2'>
                    <NavLink to={''} className={'btn_dark_rounded flexCenter'}>
                        تسوق اللآن
                    </NavLink>
                    <NavLink to={''} className={'btn_dark_rounded flexCenter gap-x-2'}>
                        العروض <MdOutlineLocalOffer className='text-xl' />
                    </NavLink>
                </div>
            </div>
    </section >
  
  </>
}

export default Hero