import axios from 'axios';

export default defineEventHandler(async (id) => {
  try {
    const {ConsumerKey} = useRuntimeConfig()
    const {ConsumerSecret} = useRuntimeConfig()
    const {Password} = useRuntimeConfig()


    const uri = `http://mandula-cakeshop.local/wp-json/wc/v3/products/${id}?consumer_key=${ConsumerKey}&consumer_secret=${ConsumerSecret}`
   
    const response = await axios.get(uri, {
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

