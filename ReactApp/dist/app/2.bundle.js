(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{70:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(4),s=a(72),l=(n=s)&&n.__esModule?n:{default:n},o=a(11);t.default=(0,r.connect)(function(e){return{user:e.user.user}},function(t){return{addUser:function(e){t((0,o.signInUpUser)(e))}}})(l.default)},72:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t,a){return t&&r(e.prototype,t),a&&r(e,a),e};function r(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var s,l=a(0),o=(s=l)&&s.__esModule?s:{default:s};var c=(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(u,o.default.Component),n(u,[{key:"componentWillReceiveProps",value:function(e){console.log("next props",e),this.setState({firstName:e.user.firstName,password:e.user.password,street:e.user.street,cellPhone:e.user.cellPhone})}},{key:"render",value:function(){return o.default.createElement("section",{className:"componentClass"},o.default.createElement("div",{className:"form col-md-8"},o.default.createElement("div",{className:"col-md-12"},o.default.createElement("b",null,"User Name"),o.default.createElement("input",{type:"text",className:"form-control col-md-6 fname",value:this.state.firstName,placeholder:"First Name",onChange:this.onChangeText})),o.default.createElement("div",{className:"col-md-12"},o.default.createElement("b",null,"Password "),o.default.createElement("input",{type:"password",className:"form-control col-md-6 password",value:this.state.password,placeholder:"Password",onChange:this.onChangeText})),o.default.createElement("div",{className:"col-md-12"},o.default.createElement("b",null,"Street "),o.default.createElement("input",{type:"text",className:"form-control col-md-6 street",value:this.state.street,placeholder:"Street Name",onChange:this.onChangeText})),o.default.createElement("div",{className:"col-md-12"},o.default.createElement("b",null,"Mobile "),o.default.createElement("input",{type:"number",className:"form-control col-md-6 cellphone",value:this.state.cellPhone,placeholder:"Cell Phone",maxLength:"11",onChange:this.onChangeText})),o.default.createElement("input",{type:"button",className:"btn btn-primary col-md-2",value:"SignIn/Up",onClick:this.AddUser})))}}]),u);function u(e,t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(u.__proto__||Object.getPrototypeOf(u)).call(this,e,t));return n.onChangeText=function(e){var t=e.target,a=t.classList.toString();0<=a.indexOf("fname")?n.setState({firstName:t.value}):0<=a.indexOf("password")?n.setState({password:t.value}):0<=a.indexOf("street")?n.setState({street:t.value}):t.value&&t.value.length<=11&&n.setState({cellPhone:t.value})},n.AddUser=function(){var e={firstName:n.state.firstName,password:n.state.password,street:n.state.street,cellPhone:n.state.cellPhone};console.log("user",e),n.props.addUser(e)},n.state={firstName:e.user.firstName,password:e.user.password,street:e.user.street,cellPhone:e.user.cellPhone},n}t.default=c}}]);