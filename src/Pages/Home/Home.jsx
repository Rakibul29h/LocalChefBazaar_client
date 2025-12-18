import React from "react";
import Container from "../../components/Shared/Container/Container";
import Banner from "../../components/Home/Banner";
import HMeals from "../../components/Home/HMeals";
import { Helmet } from "react-helmet-async";
import HReview from "../../components/Home/HReview";
import WhyChoose from "../../components/Home/WhyChoose";
import { motion } from "framer-motion";
import useAuth from "../../hooks/useAuth";
import LoadingScreen from "../../components/Loading/LoadingScreen";
const Home = () => {
  const {loading}=useAuth();
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  if(loading) return <LoadingScreen></LoadingScreen>
  return (
    <div>
      <Helmet>
        <title>Home - LocalChefBazaar</title>
      </Helmet>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <Banner></Banner>
      </motion.div>

        <HMeals></HMeals>
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <WhyChoose></WhyChoose>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <HReview></HReview>
      </motion.div>
    </div>
  );
};

export default Home;
