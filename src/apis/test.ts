import axios from 'axios'
const test = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' }
})
export const test1 = () => {
  return test<any>({
    url: '/test',
    method: 'get'
  })
}

export default test
