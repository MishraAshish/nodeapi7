//subsciption to redux, to use store reducers as props, create dispatchers
import {connect} from 'react-redux';
import User from '../../Component/User/UserComponent';//F12
import {signInUpUser} from "../../../State/Action";

//subcribing and reading state(data) as props from store(reducers)
const mapStateToProps = (state) => {
    return{
        user:state.user.user
    }
}

//publishing and wrinting state(data) to store(reducers) through props
const mapDispatchToProps = (dispatch) => {
    return {
        addUser:(user) => {
            dispatch(signInUpUser(user));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(User);