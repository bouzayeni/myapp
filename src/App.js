import logo from './logo.svg';
import './App.css';
import {Button,Form,Navbar,Container,Nav} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <>
  <Navbar bg="dark" variant="dark">
    <Container>

    <Navbar.Brand href="#home" className="main">Home</Navbar.Brand>
    
      <Nav.Link href="#home"className="main">About</Nav.Link>
      <Nav.Link href="#features"className="main">Features</Nav.Link>
      <Nav.Link href="#pricing"className="main">Pricing</Nav.Link>
    
    </Container>
  </Navbar>
  
  
</>
       <br/>
        <Button> Hey Try me </Button>
        <br/>
        <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary"className="done" type="submit">
    Submit
  </Button>
</Form>

        
      </header>
    </div>
  );
}

export default App;
