
const Login = () => {

  return <>

    <section className='max_padd_container flexCenter flex-col pt-32'>

      <div className='max-w-[555px] h-[600px] bg-white  m-auto px-14 py-10 rounded-md'>
        <h3 className='h3'>Login</h3>

        <div className='flex flex-col gap-4 mt-5'>
          {/* <input type='text' placeholder="Name" className='h-10 w-full pl-5 bg-slate-700/15 outline-none rounded-md'/> */}
          <input type='email' placeholder="Email" className='h-10 w-full pl-5 bg-slate-700/15 outline-none rounded-md'/>
          <input type='password' placeholder="Password" className='h-10 w-full pl-5 bg-slate-700/15 outline-none rounded-md'/>
        </div>

        <button className='btn_dark_rounded my-5 w-full !rounded-md'>Login</button>
        <p className='text-black font-bold'>
          Don't have an account?
          <a href='/signup'><span className='text-sky-600 cursor-pointer underline p-1 hover:text-sky-700'>Signup</span></a>
        </p>

        <div className='flexCenter mt-6 gap-2'>
          <input type='checkbox' name='' id='' />
          <p>I agree to the terms of use and privacy policy</p>
        </div>

      </div>

    </section>
  
  </>
}

export default Login