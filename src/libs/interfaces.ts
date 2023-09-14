export interface Response {
  categorys: Category[]
  products: Product[]
}

export interface Response2 {
  categorias: Categoria[]
}

export interface MenuCardProps {
  categorias: Categoria[];
}

export interface Producto {
  id: number;
  name: string;
  description: string;
  list_price: number;
}
export interface Subcategoria {
  id: number;
  nombre: string;
  productos: Producto[];
}
export interface Categoria {
  id: number;
  nombre: string;
  subcategorias: Subcategoria[];
}


export interface Category {
  child_id: number[]
  display_name: string
  has_image: boolean
  id: number
  image_128: boolean | string
  name: string
  parent_id: Array<number | string> | false
}

export interface Product {
  pos_categ_id: [number, string] | false
  id: number
  image_512: boolean | string
  list_price: number
  name: string
  description: false | string;
  write_date: Date;
}
export interface Table {
  id: number
  name: string
  
}

export interface OrderResponse {
  order:   Order;
  pedidos: Pedido[];
}

export interface Order {
  id:    number;
  pagar: number;
  table: string;
}

export interface Pedido {
  create_date:       Date;
  full_product_name: string;
  id:                number;
  product_id:        [number, string];
  note:              string;
  price_subtotal:    number;
  price_unit:        number;
  qty:               number;
}