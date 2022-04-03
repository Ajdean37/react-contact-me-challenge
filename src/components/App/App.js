import './App.css';
import Header from '../Header/Header';
import Form from '../Form/Form';
import Hello from '../Hello/Hello'
import Services from '../Services/Services'
import Button from '../Button/Button'


function App() {
  return (
    <div className="content">
      <div className="hello-ct">
        <Header content={"Hello"} />
        <Hello />
      </div>
      <div className="main-form-ct">
        <Header content={"Contact Me"} />
        <Form />
        <Button />
      </div>
      <div className="services-ct">
        <Header content={"Services"} />
        <Services />
      </div>
    </div>
  );
}

export default App;

//need to figure out how to align contents when window expands
//and how to get first and last name inline

