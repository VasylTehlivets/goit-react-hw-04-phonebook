import React, { useState, useEffect } from "react";
import { nanoid } from 'nanoid';
import { ContactFilter } from "./ContactFilter/ContactFilter";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import css from "./App.module.css"

export function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    try {
      const storedContacts = JSON.parse(localStorage.getItem("contacts"));
      if (storedContacts) {
        setContacts(storedContacts);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const handleFormSubmit = ({ name, number }) => {
    const isContactExists = contacts.some(
      (contact) =>
        contact.name.toLowerCase() === name.toLowerCase() ||
        contact.number === number
    );

    if (isContactExists) {
      alert(`${name} is already in contacts`);
      return;
    }

    const newContact = { id: nanoid(), name, number };
    setContacts([newContact, ...contacts]);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleContactDelete = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <section>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm onSubmit={handleFormSubmit} />
      <h2 className={css.head}>Contacts</h2>
      <ContactFilter filter={filter} onFilterChange={handleFilterChange} />
      <ContactList contacts={filteredContacts} onContactDelete={handleContactDelete} />
    </section>
  );
}

