import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Login from './pages/Login';
import Signup from './pages/Signup';
import About from './pages/About';

function App() {
  const [page, setPage] = useState('home');

  useEffect(() => {
    // Check initial URL hash just in case of refresh
    if (window.location.hash.includes('login')) setPage('login');
    else if (window.location.hash.includes('signup')) setPage('signup');
    else setPage('home');

    // Make the browser Back Button work!
    const handlePopState = (e) => {
      if (e.state && e.state.page) {
        setPage(e.state.page);
      } else {
        setPage('home'); // Default fallback
      }
    };
    
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (newPage) => {
    setPage(newPage);
    if (newPage === 'home') {
       window.history.pushState({ page: 'home' }, '', window.location.pathname);
    } else {
       // Pushes a history state so back button knows where to go
       window.history.pushState({ page: newPage }, '', `#${newPage}`);
    }
  };

  return (
    <>
      <Navbar setPage={navigate} />
      <AnimatePresence mode="wait">
        {page === 'home' && (
          <motion.div
            key="home"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <main>
              <Hero setPage={navigate} />
              <About />
              <Services />
              <Contact />
            </main>
            <Footer />
          </motion.div>
        )}
        {page === 'login' && (
          <motion.div
            key="login"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.3 }}
          >
             <Login setPage={navigate} />
          </motion.div>
        )}
        {page === 'signup' && (
          <motion.div
             key="signup"
             initial={{ opacity: 0, scale: 0.98 }}
             animate={{ opacity: 1, scale: 1 }}
             exit={{ opacity: 0, scale: 0.98 }}
             transition={{ duration: 0.3 }}
          >
             <Signup setPage={navigate} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
