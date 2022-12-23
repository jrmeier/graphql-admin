import axios from 'axios'
const BASE_URL: string = '/gql'

export const getSchema = async () => await axios.post(BASE_URL, {query: '{__schema{types{name kind}}}'})

