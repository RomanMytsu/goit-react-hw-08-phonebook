import { ContactFilter } from 'components/ContactFilter/ContactFilter';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';

const ContactsPage = () => {
  return (
    <>
      <ContactForm />
      <ContactFilter />
      <ContactList />
    </>
  );
};

export default ContactsPage;
