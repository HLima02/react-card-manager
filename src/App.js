import Routes from './routes';
import UserProvider from './contexts/analistLogged';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <UserProvider className="App">
      <Routes/>
      <ToastContainer autoClose={3000} />
    </UserProvider>
  );
}

export default App;
