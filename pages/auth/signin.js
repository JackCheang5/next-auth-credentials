import Link from "next/link"
import { useState } from "react";

function SignIn() {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  return (
    <div className="flex justify-center bg-slate-100 h-screen items-start">
      <div className="flex flex-col p-3 bg-white mt-10 shadow rounded">
        <h1 className="5xl font-bold text-gray-700 text-center">Sign In</h1>

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

        <div>
          <Link href="/auth/signup" passHref>
            <p 
              className="text-xs text-blue-500 hover:cursor-pointer hover:underline"
            >
              Not a user? Sign up now!
            </p>
          </Link>
        </div>
        {/* function button */}
        <div className="flex items-around space-x-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2
            px-4 rounded mt-3"
          >
            Sign In
          </button>
          <Link href="/" passHref>
            <button
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold 
              py-2 px-4 rounded mt-3 hover:cursor-pointer"
            >
              Cancel
            </button>
          </Link>
        </div>

      </div>
    </div>
  )
}

export default SignIn
