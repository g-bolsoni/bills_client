
import Cards from "@/components/Cards";
import api from "@/services/api";
import { useEffect, useState } from "react"

export default function Home() {
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

  // const [bills, setBills] = useState<IBills[]>([]);

  // useEffect(() => {
  //   api.get('/bills')
  //     .then(response => setBills(response.data))
  // }, []);


  return (
    <>
      <Cards />
    </>
  )
}

{/* <div className="flex flex-col">
  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
      <div className="overflow-hidden">
        <table className="min-w-full text-left text-sm font-light">
          <thead className="border-b font-medium dark:border-neutral-500">
            <tr>
              <th scope="col" className="px-6 py-4 text-stone-200">#</th>
              <th scope="col" className="px-6 py-4 text-stone-200">Descrição</th>
              <th scope="col" className="px-6 py-4 text-stone-200">Categoria</th>
              <th scope="col" className="px-6 py-4 text-stone-200">Data Compra</th>
              <th scope="col" className="px-6 py-4 text-stone-200">Forma de pagamento</th>
              <th scope="col" className="px-6 py-4 text-stone-200">Valor</th>
              <th scope="col" className="px-6 py-4 text-stone-200">Quem comprou</th>
              <th scope="col" className="px-6 py-4 text-stone-200">Situação</th>
              <th scope="col" className="px-6 py-4 text-stone-200">Data do ok</th>
              <th scope="col" className="px-6 py-4 text-stone-200">Parcelada?</th>
              <th scope="col" className="px-6 py-4 text-stone-200">Parcelas</th>
              <th scope="col" className="px-6 py-4 text-stone-200">Conta fixa</th>
            </tr>
          </thead>
          <tbody>
            {
              bills.map((item, index) => (
                <tr key={item._id} className="border-b border-neutral-500 bg-neutral-700">
                  <td className="whitespace-nowrap px-6 py-4 font-medium text-stone-200"> {index + 1} </td>
                  <td className="whitespace-nowrap px-6 py-4 text-stone-200"> {item.description ?? "Nenhum dado."} </td>
                  <td className="whitespace-nowrap px-6 py-4 text-stone-200"> {item.category ?? "Nenhum dado."} </td>
                  <td className="whitespace-nowrap px-6 py-4 text-stone-200"> {item.date ?? "Nenhum dado."} </td>
                  <td className="whitespace-nowrap px-6 py-4 text-stone-200"> {item.payment_methods ?? "Nenhum dado."} </td>
                  <td className="whitespace-nowrap px-6 py-4 text-stone-200"> {item.value ?? "Nenhum dado."} </td>
                  <td className="whitespace-nowrap px-6 py-4 text-stone-200"> {item.from_who ?? "Nenhum dado."} </td>
                  <td className="whitespace-nowrap px-6 py-4 text-stone-200"> {item.situation ?? "Nenhum dado."} </td>
                  <td className="whitespace-nowrap px-6 py-4 text-stone-200"> {item.date_ok ?? "Nenhum dado."} </td>
                  <td className="whitespace-nowrap px-6 py-4 text-stone-200"> {item.repeat ?? "Nenhum dado."} </td>
                  <td className="whitespace-nowrap px-6 py-4 text-stone-200"> {item.parcel ?? "Nenhum dado."} </td>
                  <td className="whitespace-nowrap px-6 py-4 text-stone-200"> {item.fixed ?? "Nenhum dado."} </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div> */}