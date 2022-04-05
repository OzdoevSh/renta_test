import ProductList from "./ProductList";
import { connect } from 'react-redux';
import { getProducts } from '../../store/actions/getProducts';
const mapStateToProps = (state) => ({
  products: state.products.products,
});

const mapDispatchToProps = {
  getProducts
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductList);