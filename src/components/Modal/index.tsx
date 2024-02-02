import { Button } from "../ui/button";
import entry from "@/assets/entrada.svg"
import output from "@/assets/saida.svg"

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import Image from "next/image";

interface IBills {
  bill_name: string;
  bill_category: string;
  bill_type: 'Income' | 'Expenses';
  buy_date: Date;
  payment_type: string;
  bill_value: number;
  repeat: boolean;
  installments: string;
  fixed: boolean;
}

const DrawerBills = () => {
  return (
    <Drawer>
      <DrawerTrigger>
        <Button variant="outline" className="flex py-3 px-5 justify-center items-center gap-3 rounded-md text-white transition-all duration-200 bg-green-500 hover:bg-green-400">Nova transação</Button>
      </DrawerTrigger>
      <DrawerContent className="h-[80vh]">
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Nova transação</DrawerTitle>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <div className="flex items-center justify-center space-x-2 mt-3 h-max">
              <form className="flex flex-col gap-3">
                <input type="text" placeholder="Nome" /*{...register('bills.bill_name')}*/ className="w-full h-14 rounded-md bg-gray-800 text-gray-200 px-4 text-base" />
                <input type="text" placeholder="Categoria" /*{...register('bills.bill_category')}*/ className="w-full h-14 rounded-md bg-gray-800 text-gray-200 px-4 text-base" />
                <input type="text" placeholder="Selecione a data" /*{...register('bills.buy_date')}*/ className="w-full h-14 rounded-md bg-gray-800 text-gray-200 px-4 text-base" />
                <input type="text" placeholder="Forma de pagamento" /*{...register('bills.payment_type')}*/ className="w-full h-14 rounded-md bg-gray-800 text-gray-200 px-4 text-base" />
                <input type="number" placeholder="Valor" /*{...register('bills.bill_value')}*/ className="w-full h-14 rounded-md bg-gray-800 text-gray-200 px-4 text-base" />
                <input type="text" placeholder="Irá repetir?" /*{...register('bills.repeat')}*/ className="w-full h-14 rounded-md bg-gray-800 text-gray-200 px-4 text-base" />
                <input type="text" placeholder="Conta fixa?" /*{...register('bills.fixed')}*/ className="w-full h-14 rounded-md bg-gray-800 text-gray-200 px-4 text-base" />

                <div className="buttons flex justify-between gap-2 w-full">
                  <button className="bg-gray-600 rounded-md h-14 w-1/2 text-gray-300 text-base flex justify-center items-center gap-2 transition-all duration-200 hover:bg-gray-700">
                    <Image
                      src={entry}
                      alt="Icone representando que é um valor positivo"
                      width={32}
                    />
                    Entrada
                  </button>
                  <button className="bg-gray-600 rounded-md h-14 w-1/2 text-gray-300 text-base flex justify-center items-center gap-2 transition-all duration-200 hover:bg-gray-700">
                    <Image
                      src={output}
                      alt="Icone representando que é um valor positivo"
                      width={32}
                    />
                    Saída
                  </button>
                </div>
              </form>

            </div>
          </div>
          <DrawerFooter>
            <Button className="bg-green-500 h-14 rounded-md text-white font-bold text-base transition-all duration-200 hover:bg-green-400">Cadastrar</Button>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>

  )
}

export default DrawerBills;

// <form className="flex flex-col gap-3" onSubmit={handleSubmit(handleCreateBill)}>

{/* <input type="text" placeholder="Nome" {...register('bills.bill_name')} className="w-full h-14 rounded-md bg-gray-800 text-gray-200 px-4 text-base" />
<input type="text" placeholder="Categoria" {...register('bills.bill_category')} className="w-full h-14 rounded-md bg-gray-800 text-gray-200 px-4 text-base" />
<input type="text" placeholder="Selecione a data" {...register('bills.buy_date')} className="w-full h-14 rounded-md bg-gray-800 text-gray-200 px-4 text-base" />
<input type="text" placeholder="Forma de pagamento" {...register('bills.payment_type')} className="w-full h-14 rounded-md bg-gray-800 text-gray-200 px-4 text-base" />
<input type="number" placeholder="Valor" {...register('bills.bill_value')} className="w-full h-14 rounded-md bg-gray-800 text-gray-200 px-4 text-base" />
<input type="text" placeholder="Irá repetir?" {...register('bills.repeat')} className="w-full h-14 rounded-md bg-gray-800 text-gray-200 px-4 text-base" />
<input type="text" placeholder="Conta fixa?" {...register('bills.fixed')} className="w-full h-14 rounded-md bg-gray-800 text-gray-200 px-4 text-base" /> */}

{/* <div className="buttons flex justify-between gap-2 w-full">
  <button className="bg-gray-600 rounded-md h-14 w-1/2 text-gray-300 text-base flex justify-center items-center gap-2 transition-all duration-200 hover:bg-gray-700">
    <Image
      src={entry}
      alt="Icone representando que é um valor positivo"
      width={32}
    />
    Entrada
  </button>
  <button className="bg-gray-600 rounded-md h-14 w-1/2 text-gray-300 text-base flex justify-center items-center gap-2 transition-all duration-200 hover:bg-gray-700">
    <Image
      src={output}
      alt="Icone representando que é um valor positivo"
      width={32}
    />
    Saída
  </button>
</div> */}

// </form>