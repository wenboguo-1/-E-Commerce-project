import { Component } from "react";
import {Error} from './index.style'
class ValidationSignIn extends Component{
   
    render(){
        return (!this.props.triger) ? (
            <Error>{this.props.textError}</Error>
        ) : " "
    }
}

export default ValidationSignIn