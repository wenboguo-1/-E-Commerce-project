import { connect } from "react-redux";
import React, { Component } from "react";
import {ProductInfoWarpper,ProductImage,ChooseImage
  ,ProductInfoBody,ProductName,Text,ProductPrice, 
   ProductUnit, ProductDiscription,BackButton, SubmitButton, BackGround,Type} from './style'
import axios from "axios";
import CategoriesMenu from "./typeMenu";
import ProductPriceValidation from "../newProduct/validationInfo/productPriceValid";
class UpdateProduct extends Component {
      constructor(props){
         super(props);

         this.state = {
        
            typeList:[{
                  type:'Green'
             },{
               type:'Meat'
             },{
               type:'Seafood'
             },{
                type:'Fruit'
             },{
                type:'Snacks'
             }

            ],
            image: "https://images01.sayweeecdn.com/2021-01/kp5LxKX2RfSJKYW7-Ch0eg-square-160.jpg" , 
            fileBase64: '',
            isInputPriceValid: true,
            productPrice: '',
            productName: '',
            productUnit: '',
            productDescription:'',
            productId:0,
            allInputValid:false

         };
        this.webcamRef = React.createRef();
        this.handleClick = this.handleClick.bind(this); 
        this.onHandleChange = this.onHandleChange.bind(this)
        this.onBlurChange = this.onBlurChange.bind(this)
        this.onProductNameBlur = this.onProductNameBlur.bind(this)
        this.onProductUnitBlur = this.onProductUnitBlur.bind(this)
        this.convertToBase64 = this.convertToBase64.bind(this)
        this.getStateValues = this.getStateValues(this)
        this.onProductDiscriptionBlur = this.onProductDiscriptionBlur.bind(this)
        this.validateAllInfo = this.validateAllInfo.bind(this)
        
       
      }
  
         isAllInputValid(state){
          if(state.fileBase64 !== '' && state.productDescription !== '' && state.productPrice !== ''
             && state.productName !== '' && state.productUnit !== '' && state.isInputPriceValid){
               return true
             }
             return false;
        }
        onClickEvent(state){
   
          const productInfo = state
          var tempMyProductList = JSON.parse(localStorage.getItem('myProducts')) 
          const index = parseFloat(localStorage.getItem('currentIndex'))
          tempMyProductList[index]['productImage'] = this.state.fileBase64
          tempMyProductList[index]['productUnit'] = this.state.productUnit
          tempMyProductList[index]['productDescription']= this.state.productDescription
          tempMyProductList[index]['productPrice'] = this.state.productPrice
          tempMyProductList[index]['type'] = this.props.typeChoosen
          axios.post ('http://localhost:8080/user/updateProduct',productInfo).then(() =>{
            
          }).catch(( ) => {
            alert("Ops, there is something wrong")
          })
       }


      validateAllInfo(jsonObj){
   
         if(jsonObj.productPrice === "" || jsonObj.productDescription === '' || jsonObj.productImage==="" || jsonObj.productName==="" || jsonObj.productUnit ===""
          || jsonObj.type === "Type"){

            return false;
          }
  
          return true;
      }
  
      onProductDiscriptionBlur = event => {
        this.setState({productDescription:event.target.value})
        const tempState = this.state
        tempState['productDescription'] = event.target.value
          if(this.isAllInputValid(tempState)){
            this.setState({
              allInputValid:true
            })
        }else{
          this.setState({
            allInputValid:false
          })
        }
      }
        
     handleClick = event => {
            this.webcamRef.current.click();
      };
    onHandleChange = async event => {
        const fileUploaded = event.target.files[0];
        const base64 = await this.convertToBase64(fileUploaded);
        const tempState = this.state;
        tempState['fileBase64'] = base64
        this.setState( {
            image: URL.createObjectURL(fileUploaded),
            fileBase64: base64
        });
        if(this.isAllInputValid(tempState)){
          this.setState({
            allInputValid:true
          })
       }else{
        this.setState({
          allInputValid:false
        })
      }
      };
    
    getStateValues(){

      const stateValue = {
          
           productImage: this.state.fileBase64,
           productName : this.state.productName,
           productPrice : this.state.productPrice,
           productDescription : this.state.productPrice,
           productUnit :this.state.productUnit,
           userId : 1000
      }
      return stateValue
    }
    convertToBase64 = (file)=>{
      return new Promise((resolve,reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = (() => {
               resolve(fileReader.result)
            });
            fileReader.onerror = (() => {
               reject(fileReader.error);
            });
         
      });
    }
    
