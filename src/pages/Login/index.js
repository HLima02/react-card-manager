import {useState, useEffect, useContext} from 'react';
import {UserContext} from '../../contexts/analistLogged';
import {Container} from './styles';
import {Link, useHistory} from 'react-router-dom';
import RequestService from '../../services/api';

import { toast } from 'react-toastify';


export default function Login() {
  const [analysts, setAnalysts] = useState([]);
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const history = useHistory();
  const {isLogged, setIsLogged} = useContext(UserContext);
  const {loggedAnalistData, setLoggedAnalistData} = useContext(UserContext);

  /*
  * O useEffect abaixo verifica se já existe uma seção iniciada, direcionando para 
  * a página de dashboard caso exista e consome um dos endpoints da api caso não tenha
  * seção iniciada
  */
  useEffect(() => {
    if(isLogged){
      history.push('/dashboard');
      return;
    } else {
      history.push('/');
    }

    async function loadAnalists(){
      const allAnalists = await RequestService.getAnalysts();
      setAnalysts(allAnalists[0].analysts.data);
      return;
    }
    loadAnalists();
  }, [isLogged, loggedAnalistData]);

  /**
   * Abaixo segue a verificação do login
   * Caso estejam corretos email e senha o usuário será redirecionado para o Dashboard
   * Os dados do Analista online são armazenados Em um Context api, junto com um boolean para verificação
   * em outras página
   */

  async function checkLogin(e){
    e.preventDefault();
    if(email !== '' && senha !== ``){
      for(let i = 0; i < analysts.length; i++){
        if(analysts[i].email === email && analysts[i].password === senha){
          setIsLogged(true);
          setLoggedAnalistData(analysts[i]);
          history.push('/dashboard');
          return;
        }
      }

      toast.warning(`Email ou senha estão incorretos`);
      setEmail('');
      setSenha('');
      return;
    } else {
      toast.warning(`Ops, algum dos campos esta vazio`);
      return;
    }
  }

  return (
    <Container>
      <video src="/videos/video-2.mp4" autoPlay muted loop></video>
      <div className="logo-title">
        <h1>Card Manager</h1>
      </div>
      <div className="login--content">
        <h2>Faça seu Login</h2>

        <form onSubmit={(e) => checkLogin(e)}>
          <label>E-mail:</label><br/>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} /><br/>
          <label>Senha:</label><br/>
          <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} /><br/>
          <input type="submit" value="Entrar" />
        </form>
        <Link className="forgot" to="/esqueci-minha-senha">Esqueci minha senha</Link>
      </div>
    </Container>
  )
}
