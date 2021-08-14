import React, {Component} from 'react';
import {ListWarpper,Text} from './style'
import Categories from './category';
class CategoryList extends Component{

   render( ){
       return(

        
          <ListWarpper>                
            <Text> 
                Category   
            </Text>     
            <Categories/>     
         </ListWarpper>   
       )
   }

}

export default CategoryList