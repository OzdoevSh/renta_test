import { ADD_TO_BASKET, ERROR_BASKET} from '../types'

export const addToBasket = (id, name, price) => async dispatch => {
  try{
    dispatch( {
        type: ADD_TO_BASKET,
        payload: {id, name, price},
    })
}
  catch(e){
      dispatch( {
          type: ERROR_BASKET,
          payload: console.log(e),
      })
  }

}