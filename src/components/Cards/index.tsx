"use client";
import Image from "next/image";

import entrada from "@/assets/entrada.svg"
import saida from "@/assets/saida.svg"
import money from "@/assets/money.svg"

import api from "@/services/api";
import { useEffect, useState } from "react";

interface IBills {
  _id: string;
  description: string;
  category: string;
  date: string;
  payment_methods: string;
  value: number;
  from_who: string;
  situation: string;
  date_ok: string;
  repeat: boolean;
  parcel: string;
  fixed: boolean;
}


const Cards = () => {

  return (
    <section className="flex w-full justify-around -mt-24">
      <div className="w-80 py-6 pl-8 pr-6 bg-gray-500 rounded-md flex flex-col gap-3">
        <div className="title_info flex w-full justify-between items-center ">
          <span className="text-base font-normal text-gray-300">Entradas</span>
          <Image
            src={entrada}
            alt="Icone representando que é um valor positivo"
            width={32}
          />
        </div>
        <span className="text-3xl font-bold text-white"> R$ 17.400,00</span>
      </div>

      <div className="w-80 py-6 pl-8 pr-6 bg-gray-500 rounded-md flex flex-col gap-3">
        <div className="title_info flex w-full justify-between items-center">
          <span className="text-base font-normal text-gray-300">Saídas</span>
          <Image
            src={saida}
            alt="Icone representando que é um valor positivo"
            width={32}
          />
        </div>
        <span className="text-3xl font-bold text-white"> R$ 17.400,00</span>
      </div>

      <div className="w-80 py-6 pl-8 pr-6 bg-gray-500 rounded-md flex flex-col gap-3">
        <div className="title_info flex w-full justify-between items-center">
          <span className="text-base font-normal text-gray-300">Total dos gastos</span>
          <Image
            src={money}
            alt="Icone representando que é um valor positivo"
            width={32}
          />
        </div>
        <span className="text-3xl font-bold text-white"> R$ 17.400,00</span>
      </div>
    </section>
  )
}

export default Cards;