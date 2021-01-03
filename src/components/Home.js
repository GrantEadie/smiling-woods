import { Jumbotron, Button } from "react-bootstrap";

function Home(props) {
  const { handleLogout } = props;
  return (
    <div>
      <Jumbotron className="bg-transparent">
        <h1 style={{ textAlign: "center" }}>Smiling Woods Yurts</h1>
      </Jumbotron>
      <hr />
      <div>
        <div className="container">
            <br/>
            <div className="row">
              <div className="col-sm"></div>
              <div className="col-sm">
                <Button variant="outline-danger" block onClick={handleLogout}>
                  Logout
                </Button>
              </div>
              <div className="col-sm"></div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Home;
