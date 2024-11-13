import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost',
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((request) => {
  if (request.url === '/login') {
    return Promise.resolve({
      data: { message: 'Login successful', token: 'mockToken123' },
      status: 200,
    });
  } else if (request.url === '/signup') {
    return Promise.resolve({
      data: { message: 'Signup successful', userId: 'mockUserId123' },
      status: 200,
    });
  }
  return request;
});

export const loginUser = (data) => api.post('/login', data);
export const signupUser = (data) => api.post('/signup', data);

export default api;
