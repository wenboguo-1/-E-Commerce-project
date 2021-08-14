import styled from "styled-components";
import logoPic from '../../static/LifeLogo1.png'
import { RiShoppingCartFill } from "react-icons/ri";

export const HeadWraper = styled.div `
position: relative;
height: 80px;
border-bottom: 1px solid #f0f0f0;
` 
export const Logo = styled.a ` 
   position: absolute;
   top: 0;
   left 0;
   display: block;
   width:100px;
   margin-left: 50px;
   height: 80px;
   background: url(${logoPic});
   background-size: 100px 80px;
 

`
export const Nav = styled.div `
    position:relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    
`

export const SearchBar = styled.input.attrs(
    {
       placeholder: 'Search for product you want '
    }
 ) `
    width: 500px;
    &.focused {
       width: 600px;
     }
    height: 38px;
    padding: 0 35px 0 20px;
    margin-top: 2px;
    margin-left: 100px;
    border: none;
    outline: none;
    box-sizing: border-box;
    border-radius: 19px;
    background: #eee;
    color: #666     
 `;

  export const NavItem = styled.div`
    line-height: 38px;    
    padding: 0 15px;
    font-size: 18px;
    margin-top: 23px;
    border-radius:16px;
    border: 1px solid white;
    box-shadow: 0 0 8px rgba(0,0,0,.8);
    cursor: pointer;
    &.right {
        float: right;
        color: black;
    }
  
  `;
  export const Addition = styled.div `
   position: absolute;
   display: flex;
   align-items: center;
   right: 3%;
   top: 0;
   height: 56px;
  
 

`;
export const Button1 = styled.div `
 
   line-height: 38px;
   padding: 0 15px;
   border-radius:16px;
   border: 1px solid #ec6149;
   margin-left: 20px;
   margin-top:23px;
   font-size: 18px;
   cursor:pointer;
   &.reg {
      float: right;
      color: #ec6149;
   }

`;

export const SearchWrapper = styled.div `
       position: absolute;
       top:20px;
       left:100px;

    

`;


export const SearchIconWarrper = styled.span`
   cursor: pointer;
   position: relative;
   float: right; 
   left:-30px;
   top:13px;


`;
export const CartWapper = styled.div `
  
    cursor:pointer;
    position relative;
    right: -20px;
    top: 15px;
     
    &.right {
       
       float: right;
       color: black;
   }
`
export const Icon = styled(RiShoppingCartFill) `
   padding:5px;
   font-size:30px;
   color: black;

`

export const CartCount = styled.span `
   position: absolute;
   bottom: 20px;
   right -5px;
   padding: 8px 9px;
   border-radius: 50px;
   background: red;
   color: #ffffff;
   font-size:7px;
   font-weight:1500;
`
export const UserMenu = styled.div `
      display: flex;
      flex-direction: column;
      align-items: center;
      position:absolute;
      top:69px;
      right:14%;
      width:140px;
      padding:0 20px;
      height:240px;
      border-radius:14px;
      background: white;
      box-shadow: 0 0 8px rgba(0,0,0,.8);
`
export const Text = styled.div`

      margin-top:25px;
      font-weight: bold;
      font-size: 14px;
      color:black;
      cursor:pointer;
      &.clicked {
         color:	#00008B; 

      }
`;
export const Text1 = styled.a `

      margin-top:25px;
      font-weight: bold;
      font-size: 14px;
      color:black;
      cursor:pointer;
      &.clicked {
         color:	#00008B; 

      }
`;