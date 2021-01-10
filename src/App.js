import './App.css';
import Header from './Header';
import Footer from './Footer';
import { YMInitializer } from 'react-yandex-metrika';

function App() {
  return (
    <>
  <Header />
  <Footer />
  <YMInitializer accounts={[70664767]} options={{webvisor: true}}/>
  </>
  );
}

export default App;
