import { Component } from "react";
import { TypeMenu,TypeText} from "./style";
import { connect } from "react-redux";

class CategoriesMenu extends Component{
    
    constructor(props){
        super(props)
        this.state = {
            isMouseOnType: false
        }
       this.setIsMouseOnType = this.setIsMouseOnType.bind(this)
    }
  
    setIsMouseOnType(){
        this.setState({
            isMouseOnType: this.state.isMouseOnType ? false : true
        })
    }
    
    render(){
        return(this.props.triger) ? (
             <TypeMenu  onMouseLeave = {this.props.onShouldDisplayTypeMenu}
                        onMouseEnter = {this.props.onShouldDisplayTypeMenu}> 
                  {  
                    this.props.typeList.map((content,index) => {
                       return <TypeText key = {index}
                                        onClick = {() => this.props.setCurrentType(content)}
                                        onMouseEnter = {this.setIsMouseOnType}
                                        onMouseLeave = {this.setIsMouseOnType}
                                        className = {this.state.isMouseOnType ? 'mouseOnType' : ""} >
                              {content.type}
                       </TypeText>
                    })
                  }
             </TypeMenu>
        ):""
    }
}
const mapStateToProps = (state) => {
    return {
        
    }
  
  }
  const mapDispathToProps = (dispatch) => {
    return {
          onShouldDisplayTypeMenu(){
              const action = {
                  type: 'onShouldDisplayTypeMenu'
              }
              dispatch(action)
          },
          setCurrentType(type){
              console.log(type)
              const action = {
                  type:'onSetCurrentType',
                  currentType: type
              }
              dispatch(action)
          }
        
    }
  }
  export default connect(mapStateToProps,mapDispathToProps) (CategoriesMenu);