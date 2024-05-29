import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import PrivacyPolicy from "./pages/aboutus/privacy-policy";
import AboutUs from "./pages/aboutus";
import HowTraxiWork from "./pages/aboutus/how-traxi-work";
import PartnerProfile from "./pages/aboutus/partner-profile";
import DriverPartnerSupportCenter from "./pages/driver/driver-partner-support-center";
import FindDriver from "./pages/customer/find-driver";
import ConsultingPartners from "./pages/driver/consulting-partners";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    // errorElement: <Error />,
  },
  {
    path: "/ve-chung-toi/",
    element: <AboutUs />,
    // errorElement: <Error />,
  },
  {
    path: "/ve-chung-toi/privacy-policy",
    element: <PrivacyPolicy />,
    // errorElement: <Error />,
  },
  {
    path: "/ve-chung-toi/cach-traxi-hoat-dong",
    element: <HowTraxiWork />,
    // errorElement: <Error />,
  },
  {
    path: "/ve-chung-toi/diem-nhan-ho-so-doi-tac",
    element: <PartnerProfile />,
    // errorElement: <Error />,
  },
  {
    path: "/tai-xe/trung-tam-ho-tro-doi-tac-tai-xe-traxi/",
    element: <DriverPartnerSupportCenter />,
    // errorElement: <Error />,
  },
  {
    path: "/nguoi-dung/tim-tai-xe-lai-xe-ho/",
    element: <FindDriver />,
    // errorElement: <Error />,
  },

  {
    path: "/tai-xe/tu-van-doi-tac-traxi/",
    element: <ConsultingPartners />,
    // errorElement: <Error />,
  },
]);
