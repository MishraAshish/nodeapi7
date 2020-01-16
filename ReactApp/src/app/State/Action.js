import * as ActionTypes from "./ActionTypes";//alias import

export const addUser = (user) => ({        
    type: ActionTypes.ADDUSER_USER,
    payload: {user}
})

export const loading = (loading) => ({
    type: "LOADING",
    payload: {
        loading
    }
});

//dispatching to product reducer using promise
export const GetProducts = () => ({    
    type : ActionTypes.GET_PRODUCTS,
    payload: {
            promise: new Promise((resolve, reject) => { 
                fetch("http://localhost:9090/api/getProducts", {
                    method: 'GET'
                }).then(                
                    response => response.json(),
                    error => console.log('An error occurred.', error)
                ).then(json => {
                    // want to updatePath for the route here:
                    //dispatch(updatePath('/'));
                    resolve(json)
                })
                .catch(error => {
                    reject(error);
                    //dispatch(error); -- promise Issue                        
                })
            })
        }       
});

//ajax: asynchronous javascript and xml
export const signInUpUser = (user) => {
    console.log('entering signin signup user');

    // thunk, returns function as an action
    return function(dispatch, getState) {
        // here we go with ajax call
        // thunk shall call
        console.log("called by thunk");
        dispatch(loading(true));

        window.fetch("http://localhost:9090/api/signInUpUser",{//uri
            method: 'POST', //rest method type 
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)})//req.body.firstname,req.body.password...
        .then (response => response.json())
        .then (userresp => {
            console.log("response ", userresp);
            let action = addUser(userresp);
            dispatch(action);
            dispatch(loading(false));
            ///dispatch(getCartItems(userresp._id))
        })
        .catch((err)=>{
            console.log("Error While Login", err)
        })
    }
}

export const addProductAction = (product) => {
    console.log('adding the product on add click');
    return function(dispatch, getState) {
        dispatch(loading(true));
        window.fetch("http://localhost:9090/api/addProduct",{//uri
            method: 'POST', //rest method type 
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)})//req.body.firstname,req.body.password...
        .then (response => response.json())
        .then (productresp => {
            console.log("response ", productresp);
            dispatch(GetProducts());
            dispatch(loading(false));            
        })
        .catch((err)=>{
            console.log("Error While Login", err)
        })
    }
}