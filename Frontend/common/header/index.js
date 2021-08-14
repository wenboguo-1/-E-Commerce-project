import { Component} from 'react';
import {HeadWraper,Nav,Logo,SearchBar,Addition,SearchIconWarrper,
     Button1,SearchWrapper,CartWapper,Icon,CartCount} from './style.js'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import IsSignIn from './isSignIn.js';
import SignUp from '../../loginInfo/signUpOrSignIn.js';
import {FaSearch} from 'react-icons/fa';
class Header extends Component {
    
     constructor(props){
          super(props)  
           this.state = {
               userInfo:localStorage.getItem('userInfo'), 
               itemList:this.props.itemList  
          } 
          this.onChangeSearch = this.onChangeSearch.bind(this)
     }

     onChangeSearch(value){
          if(value !== ""){
          const itemList = this.props.itemList
          const resList = itemList.filter(key => key.productName.toLowerCase().includes(value.toLowerCase()))
          this.props.setResList(resList)
          }else{
               this.props.setResList([])
          }
   
     }
    
     render(){

          return (
              <div> 
               <HeadWraper >
               
                  <Nav>
                  <Logo href = '/'/>
                  <SearchWrapper> 
                     <SearchBar  
                       className = {this.props.focused ? 'focused': ''}
                       onFocus = {this.props.inputClickedSearch}
                       onBlur = {this.props.handInputOnBlur}
                       onChange = {(e) => this.onChangeSearch(e.target.value)}
                      />  
                       <SearchIconWarrper> 
                           <FaSearch /> 
                       </SearchIconWarrper>
                       
                    </SearchWrapper>    
                    
                   </Nav>
                  
                    <Addition className = 'right'>
                     <IsSignIn triger = {!this.props.isLogin ? false : true }/> 
                        <Link to = {this.props.wantToSell ? "../../newProduct/index":""}> 
                          <Button1  className = 'reg' onClick = { this.props.isLogin ? null : this.props.onClickSignIn }> Want to sell</Button1>
                        </Link>
                        <CartWapper className = 'right'> 
                        <Link to = '../cart/shoppingCart'> 
                          <Icon  ></Icon> 
                         
                          <CartCount> {this.props.numOfItemInCart}</CartCount>
                          </Link>
                        </CartWapper>     
                       
                     </Addition>
                     <SignUp triger = {this.props.wantToSign}/> 
               </HeadWraper>
            
          </div>   
          
          );
  

     }

    componentDidMount(){
       this.props.onUserInfo(this.state.userInfo)
       console.log(this.props.itemList)
   }

}


const mapStateToProps = (state) => {
    return {
         focused: state.get('focused'),
         isLogin: state.get('isLogin'),
         wantToSign: state.get('wantToSignIn'),
         wantToSell: state.get('wantToSell'),
         isUserMenuShown:state.get('isUserMenuShown'),
         numOfItemInCart: state.get('numOfItemInCart'),
         itemList:state.get('itemList'),
         onMouseEnterSearchRes:state.get('onMouseEnterSearchRes')

    }
 
 }
 
 const mapDispathToProps = (dispatch) => {
     return {
          setResList(list){
          
               const action = {
                  type: 'setResList',
                  searchResList:list
                }
            dispatch(action)
       },

           onUserInfo(user){
               if(user !== null ){
               const tempUserInfo = JSON.parse(user)
               const action = {
                  type: 'setUserInfo',
                  userInfo: tempUserInfo
               }
               dispatch(action)
            }
          },
          onClickSignIn(e) {
               
               const action = {
                   type: 'signin_click'
               }
               dispatch(action)
               
           },
          inputClickedSearch(){
               const action = {
                   type: 'search_focus'
               }
               dispatch(action)
           },
           handInputOnBlur(){
                const action = {
                     type: 'search_blur'
                }
                dispatch(action)
           },
           wantToSellEvent(){
                const action = {
                     type: 'want_sell'
                }
                dispatch(action)
           }
     }
 }
 
 export default connect(mapStateToProps,mapDispathToProps) (Header);