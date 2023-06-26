import PropTypes from 'prop-types';
import css from './Filter.module.css';
const Filter = ({ onChangeInputFilter }) => {
  return (
    <>
      <label className={css.filter__label}>
        Find contacts by name
        <input
          className={css.filter__input}
          type="text"
          onChange={onChangeInputFilter}
        ></input>
      </label>
    </>
  );
};

Filter.propTypes = {
  onChangeInputFilter: PropTypes.func.isRequired,
};

export default Filter;
