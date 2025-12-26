"use client";
import React, {  useState } from "react";
import { Container, Row, Col, Form,Card, Button,Tabs,Tab } from "react-bootstrap";
import styles from "./page.module.css";
import Image from "next/image";
import sectorframe16 from "../../public/sectorframe16.svg";
const Ondctab = () => {
 


  return (
   <React.Fragment>
<Tabs
      defaultActiveKey="home"
      id="payments-tab-example"
      className="mb-3 pt-3 justify-content-start border-bottom-0 psrelative1 "
      style={{position: "absolute"}}
    >
      <Tab eventKey="home" title="IndiSpeed" className="text-center ">
     <Row className="align-items-end">
    <Col md={12} lg={8} xl={8} className=" sectorframe1 text-start pe-0">
<h6 className={`${styles.indtitle1} mt-5 pt-3`}>Smarter Logistics for Bharat</h6>
<h6 className={`${styles.indtitle2} mt-3`}>ONDC-powered courier and delivery <br/>orchestration platform.</h6>
<p className={`${styles.inddesc} mt-3 pe-3`}>
     IndiSpeed enables D2C brands, enterprises, and sellers to ship <br/>faster, smarter, and at scale.    </p>
    <ul className="indlist">
<li>API-first logistics integration</li>
<li>Bulk dispatch via enterprise dashboard</li>
<li>ONDC-ready multi-channel plugins</li>
<li>Intercity & hyperlocal delivery</li>
<li>Transparent pricing & SLA tracking</li>
  </ul>
<div className="mt-4 d-flex mb-3 mb-xl-0">
    <div><Button className="indbtn1">Partner with us</Button></div><div className="ms-md-4 ms-2"><Button className="indbtn2">Explore More →</Button></div>
    </div>
  
    </Col>
    <Col md={12} lg={4} xl={4} className=" ps-0 sectorp22">
    <Image src={sectorframe16} alt="Indipe Phone" className="img-fluid sectorphone1" />
    </Col>
</Row>
      </Tab>
    </Tabs>

   </React.Fragment>
  );
};

export default Ondctab;
