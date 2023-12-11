import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Label, Modal, TextInput,} from 'flowbite-react';
import { useState } from "react";

const schemaForm = z.object({
  bills: z.object({
    description   : z.string().min(5, 'Colque uma descrição maior.'),
    category      : z.string().min(1, 'Campo obrigatório'),
    date          : z.coerce.date().min(new Date('2023-01-01'), {
      message: "Data inválida!"
    }),
    payment_method: z.string().min(1, 'Campo obrigatório'),
    value         : z.number().min(1, 'Campo obrigatório'),
    who           : z.string().min(1, 'Campo obrigatório'),
    parcel        : z.string().min(1, 'Campo obrigatório'),
    fixed         : z.string().min(1, 'Campo obrigatório'),

  })
});

type IForms = z.infer<typeof schemaForm>;

export const AddBillsModal: React.FC = () => {
    const { register, handleSubmit, formState: { errors }} = useForm<IForms>({
        criteriaMode: 'all',
        mode: 'all',
        resolver: zodResolver(schemaForm),
        defaultValues: {
        bills: {
            description: ''
        }
        }
    });

    function createUser(data:IForms) {
        console.log(data);
    }

    const [openModal, setOpenModal] = useState(false);
    const [email, setEmail] = useState('');

    function onCloseModal() {
      setOpenModal(false);
      setEmail('');
    }

    return (
        <Modal show={openModal} size="md" onClose={onCloseModal} popup>
            <Modal.Header />
            <Modal.Body>
            <form className="max-w-md mx-auto" onSubmit={handleSubmit(createUser)}>
            <div className="grid md:grid-cols-2 md:gap-6">

                <div className="relative z-0 w-full mb-5 group">
                    <input type="text" {...register('bills.description')} id="bill_description" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" required />
                    <label htmlFor="bill_description" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Descrição</label>
                    {errors.bills?.description?.message && (
                    <p className="text-white">{errors.bills?.description?.message}</p>
                    )}
                </div>

                <div className="relative z-0 w-full mb-5 group">
                    <input type="text"  {...register('bills.category')} id="bill_category" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="bill_category" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Categoria</label>
                    {errors.bills?.category?.message && (
                    <p className="text-white">{errors.bills?.category?.message}</p>
                    )}
                </div>

                <div className="relative z-0 w-full mb-5 group">
                    <input type="date" {...register('bills.date')} id="bill_date" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="bill_date" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Data da Compra</label>
                    {errors.bills?.date?.message && (
                    <p className="text-white">{errors.bills?.date?.message}</p>
                    )}
                </div>

                <div className="relative z-0 w-full mb-5 group">
                    <input type="text" {...register('bills.payment_method')} id="payment_method" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="payment_method" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Forma de Pagemnto</label>
                    {errors.bills?.payment_method?.message && (
                    <p className="text-white">{errors.bills?.payment_method?.message}</p>
                    )}
                </div>

                <div className="relative z-0 w-full mb-5 group">
                    <input type="number" {...register('bills.value')} id="bill_value" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="bill_value" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Valor (R$)</label>
                    {errors.bills?.value?.message && (
                    <p className="text-white">{errors.bills?.value?.message}</p>
                    )}
                </div>

                <div className="relative z-0 w-full mb-5 group">
                    <input type="text" {...register('bills.who')} id="bill_who" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="bill_who" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Quem comprou</label>
                    {errors.bills?.who?.message && (
                    <p className="text-white">{errors.bills?.who?.message}</p>
                    )}
                </div>
            </div>

            <div className="grid md:grid-cols-2 md:gap-6">

                <div className="relative z-0 w-full mb-5 group">
                    <input type="text" {...register('bills.parcel')} id="bill_parcel" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="bill_parcel" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Parcelas</label>
                    {errors.bills?.parcel?.message && (
                    <p className="text-white">{errors.bills?.parcel?.message}</p>
                    )}
                </div>

                <div className="relative z-0 w-full mb-5 group">
                    <input type="text" {...register('bills.fixed')} id="bill_fixed" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="bill_fixed" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Conta fixa</label>
                    {errors.bills?.fixed?.message && (
                    <p className="text-white">{errors.bills?.fixed?.message}</p>
                    )}
                </div>

            </div>

            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
            </form>
            </Modal.Body>
        </Modal>
    )
}