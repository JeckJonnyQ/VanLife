import React from "react";
import { useState } from "react";
import "./LoginPage.scss";

export default function LoginPage() {
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log(loginFormData);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setLoginFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <div className="login-container">
      <h1 className="login__title">Sign in to your account</h1>

      <form onSubmit={handleSubmit} className="login__form">
        <input
          className="login__form_input"
          name="email"
          onChange={handleChange}
          type="email"
          placeholder="Email address"
          value={loginFormData.email}
        />
        <input
          className="login__form_input"
          name="password"
          onChange={handleChange}
          type="password"
          placeholder="Password"
          value={loginFormData.password}
        />
        <button className="login__form_btn">Log in</button>
      </form>
    </div>
  );
}
