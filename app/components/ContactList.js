"use client";

import { useEffect } from "react";
import ContactItem from "./ContactItem";

export default function ContactList({ contacts }) {

    useEffect(() => {
        console.log("O que vem de contacts: ", contacts)
    }, [])

    if (!contacts || contacts.length === 0) {
        return <p>Nenhum contato encontrado.</p>;
    }

    return (
        <ul>
            {contacts.map((contact) => (
                <ContactItem key={contact.id} contact={contact} />
            ))}
        </ul>
    );
}
