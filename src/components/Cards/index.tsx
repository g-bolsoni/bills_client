"use client";
import Image from "next/image";

import entrada from "@/assets/entrada.svg"
import saida from "@/assets/saida.svg"
import money from "@/assets/money.svg"

import { useBillData } from "@/hooks/useBillData";

interface IBills {
  _id: string;
  bill_name: string;
  bill_category: string;
  bill_type: 'Income' | 'Expenses';
  buy_date: string;
  payment_type: string;
  bill_value: number;
  repeat: boolean;
  installments: string;
  fixed: boolean;
}




const Cards = () => {
  const { income, expenses, total} = useBillData();

  return (

    <section className="flex flex-col gap-y-5 md:flex-row w-full justify-around -mt-24">

      <div className="w-80 py-6 pl-8 pr-6 bg-gray-500 rounded-md flex flex-col gap-3 h-32">
        <div className="title_info flex w-full justify-between items-center ">
          <span className="text-base font-normal text-gray-300">Entradas</span>
          <Image
            src={entrada}
            alt="Icone representando que é um valor positivo"
            width={32}
          />
        </div>
        <span className="text-3xl font-bold text-white">
          {
            income.isLoading ?
              <span className="w-3/4 block h-12 rounded-xl skeleton "></span>
              :
              new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
                minimumFractionDigits: 2
              }).format(income.data)
          }
        </span>
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
        <span className="text-3xl font-bold text-white">
          {
            expenses.isLoading ?
              <span className="w-3/4 block h-12 rounded-xl skeleton "></span>
              :
              new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
                minimumFractionDigits: 2
              }).format(expenses.data)
          }
        </span>
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
        <span className="text-3xl font-bold text-white">

          {
            expenses.isLoading && income.isLoading ?
              <span className="w-3/4 block h-12 rounded-xl skeleton "></span>
              :
              new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
                minimumFractionDigits: 2
              }).format(total)
          }
        </span>
      </div>
    </section>
  )
}

export default Cards;