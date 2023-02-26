import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

export const ContactList = ({ contacts, filter, onDelete }) => {
  const makeFilteredList = (array, filterValue) => {
    return array
      .filter(({ name }) => {
        return name.toLowerCase().includes(filterValue.toLowerCase());
      })
      .map(({ id, name, number }) => {
        return (
          <li key={id} contactid={id}>
            {name}: {number}
            <button type="button" onClick={() => onDelete(id)}>
              Delete
            </button>
          </li>
        );
      });
  };

  const makeUnfilteredList = array => {
    return array.map(({ id, name, number }) => {
      return (
        <li key={id} contactid={id}>
          {name}: {number}
          <button type="button" onClick={() => onDelete(id)}>
            Delete
          </button>
        </li>
      );
    });
  };

  return (
    <ul>
      {filter
        ? makeFilteredList(contacts, filter)
        : makeUnfilteredList(contacts)}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  filter: PropTypes.string.isRequired,
};
