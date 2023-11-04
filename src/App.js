
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './containers/Layout';
import Dashboard from './containers/Dashboard';
import UsersPage from './containers/UsersPage';
import './App.css';
import PatientsPage from './containers/PatientsPage';

function App() {
  return (
    <div className="App">
        <Router>
          <Layout >
            <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path='/users' element={<UsersPage />} />
              <Route path='/patients' element={<PatientsPage />} />
            </Routes>
          </Layout>
        </Router>
    </div>
  );
}

export default App;
