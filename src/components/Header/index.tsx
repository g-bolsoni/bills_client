import Image from "next/image";

import logo from "@/assets/logo.svg"

const Header = () => {
  return (
    <>
      <header className="bg-gray-800 h-52">
        <div className="container mx-auto px-6 md:px-0 pt-10 ">
          <div className="flex items-center justify-between">
            <div className="logo_section flex items-center gap-4">
              <Image
                width={40}
                alt="Logo"
                src={logo}
              />
              <span className="text-2xl font-bold text-white">Gb Money</span>
            </div>
            <button className="flex py-3 px-5 justify-center items-center gap-3 rounded-md text-white transition-all duration-200 bg-green-500 hover:bg-green-400">Nova transação</button>
          </div>
        </div>
      </header>
    </>

  )
}

export default Header;