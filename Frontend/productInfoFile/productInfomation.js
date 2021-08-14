import { Component } from "react";
import { ProductInformationWapper, ProductImageWapper,ProductImage,ImageListWapper,ProductContainer, ImageContaniner,
        Image,Img,ProductTextInfoWapper,ProductName, ProductSold,ProductPrice,NavContainer,FavoriteContainer,Icon,Favorite 
        ,Button,TextWapper, ProductUnit } from "./style";
import Header from "../common/header/index"
import { connect } from "react-redux";
import UserMenuClass from "../common/header/userMenu";


class ProductInfomation extends Component {

    constructor(props){
        super(props)
        this.state = {
            productInfo: {}
        }
        this.onAddToCart = this.onAddToCart.bind(this)
    }

    onAddToCart(){
         const tempProductInfo = this.state.productInfo;
         tempProductInfo['isAddedToCart'] = true;
         this.setState({
             productInfo:tempProductInfo
         })
         this.props.onAddToCart(tempProductInfo,tempProductInfo.index)
    }

    render() {
        return(
         
            <div> 
             <Header/> 
             <UserMenuClass triger = {this.props.isUserMenuShown ? true : false}></UserMenuClass>
            <ProductInformationWapper> 
                <ProductContainer> 
                    <ProductImageWapper>
                        <ImageListWapper> 
                            <ImageContaniner  className = "onMouseEnter">
                                <Image >
                                    <Img src = {this.state.productInfo.productImage}/>  
                                </Image> 
                            </ImageContaniner>
                        </ImageListWapper>
                        <ProductImage src = {this.state.productInfo.productImage}/>
                    </ProductImageWapper>
                </ProductContainer>
                <ProductTextInfoWapper>
                     <ProductName> {this.state.productInfo.productName} </ProductName>
                     <ProductSold> Weekly sold 35+  </ProductSold>
                     <TextWapper> 
                      <ProductPrice> $ {this.state.productInfo.productPrice}</ProductPrice>
                      <ProductUnit> {this.state.productInfo.productUnit} </ProductUnit>
                     </TextWapper>
                     <NavContainer> 
                    <FavoriteContainer>
                        <Icon></Icon>
                        <Favorite> Favorite </Favorite> 
                    </FavoriteContainer>
                    
                    <Button onClick = {this.state.productInfo.isAddedToCart ? null : () => this.onAddToCart()}
                            className = {this.state.productInfo.isAddedToCart ? "isInCart" : ""}> Add to Cart</Button>
                </NavContainer>
                </ProductTextInfoWapper>
    
            </ProductInformationWapper>
       
         </div>
        )
    }
    componentDidMount(){
         this.setState({
             productInfo: JSON.parse(localStorage.getItem('currentProductInfo')) 
         })
    }
  
}

const mapStateToProps = (state) => {
    return {
        isUserMenuShown: state.get('isUserMenuShown'),
    }

}

const mapDispathToProps = (dispatch) => {
   return {
        onAddToCart(productInfo,i){
            var numOfItem = parseFloat(localStorage.getItem('numOfItemInCart')) 
            numOfItem = numOfItem + 1;
            localStorage.setItem('numOfItemInCart', JSON.stringify(numOfItem) )
           const action = {
               type: 'addItemToCart',
               item:productInfo,
               index:i
               
            }
          dispatch(action)
        }
   }
}
export default connect(mapStateToProps,mapDispathToProps) (ProductInfomation);