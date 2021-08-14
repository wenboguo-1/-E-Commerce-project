import styled from "styled-components";

export const Wapper = styled.div `

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
export const InfoWapper = styled.div `
    heigth:100px;
    width:300px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
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
export const OnSalePrice = styled.div `
font-size: 15px;
color: #666;
margin-left:80px;
margin-top:-18px;
text-decoration: line-through;

` 
export const ItemAdding = styled.div `
   
border-radius: 50%;
    background-color: #0a72ba;
    cursor: pointer;
&.itemIsAdded {
    background-color:#D3D3D3;
    border-radius: 50%;
    
}      


width: 40px;
height: 40px;
border-radius: 50%;

font-size:30px;
color: white;
text-align: center;

`
export const NumOfItemsWarpper = styled.div `
    heigth:100px;
    
    box-sizing: border-box;
    display: flex;
    margin-right 130px;
    margin-top: -80px;
    float:right;
    
`