import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import CartItem from "../../Component/Cart/CartItemComponent";
import * as actions from "../../../state/Action";


const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(CartItem) //subscribing to dispatch actions