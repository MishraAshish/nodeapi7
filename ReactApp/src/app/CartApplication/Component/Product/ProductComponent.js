import React from "react";

export class Product extends React.Component{
    constructor(props, context){
        super(props, context);
        this.state = {
            productName:props.product.productName,
            productPrice:props.product.productPrice,
            camera:props.product.camera,
            ram:props.product.ram,
            display:props.product.display,
            color:props.product.color
        }
    }

    onChangeText = (e)=>{
        // target is input element, real dom element
        let target = e.target;
        let classlist = target.classList.toString();

        if(classlist.indexOf("pname")>=0){
            this.setState({
                productName: target.value
            })
        }else if(classlist.indexOf("price")>=0){
            this.setState({
                productPrice: target.value
            })
        }else if(classlist.indexOf("camera")>=0){
            this.setState({
                camera: target.value
            })
        }else if(classlist.indexOf("color")>=0){
            this.setState({
                color: target.value
            })
        }
        else if(classlist.indexOf("display")>=0){
            this.setState({
                display: target.value
            })
        }
        else{
            this.setState({
                ram: target.value
            })    
        }
    }

    addProduct = () =>{
        let product = {
            productName:this.state.productName,
            productPrice:this.state.productPrice,
            camera:this.state.camera,
            ram:this.state.ram,
            display:this.state.display,
            color:this.state.color
        }
        console.log("product", product)
        
        this.props.addProduct(product);
    }

    render(){
        return(
            <section className={"componentClass"}>
                <div className="form col-md-8">
                    <div className="col-md-12">
                        <b>Product Name</b>
                        <input type="text" className="form-control col-md-6 pname" value={this.state.productName} 
                            placeholder="Product Name"
                            onChange={this.onChangeText} />
                    </div>
                    
                    <div className="col-md-12">
                        <b>Price </b>
                        <input type="text" className="form-control col-md-6 price" value={this.state.productPrice} 
                          placeholder="Product Price"
                          onChange={this.onChangeText} />
                    </div>
                    
                    <div className="col-md-12">
                        <b>Camera </b>
                    <input type="text" className="form-control col-md-6 camera" value={this.state.camera} 
                          placeholder="Camera"
                          onChange={this.onChangeText} />
                    </div>
                    
                    <div className="col-md-12">
                        <b>RAM </b>
                    <input type="text" className="form-control col-md-6 ram" value={this.state.ram} 
                          placeholder="ram"
                          onChange={this.onChangeText} />
                    </div>

                    <div className="col-md-12">
                        <b>Display </b>
                    <input type="text" className="form-control col-md-6 display" value={this.state.display} 
                          placeholder="Display"
                          onChange={this.onChangeText} />
                    </div>

                    <div className="col-md-12">
                        <b>Color </b>
                    <input type="text" className="form-control col-md-6 color" value={this.state.color} 
                          placeholder="Color"
                          onChange={this.onChangeText} />
                    </div>
                    
                    
                    <input type="button" className={"btn btn-primary col-md-2"} value={"Add Product"} onClick={this.addProduct}/>
                </div>

            </section>
        )
    }
}