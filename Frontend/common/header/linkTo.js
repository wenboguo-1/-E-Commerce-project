import { Component } from "react";
import { Link } from "react-router-dom";
import { Button1 } from "./style";
import { connect } from "react-redux";
class LinkTo extends Component{
   
    render(){
        return (this.props.triger) ? (
            <Link  to = { this.props.wanToSell ? "../../newProduct/index" : ""}>
                 <Button1  className = 'reg' onClick = { this.props.isLogin ? () => this.props.wantToSellEvent : () => this.props.onClickSignIn }> Want to sell</Button1>
            </Link>
        ) : (
            <Button1  className = 'reg' onClick = { this.props.isLogin ? this.props.wantToSellEvent : this.props.onClickSignIn }> Want to sell</Button1>
        )
    }
}

const mapStateToProps = (state) => {
    return {
   
         isLogin: state.get('isLogin'),
         wanToSell: state.get('wantToSell')

    }
 
 }
 
 const mapDispathToProps = (dispatch) => {
     return {
         
          onClickSignIn(e) {
               
               const action = {
                   type: 'signin_click'
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
 
 export default connect(mapStateToProps,mapDispathToProps) (LinkTo);