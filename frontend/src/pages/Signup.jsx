import { useState } from "react";

const Signup = () => {

  const [formData,setFormData] = useState({
    username: '',
    password: '',
    email: '',
  });

  const changeHandler = (e) => {
    setFormData({...formData,[e.target.name]:e.target.value})
  }
  const signupHandler =  async () => {
    console.log(formData);
    let responseData;
    await fetch('http://localhost:4000/signup',{
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

      <div className='max-w-[555px] h-[450px] mb-8 bg-white  m-auto px-14 py-10 rounded-md'>
        <h3 className='h3'>Sign Up</h3>

        <div className='flex flex-col gap-4 mt-5'>
          <input name='username' value={formData.username} onChange={changeHandler} type='text' placeholder="Name" className='h-10 w-full pl-5 bg-slate-700/15 outline-none rounded-md'/>
          <input name='email' value={formData.email} onChange={changeHandler} type='email' placeholder="Email" className='h-10 w-full pl-5 bg-slate-700/15 outline-none rounded-md'/>
          <input name='password' value={formData.password} onChange={changeHandler} type='password' placeholder="Password" className='h-10 w-full pl-5 bg-slate-700/15 outline-none rounded-md'/>
        </div>

        <button onClick={() => {signupHandler()}} className='btn_dark_rounded my-5 w-full !rounded-md'>Sign Up</button>
        <p className='text-black font-bold'>
          Already have ab account?
          <a href='/login'><span className='text-sky-600 cursor-pointer underline p-1 hover:text-sky-700'>Login</span>
          </a>
        </p>

        <div className='flexCenter mt-6 gap-2'>
          <input type='checkbox' name='' id='' />
          <p>I agree to the terms of use and privacy policy</p>
        </div>

      </div>

    </section>
  
  </>
}

export default Signup