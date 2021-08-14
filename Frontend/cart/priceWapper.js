import { Component } from "react";
import { TextWapper } from "./style";
class PriceWapper extends Component{
   render(){
       return(this.props.triger)?(
           <TextWapper></TextWapper>
       ):""
   }
}
export default PriceWapper