import PropTypes from 'prop-types';

export const ContactList = ({ vilibleContact, deleteContact }) => {
    return (
        <div>
            <ul>
                {vilibleContact.map(contact => {
                    return (
                        <li key={contact.id}>
                            <p>
                                {contact.name} {contact.number}
                            </p>
                            <button
                                type="button"
                                onClick={() => deleteContact(contact.id)}
                            >
                                Delete
                            </button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

ContactList.propTypes = {
    vilibleContact: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ),
    deleteContact: PropTypes.func.isRequired,
};