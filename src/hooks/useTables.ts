import {useQuery} from '@tanstack/react-query'
import api from '../api/odooApi'
import {  Table } from "../libs/interfaces"


async function fecthTables() {
    const {data} = await api.get<Table[]>('/tables')
    return data
}

export function useFetchTables(){
    return useQuery(['tables'], fecthTables)
}