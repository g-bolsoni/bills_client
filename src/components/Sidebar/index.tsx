import addBills from "@/app/addBills/page";
import Link from 'next/link'


export const Sidebar: React.FC = () => {
  return (
    <section className="min-h-screen h-full w-72 bg-gray-800 flex flex-col  items-center">
        <span className="text-lg font-bold italic text-slate-200 h-16 w-full flex items-center justify-center cursor-pointer">
          GBFinance
        </span>
        <ul className="flex flex-col items-start mt-3 w-full gap-2 px-5">
            <li className=" text-slate-200 text-base font-medium hover:text-slate-400">
              <Link href="/">
                Minhas contas
              </Link>
            </li>
            <li  className="text-slate-200 text-base font-medium hover:text-slate-400">
              <Link href="/addBills">
                Adicionar Conta
              </Link>
            </li>
        </ul>
    </section>

  );
}
