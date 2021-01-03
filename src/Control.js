import { Tabs, Tab, Button } from "react-bootstrap";
import Home from "./components/Home";
import ContactControl from "./components/ContactControl";

function Control(props) {
  const { handleLogout } = props;

  return (
    <>
      <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
        <Tab eventKey="home" title="Home">
          <Home handleLogout={handleLogout} />
        </Tab>
        <Tab eventKey="contacts" title="Contacts">
          <ContactControl/>
        </Tab>
        <Tab eventKey="orders" title="Orders">
          <p>You are in Orders</p>
        </Tab>
      </Tabs>
    </>
  );
}

export default Control;