import Header from "./Header";
import { cleanBasket } from "../../store/actions/cleanBasket";
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  basket: state.basket.basket,
  fullPrice: state.basket.fullPrice
});

const mapDispatchToProps = {
  cleanBasket
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);