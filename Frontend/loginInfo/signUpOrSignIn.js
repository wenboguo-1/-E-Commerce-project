import React, { Fragment, PureComponent } from "react";
import { connect } from "react-redux";
import 'font-awesome/css/font-awesome.min.css';
import GoogleLogin from "react-google-login";
import ValidationSignIn from "./validatationForSignIn";
import axios from "axios";
import validator from 'validator'

import {
  Head,
  Text,
  Span,
  Link,
  Input,
  Form,
  Container,
  FormContainer,
  SocialContainer,
  Button,
  OverlayContainer,
  OverlayPanel,
  Overlay,
  ButtonSignIn,
  Head2
  
} from "./index.style";
class SignUp extends PureComponent {
   
  constructor(props){
    super(props)
    this.state = {
      signUp_validation:true
    }
    this.validateEmail = this.validateEmail.bind(this)
  }
  validateEmail(e){
    var value = e.target.value;
   
    if(!validator.isEmail(value)){
         this.setState({
          signUp_validation:false
         })
    }else{
      this.setState({
        signUp_validation:true
    })
  }
}
  render(){  
    return(this.props.triger) ? (
    
    <Fragment>
      <Container
        id="container"
        className={ this.props.panelActive ? "right-panel-active" : "" }>
     
        <FormContainer className="sign-up-container">
          <Form action="#" onSubmit={e => e.preventDefault()}>
            <Head>Create Account</Head>

    
            <Input placeholder="Name" ref = {(input) => {this.name = input}}/>
            <Input  placeholder="Email" ref = {(input) => {this.emailSgin = input}}  />
            <ValidationSignIn triger = {this.props.isEmailValid} textError = "Your email address is not the valid"/>
            <Input  placeholder="Password" type="password" ref = {(input) => {this.passwordSgin = input}}   />
            <ValidationSignIn triger = {this.props.isPasswordValidLength ?false : true } textError = "Your password must contain more than 8 letters or number"/>
            <Input  placeholder="Confirm your password" type="password" ref = {(input) => {this.passwordConfirm = input}}   />
            <ValidationSignIn triger = {this.props.isPasswordMatching } textError = "The passwords you have entered were not matching each other"/>
            <ValidationSignIn triger = {this.props.isInputEmpty ? false : true } textError = "Error: None of input bars can be empty"/>
            <ValidationSignIn triger = {this.props.isEmailExit} textError = "Your email has been created already"/>
            <Button  onClick = {  () => this.props.onSginUpEvent(this.name.value,this.emailSgin.value,this.passwordSgin.value,this.passwordConfirm.value)}>Sign Up</Button>
          </Form>
        </FormContainer>
        <FormContainer className="sign-in-container">
          <Form  action="#" onSubmit={e => e.preventDefault()} >
            <Head2>Sign In</Head2>
            <SocialContainer>
            <GoogleLogin 
                  clientId="1093025611093-al88pk78n85mld00b5djnaj0rrftoobu.apps.googleusercontent.com"
                  buttonText="With Gmail" 
                  onSuccess={this.props.signInResponseGoogleOnSuccess}
                  onFailure={this.props.responseGoogle}
                  cookiePolicy={'single_host_origin'} />
            </SocialContainer>
            <Span>or use your account</Span>
            <Input placeholder="Email" ref = {(input) => {this.email = input}} onChange = { (e) => this.props.validateEmail(e)}  />
            <ValidationSignIn triger = {this.props.signIn_validation} textError ="Your email address is not the valid"> </ValidationSignIn> 
            <Input type="password" placeholder="Password" ref = {(input) => {this.password = input} } />
            <ValidationSignIn triger = {this.props.isUserExist} textError ="Your either email address or password is not the correct or you have not signed up yet"> </ValidationSignIn> 
            <Link >Forgot your password?</Link>
            <ButtonSignIn onClick = { this.props.signIn_validation 
                              ?()=> this.props.onSignInClick(this.email.value,this.password.value) : null }> Sign In</ButtonSignIn>
          </Form>
        </FormContainer>
        <OverlayContainer>
       <Overlay>
            <OverlayPanel className="overlay-left">
        
              <Head>Welcome Back!</Head>
              <Text>
                Please login with your personal info
              </Text>
              <Button className="ghost" id="signIn" onClick={this.props.onSignInEvent}>
                Sign In
              </Button>
              <Button className="ghost" id="signIn" onClick={this.props.onCloseEvent}>
                Close
              </Button>
            </OverlayPanel>
            <OverlayPanel className="overlay-right">
              <Head>Hello, Friend!</Head>
              <Text>Enter your personal details and start journey with us</Text>
              <Button className="ghost" id="signUp" onClick={ this.props.onSignUp}>
                Sign Up
              </Button>
              <Button className="ghost" id="signIn" onClick={this.props.onCloseEvent}>
                Close
              </Button>
            </OverlayPanel>
          </Overlay>
        </OverlayContainer>
      </Container>
    </Fragment>
   ) : "";


  }
 
}


