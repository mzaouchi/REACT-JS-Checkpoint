import logo from './logo.svg';
import './App.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import FormLabel from 'react-bootstrap/FormLabel';



function App() {
  return (
    
              <div className="ContB">
                <Form>

                  <Form.Group>
                  <Form.Label>Nom :</Form.Label>
                  <Form.Control type="text" placeholder="Votre nom"></Form.Control>
                  </Form.Group>

                  <Form.Group>
                  <Form.Label>Prénom :</Form.Label>
                  <Form.Control type="text" placeholder="Votre prénom"></Form.Control>
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Sexe :</Form.Label>
                    <Form.Control as="select">
                      <option>Masculin</option>
                      <option>Féminin</option>      
                    </Form.Control>
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Email :</Form.Label>
                    <Form.Control type="email" placeholder="exemple@email.com"></Form.Control>
                  </Form.Group>

                  <Form.Group>
                    <FormLabel>Mot de passe :</FormLabel>
                    <Form.Control type="password"></Form.Control>
                  </Form.Group>

                  <Form.Group>
                    <Form.Check type="checkbox" label="J'accepte les conditions" />
                  </Form.Group>

                  <Button type="submit" variant="primary">Envoyer</Button>
                </Form>       

                </div>   
             
  );
}

export default App;
