import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-[4.5rem] md:pt-[4.75rem]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
