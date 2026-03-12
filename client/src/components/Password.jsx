import { useState } from "react";

const Password = ({ handleChange, value }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="form-group">
      <label>Password</label>
      <div className="input-wrapper">
        <i className="fa-solid fa-lock"></i>
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          value={value}
          placeholder="••••••••"
          required
          onChange={handleChange}
        />
        <i
          className={
            showPassword
              ? "fa-regular fa-eye-slash toggle-password"
              : "fa-regular fa-eye toggle-password"
          }
          onClick={() => {
            setShowPassword(!showPassword);
          }}
        ></i>
      </div>
    </div>
  );
};

export default Password;
