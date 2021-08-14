import { Component } from "react";
import { OnSalePrice } from "./style";
class OnSalePriceClass extends Component{
   render(){
       return(this.props.triger )?(
          <OnSalePrice>${this.props.priceBefore}</OnSalePrice>
       ):""
   }
}
export default OnSalePriceClass