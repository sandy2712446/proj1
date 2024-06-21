import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Landingpage from './components/Landingpage';
const App =()=>{
    return(
        <Routes>
            <Route exact path='/' element={<div>Base Route</div>}/>
            <Route path='/Login' element={<Login/>}/>
            <Route path='/Signup' element={<Signup/>}/>
            <Route path='/Landingpage' element={<Landingpage/>}/>

        </Routes>
    );
}

export default App;