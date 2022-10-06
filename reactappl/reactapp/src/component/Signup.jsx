import userEvent from '@testing-library/user-event';
import React,{useRef} from 'react'
import axios from 'axios';
import  { useNavigate } from 'react-router-dom'
import "./Signup.css"

const Signup = ()=>{

    const email = useRef("");
    const password = useRef("");
    const cnfPassword = useRef("");
    const userName = useRef("");
    const mobileNum = useRef("");
    const role = useRef("");
    const navigate = useNavigate();

    const handlesignUp = ()=>{
        
        const emailV = email.current.value;
        const passwordV = password.current.value;
        const roleV = role.current.value;
        const cnfPasswordV = cnfPassword.current.value;
        const mobileNumV = mobileNum.current.value;
        const userNameV = userName.current.value;

        if(roleV=="" || emailV=="" || passwordV=="" || cnfPasswordV=="" ||  mobileNumV=="" || userNameV==""){
            alert("please fill all the required fields");
            return;
        }
        if (!(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(emailV))) {
            alert("email is not valid");
            return;
        }
        if(cnfPasswordV!=passwordV){
            alert("password didn't match");
            return;
        }
        const obj = {
            email: emailV,
            password: passwordV,
            userName: userNameV,
            mobileNumber: mobileNumV,
            userRole: roleV
        }
        console.log(obj)
        if(roleV == "USER"){
            axios.post("http://localhost:8081/user/signup",obj)
            .then((resp)=>{
                if(resp.data == "User added"){
                    alert("user registered");
                    navigate('/login');
                }
                else{
                    alert("user registration failed:: "+resp.data);
                }
            })
            .catch((err)=>{
                alert("Something wernt wrong");
            })
        }
        else{
            axios.post("http://localhost:8081/admin/signup",obj)
            .then((resp)=>{
                if(resp.data == "Admin added"){
                    alert("admin registered");
                    navigate('/login');
                }
                else{
                    alert("admin registration failed:: "+resp.data);
                }
            })
            .catch((err)=>{
                alert("Something wernt wrong");
            })
        }
    }

    return(
        <>
            <div class=" head-box col-12 ">
                <div class="main col-6">
                    <img class="image" src="https://res.cloudinary.com/dxfulpw3q/image/upload/v1664625894/Pngtree_online_education_training_course_design_5331074_bfp0ud.png"/>
                
                </div>
                
                <div  class="containers col-5 ">
                    <h1 class="head12">Register Form</h1>
                    <select class="form-select" id="user/admin" aria-label="Default select example" ref={role}>
                        <option value="" selected class="select">Admin/User</option>
                        <option value="USER" class="select">User</option>
                        <option value="ADMIN" class="select">Admin</option>
                    </select><br/>
                    <input type="text" id="email" ref={email} class="form-control formds" placeholder="Enter Email Address" aria-label="Username" aria-describedby="basic-addon1" /><br/>
                    <input type="text" id="username" ref={userName} class="form-control" placeholder="Enter User Name" aria-label="Username" aria-describedby="basic-addon1" /><br/>
                    <input type="text" id="mobileNumber" ref={mobileNum} class="form-control" placeholder="Enter Mobile Number" aria-label="Username" aria-describedby="basic-addon1" /><br/>
                    <input type="password" id="password" ref={password} class="form-control" placeholder="Enter Password" aria-label="Username" aria-describedby="basic-addon1" /><br/>
                    <input type="password" id="confirmPassword" ref={cnfPassword} class="form-control" placeholder="Enter confirm Password" aria-label="Username" aria-describedby="basic-addon1" /><br/>
                    <button type="button" id="submitButton" class="btn buton btn-secondary" onClick={handlesignUp}>Submit</button><br/>
                    Already a User?
                    <a id="signinLink" href="/login">Login</a>
                </div>
            </div>
            

        </>
    )
}

export default Signup;