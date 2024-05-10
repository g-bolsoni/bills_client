"use client";

import logo from "@/assets/logo.svg"
import Image from "next/image"
import Link from "next/link"

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import api from "@/services/api";

interface IUserProps {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const schemaForm = z.object({
  name: z
    .string()
    .min(2, 'Este campo é obrigatório'),

  email: z
    .string()
    .email({ message: 'Insira um endereço de e-mail válido' })
    .min(1, 'Campo obrigatório'),

  password: z
    .string()
    .min(8, 'A senha deve ter pelo menos 8 caracteres')
    .refine(value => /[A-Z]/.test(value), {
      message: 'A senha deve conter pelo menos uma letra maiúscula',
    })
    .refine(value => /[^A-Za-z0-9]/.test(value), {
      message: 'A senha deve conter pelo menos um caractere especial',
    }),

  confirmPassword: z.string()
    .min(1, 'Campo obrigatório')
}).superRefine(({ password, confirmPassword }, ctx) => {
  if (password !== confirmPassword) {
    ctx.addIssue({
      path: ['confirmPassword'], // especifica o caminho do campo que tem o erro
      message: 'As senhas não coincidem',
      code: 'custom', // código de erro customizado
    });
  }
});

type IUser = z.infer<typeof schemaForm>;

export default function Home() {

  const router = useRouter();

  const { register, handleSubmit, formState: { errors } } = useForm<IUser>({
    criteriaMode: 'all',
    mode: 'all',
    resolver: zodResolver(schemaForm)
  });

  const handleCreateUser = async ({name, email, password, confirmPassword}: IUser) => {

    const createUser = await api.post('/auth/register', {
        name,
        email,
        password,
        confirmPassword
    });

    if(createUser.status !== 201){
      console.error(createUser);
      return ;
    }

    const createCredendials = await signIn('credentials', {
      email: email,
      password: password,
      redirect: true
    });

    if (createCredendials?.error) {
      console.error(createCredendials);
      return;
    }
    router.replace('/admin')
  }

  return (
    <section className="bg-gray-700 h-full flex items-center justify-center">
      <form className="w-[400px] h-max min-h-[400px] bg-slate-200 rounded-xl p-5" onSubmit={handleSubmit(handleCreateUser)}>
        <div className="card flex flex-col gap-10">
          <div className="card-header">
            <div className="logo_section flex items-center gap-4">
              <Image
                width={40}
                alt="Logo"
                src={logo}
              />
              <span className="text-2xl font-bold text-gray-700">Gb Money</span>
            </div>
          </div>

          <div className="card-body flex flex-col gap-2">
            <div className="form-group relative">
              <label htmlFor="name" className="flex items-start justify-start py-1 text-sm">Nome</label>
              <input
                type="text"
                className="form-control h-10 w-full border-none rounded-lg pl-5"
                id="name"
                {...register('name')}
              />
              {errors.name?.message && <span className="text-error text-red-800">{errors.name.message}</span>}
            </div>
            <div className="form-group relative">
              <label htmlFor="email" className="flex items-start justify-start py-1 text-sm">Email</label>
              <input
                type="email"
                className="form-control h-10 w-full border-none rounded-lg pl-5"
                id="email"
                {...register('email')}
              />
              {errors.email?.message && <span className="text-error text-red-800">{errors.email.message}</span>}
            </div>
            <div className="form-group relative">
              <label htmlFor="password" className="flex items-start justify-start py-1 text-sm">Senha</label>
              <input
                type="password"
                className="form-control h-10 w-full border-none rounded-lg pl-5"
                id="password"
                {...register('password')}
              />
              {errors.password?.message && <span className="text-error text-red-800">{errors.password.message}</span>}
            </div>
            <div className="form-group relative">
              <label htmlFor="confirmPassword" className="flex items-start justify-start py-1 text-sm">Repita a senha.</label>
              <input
                type="password"
                className="form-control h-10 w-full border-none rounded-lg pl-5"
                id="confirmPassword"
                {...register('confirmPassword')}
              />
              {errors.confirmPassword?.message && <span className="text-error text-red-800">{errors.confirmPassword.message}</span>}
            </div>
          </div>
        </div>
        <div className="actions flex flex-col max-w-[50%] gap-1">
          <button
            className="bg-green-500 h-12 rounded-xl px-3 py-2 text-white font-medium mt-3 disabled:opacity-50"
            type="submit"
            disabled={Object.keys(errors).length > 0}
          >Cadastrar</button>
          <Link
            className="text-sm text-blue-500 hover:underline"
            href='/'
          >Já possui cadastro?</Link>
        </div>
      </form>
    </section >
  )
}