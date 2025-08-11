import React, { useState } from "react";
import ContactCard from "./ContactCard";

export default function ContactList({ contacts = [] }) {
  const [search, setSearch] = useState("");

  const filteredContacts = contacts.filter((contact) =>
    (contact?.name || "").toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="border p-4 rounded">
      <h5 className="fw-bold mb-3 border-bottom pb-2">Danh Sách Liên Hệ</h5>

      <input
        type="text"
        className="form-control mb-3"
        placeholder="Tìm kiếm liên hệ..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="d-flex flex-column gap-3">
        {filteredContacts.map((contact) => (
          <ContactCard key={contact.id} contact={contact} />
        ))}
      </div>
    </div>
  );
}
