import './CostsFilter.css';

const CostsFilter = (props) => {
  const yearChangeHandler = (e) => {
    props.onChangeYear(e.target.value);
  };
  return (
    <div className="costs-filter">
      <div className="costs-filter__control">
        <label className="costs-filter label">Выбор по году</label>
        <select
          value={props.selectedYear}
          className="costs-filter "
          onChange={yearChangeHandler}
        >
          <option value="2025">2025</option>
          <option value="2024">2024</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
        </select>
      </div>
    </div>
  );
};

export default CostsFilter;
