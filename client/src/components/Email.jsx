const EmailInput = ({ handleChange, value }) => {
  return (
    <div className="form-group">
      <label>Email Address</label>
      <div className="input-wrapper">
        <i className="fa-regular fa-envelope"></i>
        <input
          type="email"
          name="email"
          value={value}
          placeholder="example@gmail.com"
          required
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default EmailInput;
