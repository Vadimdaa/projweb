import { apiCall } from '../services/api';

export const getters = {
  getArticles: async ()=>{
    return await apiCall('get', 'articles');
  }
}
