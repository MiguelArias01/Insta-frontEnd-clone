import api from './apiConfig.js';

export async function getMainFeed(page) {
  const res = await api.get(`api/home/?page=${page}`);
  return res.data;
}
