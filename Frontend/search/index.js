import { Component } from "react";
import {Wapper,SearchResWapper} from "./style"
import { connect } from "react-redux";
import { Link } from "react-router-dom";
class Search extends Component{
   
     constructor(props){
         super(props)
         this.state = {
             searchResList: this.props.searchResList,
             isCursorOnRes:false
         }
     }
    
     
      
      render(){
          return(this.props.triger)?(
            <Wapper onMouseEnter = {  this.props.searchResList.length > 0 ? this.props.onMouseEnterSearchRes : null } onMouseLeave = {this.props.onMouseLeave}> 
              {  
                this.props.searchResList.length > 0 ? this.props.searchResList.map((content,index) => {
                       return <Link style={{ textDecoration: 'none' }} key = {index} to = "../productInfoFile/productInfomation" 
                                                onClick = {() => this.props.onSeachResClicked(content,index)} > 
                              <SearchResWapper >{content.productName}</SearchResWapper>
                            </Link>
                 }) : <SearchResWapper >Can't find any matching result</SearchResWapper>
                
               
              }
            </Wapper>
          ):""
      }

}
const mapStateToProps = (state) => {
    return {
        searchResList: state.get('searchResList'),
    }

}

const mapDispathToProps = (dispatch) => {
   return {
        onMouseEnterSearchRes(){
            const action = {
                type:'onMouseEnterSearchRes'
            }
            dispatch(action)
        },
        onMouseLeave(){
            const action = {
                type:'onMouseLeaveSearchRes'
            }
            dispatch(action)
        },
        onSeachResClicked(c,i){
     
            const content = c;
            content['index'] = i;
            localStorage.setItem('currentProductInfo',JSON.stringify(content) )
            const action = {
                type: 'search_blur',
                type1:'daxiong'
           }
           dispatch(action) 
      }
   }
}
export default connect(mapStateToProps,mapDispathToProps) (Search);