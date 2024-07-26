import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function StaticExample( {signin,setsignin} ) {
  return (
    <div
      className={`modaal ${signin ?'bringback':''}`}
    >
      <Modal.Dialog>
        <Modal.Header  className='mx-5' onClick={()=>setsignin(!signin)}>
          <Modal.Title>Sign in   </Modal.Title>
        </Modal.Header>

        <Modal.Body>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      </Form>
        </Modal.Body>

        <Modal.Footer className='foot'>
          <Button variant="secondary" onClick={()=>setsignin(!signin)} >Close</Button>
          <Button variant="primary" className='mx-3'>Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default StaticExample;