import PropTypes from 'prop-types';
import css from './ContactListItem.module.css';
const ContactListItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <li className={css.contact__item} key={id}>
      <p>
        {name}: {number}
      </p>
      <button
        className={css.contact__button}
        type="button"
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactListItem;
