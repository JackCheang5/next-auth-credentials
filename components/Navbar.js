import Link from "next/link"
import { useSession, signOut } from 'next-auth/react';

function Navbar({ children }) {
  const session = useSession();

  return (
    <div className="w-full">
      <div 
        className="flex items-center content-center h-14 font-mono bg-teal-700
        justify-between px-5 text-white"
      >
        <Link href="/" passHref>
          <h1 className="font-bold text-2xl hover:cursor-pointer">
            Next Auth
          </h1>
        </Link>
        <div className="space-x-3">
          <Link href="/profile" passHref>
            <button
              className="border border-teal-100 p-1 rounded hover:cursor-pointer text-1xl"
            >
              Profile
            </button>
          </Link>
          {session.data ? (
              // sign out
              <button
                className="border border-teal-100 p-1 rounded hover:cursor-pointer text-1xl"
                onClick={signOut}
              >
                Log Out
              </button>
            ) : (
              // sign in
              <Link href="/auth/signin" passHref>
                <button
                  className="border border-teal-100 p-1 rounded hover:cursor-pointer text-1xl"
                >
                  Login
                </button>
              </Link>
            )}
        </div>
      </div>
      <div>{children}</div>
    </div>
  )
}

export default Navbar
