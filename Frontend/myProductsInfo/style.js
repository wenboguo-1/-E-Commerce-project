import styled from "styled-components"
import { AiFillEdit } from "react-icons/ai";
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
export const MyProductWapper = styled.div `
  
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
    margin-top:25px;
    flex-direction: column;
`
export const ItemName = styled.div `
   margin-left: 30px;
   height:50px;
   box-sizing: border-box; 

`
export const ItemPrice = styled.div `
    
    line-height: 22px;
    margin-top: 10px;
    margin-left:30px;
    color:	#B22222;

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

export const ChangeProductContainer = styled.div `
        
    heigth:100px;
    width:300px;
    box-sizing: border-box;
    display: flex;
    margin-left: auto;
    margin-top: 50px;
    float:right;
    margin-right:20px;
`

export const EditButton = styled(AiFillEdit) `
    cursor:pointer;
    margin-left: 115px;
`

export const OnSale = styled.div `
    height:20px;
    margin-left:20px;
    font-size:11px;
    padding: 0 7px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    outline: 0;
    text-align: center;
    cursor:pointer;
    background:	#D3D3D3
`



export const RemoveMyProduct= styled.div `
    height:20px;
    margin-left:20px;
    margin-top:-2px;
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

export const ConfirmDeletionBoard = styled.div `
    align-items: center;
    height:200px;
    width: 150px;
    display:flex;
    position:absolute;
    border: 1px solid #f0f0f0;

`

export const OnSalePrice = styled.div `
font-size: 15px;
color: #666;
margin-left:100px;
margin-top:-18px;
text-decoration: line-through;

`


