import "../../styles/npo-profile-page-styles/npo-profile-styles.css";
import "../../styles/npo-profile-page-styles/overview-styles.css";
import { ProfileHeader } from "./ProfileHeader";
import * as React from "react";
import { useContext, useState } from "react";
import { useLoading } from "../../useLoading";
import { NpoApiContext } from "../../api-client/npoApiContext";
import { SubscriptionApiContext } from "../../api-client/subscriptionApiContext";
import SubscriptionModal from "./SubscriptionModal";
import { TabContent } from "./TabContent";
import { NavigationBar } from "./NavigationBar";
import DonateModal from "./DonateModal";
import { isLoading } from "../shared-components/Loading";
import { Error } from "../shared-components/Error";

const NonProfitProfilePage = ({ user }) => {
  const [selectedTab, setSelectedTab] = useState("overview");
  const [showModal, setShowModal] = useState(false);
  const [showDonationModal, setShowDonationModal] = useState(false);
  const [paymentFrequency, setPaymentFrequency] = useState("monthly");
  const [paymentAmount, setPaymentAmount] = useState(null);
  const [formError, setFormError] = useState(false);
  const [invalidCustomAmount, setInvalidCustomAmount] = useState(false);
  const [registerError, setRegisterError] = useState(false);
  const [registerSuccess, setRegisterSuccess] = useState(false);

  const { registerSubscription } = React.useContext(SubscriptionApiContext);

  const urlPathParam = window.location.pathname.substring(
    window.location.pathname.lastIndexOf("/") + 1
  );
  const { getNpoById } = useContext(NpoApiContext);
  const { loading, error, data } = useLoading(
    async () => await getNpoById(urlPathParam),
    []
  );

  const subscriptionInfo = {
    user_id: user.google_id,
    npo_id: data?._id,
    payment_amount: paymentAmount,
    payment_frequency: paymentFrequency,
  };

  const handleShowModal = () => {
    setPaymentAmount(null);
    setRegisterError(false);
    setRegisterSuccess(false);
    setInvalidCustomAmount(false);
    setShowModal((prevState) => !prevState);
  };

  const handleShowDonationModal = () => {
    setPaymentAmount(null);
    setRegisterError(false);
    setRegisterSuccess(false);
    setInvalidCustomAmount(false);
    setShowDonationModal((prevState) => !prevState);
  };

  const handleUpdatePaymentFrequency = (frequency) => {
    setPaymentFrequency(frequency);
  };

  const handleUpdatePaymentAmount = (event) => {
    setFormError(false);
    setRegisterError(false);
    setPaymentAmount(event);
  };

  const handleUpdatePaymentCustomAmount = (event) => {
    setRegisterError(false);
    if (event.target.value < 999) {
      setInvalidCustomAmount(true);
    } else {
      setInvalidCustomAmount(false);
    }
    setPaymentAmount(event.target.value);
  };

  const handleSubmitSubscription = async () => {
    if (paymentAmount === null) {
      setFormError(true);
    } else {
      setFormError(false);
    }

    if (!formError && !invalidCustomAmount && paymentAmount != null) {
      try {
        await registerSubscription(subscriptionInfo);
        setRegisterError(false);
        setRegisterSuccess(true);
      } catch (e) {
        setRegisterSuccess(false);
        setRegisterError(true);
      }
    }
    setTimeout(() => {
      window.location.reload(false);
    }, "700");
  };

  const handleSubmitDonation = () => {
    setRegisterSuccess(true);
  };

  if (loading) return isLoading();
  if (error) return <Error error={error} />;

  const handleNavigationState = (tabValue) => {
    setSelectedTab(tabValue);
  };

  return (
    <div className="main-profile-container">
      <ProfileHeader
        handleShowModal={handleShowModal}
        handleShowDonationModal={handleShowDonationModal}
        name={data.name}
        data={data.header_data}
        allData={data}
        user={user}
      />
      <NavigationBar
        onClick={() => handleNavigationState("overview")}
        selectedTab={selectedTab}
        onClick1={() => handleNavigationState("projects")}
        onClick2={() => handleNavigationState("impact")}
        onClick3={() => handleNavigationState("keyinformation")}
      />
      <TabContent selectedTab={selectedTab} data={data} />
      <SubscriptionModal
        open={showModal}
        onClose={handleShowModal}
        paymentFrequency={paymentFrequency}
        addQuarterlyPaymentMethod={() =>
          handleUpdatePaymentFrequency("quarterly")
        }
        addMonthlyPaymentMethod={() => handleUpdatePaymentFrequency("monthly")}
        paymentAmount={paymentAmount}
        add1000PaymentAmount={() => handleUpdatePaymentAmount(1000)}
        add2500PaymentMound={() => handleUpdatePaymentAmount(2500)}
        add5000PaymentAmount={() => handleUpdatePaymentAmount(5000)}
        addCustomPaymentAmount={handleUpdatePaymentCustomAmount}
        handleSubmitSubscription={handleSubmitSubscription}
        formError={formError}
        invalidCustomAmount={invalidCustomAmount}
        registerError={registerError}
        registerSuccess={registerSuccess}
      />
      <DonateModal
        open={showDonationModal}
        onClose={handleShowDonationModal}
        paymentFrequency={paymentFrequency}
        addQuarterlyPaymentMethod={() =>
          handleUpdatePaymentFrequency("quarterly")
        }
        addMonthlyPaymentMethod={() => handleUpdatePaymentFrequency("monthly")}
        paymentAmount={paymentAmount}
        add1000PaymentAmount={() => handleUpdatePaymentAmount(1000)}
        add2500PaymentMound={() => handleUpdatePaymentAmount(2500)}
        add5000PaymentAmount={() => handleUpdatePaymentAmount(5000)}
        addCustomPaymentAmount={handleUpdatePaymentCustomAmount}
        handleSubmitDonation={handleSubmitDonation}
        formError={formError}
        invalidCustomAmount={invalidCustomAmount}
        registerError={registerError}
        registerSuccess={registerSuccess}
      />
    </div>
  );
};

export default NonProfitProfilePage;
