import axios from "axios";
import { Component } from "react";
import {Wapper,ItemInfoWapper,InfoWapper,ItemName,ItemPrice,ItemImage,ItemInfo,ItemAdding,NumOfItemsWarpper} from "./style"
import { connect } from "react-redux";
import OnSalePriceClass from "./onSalePrice";
import Header from "../common/header";
import UserMenuClass from "../common/header/userMenu"
class ItemTypes extends Component{
   constructor(props){
       super(props)
       this.state = {
           itemList:[],
           type:localStorage.getItem('itemType')
       }
       this.onAddToCart = this.onAddToCart.bind(this)
   }
   onAddToCart(content,index){
    const tempProductInfo = content;
    console.log(tempProductInfo)
    tempProductInfo['isAddedToCart'] = true;
    const tempList = this.state.itemList;
    tempList[index] = tempProductInfo
    this.setState({
        itemList:tempList
    })
    this.props.onAddToCart(tempProductInfo,index)
}

   render(){
       return(
           <div>
          <Header/> 
           <UserMenuClass triger = {this.props.isUserMenuShown ? true : false}></UserMenuClass>
           <Wapper>
            
             {
               this.state.itemList.map((content,index) => {
               return <ItemInfoWapper key = {index}>
                    <ItemInfo >
                    <ItemImage src = {content.productImage}/>
                            <InfoWapper > 
                                     <ItemName> {content.productName}                        
                                      </ItemName>
                                     <ItemPrice> ${content.productPrice} </ItemPrice>
                                     <OnSalePriceClass triger = {content.discount === null ? false :true} priceBefore ={content.priceBefore}></OnSalePriceClass>
                             </InfoWapper >   
                        </ItemInfo>
                        <NumOfItemsWarpper> 
                        <ItemAdding onClick = {content.isAddedToCart ? null : () => this.onAddToCart(content,index)
                                            }
                                      className = {content.isAddedToCart ? "itemIsAdded":""}
                                    >+</ItemAdding>
                        </NumOfItemsWarpper>
                 </ItemInfoWapper>
                 })
              }
           </Wapper>
           </div>
       )
   }


   componentDidMount(){
       const type = this.state.type
       axios.get("https://daxiong-boot.herokuapp.com/user/itemListByType/" + type).then((res) => {
            const list  = res.data;
           
            list.map((content) => {
                if(localStorage.getItem(content.productId)!== null){
                    content['isAddedToCart'] = true
                }else{
                    content['isAddedToCart'] = false
                }
                if(content.discount !== null){
                   
                    const discount = parseInt(content.discount) 
                    const currentPrice = parseFloat(content.productPrice)
                    const finalPrice = parseFloat(currentPrice - (currentPrice * (discount / 100))).toFixed(2)
                    content['priceBefore'] = currentPrice;
                    content['productPrice'] = finalPrice
                }
            })
            if(res.data !== ""){
                this.setState({
                    itemList:list
                })
            }
       }).catch(()=>{
           alert("Ops, there is something wrong")
       })
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

const mapStateToProps = (state) => {

    return {
       isUserMenuShown:state.get('isUserMenuShown')
    }
  
  }
  export default connect(mapStateToProps,mapDispathToProps)(ItemTypes);