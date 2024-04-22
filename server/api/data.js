import axios from 'axios';

export default defineEventHandler(async () => {
  try {
    const {ConsumerKey} = useRuntimeConfig()
    const {ConsumerSecret} = useRuntimeConfig()
    const {Password} = useRuntimeConfig()

    const response = await axios.get(`http://mandula-cakeshop.local/wp-json/wc/v3/products?consumer_key=${ConsumerKey}&consumer_secret=${ConsumerSecret}`, {
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