const mapStateToProps = (state) => {
  return {
    panelActive : state.get('panelActive'),
    signIn_validation : state.get('signInValidation').isValid,
    isUserExist:state.get('isUserExist'),
    isPasswordValidEmpty:state.get('isPasswordValidEmpty'),
    isPasswordValidLength:state.get('isPasswordValidLength'),
    isEmailExit:state.get('isEmailExit'),
    isInputEmpty:state.get('isInputEmpty'),
    isPasswordMatching :state.get('isPasswordMatching'),
    isEmailValid:state.get('isEmailValid')
  }

}

const mapDispathToProps = (dispatch) => ({
        onSignInEvent(){
            const action = {
              type: 'onSignInIsFalse'
            }
            dispatch(action)
        },
        onSignUp(){
             const action = {
                 type: 'onSignOnIsTrue'
             }
             dispatch(action)
         },
        
         
        onSignInClick(email,password){

            axios.get('https://daxiong-boot.herokuapp.com/user/login', 
              { params: { userEmail: email,userPassword: password } ,
            }).then( (res) => { 
                  
                  if(res.data !== ""){
                      localStorage.setItem('userInfo',JSON.stringify(res.data)) 
                     
                    const  action = {
                        type: 'user_exist',
                        result:res.data
                      }
                   
                      dispatch(action)
                     
                  }else{
                   const action = {
                      type:'user_not_exist'
                    }
                    dispatch(action)
                  }

                 
              })
        
           },
         responseGoogleOnSuccess(resp) {

          const email = resp.profileObj.email;
          console.log("123")
          axios.get('https://daxiong-boot.herokuapp.com/user/userInfo/' +email).then((res) => {
                console.log(res.data)
               
                if(res.data === ""){
                  window.location.reload(false)
                  action = {
                     type:'newUserCreated',
                     userInfo:res.data
                  }
                  dispatch(action)
                }else{         
                  action = {
                    type: 'emailExist'
                  }
                  dispatch(action)
                }
          })
        
           const action = {
             type: 'googleSignUp',
             response:resp
           }
         
           dispatch(action)
           
          
         },
         validateEmail(e){
            var value = e.target.value;
            var action = null;
            if(!validator.isEmail(value) && value !== "" ){
                action = {
                  type: 'not_valid'
                }
        
            }else{
              action = {
                type: 'valid'
              }
            }
            dispatch(action)
         },
         onSginUpEvent(name,email,password,passwordComfirm){
                
                 var action ={type:'none'}  
                 var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
                 const tempUserInfo = {
                    userEmail:email,
                    userName:name,
                    userPassword: password
                 }   
                 if(name === "" || email === "" || password === "" || passwordComfirm === ""){

                    action = {
                      type:'inputHasEmptyValue'
                    }
                   
                }else if(!pattern.test(email)){
                 
                   action = {
                     type:'emailIsInvalid'
                   }
                   dispatch(action)

                } else if(passwordComfirm !== password){
                    action = {
                      type:'passwordsNotMatching'
                    }

                }else if(password === '' || password === null){
                   action = {
                     type:'passwordEmptyDetected'
                   }
                 }else if(password.length < 9){
                   action = {
                     type:'passwordLengthDetected'
                   }
                 }else{
                      axios.get("https://daxiong-boot.herokuapp.com/user/userInfo/" + email).then((res) => {  
                        
                       if( res.data === ""  ){
                         axios.post("https://daxiong-boot.herokuapp.com/user/newUserInfo",tempUserInfo).then(() => { 
                        
                            axios.get("https://daxiong-boot.herokuapp.com/user/userInfo/" + email).then((res) => {
                                window.location.reload(false)
                                action = {
                                   type:'newUserCreated',
                                   userInfo:res.data
                                }
                                dispatch(action)
                            
                            }).catch(()=>{
                              alert('ops')
                            })
                          }
                        ).catch(()=>{
                            alert("ops, there is something wrong")
                        })

                      
                        }else{
                         
                          action = {
                            type: 'emailExist'
                          }
                          dispatch(action)
                        }
                    })
               }

              dispatch(action)
         },
         signInResponseGoogleOnSuccess(resp){
           
            console.log(resp)
            const userEmail = resp.profileObj.email;
            var userId = 0;
            axios.get('https://daxiong-boot.herokuapp.com/user/userInfo/' + userEmail ).then ((res) => {
                  if(res.data !== ""){
                    localStorage.setItem('userInfo',JSON.stringify(res.data))
                    const action = {                      
                      type: 'user_exist',
                      result: res.data,
                    }
                    dispatch(action)
                  }else{
                    const action = {
                      type:'user_not_exist'
                    }
                    dispatch(action)
                  
                  }
                
            })

           
            
         },
         onCloseEvent(){
          const action = {
            type: "close_login"
          }

          dispatch(action)
       }
  
})

 export default connect(mapStateToProps,mapDispathToProps)(SignUp);