import React from "react";
import {CategoryImage,CategoryName,CategoryWarpper, NavBar} from './style';
import { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
 
class  Categories extends Component{
   constructor(props){
       super(props)
       this.state = {
           list: [{
            image:"https://cdn.sayweee.net/category/v2/green_t.png",
            name: "green"
        },
        {
            image:"https://cdn.sayweee.net/category/v2/meat_t.png",
            name: "meat"
        },{
            image:"https://cdn.sayweee.net/category/v2/seafood_t.png",
            name: "Seafood"
        },{
            image:"https://cdn.sayweee.net/category/v2/instant_t.png",
            name: "Instant"
        },{
            image:"https://cdn.sayweee.net/category/v2/fruits_t.png",
            name: "Fruit"
        },{
            image:"https://cdn.sayweee.net/category/v2/bakery_t.png",
            name: "Bakery"
        },{
            image:"https://cdn.sayweee.net/category/v2/snack_t.png",
            name: "Snacks"
        },{
            image:"https://cdn.sayweee.net/category/v2/beverages_t.png",
            name: "Beverages"
        }
    ]
  
       }
   }

       render(){
           return( <NavBar> 
            
            { this.state.list.map((content) => {
   
               return <CategoryWarpper key = {content.name}  >
                   <Link to = "../../type/index"> 
                     <CategoryImage onClick = {() => this.props.setOnClick(content.name)} src = {content.image}/> 
                   </Link>
                  <CategoryName >  {content.name} </CategoryName>
             </CategoryWarpper> 
            })
             
          }
        </NavBar>)
       } 
         
            
    

}
const mapDispathToProps = (dispatch) => { 
    return {
          setOnClick(type){
              localStorage.setItem('itemType',type)
          }
    }

}

  export default connect(null,mapDispathToProps)(Categories);