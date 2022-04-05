import Delivery from "./Delivery";
import { connect } from 'react-redux';
import { getProducts } from '../../store/actions/getProducts';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = {
  getProducts
}
export default connect(mapStateToProps, mapDispatchToProps)(Delivery);


