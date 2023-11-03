import { Base } from "./Base"

export interface Product extends Base {
  title: string
  description: string
  price: number
}

export interface CreateProduct {
  title: string
  description: string
  price: number
}