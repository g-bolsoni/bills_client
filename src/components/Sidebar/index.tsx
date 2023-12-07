import addBills from "@/app/addBills/page";
import Link from 'next/link'


export const Sidebar: React.FC = () => {
  return (
    <section className="min-h-screen h-full w-72 bg-gray-800">
        <ul className="flex flex-col">
            <li>
              <Link href="/">
                Minhas contas
              </Link>
            </li>
            <li>
              <Link href="/addBills">
                Adicionar Conta
              </Link>
            </li>
        </ul>
    </section>

  );
}
