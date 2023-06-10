import { useState, useEffect, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from './pages/Loading';

const SignUp = lazy(() => import('./pages/SignUp'));
const SignIn = lazy(() => import('./pages/SignIn'));

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous delay
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <div>
      <ToastContainer />
      {isLoading ? (
        <Loading />
      ) : (
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<SignUp />} />
            <Route path="/login" element={<SignIn />} />
          </Routes>
        </Suspense>
      )}
    </div>
  );
}

export default App;
