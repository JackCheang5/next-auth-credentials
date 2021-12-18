import Link from "next/link"

function Navbar({ children }) {
  return (
    <div className="w-full">
      <div 
        className="flex items-center content-center h-14 font-mono bg-teal-700
        justify-between px-5 text-white"
      >
        <h1 className="font-bold text-2xl">
          Next Auth
        </h1>
        <div>
          <Link href="/auth/signin" passHref>
            <button
              className="border border-teal-100 p-1 rounded hover:cursor-pointer text-1xl"
            >
              Login
            </button>
          </Link>
        </div>
      </div>
      <div>{children}</div>
    </div>
  )
}

export default Navbar
