import {useQuery} from '@tanstack/react-query'
import api from '../api/odooApi'
import {   Response2 } from "../libs/interfaces"


async function fecthProducts() {
    const {data} = await api.get<Response2>('/products')
    return data
}

export function useFetchProducts(){
    return useQuery(['products'], fecthProducts)
}