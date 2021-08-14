import { Component } from "react";
import {NavItem}  from './style.js'
import { connect } from "react-redux";
class IsSignIn extends Component{

      render(){
        
          return (this.props.triger) ? (
              <div> 
                  <NavItem
                    className = 'right' 
                    onMouseEnter = {this.props.showMenuEvent}
                    onMouseLeave = {this.props.closeMenuEvent}
                    > {this.props.userInfo.userName }
                 </NavItem> 
                 </div>       
          ):(
            <NavItem onClick  = {  this.props.onClickSignIn}  className = 'right'> Sign In/ Sign Up   </NavItem>
             
          )
      }
  
}
const mapStateToProps = (state) => {

    return {       
        userInfo: state.get('userInfo')
    }
 
 }
 const mapDispathToProps = (dispatch) => {
     return {
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
          },
          onClickSignIn() {
               
               const action = {
                   type: 'signin_click'
               }
               dispatch(action)
               
           }
     }
 }
 export default connect(mapStateToProps,mapDispathToProps) (IsSignIn);