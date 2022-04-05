
import ProductCard from "./ProductCard";
import { connect } from 'react-redux';
import { addToBasket } from '../../store/actions/addToBasket';
import { removeFromBasket } from '../../store/actions/removeFromBasket';
const mapStateToProps = (state) => ({
  fullPrice: state.basket.fullPrice,
});

const mapDispatchToProps = {
  removeFromBasket,
  addToBasket,
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);