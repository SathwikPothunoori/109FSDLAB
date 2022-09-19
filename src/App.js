import './App.css';
import Tourism from './Tourism';
import {BrowserRouter  , Routes  , Route} from 'react-router-dom'
import Hotels from './Hotels';
import Initial from './Initial';

function App() {
  return (
   <>
   <BrowserRouter>
    <Routes>
      <Route path='/' element={< Initial />} />
      <Route path='/tour' element={< Tourism />} />
      <Route path='/hotel' element={< Hotels />} />
    </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
