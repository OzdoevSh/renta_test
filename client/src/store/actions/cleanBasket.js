import { CLEAN_BASKET, ERROR_BASKET} from '../types'

export const cleanBasket = () => async dispatch => {
  try{
    dispatch( {
        type: CLEAN_BASKET,
    })
}
  catch(e){
      dispatch( {
          type: ERROR_BASKET,
          payload: console.log(e),
      })
  }

}