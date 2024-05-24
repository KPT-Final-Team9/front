import axios from 'axios';

const useMockServer = process.env.NEXT_PUBLIC_API_ROUTER_MOCK_SERVER === 'true';
const baseURL = useMockServer ? 'http://localhost:3000' : process.env.NEXT_PUBLIC_API_BASE_URL;

export const axiosInstance = axios.create({
  baseURL,
});
