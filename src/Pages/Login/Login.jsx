import { useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';

const Login = () => {
const captchaRef = useRef(null);
const [disabled, setDisabled] = useState(true);
  useEffect( () => {
    loadCaptchaEnginge(6);
  }, [])

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
    }

   const handleValidateCaptcha = () =>{
    const user_captcha_value = captchaRef.current.value;
    // console.log(user_captcha_value);
    if(validateCaptcha(user_captcha_value)){

    }
    else{

    }
   }

    return (
        <div>
        
         <div className="hero min-h-screen ">
            
  <div className="hero-content flex-col gap-7 lg:flex-row-reverse">
 
  <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 lg:text-left">
   <h1 className="text-center my-5 text-3xl font-semibold text-yellow-500">Please Login</h1>
   <form onSubmit={handleLogin} className="card-body">
     <div className="form-control">
       <label className="label">
         <span className="label-text">Email</span>
       </label>
       <input type="email" name="email" placeholder="email" className="input input-bordered" required />
     </div>
     <div className="form-control">
       <label className="label">
         <span className="label-text">Password</span>
       </label>
       <input type="password" name="password" placeholder="password" className="input input-bordered" required />
       {/* <label className="label">
         <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
       </label> */}
     </div>

     {/* captcha  */}
     <div className="form-control">
       <label className="label">
       <LoadCanvasTemplate />
       </label>
       <input type="text" ref={captchaRef} name="captcha" placeholder="type the captcha above" className="input input-bordered"  />
       <button onClick={handleValidateCaptcha} className="btn btn-outline btn-xs">Validate</button>
      
     </div>
     <div className="form-control mt-6">
       <input disabled={disabled} className="btn btn-primary" type='submit' value={'login'}></input>
       {/* <input className="btn btn-primary" type="Submit" value={"login"} /> */}
     </div>
   </form>
 </div>
    {/*  */}
    <div className="text-center ">
      {/* <h1 className="text-5xl font-bold">Login now!</h1> */}
      <img className="" src="https://img.freepik.com/free-vector/access-control-system-abstract-concept_335657-3180.jpg" alt="" />
      {/* <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> */}
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;