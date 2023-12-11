"use client";
import Link from 'next/link'
import { Button } from 'flowbite-react';
import { useState } from 'react';

export const Sidebar: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState('');


  return (
    <section className="min-h-screen h-full w-72 bg-gray-800 flex flex-col relative">
      <div>
        <span className="text-lg font-bold italic text-slate-200 h-16 w-full flex items-center justify-center cursor-pointer">
          GBFinance
        </span>
        <ul className="flex flex-col items-start mt-3 w-full gap-2 px-5">
            <li className=" text-slate-200 text-base font-medium hover:text-slate-400">
              <Link href="/">
                Minhas contas
              </Link>
            </li>
        </ul>
      </div>
      <div className="absolute bottom-5 left-5 max-w-[288px]" >
        <Button onClick={() => setOpenModal(true)} className=''>Adicionar Conta</Button>
      </div>
    </section>

  );
}