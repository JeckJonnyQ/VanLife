import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import "./LoginPage.scss";

export function loader({ request }) {
  return new URL(request.url).searchParams.get("message");
}

export default function LoginPage() {
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });
  const message = useLoaderData();

  function handleSubmit(event) {
    event.preventDefault();
    console.log(loginFormData);
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setLoginFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <div className="login-container">
      <h2 className="login__title">Sign in to your account</h2>
      {message && <h2 className="red">{message}</h2>}

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
        <button className="login__btn">Log in</button>
      </form>
    </div>
  );
}
