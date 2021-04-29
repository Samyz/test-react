import logo from './logo.svg';
import './App.css';
import List from './component/List';
import HeaderBootstrap from './component/HeaderBootstrap';
import Top from './component/main/Top';
import Curriculum from './component/main/Curriculum';
import Announce from './component/main/Announce';
import Port from './component/main/Port';
import Footer from './component/Footer';

function App() {
  var items = [];
  for (var i = 0; i < 100; i++) {
    items.push(<p>abcde{i}</p>);
  }

  var page = 'student';

  return (
    <div className='App'>
      {/* <Navbar /> */}
      <HeaderBootstrap page={page} />
      <Top />
      <Curriculum />
      <Announce />
      <Port />
      <Footer />
    </div>
  );
}

export default App;
