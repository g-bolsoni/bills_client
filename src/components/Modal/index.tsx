import entry from "@/assets/entrada.svg"
import output from "@/assets/saida.svg"

import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import Image from "next/image";
import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import api from "@/services/api";
import notify from "@/utils/toast";


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

const schemaForm = z.object({
  bills: z.object({
    bill_name: z
      .string()
      .min(5, 'Colque uma descrição maior.'),

    bill_category: z
      .string()
      .min(1, 'Campo obrigatório'),

    buy_date: z
      .coerce
      .date()
      .min(new Date('2023-01-01'), {
        message: "Data inválida!"
      }),

    payment_type: z
      .string()
      .min(1, 'Campo obrigatório'),

    bill_value: z
      .string()
      .transform(value => parseFloat(value))
      .refine(value => !isNaN(value), {
        message: 'Valor inválido',
      }),

    repeat: z.coerce.boolean({ strict: true }),

    installments: z
      .string()
      .refine((value, data) => {
        // Verifica se o campo repeat é true e se installments está presente
        return data && data.repeat ? !!value : true;
      }, {
        message: 'Campo obrigatório quando repeat é true',
      }),

    fixed: z.coerce.boolean({ strict: true }),

    bill_type: z
      .string()
      .refine(value => value === 'Income' || value === 'Expenses', {
        message: 'Selecione um tipo válido (Income ou Expenses)',
      }),
  })
});

type IForms = z.infer<typeof schemaForm>;

