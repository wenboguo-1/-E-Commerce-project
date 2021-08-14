import { Component } from "react";
import { connect } from "react-redux";
import { MyProductWapper,ItemInfoWapper,ItemInfo,ItemImage,Wapper,ItemName,ItemPrice,ChangeProductContainer,EditButton,
         RemoveMyProduct,
         OnSale,OnSalePrice} from "./style";
import Header from '../common/header/index.js'
import { Link } from "react-router-dom";
import UserMenuClass from "../common/header/userMenu"
import axios from "axios";
class MyProductsInfo extends Component{
    constructor(props){
        super(props)
        this.state = {
            myProductList:[],
            myOnSaleList:[],
        }
        this.onClickEditEvent = this.onClickEditEvent.bind(this)
        this.onDelete = this.onDelete.bind(this)
        this.onClickOnSale = this.onClickOnSale.bind(this)
    }
    
    onClickOnSale(content){
      const discount = prompt('Enter a precentage for the item you want to make on sale %')
      const onSaleItems = {
        discount:discount,
        productId:content.productId
      }
      if(/^[0-9.,]+$/.test(discount)){
      
         axios.post('https://daxiong-boot.herokuapp.com/user/setOnSaleItemById',onSaleItems).then(()=>{
               window.location.reload(false)
         }).catch(()=>{
             alert('Ops, there is something wrong')
         })
         
      }else{
        alert('The number you entered is not the valid')
      }

    }
    onDelete(index,type){
      const tempList =  type === "onSale" ? this.state.myOnSaleList : this.state.myProductList;
      const productId = tempList[index].productId;
     

       axios.post('https://daxiong-boot.herokuapp.com/user/deleteItem/' + productId).then(() => {
       
           tempList.splice(index,1)
           this.setState({
               myProductList:tempList
           })
           localStorage.setItem('myProducts',JSON.stringify(tempList))
           alert('You have successfully deleted the product from your list')
       

       }).catch(() => {
        alert('ops,there is something wrong when deleted this item')
       })
      
   }

    onClickEditEvent(content,index){
        localStorage.setItem('updateProduct',JSON.stringify(content))
        localStorage.setItem('currentIndex',index)
    }
    render(){
        return(
           <div>
              <Header/>
              <MyProductWapper>
              {   
                    this.state.myOnSaleList.map((content,index) => {
                      return  <ItemInfoWapper  key = {index} >
                                    <ItemInfo>
                                        <ItemImage src = {content.productImage} />
                                        <Wapper>
                                            <ItemName> {content.productName}</ItemName>
                                            <ItemPrice> $ {content.productPrice}</ItemPrice>    
                                            < OnSalePrice> ${content.priceBefore}</OnSalePrice>                                  
                                        </Wapper>
                                <ChangeProductContainer>
                                <Link to = "../updateProduct/index"> 
                                <EditButton onClick = {() => this.onClickEditEvent(content,index)}/>
                               </Link>
                                <RemoveMyProduct  onClick={() => { if (window.confirm('Are you sure you wish to delete this item from your list?')) this.onDelete(index,"onSale") } } > Remove</RemoveMyProduct> 
                               
                            </ChangeProductContainer>
                            </ItemInfo>
                       </ItemInfoWapper>
                      
                    })
                }
                 {  
                    this.state.myProductList.map((content,index) => {
                      return  <ItemInfoWapper  key = {index} >
                                    <ItemInfo>
                                        <ItemImage src = {content.productImage} />
                                        <Wapper>
                                            <ItemName> {content.productName}</ItemName>
                                            <ItemPrice> $ {content.productPrice}</ItemPrice>                                       
                                        </Wapper>
                                <ChangeProductContainer>
                                <Link to = "../updateProduct/index"> 
                                <EditButton onClick = {() => this.onClickEditEvent(content,index)}/>
                               </Link>
                                <RemoveMyProduct  onClick={() => { if (window.confirm('Are you sure you wish to delete this item from your list?')) this.onDelete(index,"normal") } } > Remove</RemoveMyProduct> 
                                <OnSale onClick = {() => this.onClickOnSale(content)}>  On Sale</OnSale>
                            </ChangeProductContainer>
                            </ItemInfo>
                       </ItemInfoWapper>
                      
                    })
                }
             </MyProductWapper>
              <UserMenuClass triger = {this.props.isUserMenuShown ? true : false}></UserMenuClass>
            </div> 
        )
    }

    componentDidMount(){
        
        const userId = JSON.parse(localStorage.getItem('userInfo')).userId
        
        axios.get('https://daxiong-boot.herokuapp.com/user/findProductsByUserId/' + userId).then((res) =>{
                  
            if(res.data !== ''){
                const tempList = res.data
                let tempProductList =[]
                let tempOnSaleList = []
                tempList.map((content) => {
                    if(content.discount === null){
                        tempProductList.push(content)
                    }else{
                        const discount = parseInt(content.discount) 
                        const currentPrice = parseFloat(content.productPrice)
                        const finalPrice = parseFloat(currentPrice - (currentPrice * (discount / 100))).toFixed(2)
                        content['priceBefore'] = currentPrice;
                        content['productPrice'] = finalPrice
                        tempOnSaleList.push(content)
                    }
                })
                this.setState({
                    myProductList:tempProductList,
                    myOnSaleList:tempOnSaleList
                })
            }                    
           }).catch(()=> {
               alert('failed to get the data from database')
           })
       
        this.props.setNumInCart(localStorage.getItem('numOfItemInCart'))
       
    }
   
}


const mapStateToProps = (state) => {
    return {
        isUserMenuShown: state.get('isUserMenuShown')
    }

}

const mapDispathToProps = (dispatch) => {
   return {
    setNumInCart(num){
        
        const tempNum = parseFloat(num)
        const action = {
          type: 'setCartNum',
          number:tempNum
        }

        dispatch(action)
      }
      
   }
}
export default connect(mapStateToProps,mapDispathToProps) (MyProductsInfo);
