import { SET_PRODUCTS, ERROR_PRODUCTS} from '../types'
import axios from 'axios'

export const getProducts = (delivery) => async dispatch => {
  try{
    let products
    if (delivery === true){
      products = await axios.get(`http://localhost:3005/api/products/?delivery=true`)
    } else {
      products = await axios.get(`http://localhost:3005/api/products`)
    }

    const categories = await axios.get('http://localhost:3005/api/categories')
      const burgers = products.data.filter(product => categories.data[0].products.includes(product.id))
      const twisters = products.data.filter(product => categories.data[1].products.includes(product.id))
      const chicken = products.data.filter(product => categories.data[2].products.includes(product.id))
      const productsArray = {burgers, twisters, chicken}
   
    dispatch( {
        type: SET_PRODUCTS,
        payload: productsArray,
    })
}
  catch(e){
      dispatch( {
          type: ERROR_PRODUCTS,
          payload: console.log(e),
      })
  }

}