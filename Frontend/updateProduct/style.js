import styled from "styled-components";

export const BackGround = styled.div `

   position: absolute;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   background: #E0E0E0;
`

export const Text = styled.div`
     font-size: 20px;
     margin-left: 140px;
     margin-top: 50px;
`

export const ProductInfoWarpper = styled.div `


height: 700px;
width: 600px; /* Magic here */
margin: 3% 30% auto;
background: #E0FFFF;
border: 1px solid #F0F0F0;
`

export const ProductImage = styled.img `
  margin-top: 50px;
  margin-left: 140px;
  height: 200px;
  width: 300px;
  cursor:pointer;
  border: 2px solid black;
`;
 
export const ChooseImage = styled.input`
    
`;

export const ProductInfoBody = styled.div `
        position: absolute;
        height: 400px;
        width:500px;
        
        margin-left: 53px;
`

export const ProductName = styled.textarea.attrs(

   {
      placeholder: 'Enter product name'

   }
)`
  margin-top:15px;
  width: 480px;
  height: 40px;
  border-radius: 4px;
  position:absolute;
  background-color: rgba(255,255,255,0.1);
  textAlignVertical: top;
  resize: none;

`
export const ProductPrice = styled.input.attrs(

   {
      placeholder: 'Price'

   }
) `
      margin-top:85px;    
      width: 150px;
      height: 30px;
      border-radius: 4px;
      position:absolute;
      background-color: rgba(255,255,255,0.3);
      border: 1px solid #8F8F8F;
      &.onBlur{
         border: 1px solid red;
      }
      

`
export const ProductUnit = styled.input.attrs(

   {
      placeholder: 'Unit'

   }
) `
      margin-top:85px;  
      margin-left: 190px;  
      width: 150px;
      height: 30px;
      border-radius: 4px;
      position:absolute;
      border: 1px solid #8F8F8F;
      background-color: rgba(255,255,255,0.3);
   
`
export const ProductDiscription = styled.textarea.attrs(

   {
      placeholder: 'Enter Product Descroption'

   }
)`
  margin-top:140px;
  width: 480px;
  height: 100px;
  border-radius: 4px;
  position:absolute;
  background-color: rgba(250,250,250,0.3);
  textAlignVertical: top;
  resize: none;
`;

export const Type = styled.div `
   margin-top:92px;
   width: 70px;
   height: 20px;
   margin-left:390px;
   border-radius: 4px;
   position:absolute;
   background-color: rgba(250,250,250,0.3);
   border: 1px solid #8F8F8F;
   font-size: 11px;
   text-align: center;
   vertical-align: middle;
   line-height: 20px;
   cursor:pointer;
`

export const BackButton = styled.a `
      border-radius: 40px;
      border: 1px solid #31b4a8;
      background: #31b4a8;
      color: #fff;
      font-size: 12px;
      font-weight: bold;
      padding: 12px 45px;
      margin-top: 280px;
      cursor:pointer;
      text-decoration: none;
`;

export const SubmitButton = styled.button `

      border-radius: 40px;
      border: 1px solid #31b4a8;
      color: #fff;
      font-size: 12px;
      font-weight: bold;
      padding: 12px 45px;
      margin-top: 280px;
      margin-left: 230px;
      &.notValid{
         background-color:#DCDCDC;
      }
      &.valid{
         background: #31b4a8;
         cursor:pointer
      }
     
`
export const ProductPriceValid = styled.div `
    font-size: 13px;
    margin-top:120px;
    color: red;
`
export const TypeMenu = styled.div `
      display: flex;
      flex-direction: column;
      align-items: center;
      position:absolute;
      margin-top:11px;
      margin-left:440px;
      width:45px;
      padding:0 20px;
      height:145px;
      border-radius:14px;
      background:  #E0FFFF;
      box-shadow: 0 0 8px rgba(0,0,0,.8);
`

export const TypeText = styled.a `
   font-size: 11px;
   cursor: pointer;
   margin-top: 15px;
   color:red；
   &.mouseOnType{
      color:red；
   }

`