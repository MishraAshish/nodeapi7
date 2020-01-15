import {connect} from "react-redux";
import ShowProduct from "../../Component/Product/ShowProductComponent";
import {GetProducts} from "../../../State/Action";

let mapStateToProps = (state) => {
    return {
        products: state.product.products,
        loading: state.user.loading
    }
}

let mapDispatchToProps = (dispatch) =>{
    return {
        fetchProducts: () =>{
            dispatch(GetProducts())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowProduct);