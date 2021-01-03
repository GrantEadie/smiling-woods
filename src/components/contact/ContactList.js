import React from "react";
import Contact from "./Contact";
import { useSelector } from "react-redux";
import { useFirestoreConnect, isLoaded } from "react-redux-firebase";

function ContactList(props) {
  useFirestoreConnect([
    {
      collection: "contacts",
    },
  ]);

  const contacts = useSelector(state => state.firestore.ordered.tickets);

  if (isLoaded(contacts)) {
    return (
      <>
      <hr/>
      {contacts.map((contact) => 
      <Contact
      whenContactClicked = { props.onContactSelection }
      name={props.name}
      location={props.location}
      id={contact.id}
      key={contact.id}
      />)}
      </>
    )
  } else {
    return (
      <>
      <p>Loading...</p>
      </>
    )
  }
}


export default ContactList;