    onBlurChange = event => {
        
        const input = event.target.value;
        const tempState = this.state
        console.log(parseFloat(input))
        if(input === '' || !parseFloat(input) ){
              this.setState({isInputPriceValid: false})
              tempState['isInputPriceValid'] = false;
        }else{
          this.setState({isInputPriceValid: true,
                         productPrice:input})
          tempState['isInputPriceValid'] = true;
          tempState['productPrice'] = input;
        }
       
        if(this.isAllInputValid(tempState)){
          this.setState({
            allInputValid:true
          })
       }else{
        this.setState({
          allInputValid:false
        })
      }
       
    }
    onProductNameBlur = event => {
        
        const tempState = this.state
        tempState['productName'] = event.target.value
        if(this.isAllInputValid(tempState)){
          this.setState({
            allInputValid:true
          })
       }
    }
    onProductUnitBlur = event => {
         const tempState = this.state
         tempState['productUnit'] = event.target.value
         this.setState({
           productUnit: event.target.value
         })
         if(this.isAllInputValid(tempState)){
          this.setState({
            allInputValid:true
          })
       }else{
        this.setState({
          allInputValid:false
        })
      }
    }
    render(){
      
        return(
               
             <BackGround> 
              <ProductInfoWarpper>
                  <Text>Update Your Item Information Here </Text>
                  <ProductImage src =  {this.state.image} 
                                onClick = {this.handleClick} /> 
                  <ChooseImage type = "file" ref = {this.webcamRef} onChange = {this.onHandleChange} style={{display:'none'}} />  
                  <ProductInfoBody>
                  <Type onMouseEnter = {this.props.onShouldDisplayTypeMenu} 
                        onMouseLeave = {this.props.onShouldDisplayTypeMenu} >
                        {this.props.typeChoosen} </Type>
                      <ProductName onBlur = {this.onProductNameBlur} defaultValue = {this.state.productName}/> 
                      <ProductPrice type = "number" className = { this.state.isInputPriceValid ? "": "onBlur" }
                                   onBlur ={this.onBlurChange} defaultValue = {this.state.productPrice} >
                                   </ProductPrice>  
                  
                      <ProductUnit onBlur = {this.onProductUnitBlur} defaultValue = {this.state.productUnit}/>
                      <ProductDiscription  onBlur = {this.onProductDiscriptionBlur} defaultValue = {this.state.productDescription}/>
                      <BackButton href = '/'> Back </BackButton>
                      <a href = {this.state.allInputValid ? "../myProductsInfo/myProducts" :  null}  >
                       <SubmitButton className = {this.state.allInputValid ? "valid" : "notValid"}
                              onClick = { this.state.allInputValid ? () =>  this.onClickEvent({   
                              productImage: this.state.fileBase64,
                              productName : this.state.productName,
                              productPrice : this.state.productPrice,
                              productDescription : this.state.productDescription,
                              productUnit :this.state.productUnit,
                              productId : this.state.productId,
                              type: this.props.typeChoosen                       
                       }): null }> Update  </SubmitButton>
                     </a>
                  </ProductInfoBody>
                  <CategoriesMenu 
                    triger = {this.props.shouldDisplayTypeMenu} typeList = { this.state.typeList}></CategoriesMenu>
              </ProductInfoWarpper>
             
                  
       
             </BackGround>
            
        )
    }
   componentDidMount(){
    const  temp =JSON.parse(localStorage.getItem('updateProduct')) 
     if(temp !== null){
          this.setState({
            image: temp.productImage, 
            fileBase64: temp.productImage,
            isInputPriceValid: true,
            productPrice: temp.productPrice,
            productName: temp.productName,
            productUnit: temp.productUnit,
            productDescription: temp.productDescription,
            productId:temp.productId
          })
          this.props.setOnType(temp.type)
     }
     
   }
}

const mapStateToProps = (state) => {
  return {
       typeChoosen:state.get('typeChoosen'),
       shouldDisplayTypeMenu: state.get('shouldDisplayTypeMenu')
  }

}
const mapDispathToProps = (dispatch) => {
  return {
       onShouldDisplayTypeMenu(){
         const action = {
           type: 'onShouldDisplayTypeMenu'
         }
         dispatch(action)
      },
      setOnType(t){
        const action ={
          type:'set_type',
          productType:t
        }
        dispatch(action)
      }
      
  }
}
export default connect(mapStateToProps,mapDispathToProps) (UpdateProduct);