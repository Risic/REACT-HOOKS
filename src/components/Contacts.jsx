import React, { useState, useEffect } from "react";
import contactsInit from "./initContacts";
import Contact from "./Contact";

const Contacts = () => {
    const [contacts, setContacts] = useState(contactsInit);
    const [search, setSearch] = useState("")

    const inputHandlerSearch = (e) => {
        e.preventDefault()
        setSearch(e.target.value)
    };

    useEffect(() => {
        if (search === "") {
            setContacts(contactsInit)
        }
        setContacts(contactsInit.filter((contact) => (
            contact.firstName.toLowerCase().includes(search.toLowerCase()) || 
            contact.lastName.toLowerCase().includes(search.toLowerCase()) ||
            contact.phone.includes(search)
        )))
    }, [search])

    return (
        <div className="contacts"> 
        <input type="text" name="search" id="search" placeholder="Search" maxLength={100}
            onChange={inputHandlerSearch}
            value={search}
        />
        {
            contacts.map((contact, index) => {
                return (
                    <div key={index}>
                        <Contact {...contact} />
                    </div>
                )
            })
        }
        </div>
    )
}

export default Contacts