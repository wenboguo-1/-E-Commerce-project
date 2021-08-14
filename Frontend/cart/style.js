import styled from "styled-components"
import {AiOutlineMinus} from "react-icons/ai";
import {BsPlus } from "react-icons/bs";

export const Background = styled.div `
        display:flex
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: 0 auto;
        min-height: calc(100vh - 498px);
        background-color: WhiteSmoke;
}
`
export const CartWapper = styled.div `
  
    border-top-color: #15aacb;  
    display: flex;
    padding: 8px 0; 
    background-color: #fff;
    border-radius: 10px;
    border-top: 8px solid;
    margin-bottom: 16px;
    flex-direction: column;

`
export const ItemInfoWapper = styled.div `

    display: block;

    background-color: #fff;
    flex-direction: column;
    width:100%;
   

`
export const ItemInfo = styled.div `
    display: flex;
    height: 120px;
    margin-left:-100;
    box-sizing: content-box;
    background-color: #fff;
    border-bottom: 1px solid #f0f0f0;
    
`
export const ItemImage = styled.img `
    margin-left:20px;
    border-radius: 10px;     

`
export const Wapper = styled.div `
    heigth:100px;
    width:300px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
`
export const ItemName = styled.div `
   margin-top: 20px;
   margin-left: 30px;
   box-sizing: border-box; 

`
export const ItemPrice = styled.div `
    
    line-height: 22px;
    margin-top:30px;
    margin-left:30px;
    color:#B22222;

`
export const NumOfItemsWarpper = styled.div `
    heigth:100px;
    width:300px;
    box-sizing: border-box;
    display: flex;
    margin-left: auto;
    
    margin-top: 2px;
    float:right;
    
`
export const NumOfItems = styled.div `
    position:relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 115px;
    flex-direction: column;
    width: 140px;
    height: 100%;
`

export const Nav = styled.div `
    width: 98px;
    border: 2px solid #ccc;
    border-radius: 4px;
    line-height: 22px;
    max-width: 136px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
`
export const InconMins = styled(AiOutlineMinus)`
     cursor:pointer;
     margin-left:10px;
     box-sizing: border-box;
`
export const InconPlus = styled(BsPlus) `
     cursor:pointer;
     margin-right:10px;
     box-sizing: border-box;
`
export const Items = styled.div `

`
export const CheckoutWapper = styled.div `

    padding: 8px 16px;
    background-color: #fff;
    display: flex;
    position:relative;
    flex-direction: column;
    border-buttom: 1px solid #f0f0f0;
`
export const GroceryCartWapper = styled.div `

    margin-top: 40px;
    padding: 8px 0; 
      
`
export const CartImage = styled.img `
    width: 24px;
`
export const GroceryText = styled.div `
    margin-top: -25px;
    margin-left: 30px;
    line-height: 22px;
    height: 22px;
    font-weight: 500;
`
export const NumItemsWarrep = styled.div `
    display: flex;
    margin-top: 30px;
    padding: 8px 0; 
    width:100%;
      
`
export const NumItems = styled.div `
    float:left;
    font-size: 18px; 
`
export const TotalPrice = styled.div `
   
   position:relative;
   font-size: 18px; 
   margin-left: auto; 
   margin-right: 190px;
   color:#B22222;
`
export const CheckoutButton = styled.button `

    margin-top:30px;
    color: #fff;
    background-color: #0a72ba;
    border: none;
    user-select: none;
    width: 100%;
    display: flex;
    height:30px;
    align-items: center;
    justify-content: center;
    outline: 0;
    text-align: center;
    font-size: 17px;
    border-radius: 40px;
    cursor: pointer;
  
`

export const Remove = styled.div `
    height:20px;
    margin-top: 30px;
    font-size:13px;
    padding: 0 7px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    outline: 0;
    text-align: center;
    cursor:pointer;
    &.remove{
        background-color: 	#DCDCDC;
    }
`
export const Temp = styled.div `
    float:right;
`
export const OnSalePrice = styled.div `
font-size: 15px;
color: #666;
margin-left:80px;
margin-top:-18px;
text-decoration: line-through;

` 
export const TextWapper = styled.div `
    
    display: flex;
    width:150px;
    height:50px;
    margin-top:20px;
  
    align-items: center;
    flex-direction: row;
`




