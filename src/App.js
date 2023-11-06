
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './containers/Layout';
import Dashboard from './containers/Dashboard';
import UsersPage from './containers/UsersPage';
import PatientsPage from './containers/PatientsPage';
import BillingPage from './containers/BillingPage';
import './App.css';

function App() {
  return (
    <div className="App">
        <Router>
          <Layout >
            <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path='/users' element={<UsersPage />} />
              <Route path='/patients' element={<PatientsPage />} />
              <Route path='/billing' element={<BillingPage />} />
            </Routes>
          </Layout>
        </Router>
    </div>
  );
}

export default App;
