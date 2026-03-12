const NameInput = ({ handleChange, value }) => {
  return (
    <div className="form-group">
      <label>Full Name</label>
      <div className="input-wrapper">
        <i className="fa-regular fa-user"></i>
        <input
          type="text"
          name="name"
          value={value}
          placeholder="Nejib Kemal"
          required
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default NameInput;
