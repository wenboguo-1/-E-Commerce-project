import React,{Component} from "react"
import { connect } from "react-redux"
import {ProductListWrapper,NavBar,Text,ProductWapper,ProductImage,ProductName,WishImage,
   ProductPrice,ProductSold,ItemAdding} from './style'
import axios from "axios";
import { Link } from "react-router-dom";
class ProductList extends Component{
   constructor(props){
      super(props)
      this.addItemToCart = this.onImageClicked.bind(this)
   }

   onImageClicked(c,i){
      const content = c;
      content['index'] = i;
      localStorage.setItem('currentProductInfo',JSON.stringify(content) )
   }
   
   render(){
      
      return(
         <ProductListWrapper>   
         <Text>Best Sale {}</Text> 
       
         <NavBar>
          { 
              this.props.productList.slice(0,8).map((content,index) => {       
              return   <ProductWapper key ={index}>
                  
                   <WishImage       
                     onClick =  { this.props.isLogin ? () => this.props.setOnWishClicked(index) :  this.props.setOnSignIn}  
                     className = {content.wishAdded  ? 'isWishClicked': " "}
                     src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKcSURBVHgB7ZsxbuJAGEZ/w4qCihUX4AZAOqrN9hyCBuQuXtHvaiVaJLZDpmFbqhS0KFfgBiEHQErlggJnxoKIEODzjMceW/mfZGFhg8zzvDGFTcQwDMMwRcUhTTzPqwVB8BCG4b3jOPeUT9Zimfi+/5800RLkum5jv98/idUGFYNNqVT6OZ1ON6RIiTQomBxJdEJ7vV6NFFEW1O/3e1QsOUcalUrFI0WUBYn55oEKijj2H6TIN1Kn9emNVita8sR6vY6WU+QFhRTREfSJZrNJnU6H8sa5IB20JumvBAsCsCAACwKwIAALArAgAAsCsCAACwKwIAALArAgAAsCsCAACwKwIAALArAgAAsCsCAACwKwIAALArAgAAsCsCAACwLkStBqtYqWPGHk7o6kBEFAy+XyXc52u6Vut0vVapVsY12QlDEej6PXI1KUvHVlOBxSvV4nm1hNTIoYjUYf5ByR78lttpOzMoLOk7q132KxsJpc5oIuJYWwmVymid1KCmEruUxGUJykwjB8dRzn72H9j1ivXfqerJNLXVDMpDblcvn9TnjXdR9v3ayeZXKpJhYnKTFa/omR0D59TECu73a7ttx27XNZJZfKCFJJajabTS5tn8/nr+LFGwwGG5vJGR9BMc+sTKrt+/4EfZ/cR+4rP3NtnySTP8KoIN2kEDaTM5LYcagnSQqhmpypyVv5eTFxgCGpo/281iWSPK8mklX6zan/UdRJChEnOVOk9j8oaVKIOMmZIK0RFPsqlZQ4V7kkGBeURlKIk+TkCdGZI69iLLG0k0IckvslknsRx/JbHMt3MoCpEZRZUohDcndi9ZkMkFiQjaQQh+TuTCSnnZjtpBCmktMdQblJCpE0OWVBeUwKcZYcwzAMw3wR3gBuytA1wowFPwAAAABJRU5ErkJggg=="/>
                  
                     <Link to =  "/productInfoFile/productInfomation" onClick = {() => this.onImageClicked(content,index)}>  
                    
                      <ProductImage src = {content.productImage}/>  
                    </Link>                      
                   <ProductName> {content.productName}  </ProductName>
                 
                  <ProductPrice> { "$" + content.productPrice}</ProductPrice>
                 
                          
                  <ProductSold> 400+ Sold </ProductSold>
                   <ItemAdding onClick = {content.isAddedToCart ? null : () => this.props.addItemToCart(content,index)} 
                                className = {content.isAddedToCart ? "itemIsNotAdded" : "itemIsAdded"}  >  + </ItemAdding>                        
                </ProductWapper>
 
               })
          
             }
        </NavBar>
       </ProductListWrapper>

      )
    }

    componentDidMount(){
           
       axios.get('https://daxiong-boot.herokuapp.com/user/allProducts').then((res) => {
              const result = res.data;
              const action = {
                   type: 'getAllProducts',
                   products: result
              }
              return this.props.getAllProducts(action)

       }).catch(()=> {
          
       })
         

    }
    
}


const mapStateToProps = (state) => {
      return {
         productList: state.get('productList'),
         isWishAdded: state.get('isWishAdded'),
         isLogin:state.get('isLogin'),
         wantToSignIn:state.get('wantToSignIn')
      }

}

const mapDispathToProps = (dispatch) => {
     return {

      addItemToCart(propsItem,i){
            var numOfItem = parseFloat(localStorage.getItem('numOfItemInCart')) 
            numOfItem = numOfItem + 1;
            localStorage.setItem('numOfItemInCart',numOfItem)
           const action = {
               type: 'addItemToCart',
               item:propsItem,
               index:i
               
            }
         dispatch(action)
      },
      setOnWishClicked (i) {
          const action = {
             type: 'adding_wish',
             index: i
          }
         dispatch(action)
       
        },
        setOnSignIn(){
           const action = {
              type: 'signin_click'
           } 

           dispatch(action)
        },
        getAllProducts (res){
             dispatch(res)
        }
     }
}
export default connect(mapStateToProps,mapDispathToProps) (ProductList);