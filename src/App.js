import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrintButton from './components/printButton';
import CrimeChart from './components/crimeChart';

function App() {
  return (
    <BrowserRouter>
     <Routes>
       <Route path ='/' element={<PrintButton />} />
       <Route path ='crimeChart' element={<CrimeChart />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App;
