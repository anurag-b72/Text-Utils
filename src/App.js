// import logo from './logo.svg';
//import './App.css';
import Navbar from './Cmponents/Navbar';
import TextForm from './Cmponents/TextForm';


function App() {
  return (
    <>
     <Navbar title="Text-Utils" /> 
     {/* <Navbar /> */}
     <div className="container my-3">
     <TextForm heading = "Enter Your Text To Analyse"/>
     </div>
     
    </>
  );
}

export default App;
