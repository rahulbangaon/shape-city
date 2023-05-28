import FAQs from "../../components/faqs/FAQs";
import MainHeader from "../../components/mainHeader/MainHeader";
import Programs from "../../components/programs/Programs";
import Values from "../../components/values/Values";

import "./home.css";

const Home = () => {
  return (
    <>
      <MainHeader />
      <Programs />
      <Values />
      <FAQs />
    </>
  );
};

export default Home;
