import {Tabs, Tab, Button} from 'react-bootstrap'

function Control() {
  return(
    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
      <Tab eventKey="home" title="Home">
        <p>You are home</p>
        <Button>Hello</Button>
      </Tab>
      <Tab eventKey="contact" title="Contact">
        <p>You are in Contacts</p>
      </Tab>
      <Tab eventKey="orders" title="Orders">
        <p>You are in Orders</p>
      </Tab>
    </Tabs>
  );
}

export default Control