import React from 'react';

function Contact(props){
  return (
    <>
    <div onClick = {() => props.whenContactClicked(props.id)}>
      <p>{props.name}</p>
      <p>{props.location}</p>
    </div>
    </>
  )
}

export default Contact