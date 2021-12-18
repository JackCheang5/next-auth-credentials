import Link from "next/link";
import { useState } from "react";

function SignUp() {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [c_password, setC_password] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password, c_password);
    // check if passwords match
    if (password !== c_password) {
      alert("Passwords do not match");
    } else {
      // send request to server
      // if successful, redirect to /
      // if not, show error
    }
  }

  return (
    <div className="flex justify-center bg-slate-100 h-screen items-start">
      <div className="flex flex-col p-3 bg-white mt-10 shadow rounded">

        <h1 className="5xl font-bold text-gray-700 text-center">Sign Up</h1>

        <div className="flex flex-col items-start my-2 space-y-1">
          <label className="block text-gray-700 text-sm font-bold mb-2">Username</label>
          <input
            className="border rounded shadow appearance-none"
            type='text'
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="flex flex-col items-start my-2 space-y-1">
          <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
          <input
            className="border rounded shadow appearance-none"
            type='password' 
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="flex flex-col items-start my-2 space-y-1">
          <label className="block text-gray-700 text-sm font-bold mb-2">Confirm Password</label>
          <input
            className="border rounded shadow appearance-none"
            type='password' 
            onChange={(e) => setC_password(e.target.value)}
          />
        </div>

        <div className="flex items-around space-x-4">
          <button 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2
            px-4 rounded mt-3"
            onClick={handleSubmit}
          >
            Sign Up
          </button>

          <Link href="/auth/signin" passHref>
            <div
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold 
              py-2 px-4 rounded mt-3 hover:cursor-pointer"
            >
              Cancel
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SignUp
