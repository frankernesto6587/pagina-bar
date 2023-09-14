import { QueryFunctionContext, useQuery } from '@tanstack/react-query'
import api from '../api/odooApi'
import { OrderResponse } from "../libs/interfaces"





async function fecthAccountByTable(ctx: QueryFunctionContext) {
    const [_, id] = ctx.queryKey
    const { data } = await api.get<OrderResponse>('/order_by_table/' + id)
    return data
}

export function useFetchAccountByTable(id: number) {
    return useQuery(['accountbytable', id], fecthAccountByTable)
}