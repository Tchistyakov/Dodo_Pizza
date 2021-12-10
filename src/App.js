import React, { useState, useEffect } from "react";
import Header from "./header/Header";
import Main from "./main/Main";
import Footer from "./footer/Footer";
import Modal from "./component/Modal/Modal";
import "./App.css";

function App() {

  const [cardModal, setCardModal] = useState(null);
  const clouseModal = () => setCardModal(false);

  return (
    <>
      {cardModal && <Modal clouseModal={clouseModal} card={cardModal}></Modal>}
      <Header />
      <Main setCard={setCardModal} />
      <Footer />
    </>
  );
}

export default App;
