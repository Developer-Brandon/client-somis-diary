import axios from 'axios'

const whetherServerEnvOrNot = (process.env.NODE_ENV === 'server')
const baseUrl = whetherServerEnvOrNot ? '' : 'http://localhost:8080'

const axiosInstance = axios.create({
  baseURL: baseUrl,
  timeout: 50000,
  headers: { 'Content-Type': 'application/json' },
})

class SdNetwork {
  constructor() {
    axiosInstance.interceptors.response.use((response) => response, (error) => Promise.reject(error))
  }

  getBaseUrl() {
    return baseUrl
  }
}

const network = new SdNetwork()
export default network
