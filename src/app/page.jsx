"use client";
import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Card,
  Button,
  Tabs,
  Tab,
  Nav,
  Navbar,
} from "react-bootstrap";
import styles from "./page.module.css";
import Image from "next/image";
import searchicon from "../../public/searchicon.svg";
import indiflylogo1 from "../../public/indiflylogo1.svg";
import indsightstitle from "../../public/indsightstitle.svg";
import indsightimg from "../../public/indsightimg.png";
import indiflyjourneytitle from "../../public/indiflyjourneytitle.svg";
import icoreimg from "../../public/icoreimg.svg";
import businessman from "../../public/businessman.png";
import CounterCard from "./countercard";
import incorebgbox from "../../public/incorebgbox.svg";
import indisightsbox from "../../public/indisightsbox.svg";
import becomepartner from "../../public/becomepartner.svg";
import getintouch from "../../public/getintouch.svg";
import oursectorsheading from "../../public/oursectorsheading.svg";
import propertylocation from "../../public/propertylocation.svg";
import Paymentstab from "./Paymentstab";
import Financialservicestab from "./Financialservicestab";
import Ondctab from "./Ondctab";
import Footer from "./Footer";


export default function Home() {
    const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, phone, company, message } = formData;

    // 🔹 Validation
    if (!name || !email || !phone || !company || !message) {
      alert("Please fill all required fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (phone.length < 10) {
      alert("Please enter a valid phone number.");
      return;
    }

    try {
      const response = await fetch(
        "https://694e0c21b5bc648a93bf376d.mockapi.io/contacts/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("API error");
      }

      alert("Form submitted successfully!");

      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });
    } catch (error) {
      alert("Something went wrong. Please try again.");
      console.error(error);
    }
  };
  return (
    <div className={styles.page}>
      <section className={styles.topbar}>
        <Container className="text-center">
          <span className={styles.text}>
            Get your business up & running with our unparalleled expertise |{" "}
            <span className={styles.code}>
              Use Code : <span className={styles.welcome}>WelcomeInd.</span>
            </span>
          </span>
        </Container>
      </section>
      <section className="hero">
        <Col md={10} lg={12} xl={10} className="mx-auto text-center pt-3">
          <Navbar expand="lg" className="hero-navbar" collapseOnSelect>
            <Container>
              <Navbar.Brand href="#home">
                <Image src={indiflylogo1} alt="logo" />
              </Navbar.Brand>

              <Navbar.Toggle aria-controls="responsive-navbar-nav" />

              <Navbar.Collapse id="responsive-navbar-nav" className="navbg1">
                <Nav className="ms-auto mb-2 mb-lg-0">
                  <Nav.Link href="#features" className="navlinkstitle">
                    Our Portfolio
                  </Nav.Link>
                  <Nav.Link href="#pricing" className="navlinkstitle">
                    InCORE
                  </Nav.Link>
                  <Nav.Link href="#pricing" className="navlinkstitle">
                    INDsights
                  </Nav.Link>
                  <Nav.Link href="#pricing" className="navlinkstitle">
                    About us
                  </Nav.Link>
                  <Nav.Link href="#pricing" className="navlinkstitle">
                    Get in Touch
                  </Nav.Link>
                </Nav>

                <Nav>
                  <Nav.Item className="ps-4">
                    <Image
                      src={searchicon}
                      alt="search"
                      width={52}
                      height={48}
                    />
                  </Nav.Item>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Col>

        {/* Hero Content */}
        <div className="text-center hero-content ">
          <h1 className={styles.herocontenttitle}>
            Building <span className="orange">Ventures</span>, Building{" "}
            <span className="orange">Nation</span>.
          </h1>

          <p>
            A venture builder empowering mission-driven founders with resources,
            functional expertise and strategic partnerships to{" "}
            <em className="orange ft700">dream, build, and grow</em>.
          </p>
        </div>

        {/* Cards */}
      </section>
      <section className="herocardsbg">
        <Col md={12} lg={10} xl={7} className="mx-auto text-center pt-3">
          <Row className="hero-cards ps-sm-3 ps-3 pe-3 pe-sm-3">
            <Col md={6} lg={4} xl={5} className="mb-4 mt-2 venturesbg ">
              <div className="card ventures venturesbg">
                <Row>
                  <Col
                    xs={12}
                    sm={9}
                    md={9}
                    lg={9}
                    xl={9}
                    className="text-start "
                  >
                    <h3 className={`${styles.ourtitle}`} id=" ourtitle">
                      Our <br />
                      <span
                        className={`${styles.venturestext}`}
                        id="venturestext"
                      >
                        Ventures
                      </span>
                    </h3>
                    <p
                      className={`${styles.venturesdesc} text-start pt-3 pb-3 pb-md-0 pb-lg-3`}
                    >
                      Learn more about our portfolio <br />
                      brands in the <strong> BFSI sector </strong> in India.
                    </p>
                    <Button className={`${styles.knowmorebtn}`}>
                      Know More →
                    </Button>
                  </Col>
                  <Col xs={12} sm={3} md={3} lg={3} xl={3}>
                    <Image
                      src={businessman}
                      alt="Indifly Ventures"
                      className="psrelative"
                      loading="lazy"
                      style={{ width: "auto", height: "250px" }}
                    />
                  </Col>
                </Row>
              </div>
            </Col>
            <Col md={6} lg={8} xl={7} className="mb-4">
              <Row className="hero-cards">
                <Col xs={6} md={6} lg={6} xl={6} className="mb-2 pe-2 ">
                  <div className="incorebg">
                    <Image
                      src={incorebgbox}
                      alt="Indifly Ventures"
                      style={{ width: "-webkit-fill-available" }}
                    />
                  </div>
                </Col>
                <Col xs={6} md={6} lg={6} xl={6} className="mb-2 ps-2 ">
                  <div className="indisightsbg1">
                    <Image
                      src={indisightsbox}
                      alt="Indifly Ventures"
                      style={{ width: "-webkit-fill-available" }}
                    />
                  </div>
                </Col>
                <Col md={12} lg={12} xl={12} className="">
                <Row>
                      <Col xs={6} md={6} lg={6} xl={7} className="mb-2 ps-lg-1 ">
                      <div className="becaomepartnerbtn">
                    <Image
                      src={becomepartner}
                      alt="Indifly Ventures"
                         style={{ width: "-webkit-fill-available" }}
                    />
                    </div>
                    </Col>
                        <Col xs={6} md={6} lg={6} xl={5} className="mb-2 ps-1 ">
                         <div className="getintouchbtn">
                    <Image
                      src={getintouch}
                      alt="Indifly Ventures"
                         style={{ width: "-webkit-fill-available" }}
                    />
                    </div>
                    </Col>
                    </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </section>
      <section
        className={` ${styles.bharatbg} py-5`}
        aria-label="Indifly Ventures Company mission and vision"
      >
        <Container>
          <Row>
            <Col xxl={8} xl={8} lg={12} className={styles.bharatcontent}>
              <article className="ps-xl-4">
                <h1>
                  We create platforms and ecosystems for{" "}
                  <em className={styles.missiondriverfounderstext}>
                    mission-driven founders
                  </em>{" "}
                  that cultivate brands bringing about digital inclusion and
                  transformative growth in the emerging regions of
                </h1>
                <h6 className={`${styles.bharat} mb-5`}>Bharat.</h6>

                <p className={styles.subtext}>
                  We are a venture builder co-creating alongside founders in
                  their journey <strong>from idea to industry</strong> and{" "}
                  <strong>beyond.</strong>
                </p>
              </article>
            </Col>

            <Col xxl={4} xl={4} lg={12} />
          </Row>
        </Container>
      </section>
      <section
        className={`${styles.oursectors1bg} py-5 mt-4`}
        aria-labelledby="oursectors-heading"
      >
        <div className="text-center pb-4">
          <Image
            src={oursectorsheading}
            alt="Indifly Ventures"
            loading="lazy"
            style={{ width: "360px", height: "auto" }}
          />
        </div>
        <h5 className={styles.oursectorsheading}>
          Integrated,{" "}
          <span className={styles.oursectorstitle1}> Inclusive </span>
          <span className={styles.oursectorstitle2}> & Innovative </span>
        </h5>
        <p className={styles.oursectorsdesc}>
          Equipping diverse brands in multiple sectors with essential resources,
          expertise, and unwavering support
        </p>
        <Tabs
          defaultActiveKey="home"
          id="controlled-tab-example"
          className="mb-3 justify-content-center border-bottom-0"
        >
          <Tab eventKey="home" title="Payments" className="text-center">
            <Col
              lg={8}
              xl={8}
              className="mx-auto text-center pt-3 px-3 px-md-3"
            >
              <Paymentstab />
            </Col>
          </Tab>

          <Tab
            eventKey="profile"
            title="Financial Services"
            className="text-center"
          >
            <Col
              lg={8}
              xl={8}
              className="mx-auto text-center pt-3 px-3 px-md-3"
            >
              <Financialservicestab />
            </Col>
          </Tab>
          <Tab
            eventKey="contact"
            title="ONDC Logistics"
            className="text-center"
          >
            <Col
              lg={8}
              xl={8}
              className="mx-auto text-center pt-3 px-3 px-md-3"
            >
              <Ondctab />
            </Col>
          </Tab>
        </Tabs>
      </section>
      <section
        className={`${styles.sectorbg} py-5 mt-5 mb-4`}
        aria-labelledby="sectors-heading"
      >
        <Container>
          <h5 className={styles.integratedtext}>
            Integrated expertise, delivered at
            <span className="textclr1"> every stage. </span>
          </h5>
          <h6 className={`${styles.coresmalltext} mt-4 mb-3`}>
            We don’t just advise, we embed. <br />
            <span className="f16 ft500"> With </span>{" "}
            <span className="f16 ft700">inSTACK, inSURGE, inSURE, </span>
            <span className="f16 ft500">and</span>
            <span className="f16 ft700"> inVOLVE</span>
            <span className="f16 ft500">
              {" "}
              founders gain the muscle of execution alongside <br />
              strategic leadership guidance.
            </span>
          </h6>
          <Image
            src={icoreimg}
            alt="Indifly Ventures"
            loading="lazy"
            style={{ width: "100%", height: "auto" }}
          />
        </Container>
      </section>
      <section
        className={`${styles.journeybg} py-5`}
        aria-labelledby="indisights-journey"
      >
        <div className="text-center pb-4">
          <Image
            src={indiflyjourneytitle}
            alt="Indifly Ventures"
            loading="lazy"
            style={{ width: "360px", height: "auto" }}
          />
        </div>
        <h5 className={styles.journeytitle}>
          Metrics that speak of countless stories of growth{" "}
          <em className="fw-bold">across Bharat!</em>
        </h5>
        <Container>
          <Row className=" justify-content-center px-xl-5 pt-5">
            <Col md={6} lg={6} xl={4} xxl={4} className="mb-4 ">
              <CounterCard value={7} suffix="+" label="Companies" />
            </Col>

            <Col md={6} lg={6} xl={4} xxl={4} className="mb-4">
              <CounterCard value={3} suffix="L+" label="Partners" />
            </Col>

            <Col md={6} lg={6} xl={4} xxl={4} className="mb-4">
              <CounterCard value={126} suffix="Cr+" label="Customers" />
            </Col>
          </Row>
        </Container>
      </section>
      <section
        className={`${styles.indisightsbg} py-5`}
        aria-labelledby="indisights-heading"
      >
        <div className="text-center pb-4">
          <Image
            src={indsightstitle}
            alt="Indifly Ventures"
            loading="lazy"
            style={{ width: "360px", height: "auto" }}
          />
        </div>
        <Container className="mt-4 px-xl-5">
          <Row className=" justify-content-center">
            {[1, 2, 3].map((item) => (
              <Col
                xs={12}
                md={6}
                lg={6}
                xl={4}
                xxl={4}
                key={item}
                className="mb-3 mb-xl-0"
              >
                <Card
                  className="border-0 h-100"
                  style={{
                    borderRadius: "18px",
                    backgroundColor: "#fff",
                    boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
                  }}
                >
                  <div className="card-body p-xl-3 p-0">
                    <h5 className={styles.indisightstitle}>
                      Lorem Ipsum blog Title
                    </h5>

                    <div className={`${styles.indisightsdesc} pb-3 pt-2`}>
                      Lorem Ipsum Subtext Title Lorem Ipsum Subtext Title Lorem
                      Ipsum Subtext Title
                    </div>

                    <Image
                      src={indsightimg}
                      alt="blog"
                      style={{
                        borderRadius: "12px",
                        width: "100%",
                      }}
                    />

                    <div className="py-3 text-center">
                      <Button className="readmorebtn w-100">Read more →</Button>
                    </div>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section
        className={`${styles.contactussectionclr} py-5`}
        aria-labelledby="contact-heading"
      >
        <Container>
          <div className={styles.contactusbg}>
            <Row>
              <Col md={12} lg={5} className={styles.left}>
                <h2
                  id="contact-heading"
                  className={`${styles.contactustitle} pt-5`}
                >
                  Let’s Talk
                </h2>
                <p className={styles.contactusdesc}>
                  Reach out to us with your queries, suggestions and
                  applications. We'd be happy to explore the next growth
                  opportunity!
                </p>

                <address className={styles.contactusdesc}>
                  <Row className="mb-3">
                    <Col md={1} className={styles.icon}>
                      <Image src={propertylocation} alt="Indifly Ventures" />
                    </Col>
                    <Col>
                      4074 Ebert Summit Suite 375
                      <br />
                      Lake Leonardchester
                    </Col>
                  </Row>
                </address>
              </Col>
              <Col md={12} lg={7}>
                <form onSubmit={handleSubmit}>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control contact-input inputbg"
                      id="name"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    <label className="text-white">
                      Name <span className="text-danger">*</span>
                    </label>
                  </div>

                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control contact-input inputbg"
                      id="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    <label className="text-white">
                      Email <span className="text-danger">*</span>
                    </label>
                  </div>

                  <div className="form-floating mb-3">
                    <input
                      type="tel"
                      className="form-control contact-input inputbg"
                      id="phone"
                      placeholder="Phone number"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                    <label className="text-white">
                      Phone number <span className="text-danger">*</span>
                    </label>
                  </div>

                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control contact-input inputbg"
                      id="company"
                      placeholder="Company name"
                      value={formData.company}
                      onChange={handleChange}
                    />
                    <label className="text-white">
                      Company name <span className="text-danger">*</span>
                    </label>
                  </div>

                  <div className="form-floating mb-4">
                    <textarea
                      className="form-control contact-input inputbg"
                      id="message"
                      placeholder="Message"
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                    <label className="text-white">
                      Message <span className="text-danger">*</span>
                    </label>
                  </div>

                  <Button
                    type="submit"
                    className={`btn  w-100 ${styles.contactbtn}`}
                  >
                    Submit
                  </Button>
                </form>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
      <footer className={`${styles.footerbg} py-5`} role="contentinfo">
<Footer />
      </footer>
    </div>
  );
}
