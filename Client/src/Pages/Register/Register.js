import { useState,useEffect } from "react";
import {Link,useNavigate} from "react-router-dom";
import { registerClient, setRegister } from "../../Redux/Slice/clientSlice";
import { useDispatch, useSelector } from "react-redux"
import { colors } from "@mui/material";


const Register = ({  messageLogin ,props}) => {
    let dispatch = useDispatch()
    let register = useSelector(state => state.client.register)
    let navigate = useNavigate()

    const validData = (data) => {
        let checker = true
        let userPattern = /[a-zA-Z\_](\w)*/
        let emailPattern = /[a-zA-Z\_](\w)+@(\w)+(([.])(\w)+)+/
        let namePattern = /([a-zA-Z])+/
        let phonePattern = /(\d)+/
    
        if (data.FullName.length == 0) {
            alert("Vui lòng điền họ và tên của bạn")
            checker = false
        }
    
        else if (data.FullName.match(userPattern) == null) {
            alert("Họ và tên của bạn không hợp lệ")
            checker = false
        }

        else if (data.PhoneNumber.match(phonePattern) == null) {
            alert("Số điện thoại không hợp lệ")
            checker = false
        }
    
        else if (data.PhoneNumber.length != 10) {
            alert("Số điện thoại phải có 10 số")
            checker = false
        }

        else if (data.UserName.length == 0) {
            alert("Vui lòng điền tên đăng nhập của bạn")
            checker = false
        }
    
        else if (data.UserName.match(userPattern) == null) {
            alert("Tên đăng nhập phải bắt đầu bằng kí tự")
            checker = false
        }
    
        else if (data.UserName.length < 7) {
            alert("Độ dài tối thiểu của tên đăng nhập là 7")
            checker = false
        }
    
        else if (data.Password.length == 0) {
            alert("Vui lòng điền mật khẩu của bạn")
            checker = false
        }

        else if(data.Confirm.length == 0) {
            alert("Vui lòng xác nhận lại mật khẩu")
            checker = false
        }
    
        return checker
    
    }

    const handelSubmit = async(event) => {
        event.preventDefault()
        let FullName = event.target.fulname.value
        let UserName = event.target.username.value
        let Password = event.target.password.value
        let PhoneNumber = event.target.phone.value
        let Confirm = event.target.confirm.value
        let checker = validData({FullName:FullName,UserName: UserName, Password: Password, PhoneNumber: PhoneNumber , Confirm: Confirm})
        if (checker) {
           await dispatch(registerClient({FullName:FullName,UserName: UserName, Password: Password, PhoneNumber: PhoneNumber , Confirm: Confirm}))
        }
    }

    useEffect(() => {
        if (register != null) {
            dispatch(setRegister(null))
            navigate('/')
        }
    })

  return (
    <div >
      <div className="container-Login100">
        <div className="wrap-Login100">
          <div className="Login100-pic js-tilt" data-tilt>
          <img src="https://media.timeout.com/images/105555383/750/562/image.jpg" style={{border: "0", borderRadius: "0", height: "100%"}} alt="Submit" />
          </div>

          <form
            name="form"
            onSubmit={handelSubmit}
            className="Login100-form"
          >
            <span className="Login100-form-title">Đăng ký tài khoản ngay thôi !</span>
            {messageLogin && (
              <div className="error-message">{messageLogin}</div>
            )}
            <div
              className="wrap-input100 validate-input"
              data-validate="Username is required"
            >
            <p>Họ và tên</p>
              <input
                className="input100"
                type="text"
                id="fullname" name="fulname"
                placeholder="Fullname"
              />
              <span className="focus-input100"></span>
              <span className="symbol-input100">
                <i className="fa fa-user" aria-hidden="true"></i>
              </span>
            </div>

            <div
            >
            <p>Số điện thoại</p>
              <input
                className="input100"
                type="text"
                id="phone" name="phone"
                placeholder="Phonenumber"
              />
              <span className="focus-input100"></span>
              <span className="symbol-input100">
                <i className="fa fa-lock" aria-hidden="true"></i>
              </span>
            </div>

            <div
            >
            <p>Tên đăng nhập</p>
              <input
                className="input100"
                type="text"
                id="userName" name="username"
                placeholder="Username"
              />
              <span className="focus-input100"></span>
              <span className="symbol-input100">
                <i className="fa fa-lock" aria-hidden="true"></i>
              </span>
            </div>
            <div
            >
            <p>Mật khẩu</p>
              <input
                className="input100"
                id="passWord" type="password" name="password"
                placeholder="Password"
              />
              <span className="focus-input100"></span>
              <span className="symbol-input100">
                <i className="fa fa-lock" aria-hidden="true"></i>
              </span>
            </div>
            <div
            >
            <p>Xác nhận mật khẩu</p>
              <input
                className="input100"
                id="confirm" type="password" name="confirm"
                placeholder="Confirm"
              />
              <span className="focus-input100"></span>
              <span className="symbol-input100">
                <i className="fa fa-lock" aria-hidden="true"></i>
              </span>
            </div>
            {/* <Link to ="/"> */}
            <div className="container-Login100-form-btn">
            
              <button type="submit" className="Login100-form-btn">Đăng kí</button>
              
            </div>
            <p style={{marginTop: "30px", display:"flex", justifyContent: "center"}}> Bạn đã có tài khoản?  <span className="textLogin"><Link to='/Login'>  Đăng nhập</Link> </span> </p> 
            {/* </Link> */}
            {/* <div className="container-Login100-form-btn">
              <Link to='../Register' className="Login100-form-btn" >Đăng Kí</Link>
            </div> */}
          </form>
        </div>
      </div>
      <style jsx>
                {`
                    /*//////////////////////////////////////////////////////////////////
                    [ FONT ]*/
                    
                   
                    * {
                      margin: 0px;
                      padding: 0px;
                      box-sizing: border-box;
                    }
                    
                    body,
                    html {
                      height: 100%;
                      font-family: Poppins-Regular, sans-serif;
                    }
                    
                    /*---------------------------------------------*/
                    a {
                      font-family: Poppins-Regular;
                      font-size: 14px;
                      line-height: 1.7;
                      color: #666666;
                      margin: 0px;
                      transition: all 0.4s;
                      -webkit-transition: all 0.4s;
                      -o-transition: all 0.4s;
                      -moz-transition: all 0.4s;
                    }
                    
                    a:focus {
                      outline: none !important;
                    }
                    
                    a:hover {
                      text-decoration: none;
                      color: #57b846;
                    }
                    
                    /*---------------------------------------------*/
                    h1,
                    h2,
                    h3,
                    h4,
                    h5,
                    h6 {
                      margin: 0px;
                    }
                    
                    p {
                      font-family: Poppins-Regular;
                      font-size: 14px;
                      line-height: 1.7;
                      color: #666666;
                      margin: 0px;
                    }
                    
                    ul,
                    li {
                      margin: 0px;
                      list-style-type: none;
                    }
                    
                    /*---------------------------------------------*/
                    input {
                      outline: none;
                      border: none;
                    }
                    
                    textarea {
                      outline: none;
                      border: none;
                    }
                    
                    textarea:focus,
                    input:focus {
                      border-color: transparent !important;
                    }
                    
                    input:focus::-webkit-input-placeholder {
                      color: transparent;
                    }
                    input:focus:-moz-placeholder {
                      color: transparent;
                    }
                    input:focus::-moz-placeholder {
                      color: transparent;
                    }
                    input:focus:-ms-input-placeholder {
                      color: transparent;
                    }
                    
                    textarea:focus::-webkit-input-placeholder {
                      color: transparent;
                    }
                    textarea:focus:-moz-placeholder {
                      color: transparent;
                    }
                    textarea:focus::-moz-placeholder {
                      color: transparent;
                    }
                    textarea:focus:-ms-input-placeholder {
                      color: transparent;
                    }
                    
                    input::-webkit-input-placeholder {
                      color: #999999;
                    }
                    input:-moz-placeholder {
                      color: #999999;
                    }
                    input::-moz-placeholder {
                      color: #999999;
                    }
                    input:-ms-input-placeholder {
                      color: #999999;
                    }
                    
                    textarea::-webkit-input-placeholder {
                      color: #999999;
                    }
                    textarea:-moz-placeholder {
                      color: #999999;
                    }
                    textarea::-moz-placeholder {
                      color: #999999;
                    }
                    textarea:-ms-input-placeholder {
                      color: #999999;
                    }
                    
                    /*---------------------------------------------*/
                    button {
                      outline: none !important;
                      border: none;
                      background: transparent;
                    }
                    
                    button:hover {
                      cursor: pointer;
                    }
                    
                    iframe {
                      border: none !important;
                    }
                    
                    /*//////////////////////////////////////////////////////////////////
                      [ Utility ]*/
                    .txt1 {
                      font-family: Poppins-Regular;
                      font-size: 13px;
                      line-height: 1.5;
                      color: #999999;
                    }
                    
                    .txt2 {
                      font-family: Poppins-Regular;
                      font-size: 13px;
                      line-height: 1.5;
                      color: #666666;
                    }
                    
                    /*//////////////////////////////////////////////////////////////////
                      [ Login ]*/
                    
                    .limiter {
                      width: 100%;
                      margin: 0 auto;
                    }
                    
                    .container-Login100 {
                      width: 100%;
                      min-height: 100vh;
                      display: -webkit-box;
                      display: -webkit-flex;
                      display: -moz-box;
                      display: -ms-flexbox;
                      display: flex;
                      flex-wrap: wrap;
                      justify-content: center;
                      align-items: center;
                      padding: 15px;
                      background: #f4f1f7;
                      /* background: -webkit-linear-gradient(-135deg, #c850c0, #4158d0);
                      background: -o-linear-gradient(-135deg, #c850c0, #4158d0);
                      background: -moz-linear-gradient(-135deg, #c850c0, #4158d0);
                      background: linear-gradient(-135deg, #c850c0, #4158d0); */
                    }
                    
                    .wrap-Login100 {
                      width: 960px;
                      background: #fff;
                      border-radius: 10px;
                      overflow: hidden;
                    
                      display: -webkit-box;
                      display: -webkit-flex;
                      display: -moz-box;
                      display: -ms-flexbox;
                      display: flex;
                      flex-wrap: wrap;
                      justify-content: space-between;
                      padding: 120px 130px 160px 95px;
                    }
                    
                    /*------------------------------------------------------------------
                      [  ]*/
                    .Login100-pic {
                      width: 316px;
                    }
                    
                    .Login100-pic img {
                      max-width: 100%;
                    }
                    
                    /*------------------------------------------------------------------
                      [  ]*/
                    .Login100-form {
                      width: 290px;
                    }
                    
                    .Login100-form-title {
                      
                      font-size: 29px;
                      color: #333333;
                      line-height: 1.2;
                      text-align: center;
                      font-weight: bold;
                      width: 100%;
                      display: block;
                      padding-bottom: 50px;
                    }
                    
                    /*---------------------------------------------*/
                    .wrap-input100 {
                      position: relative;
                      width: 100%;
                      z-index: 1;
                      margin-bottom: 10px;
                    }
                    
                    .textLogin {
                      color: blue;
                    }

                    .input100 {
                      font-family: Poppins-Medium;
                      font-size: 15px;
                      line-height: 1.5;
                      color: #666666;
                    
                      display: block;
                      width: 100%;
                      background: #e6e6e6;
                      height: 50px;
                      border-radius: 25px;
                      padding: 0 30px 0 68px;
                    }
                    
                    /*------------------------------------------------------------------
                      [ Focus ]*/
                    .focus-input100 {
                      display: block;
                      position: absolute;
                      border-radius: 25px;
                      bottom: 0;
                      left: 0;
                      z-index: -1;
                      width: 100%;
                      height: 100%;
                      box-shadow: 0px 0px 0px 0px;
                      color: rgba(87, 184, 70, 0.8);
                    }
                    
                    .input100:focus + .focus-input100 {
                      -webkit-animation: anim-shadow 0.5s ease-in-out forwards;
                      animation: anim-shadow 0.5s ease-in-out forwards;
                    }
                    
                    @-webkit-keyframes anim-shadow {
                      to {
                        box-shadow: 0px 0px 70px 25px;
                        opacity: 0;
                      }
                    }
                    
                    @keyframes anim-shadow {
                      to {
                        box-shadow: 0px 0px 70px 25px;
                        opacity: 0;
                      }
                    }
                    
                    .symbol-input100 {
                      font-size: 15px;
                    
                      display: -webkit-box;
                      display: -webkit-flex;
                      display: -moz-box;
                      display: -ms-flexbox;
                      display: flex;
                      align-items: center;
                      position: absolute;
                      border-radius: 25px;
                      bottom: 0;
                      left: 0;
                      width: 100%;
                      height: 100%;
                      padding-left: 35px;
                      pointer-events: none;
                      color: #666666;
                    
                      -webkit-transition: all 0.4s;
                      -o-transition: all 0.4s;
                      -moz-transition: all 0.4s;
                      transition: all 0.4s;
                    }
                    
                    .input100:focus + .focus-input100 + .symbol-input100 {
                      color: #57b846;
                      padding-left: 28px;
                    }
                    
                    /*------------------------------------------------------------------
                      [ Button ]*/
                    .container-Login100-form-btn {
                      width: 100%;
                      
                      display: -webkit-box;
                      display: -webkit-flex;
                      display: -moz-box;
                      display: -ms-flexbox;
                      display: flex;
                      flex-wrap: wrap;
                    
                      justify-content: center;
                      padding-top: 20px;
                    }
                    
                    .Login100-form-btn {
                      font-weight: bold;
                      font-size: 15px;
                      line-height: 1.5;
                      color: #fff;
                      text-transform: uppercase;
                    
                      width: 100%;
                      height: 50px;
                      border-radius: 25px;
                      background: #57b846;
                      display: -webkit-box;
                      display: -webkit-flex;
                      display: -moz-box;
                      display: -ms-flexbox;
                      display: flex;
                      justify-content: center;
                      align-items: center;
                      padding: 0 25px;
                    
                      -webkit-transition: all 0.4s;
                      -o-transition: all 0.4s;
                      -moz-transition: all 0.4s;
                      transition: all 0.4s;
                    }
                    
                    .Login100-form-btn:hover {
                      background: #333333;
                    }
                    
                    /*------------------------------------------------------------------
                      [ Responsive ]*/
                    
                    @media (max-width: 992px) {
                      .wrap-Login100 {
                        padding: 177px 90px 33px 85px;
                      }
                    
                      .Login100-pic {
                        width: 35%;
                      }
                    
                      .Login100-form {
                        width: 50%;
                      }
                    }
                    
                    @media (max-width: 768px) {
                      .wrap-Login100 {
                        padding: 100px 80px 33px 80px;
                      }
                    
                      .Login100-pic {
                        display: none;
                      }
                    
                      .Login100-form {
                        width: 100%;
                      }
                    }
                    
                    @media (max-width: 576px) {
                      .wrap-Login100 {
                        padding: 100px 15px 33px 15px;
                      }
                    }
                    
                    /*------------------------------------------------------------------
                      [ Alert validate ]*/
                    
                    .validate-input {
                      position: relative;
                    }
                    
                    .alert-validate::before {
                      content: attr(data-validate);
                      position: absolute;
                      max-width: 70%;
                      background-color: white;
                      border: 1px solid #c80000;
                      border-radius: 13px;
                      padding: 4px 25px 4px 10px;
                      top: 50%;
                      -webkit-transform: translateY(-50%);
                      -moz-transform: translateY(-50%);
                      -ms-transform: translateY(-50%);
                      -o-transform: translateY(-50%);
                      transform: translateY(-50%);
                      right: 8px;
                      pointer-events: none;
                    
                      font-family: Poppins-Medium;
                      color: #c80000;
                      font-size: 13px;
                      line-height: 1.4;
                      text-align: left;
                    
                      visibility: hidden;
                      opacity: 0;
                    
                      -webkit-transition: opacity 0.4s;
                      -o-transition: opacity 0.4s;
                      -moz-transition: opacity 0.4s;
                      transition: opacity 0.4s;
                    }
                    
                    .alert-validate::after {
                      content: "\f06a";
                      font-family: FontAwesome;
                      display: block;
                      position: absolute;
                      color: #c80000;
                      font-size: 15px;
                      top: 50%;
                      -webkit-transform: translateY(-50%);
                      -moz-transform: translateY(-50%);
                      -ms-transform: translateY(-50%);
                      -o-transform: translateY(-50%);
                      transform: translateY(-50%);
                      right: 13px;
                    }
                    
                    .alert-validate:hover:before {
                      visibility: visible;
                      opacity: 1;
                    }
                    
                    .error-message {
                      color: #f02849;
                      font-family: 'Poppins-Regular';
                      font-size: 15px;
                      line-height: 16px;
                      margin-top: 8px;
                      text-align: center;
                      padding-bottom: 10px;
                    }
                    
                    @media (max-width: 992px) {
                      .alert-validate::before {
                        visibility: visible;
                        opacity: 1;
                      }
                    }
                    
                    .p-t-12 {
                      padding-top: 12px;
                    }
                    .p-t-136 {
                      padding-top: 136px;
                    }
                    
                    .m-l-5 {
                      margin-left: 5px;
                    }
                    
                    /* tự bổ sung*/
                    .ForgetPass
                    {
                      text-decoration: none;
                      color: black;
                    }
                `}
            </style>
    </div>
  );
};

export default Register;