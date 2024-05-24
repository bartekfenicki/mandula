// import axios from 'axios';

// export default async function fetchProductById(id) {
//   try {
//     const { ConsumerKey, ConsumerSecret, Password } = useRuntimeConfig()
//     const uri = 'http://mandula-cakeshop.local/wp-json'
//     const getProducts = '/wc/v3/products/'
//     const uriPostfix = `?consumer_key=${ConsumerKey}&consumer_secret=${ConsumerSecret}`

//     const response = await axios.get(`${uri}${getProducts}${id}${uriPostfix}`, {
//       auth: {
//         username: 'bartekfenicki',
//         password: `${Password}`
//       }
//     });
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching product:', error);
//     throw error;
//   }
// }


// 
import axios from 'axios';

export default defineEventHandler(async (event) => {
  try {
 const {id}= getRouterParams(event);
    const {Password} = useRuntimeConfig()

    const response = await axios.get(`https://hanacoric.com/wp-json/wc/v3/products/${id}`, {
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