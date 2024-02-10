

const Registration = () => {
    return (
        <div>
            Please registration
                   
         <div className="hero min-h-screen ">
            
            <div className="hero-content flex-col gap-7 lg:flex-row-reverse">
           
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 lg:text-left">
             <h1 className="text-center my-5 text-3xl font-semibold text-yellow-500">Please Login</h1>
             <form onSubmit={handleRegistration} className="card-body">
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
                 <label className="label">
                   <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                 </label>
               </div>
               <div className="form-control mt-6">
                 <button className="btn btn-primary">Login</button>
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

export default Registration;