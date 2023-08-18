import { useSelector } from 'react-redux';
import {
  useGetContactsQuery,
  useDeleteContactsMutation,
} from 'redux/contactsSlice';
import { List, Item, Button } from './ContactList.styled';

const ContactList = () => {
  const { data: contacts, error, isLoading } = useGetContactsQuery();
  const [deleteContact, { isLoading: isDeleting }] =
    useDeleteContactsMutation();

  const filter = useSelector(state => state.filter);

  const normalizedFilter = filter ? filter.toLowerCase() : ''; // Перевірка на undefined

  const filteredContacts = contacts
    ? contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
      )
    : [];

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading contacts.</p>;
  }

  if (filteredContacts.length === 0) {
    return <p>No contacts found.</p>;
  }

  return (
    <List>
      {filteredContacts.map(contact => (
        <Item key={contact.id}>
          <p>
            {contact.name} : <span>{contact.phone}</span>
          </p>
          <Button
            type="button"
            onClick={() => {
              deleteContact(contact.id);
            }}
          >
            {isDeleting ? 'Deleting...' : 'Delete'}
          </Button>
        </Item>
      ))}
    </List>
  );
};

export default ContactList;
