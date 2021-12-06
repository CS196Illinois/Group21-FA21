import { Routes ,Route } from 'react-router-dom';

import AboutUsPage from "./pages/AboutUsPg";
import LandingPage from "./pages/LandingPg";
import Layout from "./components/layout/Layout";






function App() {
  return (
    <Layout>
      <Routes >
        <Route path='/' element={<LandingPage/>} />
        <Route path='/about-us' element={<AboutUsPage/>} />
      </Routes>
    </Layout>
  );
}

export default App;