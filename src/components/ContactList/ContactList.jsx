import PropTypes from "prop-types";
import css from "../ContactList/ContactList.module.css"

export const ContactList = ({ contacts, onContactDelete }) => (
  <ul className={css.list}>
    {contacts.map(({ id, name, number }) => (
        <li className={css.item} key={id}>
            <p className={css.marker}></p>
             <p className={css.name}>{name}:</p>
             <p className={css.number}>{number}</p>
        
          <button
            className={css.btn}
            type="button"
            name="delte"
            onClick={() => onContactDelete(id)}
          >
            delete
          </button>
      </li>
    ))}
        </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onContactDelete: PropTypes.func.isRequired,
};