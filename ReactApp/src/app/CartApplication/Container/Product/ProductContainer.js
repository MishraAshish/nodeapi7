//subsciption to redux, to use store reducers as props, create dispatchers
import {connect} from 'react-redux';
import {Product} from '../../Component/Product/ProductComponent';//F12
import {addProductAction} from "../../../State/Action";

//subcribing and reading state(data) as props from store(reducers)
const mapStateToProps = (state) => {
    return{
        product:state.product.defaultProduct
    }
}
//publishing and wrinting state(data) to store(reducers) through props
const mapDispatchToProps = (dispatch) => {
    return {
        addProduct:(product) => {
            dispatch(addProductAction(product));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);