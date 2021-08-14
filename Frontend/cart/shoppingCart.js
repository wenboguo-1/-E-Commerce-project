import { Component } from "react";
import { CartWapper, ItemImage, ItemInfo, ItemName, ItemPrice, NumOfItems, NumOfItemsWarpper,Nav, InconMins, 
    InconPlus,CheckoutWapper,ItemInfoWapper, GroceryCartWapper, CartImage, GroceryText, Background,
    NumItemsWarrep, NumItems, TotalPrice, CheckoutButton, Items, Remove, Wapper} from "./style";
import OnSalePriceClass from "./onSalePrice";

class ShoppingCart extends Component{
 
    constructor(props){
         super(props)
         const tempCartList = (localStorage.getItem('shoppingCart')===null || localStorage.getItem('shoppingCart').length === 0) ? null : JSON.parse(localStorage.getItem('shoppingCart'))
         this.state = {
             cartList: tempCartList,
             totalItems:tempCartList === null ? 0 :tempCartList.length,
             totalPrice:0
        }    
        this.onMouseEnterRemove = this.onMouseEnterRemove.bind(this)
        this.onAddItem = this.onAddItem.bind(this)
        this.onMinsItem = this.onMinsItem.bind(this)
        this.onClickRemoveItem = this.onClickRemoveItem.bind(this)
    }
    
    onClickRemoveItem(index){
        const tempList = [...this.state.cartList];
        const productId = tempList[index].productId;
        tempList[index]['wantToRemove'] = false;
        tempList.splice(index,1)
        if(index < tempList.length){
            tempList[index]['wantToRemove'] = true;
        }
        var tempPrice = 0;
        
        tempList.map((content) => {
           tempPrice =    parseFloat(tempPrice) + parseFloat(content.productPrice);
        })
        console.log(tempPrice)
        this.setState({
            totalItems:this.state.totalItems - 1,
            cartList:tempList,
            totalPrice:tempPrice.toFixed(2)
        })
        if(tempList.length === 0){
            localStorage.removeItem('shoppingCart')
        }else{
          localStorage.setItem('shoppingCart',JSON.stringify(tempList))

        }
        localStorage.setItem('totalPrice',tempPrice)
        localStorage.removeItem('' + productId)

    }
    onMouseEnterRemove(index){
        const tempList = [...this.state.cartList];
        const flag = tempList[index].wantToRemove;
        tempList[index]['wantToRemove'] = flag ? false : true
        this.setState({
            wantToRemove: tempList

        })
        localStorage.setItem('shoppingCart',JSON.stringify(tempList))
    }
    onAddItem(index){
        const tempList = [...this.state.cartList];
        tempList[index]['numOfItems'] +=  1;
        const tempPrice = parseFloat(this.state.totalPrice) + parseFloat(tempList[index].productPrice) 
        this.setState({
            cartList:tempList,
            totalPrice:tempPrice.toFixed(2).valueOf() 
        })
        localStorage.setItem('shoppingCart',JSON.stringify(tempList))
    }
   
    onMinsItem(index){
        const tempList = [...this.state.cartList];
        var tempPrice = 0;
        if(tempList[index].numOfItems > 1){

            tempPrice = (parseFloat(this.state.totalPrice) - parseFloat(tempList[index].productPrice ))
        }else{
            return null
        }
        tempList[index]['numOfItems'] = tempList[index].numOfItems > 1 ? tempList[index].numOfItems - 1 : 1
    
        
   
        this.setState({
            cartList:tempList,
            totalPrice:tempPrice.toFixed(2).valueOf()
            
        })
        localStorage.setItem('shoppingCart',JSON.stringify(tempList))
    }


