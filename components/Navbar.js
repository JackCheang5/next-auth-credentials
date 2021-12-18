function Navbar({ children }) {
  return (
    <div className="w-full">
      <div 
        className="flex items-center content-center h-14 font-mono bg-teal-700
        justify-between px-5 text-white text-2xl"
      >
        <h1 className="font-bold">
          Next Auth
        </h1>
        <div>
          <button
            className="border border-teal-100 p-1 rounded hover:cursor-pointer"
          >
            Login
          </button>
        </div>
      </div>
      <div className="mt-14">{children}</div>
    </div>
  )
}

export default Navbar
