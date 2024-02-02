import Image from "next/image";
import entry from "@/assets/entrada.svg"
import output from "@/assets/saida.svg"

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";


interface IModal {
  id?: string;
  onClose?: () => void;
  children?: React.ReactNode;
}

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
    bill_name: z.string().min(5, 'Colque uma descrição maior.'),
    bill_category: z.string().min(1, 'Campo obrigatório'),
    buy_date: z.coerce.date().min(new Date('2023-01-01'), {
      message: "Data inválida!"
    }),
    payment_type: z.string().min(1, 'Campo obrigatório'),
    bill_value: z.number().min(1, 'Campo obrigatório'),
    repeat: z.number().min(1, 'Campo obrigatório'),
    installments: z.string().min(1, 'Campo obrigatório'),
    fixed: z.string().min(1, 'Campo obrigatório'),
    bill_type: z.string().min(1, 'Campo obrigatório')

  })
});

type IForms = z.infer<typeof schemaForm>;


const Modal = ({ id = "modal", onClose = () => { }, children }: IModal) => {

  const { register, handleSubmit, formState: { errors } } = useForm<IForms>({
    criteriaMode: 'all',
    mode: 'all',
    resolver: zodResolver(schemaForm),
    defaultValues: {
      bills: {
        bill_name: ''
      }
    }
  });

  const handleOutsideClick = (e: Event) => {
    if (e.target instanceof Element && e.target.id === id) onClose();
  }

  const handleCreateBill = (data: IBills) => {
    console.log(data);
  }

  return (
    <div id={id} className="modal w-screen h-full bg-black/80 absolute top-0 left-0 z-100 flex items-start justify-end" onClick={() => (handleOutsideClick(event))}>
      <div className="container bg-gray-700 w-full h-max pb-4 text-black rounded-md absolute bottom-0">
        <div className="relative flex justify-between items-center py-4 px-6">
          <h3 className="text-gray-200 font-bold text-xl">Nova transação</h3>
          <button className="close" onClick={onClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              className="fill-gray-200"
              viewBox="0 -960 960 960"
            >
              <path d="M480-424 284-228q-11 11-28 11t-28-11q-11-11-11-28t11-28l196-196-196-196q-11-11-11-28t11-28q11-11 28-11t28 11l196 196 196-196q11-11 28-11t28 11q11 11 11 28t-11 28L536-480l196 196q11 11 11 28t-11 28q-11 11-28 11t-28-11L480-424Z" />
            </svg>
          </button>

        </div>
        <div className="content py-4 px-6 relative">
          <form className="flex flex-col gap-3" onSubmit={handleSubmit(handleCreateBill)}>

            <input type="text" placeholder="Nome" {...register('bills.bill_name')} className="w-full h-14 rounded-md bg-gray-800 text-gray-200 px-4 text-base" />
            <input type="text" placeholder="Categoria" {...register('bills.bill_category')} className="w-full h-14 rounded-md bg-gray-800 text-gray-200 px-4 text-base" />
            <input type="text" placeholder="Selecione a data" {...register('bills.buy_date')} className="w-full h-14 rounded-md bg-gray-800 text-gray-200 px-4 text-base" />
            <input type="text" placeholder="Forma de pagamento" {...register('bills.payment_type')} className="w-full h-14 rounded-md bg-gray-800 text-gray-200 px-4 text-base" />
            <input type="number" placeholder="Valor" {...register('bills.bill_value')} className="w-full h-14 rounded-md bg-gray-800 text-gray-200 px-4 text-base" />
            <input type="text" placeholder="Irá repetir?" {...register('bills.repeat')} className="w-full h-14 rounded-md bg-gray-800 text-gray-200 px-4 text-base" />
            <input type="text" placeholder="Conta fixa?" {...register('bills.fixed')} className="w-full h-14 rounded-md bg-gray-800 text-gray-200 px-4 text-base" />

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
        <div className="w-full  flex justify-center items-center">
          <button className="bg-green-500 h-14 rounded-md w-4/5 text-white font-bold text-base transition-all duration-200 hover:bg-green-400">Cadastrar</button>
        </div>
      </div>
    </div>
  )
}

export default Modal;

// interface IBills {
//   bill_name: string;
//   bill_category: string;
//   bill_type: 'Income' | 'Expenses';
//   buy_date: Date;
//   payment_type: string;
//   bill_value: number;
//   repeat: boolean;
//   installments: string;
//   fixed: boolean;
// }