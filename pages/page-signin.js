/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Layout from "../components/Layout/Layout";
import Link from "next/link";
import { useState } from 'react';
import { useRouter } from 'next/router';
import { auth, sendSignInLinkToEmail } from '../firebase';

export default function Signin() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleLoginClick = async (e) => {
        e.preventDefault();
        try {
            const actionCodeSettings = {
                url: 'http://localhost:3000/main',  // Where to redirect after verification
                handleCodeInApp: true,
            };

            await sendSignInLinkToEmail(auth, email, actionCodeSettings);
            localStorage.setItem('emailForSignIn', email); // Store email for later use
            setMessage("OTP sent to your email. Please check your inbox.");

        } catch (error) {
            setMessage("Error: " + error.message);
        }
    };

    return (
        <Layout>
            <section className="pt-100 login-register">
                <div className="container">
                    <div className="row login-register-cover">
                        <div className="col-lg-4 col-md-6 col-sm-12 mx-auto">
                            <div className="text-center">
                                <p className="font-sm text-brand-2">Welcome back!</p>
                                <h2 className="mt-10 mb-5 text-brand-1">Member Login</h2>
                                <p className="font-sm text-muted mb-30">Access to all features. No credit card required.</p>
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
                                    <button className="btn btn-brand-1 hover-up w-100" type="submit">
                                        Send OTP
                                    </button>
                                </div>
                                <div className="text-muted text-center">
                                    Don't have an Account?
                                    <Link legacyBehavior href="/page-register">
                                        <a>Register</a>
                                    </Link>
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
