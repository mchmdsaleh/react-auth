import { Link } from 'react-router-dom'

function SignUp() {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center my-7 font-semibold">Sign Up</h1>
      <form className="flex flex-col gap-4">
        <input className="p-3 bg-slate-100 rounded-lg" type="text" name="username" id="username" placeholder="Username" />
        <input className="p-3 bg-slate-100 rounded-lg" type="email" name="email" id="email" placeholder="Email" />
        <input className="p-3 bg-slate-100 rounded-lg" type="password" name="password" id="password" placeholder="Password" />
        <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">Sign Up</button>
      </form>
      <div className="flex gap-2 mt-3">
        <p>Have an account? </p>
        <Link to="/signin">
          <span className="text-blue-500">Sign In</span>
        </Link>
      </div>
    </div>
  );
}

export default SignUp