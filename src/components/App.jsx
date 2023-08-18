import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { Section } from './Section/Section';
import { Head, SpanFirst, SpanSecond } from './Section/Section.styled';

export const App = () => {
  return (
    <>
      <Section>
        <Head>
          <SpanFirst>Phonebook</SpanFirst>
          <SpanSecond>Phonebook</SpanSecond>
        </Head>
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Filter />

        {/* <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            color: 'white',
          }}
        >
          Your phonebook is empty. Add first contact!
        </div> */}

        <ContactList />
      </Section>
    </>
  );
};
