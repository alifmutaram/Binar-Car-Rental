const Select = ({ labelSelect, items, onChange, value }) => {
  const handleOnChange = (e) => {
    const val = e.target.value;
    onChange(val);
  };
  return (
    <>
      <div className="form-group d-flex flex-column align-items-start">
        <label>{labelSelect}</label>
        <select
          className="d-flex flex-row align-items-center form-control"
          value={value}
          placeholder=""
          onChange={handleOnChange}
        >
          {items.map(({ id, value, text }) => {
            return (
              <option key={id} value={value} className="option-custom">
                {text}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
};
export default Select;
