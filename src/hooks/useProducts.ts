import {useQuery} from '@tanstack/react-query'
import api from '../api/odooApi'
import {  Response } from "../libs/interfaces"


async function fecthProducts() {
    const {data} = await api.get<Response>('/product')
    return data
}

export function useFetchProducts(){
    return useQuery(['products'], fecthProducts)
}