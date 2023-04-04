import axios from 'axios'

const LOCALSTORAGE_KEY = 'TOKEN'

const horokuBackend = "https://jv-unit-4-project-backend.herokuapp.com/"

// const apiConfig = axios.create({ baseURL: `http://localhost:3000/api` })
const apiConfig = axios.create({ baseURL: horokuBackend })

apiConfig.interceptors.request.use(config => {
  const token = localStorage.getItem(LOCALSTORAGE_KEY)
  config.headers.Authorization = token
  return config
})

export default apiConfig