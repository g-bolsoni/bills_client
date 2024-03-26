import { getServerSession } from "next-auth";
import { ReactNode } from "react";
import { nextAuthOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

interface IPrivateLayout {
  children: ReactNode
}
export default async function PrivateLayout({ children }: IPrivateLayout) {
  const session = await getServerSession(nextAuthOptions);

  if (session) redirect('/admin');

  return <> {children} </>;
}