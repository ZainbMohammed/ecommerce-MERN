import { useState } from "react"

const Login = () => {

  const [formData,setFormData] = useState({
    password: '',
    email: '',
  });

  const changeHandler = (e) => {
    setFormData({...formData,[e.target.name]:e.target.value})
  }
  const loginHandler =  async () => {
    console.log(formData);
    let responseData;
    await fetch('http://localhost:4000/login',{
      method: 'POST',
      headers: {
        Accept:'application/formData',
        'Content-Type': 'application/json',

      },
      body: JSON.stringify(formData)
    }).then((res) => res.json())
      .then((data) => responseData = data)

      if(responseData.success){
        localStorage.setItem('auth-token', responseData.token);
        window.location.replace('/');
      }else{
        alert(responseData.message)
      }
  }
  
  return <>

    <section className='max_padd_container flexCenter flex-col pt-32'>

      <div className='max-w-[555px] h-[400px] mb-8 bg-white  m-auto px-14 py-10 rounded-md'>
        <h3 className='h3'>Login</h3>

        <div className='flex flex-col gap-4 mt-5'>
          <input name='email' value={formData.email} onChange={changeHandler} type='email' placeholder="Email" className='h-10 w-full pl-5 bg-slate-700/15 outline-none rounded-md'/>
          <input name='password' value={formData.password} onChange={changeHandler} type='password' placeholder="Password" className='h-10 w-full pl-5 bg-slate-700/15 outline-none rounded-md'/>
        </div>

        <button onClick={() => {loginHandler()}} className='btn_dark_rounded my-5 w-full !rounded-md'>Login</button>

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