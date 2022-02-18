import './App.css';
import Navbar from './components/Navbar';
import { TextForm } from './components/TextForm';


function App() {
  return (
   <>
   <Navbar title="Text Utilities" aboutText="About Us"/>
   <div className="container my-3">
   <TextForm heading="Enter the text to analyze" textArea = "Enter text here"/>
   </div> 
   </>
  );
}

export default App;

