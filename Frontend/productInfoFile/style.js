import styled from "styled-components";
import { MdFavoriteBorder } from "react-icons/md";
export const ProductInformationWapper = styled.div  `
display: flex;
justify-content: space-between; 

`
export const ProductContainer = styled.div `
    margin: 0 auto;
    background-color: #fff;
    padding-bottom: 40px;
    position: relative; 
    margin-left -20px; 
`
export const TextInforWapper = styled.div `

     margin: 0;
    padding: 0;
    color: rgba(0,0,0,.85);
    font-variant: tabular-nums;
    line-height: 1.5715;
    list-style: none;
    font-feature-settings: "tnum";
    color: rgba(0,0,0,.45);
    font-size: 16px;  
`
export const ProductImageWapper = styled.div `
    margin-top:20px;
    display: flex;
    flex: 1; 

`
export const ProductImage = styled.img `
    cursor:pointer;
    width: 432px;
    height: 432px;
    border-radius: 10px;
    object-fit: cover;
`
export const Text = styled.div `

    font-weight: 500;
    font-size: 25px;
    line-height: 19px;
    margin-left:20px;
    color: #333;
    cursor: pointer;
`
export const ImageListWapper = styled.div `
    margin-left:50px;
    width: 90px;
  

`
export const ImageContaniner = styled.div `
   margin-top:20px;
   display: block;  
   border-radius: 12px;
   &.onMouseEnter {
    border: 1px solid #00008B
}
`
export const Image = styled.div`   
    width: 62px;
    height: 64px;
    margin-left: 12px;
    margin-bottom: 3px;
    box-sizing: border-box;
    
    cursor: pointer;
   

`
export const Img = styled.img `
width: 62px;
object-fit: cover;
border-radius: 4px;

`

export const ProductTextInfoWapper = styled.div `

    display: flex;
    flex-direction: column;
    margin-right:20px;
    justify-content: flex-start;
    width: 604px;
    margin-top:50px;
`
export const ProductName = styled.div `
        font-weight: 1200;
        font-size: 24px;
        line-height: 33px;
        color: #333;
`
export const ProductSold = styled.div `
    margin-top:30px;
    line-height: 33px;
    color:#696969;

`

export const ProductPrice = styled.div `

    line-height: 33px;
    font-weight: 1200;
    font-size: 35px;
    color:	#B22222;

`
export const NavContainer  = styled.div `
    display: flex;
    margin-top: 60px;
    height: 72px;

    align-items: center;
`
export const FavoriteContainer = styled.div `

    font-weight: 500;
    color: #0a72ba;
   
    cursor: pointer;
`
export const Favorite = styled.span `
    user-select: none;
    margin-left: 12px;
    font-size:30px;
`
export const Icon = styled(MdFavoriteBorder) `
 margin-top:2px; 
 font-size:23px;
`
export const Button = styled.span `
    width: 340px;
    font-size: 20px;
    justify-content: space-around;
    height:53px;
    background: #0a72ba;
    border-radius: 100px;
    font-weight: 600;
    line-height: 33px;
    color: #fff;
    display: flex;
    align-items: center;
    margin-left: 30px;
    cursor:pointer;
    &.isInCart{
        background: #D3D3D3;
    }
`
export const TextWapper = styled.div `

    display: flex;
    align-items: center;
    margin-top:30px;
    flex-direction: row;
    
`
export const ProductUnit = styled.div `

    line-height: 33px;
    font-weight: 1200;
    font-size: 35px;
    margin-left:120px;

`