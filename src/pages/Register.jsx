import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
const Register = () => {
  // hooks
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setshowPassword] = useState(false);
  const[loading, setLoading] = useState("");


  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    // api url
    const url = "https://blogg-api-v1.onrender.com/register";

    // validation
    if (!username || !email || !password) {
      console.log("Enter all fields");
      return toast.error("Enter all fields");
    }

    // Email validation
    const emailRegex = /\S+@\S+\.\S+/;
    if(!emailRegex.test(email)){
      return toast.error("invalid email address"); 
    }

    // Username validation
    const userNameTrim = username.trim();
    if(!username || userNameTrim.length < 3){
      return toast.error("username must be 3 characters and above");
    }

    // Username validation
    const pwdTrim = password.trim();
    if(!password || pwdTrim.length < 6){
      return toast.error("Enter a valid password");
    }

    try {
        // sending form data to server
        setLoading(true);
        const { data } = await axios.post(url, {
          username,
          email,
          password,
        });

        // check for successful registration
        if(!data?.error){
          toast.success("Registration successful");
          setLoading(false);
          // redirect user to login
          setTimeout(() => {
            navigate("/");
          }, 5000);
        } else {
          toast.error("Registration failed");
          setLoading(false);
        }
    

        } catch (err) {
      console.log(err);
      const { error } = err?.response?.data
      toast.error(error)
    }
  };

  console.log(username);
  return (
    <div>
      <ToastContainer />
      <h1>Register Page</h1>
      {/* Form */}
      <form onSubmit={handleSubmit}>
        <div className="">
          <input
            className="form-control p-3"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </div>
        <div className="">
          <input
            className="form-control p-3 my-3"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="password-input-wrapper">
          <input
            className="form-control p-3"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

           <span onClick={()=>setshowPassword(!showPassword)}>
          
          
          {showPassword ? <FaRegEye className="icon"/> : <FaRegEyeSlash className="icon"/>}
          </span>
        </div>

        <button className="btn btn-primary w-100" disabled={loading}>
        {loading ? (
            <>
            <span
              class="spinner-border spinner-border-sm"
              aria-hidden="true"
            ></span>
            <span role="status">Loading...</span>
            </>
          ) : (
            "Submit"
          )}
        </button>
        
      </form>
    </div>
  );
};

export default Register;