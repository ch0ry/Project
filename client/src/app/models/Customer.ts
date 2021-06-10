export interface Customer {
  customer_id?: number
  payment_method_fk: number
  name: string
  phone: string
  email: string
  address?: number
  login: string
  password: string
  other_details?: string
}
