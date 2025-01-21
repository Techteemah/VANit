import './App.css';

// Importing components
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './Component/Header.jsx';
import Footer from './pages/Footer.jsx';
import Home from './pages/Home/Home.jsx';
import Team from './pages/Team.jsx';
import OptionPage from './pages/OptionPage.jsx';
import OwnVan from './pages/ownVan.jsx';
import NeedVan from './pages/NeedVan.jsx';
import SignUp from './Component/SignUp.jsx';
import Terms from './Component/Terms.jsx';
import SignIn from './Component/SignIn.jsx';
import DriversSignUp from './Component/DriversSignUp.jsx';
import DriverTerms from './Component/DriverTerms.jsx';
import DriversSignIn from './Component/DriversSignIn.jsx';
import Movement from './Component/Movement.jsx';
// import Location from './Component/Location.jsx';
import DriversDashboard from './Component/DriversDashboard.jsx';
import DriversProfile from './Component/DriversProfile.jsx';
import MailBox from './Component/MailBox.jsx';
import Order from './Component/Order.jsx';
import Chat from './Component/Chat.jsx';
import Blog from './pages/Home/Blog.jsx';
import LoginOwnVan from './pages/LoginOwnVan.jsx';
import LoginOptionPage from './pages/LoginOptionPage.jsx';
import LoginNeedVan from './pages/LoginNeedVan.jsx';
import PaymentPage from './pages/Payment/Payment.jsx';
import EstimateCard from './Component/EstimateCard.jsx';
import EstimateQoute from './Component/EstimateQoute.jsx';
import Driver from './Component/Driver.jsx';
import ProfileSettings from './Component/Profile.jsx';
import OrderAssessment from './pages/orderAssessment.jsx';
import Service from './pages/Service.jsx'
import Congratulatons from './Component/Congratulatons.jsx';
import { LoadScript } from '@react-google-maps/api'

const Layout = ({ children }) => {
  const location = useLocation();
  const hideHeaderFooterRoutes = [
    '/DriversDashboard',
    '/DriversProfile',
    '/MailBox',
    '/Order',
    '/Chat',
    '/movement',
    '/congratulation',
  ];
  const shouldHideHeaderFooter = hideHeaderFooterRoutes.includes(location.pathname);

  return (
    <>
      {!shouldHideHeaderFooter && <Header />}
      {children}
      {!shouldHideHeaderFooter && <Footer />}
    </>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/" element={ <LoadScript googleMapsApiKey={'AIzaSyBBhijfr7zpw3AG27yONYmX8t5P2VlNUNo'} libraries={['places']}><Layout><Home /></Layout></LoadScript>} />
      <Route path="/about-us" element={<Layout><Team /></Layout>} />
      <Route path="/optionpage" element={<Layout><OptionPage /></Layout>} />
      <Route path="/ownvan" element={<Layout><OwnVan /></Layout>} />
      <Route path="/needvan" element={<Layout><NeedVan /></Layout>} />
      <Route path="/signup" element={<Layout><SignUp /></Layout>} />
      <Route path="/terms" element={<Layout><Terms /></Layout>} />
      <Route path="/signin" element={<Layout><SignIn /></Layout>} />
      <Route path="/driverssignup" element={<Layout><DriversSignUp /></Layout>} />
      <Route path="/driverterms" element={<Layout><DriverTerms /></Layout>} />
      <Route path="/driverssignin" element={<Layout><DriversSignIn /></Layout>} />
      <Route path="/movement" element={<Movement />} />
      {/* <Route path="/location" element={<Layout><Location /></Layout>} /> */}
      <Route path="/orderassessment" element={<Layout><OrderAssessment /></Layout>} />
      {/* <Route path="/order-assessment/:userId" component={OrderAssessment} /> */}
      <Route path="/driversdashboard" element={<DriversDashboard />} />
      <Route path="/driversprofile" element={<DriversProfile />} />
      <Route path="/mailbox" element={<MailBox />} />
      <Route path="/order" element={<Order />} />
   
      <Route path="/chat" element={<Chat />} />
      <Route path="/blog" element={<Layout><Blog /></Layout>} />
      <Route path="/payment" element={<Layout><PaymentPage /></Layout>} />
      <Route path="/estimatecard" element={<Layout><EstimateCard /></Layout>} />
      <Route path="/estimatequote" element={<Layout><EstimateQoute /></Layout>} />
      <Route path="/driver" element={<Layout><Driver /></Layout>} />
      <Route path="/profile" element={<Layout><ProfileSettings /></Layout>} />
      <Route path="/loginownvan" element={<Layout><LoginOwnVan /></Layout>} />
      <Route path="/loginneedvan" element={<Layout><LoginNeedVan /></Layout>} />
      <Route path="/loginoptionpage" element={<Layout><LoginOptionPage /></Layout>} />
      <Route path='/service' element={<Layout><Service /></Layout>} />
      <Route path='/congratulation' element={<Layout><Congratulatons /></Layout>} />
    </Routes>
  );
}

export default function Root() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}