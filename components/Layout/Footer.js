/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="footer mt-50">
            <div className="container">
                <div className="row">
                    <div className="footer-col-1 col-md-3 col-sm-12">
                        <Link legacyBehavior href="/"><a><img alt="OfferNHire" src="assets/imgs/template/comp.png" /></a></Link>
                        <div className="mt-20 mb-20 font-xs color-text-paragraph-2">OfferNHire is the heart of the job community, the ultimate resource to discover and connect with top talent 
                        and job opportunities worldwide. Built for people, powered by purpose</div>
                        <div className="footer-social">
                            <a className="icon-socials icon-facebook" href="#" />
                            <a className="icon-socials icon-twitter" href="#" />
                            <a className="icon-socials icon-linkedin" href="#" /></div>
                    </div>
                    <div className="footer-col-2 col-md-2 col-xs-6" style={{ marginRight: '20px' }}>
  <h6 className="mb-20">For Clients</h6>
  <ul className="menu-footer">
    <li style={{ marginBottom: '10px' }}>
      <a href="#">Explore Job Listings</a>
    </li>
    <li style={{ marginBottom: '10px' }}>
      <a href="#">Search for Candidates</a>
    </li>
    <li style={{ marginBottom: '10px' }}>
      <a href="#">Connect with Employers</a>
    </li>
  </ul>
</div>
<div className="footer-col-3 col-md-2 col-xs-6" style={{ marginRight: '20px' }}>
  <h6 className="mb-20">Community</h6>
  <ul className="menu-footer">
    <li style={{ marginBottom: '10px' }}>
      <a href="/page-pricing">FAQ</a>
    </li>
    <li style={{ marginBottom: '10px' }}>
      <a href="/blog-grid">Blog</a>
    </li>
    <li style={{ marginBottom: '10px' }}>
      <a href="/knowledge-base">Knowledge Base</a>
    </li>
  </ul>
</div>
<div className="footer-col-4 col-md-2 col-xs-6">
  <h6 className="mb-20">The Company</h6>
  <ul className="menu-footer">
    <li style={{ marginBottom: '10px' }}>
      <a href="/page-about">About Us</a>
    </li>
    <li style={{ marginBottom: '10px' }}>
      <a href="/termscondition">Terms</a>
    </li>
    <li style={{ marginBottom: '10px' }}>
      <a href="#">Trust, Safety & Security</a>
    </li>
  </ul>
</div>

                    {/* <div className="footer-col-5 col-md-2 col-xs-6">
                        <h6 className="mb-20">More</h6>
                        <ul className="menu-footer">
                            <li>
                                <a href="#">Privacy</a></li>
                            <li>
                                <a href="#">Help</a></li>
                            <li>
                                <a href="#">Terms</a></li>
                            <li>
                                <a href="#">FAQ</a></li>
                        </ul>
                    </div> */}
                   <div className="footer-col-6 col-md-3 col-sm-12" style={{ marginLeft: 'auto' }}>
  <h6 className="mb-20">Download App</h6>
  <p className="color-text-paragraph-2 font-xs">Download our Apps and get extra 15% Discount on your first Order…!</p>
  <div className="mt-15">
    <a className="mr-5" href="#">
      <img src="assets/imgs/template/icons/app-store.png" alt="joxBox" />
    </a>
    <a href="#">
      <img src="assets/imgs/template/icons/android.png" alt="joxBox" />
    </a>
  </div>
</div>

                </div>
                <div className="footer-bottom mt-50">
                    <div className="row">
                        <div className="col-md-6"><span className="font-xs color-text-paragraph">Copyright © 2022. OfferNHire all right reserved</span></div>
                        <div className="col-md-6 text-md-end text-start">
                            <div className="footer-social">
                                <a className="font-xs color-text-paragraph" href="#">Privacy Policy</a>
                                <a className="font-xs color-text-paragraph mr-30 ml-30" href="#">Terms &amp; Conditions</a>
                                <a className="font-xs color-text-paragraph" href="#">Security</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    );
};

export default Footer;