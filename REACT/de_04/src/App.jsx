import React, { useState } from "react";
import Header from "./components/Header";
import ContactList from "./components/ContactList";
import ContactForm from "./components/ContactForm";
import { data as initialData } from "./data";

export default function App() {
  const [contacts, setContacts] = useState(initialData);

  const handleAdd = (newContact) => {
    setContacts([newContact, ...contacts]);
  };

  return (
    <div>
      <Header />
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-7">
            <ContactList contacts={contacts} />
          </div>
          <div className="col-md-5">
            <ContactForm onAdd={handleAdd} />
          </div>
        </div>
      </div>
    </div>
  );
}
