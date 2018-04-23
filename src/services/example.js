import request from '../utils/request';

export function query(page) {
  return request(`/api/recommend?page=1`);
}
