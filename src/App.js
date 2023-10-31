import './App.css';
import Alert from './Components/Alert';
import Textarea from './Components/TextArea';
import { useState } from 'react';

function App() {

  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  return (
    <>
      <Textarea heading="TextUtils - Word Counter, Character Counter, Sentence Counter" showAlert={showAlert} />
      <Alert alert={alert} />
    </>
  );
}

export default App;
