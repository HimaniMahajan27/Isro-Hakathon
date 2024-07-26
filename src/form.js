import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { States } from './states';
import 'react-notifications/lib/notifications.css';
import { NotificationManager ,NotificationContainer } from 'react-notifications';

function BasicExamples({ Registering,Setregistering }) {

  let notification=(event)=>{
    event.preventDefault();
   NotificationManager.success('Successfully submitted', 'Success', 3000);
  }
  return (
    <Form className='forum'>
        <span className='cross'onClick={()=>Setregistering(!Registering)} > &times; </span>
        <Row>
        <Col>
          <Form.Control placeholder="First name"className='firstname mx-2' />
        </Col>
        <Col>
          <Form.Control placeholder="Last name" className='lastname'/>
        </Col>
      </Row>
      <Row className="mb-3 mx-1">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3 mx-2" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="1234 Main St" />
      </Form.Group>

      <Form.Group className="mb-3 mx-2" controlId="formGridAddress2">
        <Form.Label>Address 2</Form.Label>
        <Form.Control placeholder="Apartment, studio, or floor" />
      </Form.Group>

      <Row className="mb-3 mx-1">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>state</option>
             { States.map((state,index)=>(
                <option key={index} value={state.name}>{state.name}</option>
             ))}
            
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" className='mx-2'  label="Check me out " required/>
      </Form.Group>
<NotificationContainer/>
      <Button variant="primary" type="submit" className='mx-2' onClick={notification}>
        Submit
      </Button>

    </Form>
  );
}


export default BasicExamples;