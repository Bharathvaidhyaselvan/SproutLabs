import { Outlet } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { EnquiryModalProvider } from '../components/enquiry/EnquiryModalContext';

export default function MainLayout() {
  return (
    <EnquiryModalProvider>
      <div className="flex min-h-screen flex-col bg-brand-offwhite">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </EnquiryModalProvider>
  );
}
