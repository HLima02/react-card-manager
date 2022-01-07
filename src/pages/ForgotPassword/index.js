import {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import { toast } from 'react-toastify';
import {Container} from '../Login/styles';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const history = useHistory();

  async function sendPassword(e){
    e.preventDefault();
    if(email !== '') {
      toast.info(`Sua nova senha foi enviado por email`)
      setTimeout(() => {
        history.push('/');
      }, 3000);
    } else {
      toast.warning(`O campo de email esta vazio`);
      return;
    }
    
  }

  return(
    <Container>
       <video src="/videos/video-2.mp4" autoPlay muted loop></video>
      <div className="logo-title">
        <h1>Card Manager</h1>
      </div>
      <div className="login--content">
        <h2>Faça seu Login</h2>

        <form onSubmit={(e) => sendPassword(e)}>
          <label>E-mail:</label><br/>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} /><br/>
          
          <input type="submit" value="Enviar" />
        </form>
        <Link className="forgot" to="/">Login</Link>
      </div>
    </Container>
  );
}

export default ForgotPassword;