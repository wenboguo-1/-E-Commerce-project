import styled from "styled-components";
export const ListWarpper = styled.div`  

position: relative; 
height: 120px;
border-bottom: 1px solid #f0f0f0;
`;
export const Text = styled.div`
 margin-top:10px;
margin-left: 70px;
font-weight: bold;
font-size: 14px;
`;

export const CategoryWarpper = styled.div `
   margin-top:15px;
   display: flex;
   flex-direction: column;
   align-items: center;
   width: 60px;
   margin-right:150px;
   flex-shrink: 0;
   cursor: pointer;

`
export const NavBar = styled.div `
    display: flex;
    flex-direction: row;
    position: relative;
    height: 60px;
    width: 1200px;
    margin-left: 60px;
      
`
export const CategoryImage = styled.img`
  
    height: 37px;
    width:37px;
    cursor:pointer;
  
`;
export const CategoryName = styled.div `
    margin-top: 8px;
    font-size: 18px;
    font-weight: 100;
 
`
export const UserMenu = styled.div `
display: flex;
flex-direction: column;
align-items: center;
position:absolute;
top:70px;
left:940px;
width:140px;
padding:0 20px;
height:200px;
border-radius:14px;
background: rgba(100,100,100,.20);
box-shadow: 0 0 8px rgba(0,0,0,.8);
`
export const Text1 = styled.a `

margin-top:30px;
font-weight: bold;
font-size: 14px;
cursor:pointer;
`;