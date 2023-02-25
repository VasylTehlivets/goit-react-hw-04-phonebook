import PropTypes from "prop-types";
import css from "../ContactFilter/ContactFilter.module.css"

export const ContactFilter = ({ filter, onFilterChange }) => (
  <>
    <p className={css.descr}>Find contacts by name</p>
    <input
      className={css.input}
      type="text"
      name="filter"
      value={filter}
      onChange={onFilterChange}
    ></input>
  </>
)


ContactFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func,
};



