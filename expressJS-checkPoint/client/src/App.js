import './App.css';
import { Content } from './components/content/Content.jsx';
import { Footer } from './components/footer/Footer';
import Header from './components/header/Header';

function App() {
  return (
    <div className="App">
      <div className="ContainerApp">
        <header className="header">
          <Header />
        </header>
        <div className="content">
          <Content />
        </div>
        <footer className="footer">
          <Footer />
        </footer>
      </div>
    </div>
  );
}

export default App;
