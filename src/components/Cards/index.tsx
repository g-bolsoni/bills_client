"use client";
import Image from "next/image";

import entry from "@/assets/entrada.svg"
import output from "@/assets/saida.svg"
import money from "@/assets/money.svg"

import { useBillData } from "@/hooks/useBillData";



const Cards = () => {
  const { income, expenses, total } = useBillData();

  return (
    <section className="cards flex overflow-x-scroll justify-start gap-x-10 px-6 pb-6 md:px-0 md:pb-0 md:gap-x-0 md:overflow-x-hidden  gap-y-5 md:flex-row w-full md:justify-around -mt-24">

      <div className="min-w-80 w-full md:min-w-max py-6 pl-8 pr-6 bg-gray-500 rounded-md flex flex-col gap-3 min-h-[144px] h-full">
        <div className="title_info flex w-full justify-between items-center ">
          <span className="text-base font-normal text-gray-300">Entradas</span>
          <Image
            src={entry}
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

      <div className="min-w-80 w-80 md:min-w-max py-6 pl-8 pr-6 bg-gray-500 rounded-md flex flex-col gap-3 min-h-[144px] h-full">
        <div className="title_info flex w-full justify-between items-center">
          <span className="text-base font-normal text-gray-300">Saídas</span>
          <Image
            src={output}
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

      <div className="min-w-80 w-80 md:min-w-max py-6 pl-8 pr-6 bg-gray-500 rounded-md flex flex-col gap-3 min-h-[144px] h-full">
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