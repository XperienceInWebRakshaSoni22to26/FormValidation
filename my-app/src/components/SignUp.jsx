import React, { useState } from 'react';
import "../style.css";

const SignUp = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();

    const handlesubmit = (event) => {
        event.preventDefault();
        if (name && email && password && confirmPassword) {
            if (password === confirmPassword) {
                alert("Sign Up Successfully.");
            } else {
                alert("Error: password and confirmpassword must be same");
            }
        } else {
            alert("All fields are mandatory");
        }
    }
    return (

        <
        >
        <
        h1 className = 'heading' > Registration Form < /h1> <
        div className = "form" >

        <
        form onSubmit = { handlesubmit } >
        <
        div className = "element" >
        <
        p > Name: < /p> <
        input type = "text"
        onChange = {
            (e) => setName(e.target.value)
        }
        / > <
        p className = { name ? "data" : "nodata" } > { name ? "" : "name is required**" } < /p> < /
        div > <
        div className = "element" >
        <
        p > Email: < /p> <
        input type = "email"
        onChange = {
            (e) => setEmail(e.target.value)
        }
        / > <
        p className = { email ? "data" : "nodata" } > { email ? "" : "email is required**" } < /p> < /
        div >

        <
        div className = "element" >
        <
        p > Password: < /p> <
        input type = "password"
        onChange = {
            (e) => setPassword(e.target.value)
        }
        / > <
        p className = { password ? "data" : "nodata" } > { password ? "" : "password is required**" } < /p> < /
        div >

        <
        div className = "element" >
        <
        p > Confirm Password: < /p> <
        input type = "password"
        onChange = {
            (e) => setConfirmPassword(e.target.value)
        }
        / > <
        p className = { confirmPassword ? "data" : "nodata" } > { confirmPassword ? "" : "confirm password is required**" } < /p> < /
        div >

        <
        div className = "element" >
        <
        button > Sign Up < /button> < /
        div >





        <
        /form>





        <
        /
        div >
        <
        />
    )
}

export default SignUp;