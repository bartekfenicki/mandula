import axios from 'axios';

export default defineEventHandler(async ({ page = 2 }) => {
  try {
    const {ConsumerKey} = useRuntimeConfig()
    const {ConsumerSecret} = useRuntimeConfig()
    const {Password} = useRuntimeConfig()

    const response = await axios.get(`https://hanacoric.com/wp-json/wc/v3/products?per_page=12&page=${page}&consumer_key=${ConsumerKey}&consumer_secret=${ConsumerSecret}`, {
      auth: {
        username: 'bartekfenicki',
        password: `${Password}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
});