


import './App.css'

function Form() {
  const handleForm=event=>{
    event.preventDefault();
    const form=event.target;
    
    const name=form.name.value;
    const description=form.description.value;
    const title=form.title.value;
    const badge_text=form.badge_text.value
    const formdata={name,description,title,badge_text}
console.log(formdata);
// fetch('https://react-interview.crd4lc.easypanel.host/api/register',{
//   method:'POST',
//   header:{
//     'content-type':'application/json'
//   },
//   body:JSON.stringify(user)
// })
// .then(res=>res.json())
// .then(data=>{
//   console.log(data)
// })

  }

  return (
    <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleForm} className="card-body">
        
        <div className="form-control">
          <label className="label">
            <span className="label-text">title</span>
          </label>
          <input type="text" placeholder="title" name='title' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">description</span>
          </label>
          <input type="description" placeholder="description" name='description' className="input input-bordered" required />
         
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">instructor name</span>
          </label>
          <input type="instructor name" placeholder="instructor name" name='name' className="input input-bordered" required />
         
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">badge_text</span>
          </label>
          <input type="badge text" placeholder="badge_text" name='badge_text' className="input input-bordered" required />
         
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  </div>
</div>
  )
}

export default Form
