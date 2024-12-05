/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Layout from "../components/Layout/Layout";
import BlogSlider from "./../components/sliders/Blog";
import TestimonialSlider1 from "./../components/sliders/Testimonial1";

export default function About() {
    return (
        <>
            <Layout>
                <div>
                    <section className="section-box">
                        <div className="breacrumb-cover bg-img-about">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <h2 className="mb-10">About Us</h2>
                                        <p className="font-lg color-text-paragraph-2">Get the latest news, updates and tips</p>
                                    </div>
                                    <div className="col-lg-6 text-lg-end">
                                        <ul className="breadcrumbs mt-40">
                                            <li>
                                                <a className="home-icon" href="#">
                                                    Home
                                                </a>
                                            </li>
                                            <li>About Us</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section-box mt-50">
                        <div className="post-loop-grid">
                            <div className="">
                                <div className="text-center">
                                    <h6 className="f-18 color-text-mutted text-uppercase">Our company</h6>
                                    <h2 className="section-title mb-10 wow animate__animated animate__fadeInUp">Welcome to OfferNHire</h2>
                                    <p className="font-sm color-text-paragraph wow animate__animated animate__fadeInUp w-lg-50 mx-auto">We’re excited to have you here! OfferNHire is more than just a job search platform; it’s a community dedicated to helping you discover purpose, forge connections, and advance your career. Whether you're on the hunt for your next opportunity or seeking to hire the perfect candidate, we're here to support you every step of the way.</p>
                                </div>
                                <div className="row mt-70 justify-content-center">
                                    {/* <div className="col-lg-6 col-md-12 col-sm-12">
                                        <img src="assets/imgs/page/about/img-about2.png" alt="joxBox" />
                                    </div> */}
                                    <div className="col-lg-6 col-md-12 col-sm-12">
                                        <h3 className="mt-15 text-center">Our Story: Born from Passion and Shared Purpose</h3>
                                        <div className="mt-20 justify-content-center">
                                           <p className="font-md color-text-paragraph mt-20">Founded in 2024, OfferNHire emerged from a common experience we all understand, witnessing friends, colleagues, and loved ones navigate career transitions and job market challenges. Motivated by the real stories behind every resume and the vision behind each job post, we created this platform to offer hope, connection, and opportunity to job seekers everywhere</p>
                                        </div>
                                       
                                    </div>
                                </div>
                                <div className="row mt-70 justify-content-center">
                                    {/* <div className="col-lg-6 col-md-12 col-sm-12">
                                        <img src="assets/imgs/page/about/img-about2.png" alt="joxBox" />
                                    </div> */}
                                    <div className="col-lg-6 col-md-12 col-sm-12">
                                        <h3 className="mt-15 text-center">Our Mission: Empowering You to Find Fulfilling Careers</h3>
                                        <div className="mt-20 justify-content-center">
                                            <p className="font-md color-text-paragraph mt-20">As we launch OfferNHire, our mission is clear, to transform job searching into an empowering experience, filled with possibilities and tailored to each individual's unique journey. Every job seeker deserves the chance to realize their potential, and every company should have access to the talent that drives success. We are committed to bridging this gap in a supportive, straightforward, and personalized manner.</p>
                                            
                                        </div>
                                       
                                    </div>
                                </div>
                                <div className="row mt-70 justify-content-center">
                                    {/* <div className="col-lg-6 col-md-12 col-sm-12">
                                        <img src="assets/imgs/page/about/img-about2.png" alt="joxBox" />
                                    </div> */}
                                    <div className="col-lg-6 col-md-12 col-sm-12">
                                        <h3 className="mt-15 text-center">Why Choose OfferNHire? Real Solutions for Real Careers</h3>
                                        <div className="mt-20 justify-content-center">
                                            <p className="font-md color-text-paragraph mt-20">At OfferNHire, we provide personalized job recommendations that ensure a true match for every role. Our platform simplifies the job hunting and hiring process, equipping you with the tools you need to focus on what matters most, finding a career that showcases your strengths or discovering the best talent to elevate your team.</p>
                                            
                                        </div>
                                       
                                    </div>
                                </div>
                                <div className="row mt-70 justify-content-center">
                                    {/* <div className="col-lg-6 col-md-12 col-sm-12">
                                        <img src="assets/imgs/page/about/img-about2.png" alt="joxBox" />
                                    </div> */}
                                    <div className="col-lg-6 col-md-12 col-sm-12">
                                        <h3 className="mt-15 text-center">Our Vision: Creating a Future Where Everyone Thrives</h3>
                                        <div className="mt-20 justify-content-center">
                                            <p className="font-md color-text-paragraph mt-20">Imagine a future where job searching is not just a task but an inspiring journey that connects individuals with careers aligned with their values, skills, and aspirations. OfferNHire is dedicated to building this reality. We believe that meaningful work fosters fulfilment and purpose, and that everyone, regardless of their stage in life, deserves the opportunity to find it. We are thrilled about the future and excited to share this journey with you.</p>
                                            
                                        </div>
                                       
                                    </div>
                                </div>
                                <div className="row mt-70 justify-content-center">
                                    {/* <div className="col-lg-6 col-md-12 col-sm-12">
                                        <img src="assets/imgs/page/about/img-about2.png" alt="joxBox" />
                                    </div> */}
                                    <div className="col-lg-6 col-md-12 col-sm-12">
                                        <h3 className="mt-15 text-center">Thank You for Joining Us</h3>
                                        <div className="mt-20 justify-content-center">
                                            <p className="font-md color-text-paragraph mt-20">Whether you're embarking on a new chapter in your career or looking to add the perfect team member, we’re grateful to have you with us. Together, we’re cultivating a community where dreams and careers unite.</p>
                                            
                                        </div>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section-box mt-80">
                        <div className="post-loop-grid">
                            <div className="container">
                                <div className="text-center">
                                    <h6 className="f-18 color-text-mutted text-uppercase">Our company</h6>
                                    <h2 className="section-title mb-10 wow animate__animated animate__fadeInUp">Meet the Individuals, Driven, Passionate, and Dedicated</h2>
                                    <p className="font-sm color-text-paragraph w-lg-50 mx-auto wow animate__animated animate__fadeInUp">This project wouldn’t be possible without the hard work and commitment of our talented individuals. Each brings unique skills and a dedication to making OfferNHire a success. We’re thankful for their contributions and eager to witness the positive impact they’ll continue to have in their careers.</p>
                                </div>
                                <div className="row mt-70" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-md-30">
                                        <div className="card-grid-4 text-center hover-up">
                                            <div className="image-top-feature">
                                                <figure>
                                                    <img alt="jobBox" src="assets/imgs/page/about/candidate2.jpg" />
                                                </figure>
                                            </div>
                                            <div className="card-grid-4-info">
                                                <h5 className="mt-10">Zaiyaan Najam</h5>
                                                <p className="font-xs color-text-paragraph-2 mt-5 mb-5">Frontend Developer</p>
                                                <div className="rate-reviews-small pt-5">
                                                    <span>
                                                        <img src="assets/imgs/template/icons/star.svg" alt="jobBox" />
                                                    </span>
                                                    <span>
                                                        <img src="assets/imgs/template/icons/star.svg" alt="jobBox" />
                                                    </span>
                                                    <span>
                                                        <img src="assets/imgs/template/icons/star.svg" alt="jobBox" />
                                                    </span>
                                                    <span>
                                                        <img src="assets/imgs/template/icons/star.svg" alt="jobBox" />
                                                    </span>
                                                    <span>
                                                        <img src="assets/imgs/template/icons/star.svg" alt="jobBox" />
                                                    </span>
                                                    <span className="ml-10 color-text-mutted font-xs">
                                                        <span>(</span>
                                                        <span>65</span>
                                                        <span>)</span>
                                                    </span>
                                                </div>
                                                <span className="card-location">Bangalore, India</span>
                                                <div className="text-center mt-30">
                                                    <a className="share-facebook social-share-link" href="#" />
                                                    <a className="share-twitter social-share-link" href="#" />
                                                    <a className="share-instagram social-share-link" href="#" />
                                                    <a className="share-linkedin social-share-link" href="#" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-md-30">
                                        <div className="card-grid-4 text-center hover-up">
                                            <div className="image-top-feature">
                                                <figure>
                                                    <img alt="jobBox" src="assets/imgs/page/about/candidate1.jpg" />
                                                </figure>
                                            </div>
                                            <div className="card-grid-4-info">
                                                <h5 className="mt-10">Floyd Miles</h5>
                                                <p className="font-xs color-text-paragraph-2 mt-5 mb-5">UI/UX Designer</p>
                                                <div className="rate-reviews-small pt-5">
                                                    <span>
                                                        <img src="assets/imgs/template/icons/star.svg" alt="jobBox" />
                                                    </span>
                                                    <span>
                                                        <img src="assets/imgs/template/icons/star.svg" alt="jobBox" />
                                                    </span>
                                                    <span>
                                                        <img src="assets/imgs/template/icons/star.svg" alt="jobBox" />
                                                    </span>
                                                    <span>
                                                        <img src="assets/imgs/template/icons/star.svg" alt="jobBox" />
                                                    </span>
                                                    <span>
                                                        <img src="assets/imgs/template/icons/star.svg" alt="jobBox" />
                                                    </span>
                                                    <span className="ml-10 color-text-mutted font-xs">
                                                        <span>(</span>
                                                        <span>28</span>
                                                        <span>)</span>
                                                    </span>
                                                </div>
                                                <span className="card-location">Chicago, US</span>
                                                <div className="text-center mt-30">
                                                    <a className="share-facebook social-share-link" href="#" />
                                                    <a className="share-twitter social-share-link" href="#" />
                                                    <a className="share-instagram social-share-link" href="#" />
                                                    <a className="share-linkedin social-share-link" href="#" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-md-30">
                                        <div className="card-grid-4 text-center hover-up">
                                            <div className="image-top-feature">
                                                <figure>
                                                    <img alt="jobBox" src="assets/imgs/page/about/team3.png" />
                                                </figure>
                                            </div>
                                            <div className="card-grid-4-info">
                                                <h5 className="mt-10">Devon Lane</h5>
                                                <p className="font-xs color-text-paragraph-2 mt-5 mb-5">Frontend Developer</p>
                                                <div className="rate-reviews-small pt-5">
                                                    <span>
                                                        <img src="assets/imgs/template/icons/star.svg" alt="jobBox" />
                                                    </span>
                                                    <span>
                                                        <img src="assets/imgs/template/icons/star.svg" alt="jobBox" />
                                                    </span>
                                                    <span>
                                                        <img src="assets/imgs/template/icons/star.svg" alt="jobBox" />
                                                    </span>
                                                    <span>
                                                        <img src="assets/imgs/template/icons/star.svg" alt="jobBox" />
                                                    </span>
                                                    <span>
                                                        <img src="assets/imgs/template/icons/star.svg" alt="jobBox" />
                                                    </span>
                                                    <span className="ml-10 color-text-mutted font-xs">
                                                        <span>(</span>
                                                        <span>65</span>
                                                        <span>)</span>
                                                    </span>
                                                </div>
                                                <span className="card-location">New York, US</span>
                                                <div className="text-center mt-30">
                                                    <a className="share-facebook social-share-link" href="#" />
                                                    <a className="share-twitter social-share-link" href="#" />
                                                    <a className="share-instagram social-share-link" href="#" />
                                                    <a className="share-linkedin social-share-link" href="#" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                   
                                   
                                    
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section-box mt-50 mb-50">
                        <div className="container">
                            <div className="text-start">
                                <h2 className="section-title mb-10 wow animate__animated animate__fadeInUp">News and Blog</h2>
                                <p className="font-lg color-text-paragraph-2 wow animate__animated animate__fadeInUp">Get the latest news, updates and tips</p>
                            </div>
                        </div>
                        <div className="container">
                            <div className="mt-50">
                                <div className="box-swiper style-nav-top">
                                    <BlogSlider />
                                </div>
                                <div className="text-center">
                                    <Link legacyBehavior href="/blog-grid">
                                        <a className="btn btn-brand-1 btn-icon-load mt--30 hover-up">Load More Posts</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section-box mt-30 mb-40">
                        <div className="container">
                            <h2 className="text-center mb-15 wow animate__animated animate__fadeInUp">Built for People, Powered by Purpose</h2>
                            <div className="font-lg color-text-paragraph-2 text-center wow animate__animated animate__fadeInUp">
                            People matter. Behind every thriving industry is the power and dedication of individuals. At OfferNHire, we firmly believe in the strength of community and the impact of connection. This job search portal is built for you. With your support, we’re on a mission to create meaningful change in the world of careers and recruitment. Every customer, every company, and every individual we connect with will be appreciated and remembered in our unique way. Together, let’s foster lasting change that benefits everyone in the job market.
                                {/* <br className="d-none d-lg-block" /> is to get overwhelmed with the number. */}
                            </div>
                            {/* <div className="row mt-50">
                                <div className="box-swiper">
                                    <TestimonialSlider1 />
                                </div>
                            </div> */}
                        </div>
                    </section>
                    <section className="section-box mt-50 mb-20">
                        <div className="container">
                            <div className="box-newsletter">
                                <div className="row">
                                    <div className="col-xl-3 col-12 text-center d-none d-xl-block">
                                        <img src="assets/imgs/template/newsletter-left.png" alt="joxBox" />
                                    </div>
                                    <div className="col-lg-12 col-xl-6 col-12">
                                        <h2 className="text-md-newsletter text-center">
                                            New Things Will Always
                                            <br /> Update Regularly
                                        </h2>
                                        <div className="box-form-newsletter mt-40">
                                            <form className="form-newsletter">
                                                <input className="input-newsletter" type="text" placeholder="Enter your email here" />
                                                <button className="btn btn-default font-heading icon-send-letter">Subscribe</button>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-12 text-center d-none d-xl-block">
                                        <img src="assets/imgs/template/newsletter-right.png" alt="joxBox" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </Layout>
        </>
    );
}
