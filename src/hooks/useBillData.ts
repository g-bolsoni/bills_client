
import api from "@/services/api";
import { useQuery } from "@tanstack/react-query";

interface IBills {
  _id: string;
  bill_name: string;
  bill_category: string;
  bill_type: 'Income' | 'Expenses';
  buy_date: string;
  payment_type: string;
  bill_value: number;
  repeat: boolean;
  installments: string;
  fixed: boolean;
}


const totalIncome = async () => {
  const response = await api.get('/filter?bill_type=Income');
  const totalIncome = response.data.reduce((acc: number, item: IBills) => acc + item.bill_value, 0);
  return totalIncome;
}

const totalExpenses = async () => {
  const response = await api.get('/filter?bill_type=Expenses');
  const totalExpenses = response.data.reduce((acc: number, item: IBills) => acc + item.bill_value, 0);
  return totalExpenses;
}

export function useBillData() {
  const income = useQuery({
    queryFn: totalIncome,
    queryKey: ['income-data'],
    refetchInterval: 60 * 5 * 1000
  });

  const expenses = useQuery({
    queryFn: totalExpenses,
    queryKey: ['expenses-data'],
    refetchInterval: 60 * 5 * 1000
  });

  const total = income.data - expenses.data;
  return { income, expenses, total };
}