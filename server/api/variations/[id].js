import axios from 'axios';

export default defineEventHandler(async (event) => {
  try {
 const {id}= getRouterParams(event);
    const {Password} = useRuntimeConfig()

    const response = await axios.get(`https://hanacoric.com/wp-json/wc/v3/products/${id}/variations/`, {
      auth: {
        username: 'bartekfenicki',
        password: `${Password}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching variations:', error);
    throw error;
  }
});

// This file is also called [id].js because it was the only way to get it to work.