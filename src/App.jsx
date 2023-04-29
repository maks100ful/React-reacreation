import Home from "./pages/home";
import ProfilePage from './pages/proofilePage';
import Layout from './components/Layout';
import { Routes,Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>}/>
          <Route path=":id" element={<ProfilePage/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
