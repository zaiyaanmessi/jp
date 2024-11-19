import Layout from "../components/Layout/Layout";
import Link from "next/link";

export default function Register() {
    return (
        <>
            <Layout>
                <section className="pt-100 login-register">
                    <div className="container">
                        <div className="row login-register-cover">
                            {/* Left column for form */}
                            <div className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center">
                                <div style={{ maxWidth: '550px', width: '100%' }}>
                                    <div className="text-center">
                                        <h4 className="mt-25 mb-20 text-brand-1" style={{ textAlign: 'left' }}>Create Your Account</h4>
                                        <button className="btn social-login hover-up mb-20">
                                            <img src="assets/imgs/template/icons/icon-google.svg" alt="jobbox" />
                                            <strong >Sign up with Google</strong>
                                        </button>
                                        <div className="divider-text-center">
                                            <span>Or continue with</span>
                                        </div>
                                    </div>
                                    <form className="login-register text-start mt-20" action="#">
                                        <div className="form-group">
                                            <label className="form-label" htmlFor="input-1">
                                                Full Name *
                                            </label>
                                            <input className="form-control" id="input-1" type="text" required name="fullname" placeholder="Enter your full name" />
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label" htmlFor="input-2">
                                                Email *
                                            </label>
                                            <input className="form-control" id="input-2" type="email" required name="emailaddress" placeholder="Enter your email" />
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label" htmlFor="input-3">
                                                Username *
                                            </label>
                                            <input className="form-control" id="input-3" type="text" required name="username" placeholder="Enter your username" />
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label" htmlFor="input-4">
                                                Password *
                                            </label>
                                            <input className="form-control" id="input-4" type="password" required name="password" placeholder="************" />
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label" htmlFor="input-5">
                                                Re-Password *
                                            </label>
                                            <input className="form-control" id="input-5" type="password" required name="re-password" placeholder="************" />
                                        </div>
                                    </form>
                                </div>
                            </div>

                            {/* Right column for image */}
                            <div className="col-lg-6 col-md-6 d-none d-lg-block">
                                <img 
                                    src="assets/imgs/template/signinpagephoto.webp"
                                    alt="Registration Image" 
                                    className="img-fluid" 
                                    style={{ width: '100%', height: 'auto', borderRadius: '8px' }} 
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
}
