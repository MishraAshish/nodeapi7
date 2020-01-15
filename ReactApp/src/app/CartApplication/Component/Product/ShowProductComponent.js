import React from "react";
import ShowProductDetails from "../../Component/Product/ShowProductDetailsComponent";
export default class ShowProduct extends React.Component{

    componentDidMount() {
        this.props.fetchProducts();
    }

    render(){
        let products = this.props.products || [];
        console.log("products :" , products);
            return(
                <div>
                    <h2>Product List {this.props.loading ? "Loading " : " Loaded "}</h2>
                    <ul>
                    {
                        products.map (product => (
                            <ShowProductDetails key={product.id} product={product}/>
                            // <li key={product.id}> {product.productName} <b> {product.camera}</b></li> 
                        ))
                    }
                    </ul>
                </div>
            )
    }
}