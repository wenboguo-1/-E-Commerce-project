import { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {UserMenu,Text,Text1}  from './style.js'
class UserMenuClass extends Component{

   constructor(props){
      super(props);
      this.state = {

          menuList: [
             {
                text: 'MyWishList',
                isOnMouseEnter: false,
             },{
               text: 'My Products',
               isOnMouseEnter: false,
            },{
               text: 'MyProductSold',
               isOnMouseEnter: false,
            },{
               text: 'Account Setting',
               isOnMouseEnter: false,
            }  ,{
               text: 'LogOut',
               isOnMouseEnter: false,
            }
          ]
      }
      this.onMenuTextEvent = this.onMenuTextEvent.bind(this)
   }
   onMenuTextEvent(index){
      const list = [...this.state.menuList]
      list[index].isOnMouseEnter = list[index].isOnMouseEnter ? false : true
      this.setState( {
           menuList:list
      })
   }
   render(){
      return (this.props.triger)? (
            <UserMenu  onMouseEnter = {this.props.showMenuEvent} 
                       onMouseLeave = {this.props.closeMenuEvent}> 
               <Text
                      className = {this.state.menuList[0].isOnMouseEnter? "clicked" : ""}
                      onMouseEnter = {() => this.onMenuTextEvent(0)} 
                      onMouseLeave = {() => this.onMenuTextEvent(0)}
                   > {this.state.menuList[0].text} 
                </Text>
               <Link to = "../../myProductsInfo/myProducts"> 
                  <Text                  
                        className = {this.state.menuList[1].isOnMouseEnter? "clicked" : ""}
                        onMouseEnter = {() => this.onMenuTextEvent(1)} 
                        onMouseLeave = {() => this.onMenuTextEvent(1)}
                     > {this.state.menuList[1].text} 
                  </Text>
                 </Link >
                <Text
                      className = {this.state.menuList[2].isOnMouseEnter? "clicked" : ""}
                      onMouseEnter = {() => this.onMenuTextEvent(2)} 
                      onMouseLeave = {() => this.onMenuTextEvent(2)}
                   > {this.state.menuList[2].text} 
                </Text>
                <Text
                      className = {this.state.menuList[3].isOnMouseEnter? "clicked" : ""}
                      onMouseEnter = {() => this.onMenuTextEvent(3)} 
                      onMouseLeave = {() => this.onMenuTextEvent(3)}
                   > {this.state.menuList[3].text} 
                </Text>
                <Text1 
                       href  = "/"
                       onClick = {this.props.onLogoutEvent}
                       className = {this.state.menuList[4].isOnMouseEnter? "clicked" : ""}
                      onMouseEnter = {() => this.onMenuTextEvent(4)} 
                      onMouseLeave = {() => this.onMenuTextEvent(4)}
                   > {this.state.menuList[4].text} 
                </Text1>
          </UserMenu>
      ):" "
   }
}
const mapStateToProps = (state) => {
   return {
   
   }

}

const mapDispathToProps = (dispatch) => {
    return {
      onLogoutEvent(){
           const action = {
              type: 'on_logout'
           }
           dispatch(action)
      },
      closeMenuEvent(){
         const action = {
             type: 'close_userMenu'
         }  
         dispatch(action)
      },
      showMenuEvent(){
         const action = {
             type: 'show_userMenu'
         }
         dispatch(action)
      }
       
    }
}

export default connect(mapStateToProps,mapDispathToProps) (UserMenuClass);