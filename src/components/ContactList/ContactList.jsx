import { useSelector, useDispatch } from 'react-redux';
import {
  selectError,
  selectFilteredContacts,
  selectIsLoading,
} from '../../redux/Contacts/contacts-selectors';
import {
  deleteContacts,
  fetchContacts,
} from '../../redux/Contacts/contacts-operations';

import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { ListContainer } from './ContactList.styled';
import { useEffect } from 'react';
import { Loader } from 'components/Loader/Loader';

export const ContactList = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectError);
  const filteredContacts = useSelector(selectFilteredContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDeleteContact = id => {
    dispatch(deleteContacts(id));
  };

  return (
    <>
      {isLoading && <Loader />}
      {!filteredContacts.length && !isLoading && !isError && (
        <p>There are no contacts</p>
      )}
      {filteredContacts.length > 0 && (
        <ListContainer>
          {filteredContacts.map(({ id, name, number }) => {
            return (
              <ContactListItem
                key={id}
                name={name}
                number={number}
                id={id}
                onDelete={handleDeleteContact}
              />
            );
          })}
        </ListContainer>
      )}
    </>
  );
};
