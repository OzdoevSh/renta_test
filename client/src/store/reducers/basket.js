import { ADD_TO_BASKET, REMOVE_FROM_BASKET, CLEAN_BASKET, ERROR_BASKET} from '../types'

const initialState = {
  basket: [],
  fullPrice: 0,
  error: "",
}

export default function basket(state = initialState, action){
  switch(action.type){
    case ADD_TO_BASKET:
    return {
      ...state,
      basket: [...state.basket, action.payload],
      fullPrice: state.fullPrice + action.payload.price

    }
    case REMOVE_FROM_BASKET:
    return {
      ...state,
      basket: [
        ...state.basket.slice(0, action.payload),
        ...state.basket.slice(action.payload + 1)
    ],
      fullPrice: state.fullPrice - action.payload.price
    }
    case CLEAN_BASKET:
    return{
      ...state,
      basket: [],
      fullPrice: 0
    }
    case ERROR_BASKET:
    return{
      ...state,
      error: action.payload,
    }
      default: return state
    }
    

}