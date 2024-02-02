import Image from "next/image";

import logo from "@/assets/logo.svg"
import { useState } from "react";
import DrawerBills from "../Modal";


const Header = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

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
            <DrawerBills />
          </div>
        </div>
      </header>
    </>

  )
}

export default Header;