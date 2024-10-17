import axios from 'axios';

export const getTasks = async () => {
  const response = await axios.get('/api/tasks');
  return response.data
}