const DrawerBills = () => {
  const [selectedBillType, setSelectedBillType] = useState('');

  const { register, handleSubmit, setValue, formState: { errors }, watch } = useForm<IForms>({
    criteriaMode: 'all',
    mode: 'all',
    resolver: zodResolver(schemaForm),
    defaultValues: {
      bills: {
        bill_type: selectedBillType,
        repeat: false,
        installments: ' --- ',
        fixed: false
      }
    }
  });

  const repeatValue = watch('bills.repeat');

  const handleBillTypeChange = (type: string) => {
    setSelectedBillType(type);
    setValue('bills.bill_type', type);
  };

  const handleCreateBill = async (data: IForms) => {

    try {
      const response = await api.post('/bills', data.bills);
      if (response.status === 200) {
        notify({ text: "Item adicionado!", typeToast: "success" });
      }
    } catch (error) {
      notify({ text: "Algo deu errado!", typeToast: "error" });
      console.log(error);
    }


  };

  return (
    <Drawer>
      <DrawerTrigger className="flex py-3 px-5 justify-center items-center gap-3 rounded-md text-white transition-all duration-200 bg-green-500 hover:bg-green-400">
        Nova transação
      </DrawerTrigger>
      <DrawerContent className="h-[80vh] bg-gray-700">
        <div className="mx-auto w-full max-w-sm overflow-y-scroll">
          <DrawerHeader>
            <DrawerTitle className="text-gray-200 font-bold text-xl">Nova transação</DrawerTitle>
          </DrawerHeader>
          <div className="p-4 pt-0 pb-0 block ">
            <form className="flex flex-col gap-3" onSubmit={handleSubmit(handleCreateBill)}>
              <div>
                <label htmlFor="bill_name" className=" text-gray-200 text-sm ">Descreva a transação</label>
                <input type="text" id="bill_name" placeholder="Nome" {...register('bills.bill_name')} className="w-full h-14 rounded-md bg-gray-800 text-gray-200 px-4 text-base" />
                {errors.bills?.bill_name?.message && <span className="text-red-500 text-xs ">{errors.bills?.bill_name?.message} </span>}
              </div>

              <div>
                <label htmlFor="bill_category" className=" text-gray-200 text-sm ">Insira uma Categoria</label>
                <input type="text" id="bill_category" placeholder="Categoria" {...register('bills.bill_category')} className="w-full h-14 rounded-md bg-gray-800 text-gray-200 px-4 text-base" />
                {errors.bills?.bill_category?.message && <span className="text-red-500 text-xs ">{errors.bills?.bill_category?.message}</span>}
              </div>

              <div>
                <label htmlFor="buy_date" className=" text-gray-200 text-sm ">Selcione a data</label>
                <input type="date" id="buy_date" placeholder="Selecione a data" {...register('bills.buy_date')} className="w-full h-14 rounded-md bg-gray-800 text-gray-200 px-4 text-base" />
                {errors.bills?.buy_date?.message && <span className="text-red-500 text-xs ">{errors.bills?.buy_date?.message}</span>}
              </div>

              <div>
                <label htmlFor="payment_type" className=" text-gray-200 text-sm">Forma de pagamento</label>
                <input type="text" id="payment_type" placeholder="Forma de pagamento" {...register('bills.payment_type')} className="w-full h-14 rounded-md bg-gray-800 text-gray-200 px-4 text-base" />
                {errors.bills?.payment_type?.message && <span className="text-red-500 text-xs ">{errors.bills?.payment_type?.message}</span>}
              </div>

              <div>
                <label htmlFor="bill_value" className="text-gray-200 text-sm">Valor recebido/gasto</label>
                <input type="number" id="bill_value" placeholder="Valor" {...register('bills.bill_value')} className="w-full h-14 rounded-md bg-gray-800 text-gray-200 px-4 text-base" />
                {errors.bills?.bill_value?.message && <span className="text-red-500 text-xs ">{errors.bills?.bill_value?.message}</span>}
              </div>

              <div>
                <label htmlFor="repeat" className="text-gray-200 text-sm">Irá repetir?</label>
                <select {...register('bills.repeat')} id="repeat" className="w-full h-14 rounded-md bg-gray-800 text-gray-200 px-4 text-base">
                  <option value="true">Sim</option>
                  <option value="false">Não</option>
                </select>
                {errors.bills?.repeat?.message && <span className="text-red-500 text-xs ">{errors.bills?.repeat?.message}</span>}
              </div>

              {repeatValue && (
                <div>
                  <label htmlFor="installments" className="text-gray-200 text-sm">Quantas parcelas?</label>
                  <input {...register('bills.installments')} id="installments" className="w-full h-14 rounded-md bg-gray-800 text-gray-200 px-4 text-base" />
                </div>
              )}

              <div>
                <label htmlFor="fixed" className="text-gray-200 text-sm">É Fixo?</label>
                <select {...register('bills.fixed')} className="w-full h-14 rounded-md bg-gray-800 text-gray-200 px-4 text-base">
                  <option value="true">Sim</option>
                  <option value="false">Não</option>
                </select>
                {errors.bills?.fixed?.message && <span className="text-red-500 text-xs">{errors.bills?.fixed?.message}</span>}
              </div>

              <div className="buttons flex justify-between gap-2 w-full">
                <span className={`bg-gray-600 rounded-md h-14 w-1/2 text-gray-300 text-base flex justify-center items-center gap-2 transition-all duration-200 hover:bg-gray-700 ${selectedBillType === 'Income' ? 'bg-gray-500' : ''}`} onClick={() => handleBillTypeChange('Income')} >
                  <Image
                    src={entry}
                    alt="Icone representando que é um valor positivo"
                    width={32}
                  />
                  Entrada
                </span>
                <span className={`bg-gray-600 rounded-md h-14 w-1/2 text-gray-300 text-base flex justify-center items-center gap-2 transition-all duration-200 hover:bg-gray-700 ${selectedBillType === 'Expenses' ? 'bg-gray-500' : ''}`} onClick={() => handleBillTypeChange('Expenses')}>
                  <Image
                    src={output}
                    alt="Icone representando que é um valor positivo"
                    width={32}
                  />
                  Saída
                </span>
              </div>
              <input type="hidden" {...register('bills.bill_type')} className="w-full h-14 rounded-md bg-gray-800 text-gray-200 px-4 text-base" />

              <DrawerFooter>
                <input type="submit" value="Cadastrar" className="bg-green-500 h-14 rounded-md text-white font-bold text-base transition-all duration-200 hover:bg-green-400" />
              </DrawerFooter>
            </form>
          </div>
        </div>
      </DrawerContent >
    </Drawer >

  )
}

export default DrawerBills;