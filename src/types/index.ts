export type UserRole = "store_owner" | "borrower";


export type User = {
  id: number
  name: string
  email: string
  phone?: string
  store_id: number
  role: UserRole
  created_at: string
  updated_at: string
}

export type LoginForm = {
  email: string;
  password: string;
}

export type RegisterForm = {
  // Store Owner Info
  name: string
  email: string
  phone?: string
  password: string
  password_confirmation: string

  // Store Info
  store_name: string
  store_image?: File
  store_location?: string
}

export type BorrowerRegisterForm = Omit<
  RegisterForm,
  "store_image" | "store_name" | "store_location"
>;

export type Store = {
  id: number
  name: string
  image?: string
  location?: string
  created_at: string
  updated_at: string
}

export type Transaction = {
  id: number
  total_price: number
  borrower_id: number
  store_id: number
  due_date: string
  created_at: string
  updated_at: string
  borrower?: User
  items?: Item[]
  payments?: Payment[]
  remaining_balance?: number
}

export type TransactionItem = {
    name: string;
    price: number;
    quantity: number;
};

export type TransactionForm = Partial<
  Pick<Transaction, "borrower_id">
> & {
  items: TransactionItem[];
  due_date?: Date | undefined;
};

export type TransactionItemError = {
    name?: string,
    price?: string;
    quantity?: string
};

export type TransactionFormErrors = Partial<{
  borrower_id: string;
  items: TransactionItemError[],
  due_date?: string;
}>;

export type Item = {
  id: number
  name: string
  price: number
  quantity: number
  user_id: number
  transaction_id: number
  created_at: string
  updated_at: string
}

export type Payment = {
  id: number
  amount: number
  user_id: number
  store_id: number
  transaction_id: number
  created_at: string
  updated_at: string
}

export type DashboardStats = {
  totalBorrowers: number
  totalOutstanding: number
  monthlyRevenue: number
  totalItemsLent: number
}

export type BorrowerWithStats = User & {
  total_paid: number;
  total_loan_amount: number;
  outstanding_balance: number;
  transaction_count: number;
  last_transaction_date?: string;
  overdue_count: number;
}

export type PaymentFormData = {
  transaction_id: number
  amount: number
  payment_date?: Date
  notes?: string
}

export type BorrowerProfile = {
  borrower: User
  transactions: Transaction[]
  totalOutstanding: number
}
