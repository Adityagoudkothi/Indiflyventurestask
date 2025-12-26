"use client";
import React, {  useState } from "react";
import { Container, Row, Col, Form,Card, Button,Tabs,Tab } from "react-bootstrap";
import styles from "./page.module.css";
import Image from "next/image";
import sectorframe11 from "../../public/sectorframe11.png";
import sectorframe12 from "../../public/sectorframe12.svg";
import sectorframe13 from "../../public/sectorframe13.svg";
const Paymentstab = () => {
 


  return (
   <React.Fragment>
<Tabs
      defaultActiveKey="home"
      id="payments-tab-example"
      className="mb-3 pt-3 justify-content-start border-bottom-0 psrelative1 "
      style={{position: "absolute"}}
    >
      <Tab eventKey="home" title="Indipe" className="text-center ">
     <Row className="align-items-end">
    <Col md={12} lg={8} xl={8} className=" sectorframe1 text-start pe-0">
<h6 className={`${styles.indtitle1} mt-5 pt-3`}>Wealth tech</h6>
<h6 className={`${styles.indtitle2} mt-3`}>Seamless wealth creation and digital payments 
for all</h6>
<p className={`${styles.inddesc} mt-3 pe-3`}>
    Empowering individuals with secure, user-friendly financial tools. <br/>From UPI transactions to personalized wealth management, we make financial growth accessible to everyone
    </p>
    <ul className="indlist">
        <li>User-friendly mutual fund investments</li>
<li>Secure UPI transactions</li>
<li>Advanced portfolio tracking tools</li>
<li>Personalized financial guidance</li>
<li>Partner program for mutual fund distribution</li>
  </ul>
<div className="mt-4 d-flex mb-3 mb-xl-0 ">
    <div><Button className="indbtn1">Install the App</Button></div><div className="ms-md-4 ms-2"><Button className="indbtn2">Explore More →</Button></div>
    </div>
  
    </Col>
    <Col md={12} lg={4} xl={4} className=" ps-0 sectorp22">
    <Image src={sectorframe11} alt="Indipe Phone" className="img-fluid sectorphone1" />
    </Col>
</Row>
      </Tab>

      <Tab eventKey="profile" title="Indiconnect" className="text-center">
         <Row className="align-items-end">
    <Col md={12} lg={8} xl={8} className="mb-4 sectorframe1 text-start pe-0">
<h6 className={`${styles.indtitle1} mt-5 pt-3`}>B2B Payments</h6>
<h6 className={`${styles.indtitle2} mt-3`}>One-stop platform for payments, banking, 
and compliance</h6>
<p className={`${styles.inddesc} mt-3 pe-3`}>
   Designed for SMEs and co-operatives. Indiconnect unifies<br/> essential financial services into one seamless stack.<span style={{style:"visibility:hidden"}}>essential financial services into one seamless stack.</span>
    </p>
    <ul className="indlist">

<li> UPI, Cards, Wallets, Netbanking</li>
<li>Virtual accounts & payouts</li>
<li>Automated reconciliation</li>
<li>KYC, KYB & credit rating tools</li>
<li>Tailored for businesses & co-operatives</li>
  </ul>
<div className="d-flex mt-4 mb-3  mb-xl-0 ">
    <div><Button className="indbtn1">Install the App</Button></div><div className="ms-md-4 ms-2"><Button className="indbtn2">Explore More →</Button></div>
    </div>
  
    </Col>
    <Col md={12} lg={4} xl={4} className="mb-4 ps-0 sectorp22">
    <Image src={sectorframe12} alt="Indipe Phone" className="img-fluid sectorphone1" />
    </Col>
</Row>
      </Tab>
      <Tab eventKey="contact" title="IndiNXT" className="text-center">
        <Row className="align-items-end">
    <Col md={12} lg={8} xl={8} className="mb-4 sectorframe1 text-start pe-0">
<h6 className={`${styles.indtitle1} mt-5 pt-3`}>UPI Infrastructure</h6>
<h6 className={`${styles.indtitle2} mt-3`}>UPI infrastructure built for Bharat, ready for the world.</h6>
<p className={`${styles.inddesc} mt-3 pe-3`}>
IndiNXT powers banks, fintechs, and enterprises <br/>with secure, scalable, and intelligent payment switching solutions.    </p>
    <ul className="indlist">

<li> UPI Acquiring & Issuing Switch</li>
<li>T-OTP Solutions</li>
<li>Fraud & risk management</li>
<li>Merchant management platform</li>
<li>Intelligent routing & high availability</li>
  </ul>
<div className="d-flex mt-4 mb-3 mb-xl-0">
    <div><Button className="indbtn1">Partner with us</Button></div><div className="ms-md-4 ms-2"><Button className="indbtn2">Explore More →</Button></div>
    </div>
  
    </Col>
    <Col md={12} lg={4} xl={4} className="mb-4 ps-0 sectorp22">
    <Image src={sectorframe13} alt="Indipe Phone" className="img-fluid sectorphone1" />
    </Col>
</Row>
      </Tab>
    </Tabs>

   </React.Fragment>
  );
};

export default Paymentstab;
