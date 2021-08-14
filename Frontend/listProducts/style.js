import styled from "styled-components";

export const ProductListWrapper = styled.div `

position:relative;

height:370px;
border-bottom: 1px solid #f0f0f0;
`
export const Text = styled.div `
    margin-top:10px;
    margin-left: 70px;
    font-weight: bold;
    font-size: 18px;

`
export const NavBar = styled.div `
position:absulote;
    display: flex;
    flex-direction: row;
    height 330px;
    margin-left: 50px;
 
      
`

export const ProductWapper = styled.div `
    

    display: flex;
    flex-direction: column;
    align-items: center;
    width: 180px;
    margin-right:20px;
    margin-top:20px;
    flex-shrink: 0;
    border: 1px solid #f0f0f0;
 

`
export const ProductImage = styled.img `
   
    height: 130px;
    width: 150px;
    position:relative;
    border-radius: 3px;
    object-fit: cover;
    margin: 0;
    cursor:pointer;
   
`
export const A = styled.a `
   display:flex;
`
export const ProductName = styled.div `
       
        display: -webkit-box;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        font-size: 16px;
        margin-top:15px;
         height: 30px;
        line-height: 15px;
        color: #333;
        margin-left:10px;

`

export const ProductPrice = styled.div `
    width:40px;
    height: 15px;
    margin-top: 10px;
    margin-left: -120px;
    font-size: 15px;
    color:#B22222;
    
    font-weight: bold;
`
export const ProductUnit = styled.div `
    width:40px;
    height: 15px;
    margin-top: 10px;
    margin-left:60px;
    font-size: 15px;
    font-weight: bold;
`
export const ProductSold = styled.div `
    margin-top: 10px;
    margin-left: -100px;
    font-size: 15px;
    font-weight: bold;

`


export const WishImage = styled.img `
  width: 21px!important;
  height: 21px!important;
  margin-left: 120px;

  &.isWishClicked{
    background-color: red;
  }
  cursor:pointer;
    
`
export const OnSale = styled.div`
display: flex;
justify-content: center;
align-items: center;
color: #fff;
font-size: 14px;
height: 23px;
padding: 0 6px;
border-radius: 6px;
background: rgb(223, 44, 46);   
margin-top:-17px;
margin-left:-100px;
`
export const OnSalePrice = styled.div `
font-size: 16px;
color: #666;
margin-left:20px;
margin-top:10px;
text-decoration: line-through;

` 
export const ItemAdding = styled.div `
&.itemIsNotAdded{
    background-color:#D3D3D3;
    border-radius: 50%;
}
&.itemIsAdded {
    border-radius: 50%;
    background-color: #0a72ba;
    cursor: pointer;
}      

width: 40px;
height: 40px;
border-radius: 50%;
margin-top: 10px;
font-size:30px;
color: white;
text-align: center;

`


