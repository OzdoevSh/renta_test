import { SET_PRODUCTS, ERROR_PRODUCTS} from '../types'

const initialState = {
  products: [],
  error: "",
  loading: true,
}

export default function products(state = initialState, action){
  switch(action.type){
    case SET_PRODUCTS:
    return {
      ...state,
      products: action.payload,
      loading: false,
    }
    case ERROR_PRODUCTS:
    return{
      ...state,
      error: action.payload,
      loading: false
    }
      default: return state
    }

}