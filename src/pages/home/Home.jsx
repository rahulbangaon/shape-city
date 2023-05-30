import FAQs from "../../components/faqs/FAQs";
import Footer from "../../components/footer/Footer";
import MainHeader from "../../components/mainHeader/MainHeader";
import Programs from "../../components/programs/Programs";
import Testimonials from "../../components/testimonials/Testimonials";
import Values from "../../components/values/Values";

import "./home.css";

const Home = () => {
  return (
    <>
      <MainHeader />
      <Programs />
      <Values />
      <FAQs />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Home;
