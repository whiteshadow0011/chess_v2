import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Achievements from './components/Achievements';
import Footer from './components/Footer';
import Carousal from './components/Carousal';
import Contactus from './components/Contactus';
import Aboutus from './components/Aboutus';
import { useRef } from "react";

const App = () => {
  const achievementsRef = useRef(null);


  const scrollToAchievements = () => {
    achievementsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <> 
        <Navbar
          onAchievementsClick={scrollToAchievements}
        />
        <div>
          <Home />
        </div>
        <div ref={achievementsRef}>
          <Carousal />
        </div>
        <Achievements />
        <Footer />
      </>,
    },
    {
      path: '/Carousal',
      element: <Carousal/>
    },
    {
      path: "/contact",
      element: <>
        <Navbar />
        <Contactus />
      </>,
    },
    {
      path: "/Aboutus",
      element: <>
        <Navbar />
        <Aboutus />
        <Footer />
      </>,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
