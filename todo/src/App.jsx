
import ReceivingData from './components/ReceivingData';
import {Routes, Route} from 'react-router-dom'
import Todo from './components/Todo/Todo';

function App() {
  return (
    <>
        <Routes>
          <Route path='/' element={<Todo />} />
          <Route path='/nasa-api' element={<ReceivingData />} />
        </Routes>
    </>
  );
}

export default App;
