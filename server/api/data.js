import axios from 'axios';

export default defineEventHandler(async (event) => {
  
  try {
    const {currentPage} = getQuery(event)
    const {filter} = getQuery(event)
    const {category} = getQuery(event)
    const {tag} = getQuery(event)
    const {itemsPerPage} = getQuery(event)
    const {ConsumerKey} = useRuntimeConfig()
    const {ConsumerSecret} = useRuntimeConfig()
    const {Password} = useRuntimeConfig()
    const response = await axios.get(`https://hanacoric.com/wp-json/wc/v3/products?search=${filter}&per_page=${itemsPerPage}&page=${currentPage}&category=${category}&tag=${tag}&consumer_key=${ConsumerKey}&consumer_secret=${ConsumerSecret}`, {
      auth: {
        username: 'bartekfenicki',
        password: `${Password}`
      }
    });
  //   const totalItems = parseInt(response.headers.get('X-WP-Total'));
    // const totalPages =  parseInt(response.headers.get('X-WP-TotalPages'));
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
});




/* 
    you need to grab the id/number that the user clicks on through pagination. 
    use a @click in productviews page. export ( provide + inject )  ( this one has inject )
    const { currentPage } = inject('currentPage');

  */