import { REMOVE_FROM_BASKET, ERROR_BASKET} from '../types'

export const removeFromBasket = (id, name, price) => async dispatch => {
  try{
    dispatch( {
        type: REMOVE_FROM_BASKET,
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