/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Layout from "../components/Layout/Layout";
import Link from "next/link";
import { useState } from 'react';

export default function Signin() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleLoginClick = (e) => {
        e.preventDefault();
        // Simulate sending OTP (just display a message)
        setMessage("OTP sent to your email. Please check your inbox.");
    };

    return (
        <Layout>
            <section className="pt-100 login-register">
                <div className="container">
                    <div className="row login-register-cover" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        {/* Left Image Column */}
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <img 
                                src="assets/imgs/template/signinpagephoto.webp"  // Add the path to your image here
                                alt="Your Image" 
                                className="img-fluid"  // Makes the image responsive
                                style={{ maxWidth: '100%', height: 'auto' }} 
                            />
                        </div>
                        {/* Right Form Column */}
                        <div className="col-lg-4 col-md-6 col-sm-12" style={{ marginTop: '-20px' }}> {/* Adjusted the margin-top to move up */}
                            {/* Don't have an Account? Register link aligned to the far right */}
                            <div className="text-muted text-end mb-20" style={{ textAlign: 'right', borderBottom: '1px solid #dcdcdc', paddingBottom: '20px' }}>
                                Don't have an Account? 
                                <Link legacyBehavior href="/page-register">
                                    <a>Register</a>
                                </Link>
                            </div>
                            <div className="text-center">
                                {/* Login heading with extra space below */}
                                <h4 className="mt-20 mb-20 text-brand-1" style={{ textAlign: 'left' }}>Login</h4>
                                <button className="btn social-login hover-up mb-20">
                                    <img src="assets/imgs/template/icons/icon-google.svg" alt="jobbox" />
                                    <strong>Sign in with Google</strong>
                                </button>
                                <div className="divider-text-center">
                                    <span>Or continue with</span>
                                </div>
                            </div>
                            <form className="login-register text-start mt-20" onSubmit={handleLoginClick}>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="input-1">
                                        Email address *
                                    </label>
                                    <input 
                                        className="form-control" 
                                        id="input-1" 
                                        type="email" 
                                        required 
                                        value={email} 
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter your email" 
                                    />
                                </div>
                                <div className="login_footer form-group d-flex justify-content-between">
                                    <Link legacyBehavior href="/page-contact">
                                        <a className="text-muted">Forgot Password</a>
                                    </Link>
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-brand-1 hover-up w-100" type="submit" onClick={() => window.location.href = '/index-3'}>
                                        Send OTP
                                    </button>
                                </div>
                                {message && <p>{message}</p>}
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
     