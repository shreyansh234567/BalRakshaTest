import React from "react";

import Header from "./components/Header";
import FeedbackBtn from "./components/FeedbackBtn";
import Footer from "./components/Footer";

import Child from "./pages/Child";
import BalRaksha from "./pages/BalRaksha";
import FieldWork from "./pages/FieldWork";
import ImpactBanner from "./pages/ImpactBanner";
import IndiaProgrammesMapPreview from "./pages/BharatProgram";
import SuccessStories from "./pages/SuccessStory";
import AwardsRecognitionsPreview from "./pages/Rewards";
import OngoingCampaigns from "./pages/campaign";
import Blogs from "./pages/Blogs";
import TakeAction from "./pages/TakeAction";
import DonersReviews from "./pages/DonersReviews";
import CorporatePartnership from "./pages/Partners";
import CommitmentSection from "./pages/Rakshak";
import FAQs from "./pages/FAQs";


function App() {
  return (
    <>
      <Header />
      <Child />
      <BalRaksha />
      <FieldWork />
      <ImpactBanner />
      <IndiaProgrammesMapPreview />
      <SuccessStories />
      <AwardsRecognitionsPreview />
      <OngoingCampaigns />
      <Blogs />
      <TakeAction />
      <DonersReviews />
      <CorporatePartnership />
      <CommitmentSection />
      <FAQs />
      <FeedbackBtn />
      <Footer />
    </>
  );
}

export default App;