    render(){
        return(
              <Background>
               {(this.state.cartList === null || this.state.cartList.length === 0)? "Ops your cart is empty": (
                   
                    <CartWapper> 
                     {
                        this.state.cartList.map((content,index) => { 
                        return<ItemInfoWapper key = {index}> 
                                    <ItemInfo >
                                        <ItemImage src = {content.productImage}/>
                                        <Wapper> 
                                            <ItemName> {content.productName}                        
                                            </ItemName>
                                            
                                              <ItemPrice> ${content.productPrice} </ItemPrice>
                                              <OnSalePriceClass triger = {content.discount === null ? false :true} priceBefore ={content.priceBefore}></OnSalePriceClass>
                                           
                                        </Wapper>      
                                        <NumOfItemsWarpper> 
                                            <NumOfItems>
                                                <Nav>
                                                    <InconMins onClick = {() => this.onMinsItem(index)} ></InconMins>
                                                    <Items> {content.numOfItems}</Items>
                                                    <InconPlus onClick = {() => this.onAddItem(index)}></InconPlus>
                                                </Nav>
                                                <Remove onMouseEnter = {() => this.onMouseEnterRemove(index)}
                                                        onMouseLeave = {() => this.onMouseEnterRemove(index)}
                                                        className = {content.wantToRemove ? "remove" : ""}
                                                        onClick = {() => this.onClickRemoveItem(index)}> Remove </Remove>
                                            </NumOfItems>
                                        </NumOfItemsWarpper>
                                    </ItemInfo>  
                            </ItemInfoWapper>
                    })
                }
                    
                        <CheckoutWapper>
                            <GroceryCartWapper>
                                <CartImage src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAeCAYAAABNChwpAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALfSURBVHgBvZa9bxMxGMYfXy5paQMkQCUqVXAVfwCFlYEMqGKkEyVLE1iQ6NBIqEIU1DBQBpZWDCAViWPpnG5Qhl4XGClMDEjNCrTJFfJ1XzZ2+kGoGt8F5fhJyTm+57WfyK9fm4ymsxsANBwCA8u+W9J1hIjCP6bk5WWEDDmsM5XJJGI2KfNmcWXp1TD+twHBpVvTGwqj2pdzYxd+nLho+o7UaADbDXRGw2xrAIsVnRAygaDUPW7AQkcQUlQkr9cROhTtDTAYCBkGxWhvIOoUIdkhXYFiub2BbJJPzooIEy9iyHJAFKI1hAQDX+J80pQaAGHhJSKjzT8nN2BHDYQGNcQ38ZORl1VRERN+ug7rgMkeDCRFQ/HXdn8ZGOh+bvka4In4Cd2GkkJgA9yCgW5DPQOBDUT+iLvEOvKDRQQ1cOVtbkR1al2riIyQv3JKamA0fXNWUcjqwOZn/10QFOq8bv2pttOlxjMa95vnTbOvvrnAGIV8YCaKi1xDFBMPB41ABtTdeyIBK3ydu55HSLQtRC3XMpMvnMGI/GT0LAtWvQ4pjJrROh4ZRsH0NSAYTWfyXDKLALi2DatW89VRl419WCkUAhkQXOW54ClIHent0+Lx+AQBSTiOY5S3S8utOq9ho3HAQKy3J9EfP5aJqJHzru2umaVN/f2bgt6q8TUguH3viUaiWAVj2n4nQ+754/vzsrgbk9Mf+WNkfzLC9KVnT7OtmgCVkKPSjJi8Wq2iVN7aHQ3SpRmfvJsSk7uug63v3+C6Lh+CZNJ3Zs52boARTTx+VbZRLpdAaXO7yWsD2YmpVyuoVn7CsXZOSkqs4X8wsHMenDo5gKGhM1CUZpghC+mNOM1EO3o8idM85kh/v1i2YkN1g1fCPV7Mzej8VFxQ1Sh6Yj3NgZhrZ2Ux+vy8SRnNiXaMx/BkMz2CXIH3t+oCJeEeIhk9hSYW52YC3xGuTU0l+uyoVos5xYOTC34DZSsh6c7/07oAAAAASUVORK5CYII=' />
                                <GroceryText> Grocery Cart</GroceryText>
                            </GroceryCartWapper>
                            <NumItemsWarrep>
                                < NumItems> {this.state.totalItems + " items total"} </NumItems>
                
                                <TotalPrice className = 'right'>{ "$ " + this.state.totalPrice} </TotalPrice>
                    
                            </NumItemsWarrep>
                            <CheckoutButton> Grocery Checkout</CheckoutButton>
                        </CheckoutWapper>
                </CartWapper>)
             }  
          </Background>
        )
    }

   componentDidMount(){
       var tempTotalPrice = 0;
      
       if(this.state.cartList !== null){
  
            this.setState({
                cartList: this.state.cartList.map((content) => {
                    tempTotalPrice += parseFloat(content.productPrice);
                    content['wantToRemove'] = false;
                    content['numOfItems'] = 1;
                    content['totalItemPrice'] = content.productPrice
                    return content;
            }),
            totalPrice: tempTotalPrice.toFixed(2)
            })
        
        localStorage.setItem('shoppingCart',JSON.stringify(this.state.cartList))
     }
    
   }
}

export default ShoppingCart