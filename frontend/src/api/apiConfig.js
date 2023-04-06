import axios from 'axios'

const LOCALSTORAGE_KEY = 'TOKEN'

const horokuBackend = "https://jv-unit-4-backend.herokuapp.com/"

// const apiConfig = axios.create({ baseURL: `http://localhost:3000/api` })
const api = axios.create({ baseURL: horokuBackend })

api.interceptors.request.use(config => {
  const token = localStorage.getItem(LOCALSTORAGE_KEY)
  config.headers.Authorization = token
  return config
})

export default api