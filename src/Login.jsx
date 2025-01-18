


import './App.css'

function Login() {
  const handleLogin=event=>{
    event.preventDefault();
    const form=event.target;
    
    const email=form.email.value;
    const password=form.password.value;
    const user={email,password}
console.log(user);
fetch('https://react-interview.crd4lc.easypanel.host/api/login',{
  method:'POST',
  header:{
    'content-type':'application/json',
    
  },
  body:JSON.stringify(user)
})
.then(res=>res.json())
.then(data=>{
  console.log(data)
})

  }

  return (
    <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleLogin} className="card-body">
        
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name='email' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name='password' className="input input-bordered" required />
         
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>
  )
}

export default Login
