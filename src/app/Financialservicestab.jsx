"use client";
import React, {  useState } from "react";
import { Container, Row, Col, Form,Card, Button,Tabs,Tab } from "react-bootstrap";
import styles from "./page.module.css";
import Image from "next/image";
import sectorframe15 from "../../public/sectorframe15.svg";
import sectorframe14 from "../../public/sectorframe14.svg";
const Financialservicestab = () => {
 


  return (
   <React.Fragment>
<Tabs
      defaultActiveKey="home"
      id="payments-tab-example"
      className="mb-3 pt-3 justify-content-start border-bottom-0 psrelative1 "
      style={{position: "absolute"}}
    >
      <Tab eventKey="home" title="Sec2Pay" className="text-center ">
     <Row className="align-items-end">
    <Col md={12} lg={8} xl={8} className=" sectorframe1 text-start pe-0">
<h6 className={`${styles.indtitle1} mt-5 pt-3`}>Whitelabel Fintech Infrastructure</h6>
<h6 className={`${styles.indtitle2} mt-3`}>Sec2Pay empowers institutions to launch fintech <br/>services under their own brand</h6>
<p className={`${styles.inddesc} mt-3 pe-3`}>
    From prepaid cards to payments, lending, and more. A compliant, <br/>modular platform to scale financial inclusion.    </p>
    <ul className="indlist">
<li> White-label payment solutions</li>
<li>Prepaid cards & wallets</li>
<li>Micro-ATM & AePS</li>
<li>Lending & credit enablement</li>
<li>Enterprise-grade compliance & security</li>
  </ul>
<div className="mt-4 d-flex mb-3 mb-xl-0">
    <div><Button className="indbtn1">Partner with us</Button></div><div className="ms-md-4 ms-2"><Button className="indbtn2">Explore More →</Button></div>
    </div>
  
    </Col>
    <Col md={12} lg={4} xl={4} className=" ps-0 sectorp22">
    <Image src={sectorframe14} alt="Indipe Phone" className="img-fluid sectorphone1" />
    </Col>
</Row>
      </Tab>

      <Tab eventKey="profile" title="Indikendra" className="text-center">
         <Row className="align-items-end">
    <Col md={12} lg={8} xl={8} className="mb-4 sectorframe1 text-start pe-0">
<h6 className={`${styles.indtitle1} mt-5 pt-3`}>Last mile digital banking</h6>
<h6 className={`${styles.indtitle2} mt-3`}>IndiKendra bridges financial access by offering last-mile digital and assisted services</h6>
<p className={`${styles.inddesc} mt-3 pe-3`}>
   IndiKendra bridges financial access by offering last-mile digital and <br/>assisted services, ensuring inclusion across towns and villages.    </p>
    <ul className="indlist">
<li> White-label payment solutions</li>
<li>Prepaid cards & wallets</li>
<li>Micro-ATM & AePS</li>
<li>Lending & credit enablement</li>
<li>Enterprise-grade compliance & security</li>
  </ul>
<div className="mt-4 d-flex mb-3 mb-xl-0 ">
    <div><Button className="indbtn1">Partner with us</Button></div><div className="ms-md-4 ms-2"><Button className="indbtn2">Explore More →</Button></div>
    </div>
  
    </Col>
    <Col md={12} lg={4} xl={4} className="mb-4 ps-0 sectorp22">
    <Image src={sectorframe15} alt="Indipe Phone" className="img-fluid sectorphone1" />
    </Col>
</Row>
      </Tab>
    </Tabs>

   </React.Fragment>
  );
};

export default Financialservicestab;
