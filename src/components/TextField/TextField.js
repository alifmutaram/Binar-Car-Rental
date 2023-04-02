const TextField = ({ labelTextField, value, onChange, placeholder }) => {
  const handleOnChange = (e) => {
    const val = e.target.value;
    onChange(val);
  };
  return (
    <>
      <div className="form-group d-flex flex-column align-items-start">
        <label>{labelTextField}</label>
        <input
          className="d-flex flex-row align-items-center form-control"
          value={value}
          onChange={handleOnChange}
          type="text"
          name=""
          id=""
          placeholder={placeholder}
          aria-describedby="helpId"
        />
      </div>
    </>
  );
};
export default TextField;
