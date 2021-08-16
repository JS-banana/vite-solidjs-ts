import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios"

const instance = axios.create({
  baseURL: "/api",
})

instance.interceptors.response.use(
  (response) => {
    const res = response.data

    if (res.code === 1000) {
      return res.result || null
    }
    return null
  },
  (err) => console.log(err)
)

const request = <T>(reqConfig: AxiosRequestConfig): Promise<T> => {
  return instance.request<T, T>(reqConfig)
}

export default request
export type { AxiosInstance, AxiosResponse }
