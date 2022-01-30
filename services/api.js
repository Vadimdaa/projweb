import axios from 'axios'

const host = 'https://vue-blog-back.herokuapp.com'

export const apiCall = async (method, path, data) => {
  const response = await axios[method](`${host}/${path}`, data)
  return response.data
}

export default {
  apiCall,
}
