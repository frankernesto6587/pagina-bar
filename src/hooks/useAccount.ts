import { QueryFunctionContext, useQuery } from '@tanstack/react-query'
import api from '../api/odooApi'
import { OrderResponse } from "../libs/interfaces"





async function fecthAccount(ctx: QueryFunctionContext) {
    const [_, id] = ctx.queryKey
    const { data } = await api.get<OrderResponse>('/order/' + id)
    return data
}

export function useFetchAccount(id: number) {
    return useQuery(['account', id], fecthAccount)
}