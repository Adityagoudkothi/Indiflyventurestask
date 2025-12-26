        "use client";
import React, {  useState } from "react";
import { Container, Row, Col, Form,Card, Button,Tabs,Tab } from "react-bootstrap";
import styles from "./page.module.css";
import Image from "next/image";
import indiflylogo from "../../public/indiflylogo.svg";
import {
  FaLinkedinIn,
  FaXTwitter,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa6";
const Footer = () => {

      return (
    <React.Fragment>
        <Container>
          <Row className="py-4">
            <Col lg={6} xl={4} md={6} className=" mb-5 mb-xl-0">
              <section className="footer-brand">
                <div className="brand-logo mb-4">
                  <Image src={indiflylogo} alt="" />
                </div>

                <h3 className={styles.footerbrandheading}>
                  Building{" "}
                  <strong className={styles.footerbrand1}>Ventures</strong>,
                  Building
                  <span className={styles.footerbrand1}> Nation</span>.
                </h3>

                <p className={styles.footerbranddesc}>
                  A venture builder empowering mission-driven founders with
                  resources, functional expertise and strategic partnerships to{" "}
                  <em className={styles.footerbrand1}>
                    dream, build, and grow
                  </em>
                  .
                </p>

                <div className={styles.coonectwithusbg}>
                  <span>Connect with us:</span>
                  <a
                    aria-label="LinkedIn"
                    href="#"
                    className=" ms-2 me-2 iconbox"
                  >
                    <FaLinkedinIn />
                  </a>
                  <a
                    aria-label="X"
                    href="#"
                    className=" ms-2 me-2 coonectwithusclr iconbox1"
                  >
                    <FaXTwitter />
                  </a>
                  <a
                    aria-label="Facebook"
                    href="#"
                    className=" ms-2 me-2 iconbox"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    aria-label="Instagram"
                    href="#"
                    className=" ms-2 me-2 iconbox"
                  >
                    <FaInstagram />
                  </a>
                </div>
              </section>
            </Col>

            {/* Home */}
            <Col lg={6} xl={2} md={6} className="mt-5 mb-5 mt-xl-0 mb-xl-0">
              <nav aria-label="Footer Home Links">
                <h4 className={`${styles.footertitleheading} mb-3`}>Home</h4>
                <ul className={styles.lsnone}>
                  <li className="mb-3">
                    <a href="#" className={styles.footertitleheading1}>
                      About INCORE
                    </a>
                  </li>
                  <li className="mb-3">
                    <a href="#" className={styles.footertitleheading1}>
                      Contact Us
                    </a>
                  </li>
                  <li className="mb-3">
                    <a href="#" className={styles.footertitleheading1}>
                      Customer Stories
                    </a>
                  </li>
                  <li className="mb-3">
                    <a href="#" className={styles.footertitleheading1}>
                      About Indify
                    </a>
                  </li>
                </ul>
              </nav>
            </Col>

            {/* InCore */}
            <Col lg={6} xl={3} md={6} className=" mb-5  mb-xl-0">
              <nav aria-label="Footer InCore Links">
                <h4 className={`${styles.footertitleheading} mb-3`}>InCore</h4>
                <ul className={styles.lsnone}>
                  <li className="mb-3">
                    <a href="#" className={styles.footertitleheading1}>
                      InSurge (Marketing & Growth)
                    </a>
                  </li>
                  <li className="mb-3">
                    <a href="#" className={styles.footertitleheading1}>
                      InStack (Tech & Product)
                    </a>
                  </li>
                  <li className="mb-3">
                    <a href="#" className={styles.footertitleheading1}>
                      InVolve (HR & Culture)
                    </a>
                  </li>
                  <li className="mb-3">
                    <a href="#" className={styles.footertitleheading1}>
                      InSure (Legal & Compliance)
                    </a>
                  </li>
                </ul>
              </nav>
            </Col>

            {/* Quick Links */}
            <Col lg={6} xl={3} md={6} className=" mb-5  mb-xl-0">
              <nav aria-label="Footer Quick Links">
                <h4 className={`${styles.footertitleheading} mb-3`}>
                  Quick links
                </h4>
                <ul className={styles.lsnone}>
                  <li className="mb-3">
                    <a href="#" className={styles.footertitleheading1}>
                      Blogs
                    </a>
                  </li>
                  <li className="mb-3">
                    <a href="#" className={styles.footertitleheading1}>
                      Privacy Policy
                    </a>
                  </li>
                  <li className="mb-3">
                    <a href="#" className={styles.footertitleheading1}>
                      Terms & Conditions
                    </a>
                  </li>
                  <li className="mb-3">
                    <a href="#" className={styles.footertitleheading1}>
                      SiteMap
                    </a>
                  </li>
                </ul>
              </nav>
            </Col>
          </Row>
        </Container>
           </React.Fragment>
  )
}

export default Footer;