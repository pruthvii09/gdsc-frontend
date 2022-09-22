import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import './App.css';

// Pages
import {
  Home,
  Events,
  Team,
  Contact,
  Signup,
  Quiz,
  Login,
  Profile,
} from '../src/pages';
import Layout from './Components/Layout';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            {/* <Route path="/quiz" element={<Quiz />} /> */}
          </Routes>
        </Layout>
      </Router>
    </div>
  );
};

export default App;
