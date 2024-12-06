import Link from "next/link";
import Layout from "../components/Layout/Layout";
import React, { useState, useEffect} from "react";
import { jsPDF } from "jspdf";


export default function CandidateDetails() {
    const [activeIndex, setActiveIndex] = useState(1);
   

   

    const handleOnClick = (index) => {
        setActiveIndex(index); // remove the curly braces
    };


    const downloadCV = () => {
        if (!jsPDF) {
            console.error('jsPDF not loaded');
            return;
        }

        // Create a new jsPDF instance
        const doc = new jsPDF();

        // Set up fonts and styles
        doc.setFont('helvetica');

        // Name and Contact Info
        doc.setFontSize(20);
        doc.setFont('helvetica', 'bold');
        doc.text("Doe John", 10, 20);

        doc.setFontSize(10);
        doc.setFont('helvetica', 'normal');
        doc.text("+91 0000000000 | abc@gmail.com | LinkedIn | GitHub", 10, 27);
        doc.text("Bangalore, Karnataka", 10, 34);

        // Skills Section
        doc.setFontSize(14);
        doc.setFont('helvetica', 'bold');
        doc.text("Skills", 10, 50);
        doc.setLineWidth(0.5);
        doc.line(10, 52, 60, 52);

        doc.setFontSize(10);
        doc.setFont('helvetica', 'normal');
        doc.text("Languages: C/C++, Python, HTML/CSS, JavaScript, TypeScript, SQL", 10, 58);
        doc.text("AI/ML: TensorFlow, Keras, Scikit-learn, Google Cloud AI APIs", 10, 63);
        doc.text("Frameworks: React.js, Next.js, Tailwind CSS", 10, 68);
        doc.text("Database: MySQL", 10, 73);
        doc.text("Developer Tools: Git, VS Code, Visual Studio", 10, 78);

        // Education Section
        doc.setFontSize(14);
        doc.setFont('helvetica', 'bold');
        doc.text("Education", 10, 95);
        doc.setLineWidth(0.5);
        doc.line(10, 97, 60, 97);

        doc.setFontSize(10);
        doc.setFont('helvetica', 'bold');
        doc.text("abc College of Engineering", 10, 103);
        doc.setFont('helvetica', 'normal');
        doc.text("Bangalore, Karnataka", 10, 108);
        doc.text("B.E Computer Science and Engineering; CGPA: 00", 10, 113);
        doc.text("Dec 2021 – July 2025", 10, 118);

        doc.setFont('helvetica', 'bold');
        doc.text("school(CBSE)", 10, 126);
        doc.setFont('helvetica', 'normal');
        doc.text("abc", 10, 131);
        doc.text("Class XII; Percentage: 90%", 10, 136);
        doc.text("July 2021", 10, 141);

        // Experience Section
        doc.setFontSize(14);
        doc.setFont('helvetica', 'bold');
        doc.text("Experience", 10, 158);
        doc.setLineWidth(0.5);
        doc.line(10, 160, 60, 160);

        doc.setFontSize(10);
        doc.setFont('helvetica', 'bold');
        doc.text("Indian Institute of Technology", 10, 166);
        doc.setFont('helvetica', 'normal');
        doc.text("Software Engineer", 10, 171);
        doc.text("Oct 2023 – Dec 2023, Internship", 10, 176);
        doc.text("• Developed scalable web pages using React.js, supporting 100% growth in user traffic.", 10, 181);
        doc.text("• Automated and optimised the data handling process for traffic", 10, 186);

        doc.setFont('helvetica', 'bold');
        doc.text("Raja Ramanna Centre for Advanced Technology", 10, 194);
        doc.setFont('helvetica', 'normal');
        doc.text("Machine Learning Intern", 10, 199);
        doc.text("Nov 2024 – Present, Internship", 10, 204);
        doc.text("• Developing a dynamic and user-friendly job portal using Next.js and MongoDB.", 10, 209);
        doc.text("• Implementing backend solutions for job listings, user authentication, and database management.", 10, 214);

        // Projects Section
        doc.setFontSize(14);
        doc.setFont('helvetica', 'bold');
        doc.text("Projects", 10, 231);
        doc.setLineWidth(0.5);
        doc.line(10, 233, 60, 233);

        doc.setFontSize(10);
        doc.setFont('helvetica', 'bold');
        doc.text("The Relation between GDP and IMR", 10, 239);
        doc.setFont('helvetica', 'normal');
        doc.text("• Built a front-end for a Machine Learning-based Framework to analyze datasets for Autism Spectrum Disorder detection.", 10, 244);
        doc.text("• Collaborated on implementing features such as data visualization and user input validation.", 10, 249);

        doc.setFont('helvetica', 'bold');
        doc.text("Study of the behavior of Serial Killers", 10, 257);
        doc.setFont('helvetica', 'normal');
        doc.text("• Analysing data from 1960 to 2020 and discover patterns in the data that show trends between Gross domestic product per capita, Infant Mortality rate, Literacy Rate, and Industrial Development.", 10, 262);
   

        doc.setFont('helvetica', 'bold');
        doc.text("IPL Analysis", 10, 275);
        doc.setFont('helvetica', 'normal');
        doc.text("• Analysing data from 2008 to 2015 to discover patterns such as trends, correlations, and probabilities.", 10, 280);
        doc.text("• Finding the differences between the best teams and players in various fields, as well as their performance on the field and the opponents.", 10, 285);
        doc.text("• Implemented multi-language translation using Google Cloud Translation API.", 10, 290);

        // Awards & Achievements Section
        doc.setFontSize(14);
        doc.setFont('helvetica', 'bold');
        doc.text("Awards & Achievements", 10, 307);
        doc.setLineWidth(0.5);
        doc.line(10, 309, 60, 309);

        doc.setFontSize(10);
        doc.text("• HackElite 24-Hour Hackathon: Contributed to developing an AI-based agriculture management system.", 10, 315);
        doc.text("• Hack4Heart Hackathon - Jayadeva Hospital: Developed a speech-to-text clinical reporting system.", 10, 320);

        // Save the PDF
        doc.save("Resume.pdf");
    };


    return (
        <>
            <Layout>
                <section className="section-box-2">
                    <div className="container">
                        <div className="banner-hero banner-image-single">
                            <img src="assets/imgs/page/candidates/img.png" alt="jobbox" />
                        </div>
                        <div className="box-company-profile">
                            <div className="image-compay">
                                <img src="assets/imgs/page/candidates/candidate-profile.png" alt="jobbox" />
                            </div>
                            <div className="row mt-10">
                                <div className="col-lg-8 col-md-12">
                                    <h5 className="f-18">
                                        Steven Jobs <span className="card-location font-regular ml-20">New York, US</span>
                                    </h5>
                                    <p className="mt-0 font-md color-text-paragraph-2 mb-15">UI/UX Designer. Front end Developer</p>
                                    <div className="mt-10 mb-15">
                                        <img src="assets/imgs/template/icons/star.svg" alt="jobbox" />
                                        <img src="assets/imgs/template/icons/star.svg" alt="jobbox" />
                                        <img src="assets/imgs/template/icons/star.svg" alt="jobbox" />
                                        <img src="assets/imgs/template/icons/star.svg" alt="jobbox" />
                                        <img src="assets/imgs/template/icons/star.svg" alt="jobbox" />
                                        <span className="font-xs color-text-mutted ml-10">(66)</span>
                                        <img className="ml-30" src="assets/imgs/page/candidates/verified.png" alt="jobbox" />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12 text-lg-end">
                    <button 
                        className="btn btn-download-icon btn-apply btn-apply-big"
                        onClick={downloadCV}
                        disabled={!jsPDF}
                    >
                        {jsPDF ? 'Download CV' : 'Loading...'}
                    </button>
                </div>
                            </div>
                        </div>
                        <div className="box-nav-tabs mt-40 mb-5">
                            <ul className="nav" role="tablist">
                                <li>
                                    <a className="btn btn-border aboutus-icon mr-15 mb-5 active" onClick={() => handleOnClick(1)}>
                                        Short Bio
                                    </a>
                                </li>
                                <li>
                                    <a className="btn btn-border recruitment-icon mr-15 mb-5" onClick={() => handleOnClick(2)}>
                                        Skills
                                    </a>
                                </li>
                                <li>
                                    <a className="btn btn-border people-icon mb-5" onClick={() => handleOnClick(3)}>
                                        Working Experience
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="border-bottom pt-10 pb-10" />
                    </div>
                </section>
                <section className="section-box mt-50">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                                <div className="content-single">
                                    <div className="tab-content">
                                        <div className={`tab-pane fade ${activeIndex === 1 && "show active"}`}>
                                            <h4>About Me</h4>
                                            <p>Hello there! My name is Alan Walker. I am a graphic designer, and I’m very passionate and dedicated to my work. With 20 years experience as a professional a graphic designer, I have acquired the skills and knowledge necessary to make your project a success.</p>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis illum fuga eveniet. Deleniti asperiores, commodi quae ipsum quas est itaque, ipsa, dolore beatae voluptates nemo blanditiis iste eius officia minus. Id nisi, consequuntur sunt impedit quidem, vitae mollitia!</p>
                                            <h4>Professional Skills</h4>
                                            <div className="row mb-40">
                                                <div className="col-lg-6 col-md-6 col-sm-12 mb-30">
                                                    <h6 className="color-text-paragraph-2">Programming</h6>
                                                    <div className="box-progress-bar mt-20">
                                                        <p className="font-xs color-text-paragraph-2 mb-10">HTML &amp; CSS</p>
                                                        <div className="progress">
                                                            <div className="progress-bar bg-paragraph-2" role="progressbar" style={{ width: "78%" }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
                                                                <span>78%</span>
                                                            </div>
                                                        </div>
                                                        <p className="font-xs color-text-paragraph-2 mb-10 mt-30">Javascript</p>
                                                        <div className="progress">
                                                            <div className="progress-bar bg-brand-2" role="progressbar" style={{ width: "88%" }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}>
                                                                <span>88%</span>
                                                            </div>
                                                        </div>
                                                        <p className="font-xs color-text-paragraph-2 mb-10 mt-30">Database</p>
                                                        <div className="progress">
                                                            <div className="progress-bar bg-paragraph-2" role="progressbar" style={{ width: "62%" }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}>
                                                                <span>62%</span>
                                                            </div>
                                                        </div>
                                                        <p className="font-xs color-text-paragraph-2 mb-10 mt-30">React JS</p>
                                                        <div className="progress">
                                                            <div className="progress-bar bg-paragraph-2" role="progressbar" style={{ width: "92%" }} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}>
                                                                <span>92%</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12 mb-30">
                                                    <h6 className="color-text-paragraph-2">Design</h6>
                                                    <div className="box-progress-bar mt-20">
                                                        <p className="font-xs color-text-paragraph-2 mb-10">Photoshop</p>
                                                        <div className="progress">
                                                            <div className="progress-bar bg-paragraph-2" role="progressbar" style={{ width: "29%" }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
                                                                <span>29%</span>
                                                            </div>
                                                        </div>
                                                        <p className="font-xs color-text-paragraph-2 mb-10 mt-30">Figma</p>
                                                        <div className="progress">
                                                            <div className="progress-bar bg-paragraph-2" role="progressbar" style={{ width: "20%" }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}>
                                                                <span>20%</span>
                                                            </div>
                                                        </div>
                                                        <p className="font-xs color-text-paragraph-2 mb-10 mt-30">Illustrator</p>
                                                        <div className="progress">
                                                            <div className="progress-bar bg-paragraph-2" role="progressbar" style={{ width: "65%" }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}>
                                                                <span>65%</span>
                                                            </div>
                                                        </div>
                                                        <p className="font-xs color-text-paragraph-2 mb-10 mt-30">Sketch</p>
                                                        <div className="progress">
                                                            <div className="progress-bar bg-paragraph-2" role="progressbar" style={{ width: "82%" }} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}>
                                                                <span>82%</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <p />
                                            <h4>Work Experience</h4>
                                            <ul>
                                                <li>A portfolio demonstrating well thought through and polished end to end customer journeys</li>
                                                <li>5+ years of industry experience in interactive design and / or visual design</li>
                                                <li>Excellent interpersonal skills</li>
                                                <li>Aware of trends in mobile, communications, and collaboration</li>
                                                <li>Ability to create highly polished design prototypes, mockups, and other communication artifacts</li>
                                                <li>The ability to scope and estimate efforts accurately and prioritize tasks and goals independently</li>
                                                <li>History of impacting shipping products with your work</li>
                                                <li>A Bachelor’s Degree in Design (or related field) or equivalent professional experience</li>
                                                <li>Proficiency in a variety of design tools such as Figma, Photoshop, Illustrator, and Sketch</li>
                                            </ul>
                                            <h4>Education</h4>
                                            <ul>
                                                <li>Necessitatibus quibusdam facilis</li>
                                                <li>Velit unde aliquam et voluptas reiciendis non sapiente labore</li>
                                                <li>Commodi quae ipsum quas est itaque</li>
                                                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit</li>
                                                <li>Deleniti asperiores blanditiis nihil quia officiis dolor</li>
                                            </ul>
                                        </div>
                                        <div className={`tab-pane fade ${activeIndex === 2 && "show active"}`}>
                                            <h4>Skills</h4>
                                            <p />
                                            Hello there! My name is Alan Walker. I am a graphic designer, and I’m very passionate and dedicated to my work. With 20 years experience as a professional a graphic designer, I have acquired the skills and knowledge necessary to make your project a success.
                                            <p />
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis illum fuga eveniet. Deleniti asperiores, commodi quae ipsum quas est itaque, ipsa, dolore beatae voluptates nemo blanditiis iste eius officia minus. Id nisi, consequuntur sunt impedit quidem, vitae mollitia!
                                        </div>
                                        <div className={`tab-pane fade ${activeIndex === 3 && "show active"}`}>
                                            <h4>Work Experiences</h4>
                                            <p />
                                            Hello there! My name is Alan Walker. I am a graphic designer, and I’m very passionate and dedicated to my work. With 20 years experience as a professional a graphic designer, I have acquired the skills and knowledge necessary to make your project a success.
                                            <p />
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis illum fuga eveniet. Deleniti asperiores, commodi quae ipsum quas est itaque, ipsa, dolore beatae voluptates nemo blanditiis iste eius officia minus. Id nisi, consequuntur sunt impedit quidem, vitae mollitia!
                                        </div>
                                    </div>
                                </div>
                                <div className="box-related-job content-page">
                                    <h3 className="mb-30">Work History</h3>
                                    <div className="box-list-jobs display-list">
                                        <div className="col-xl-12 col-12">
                                            <div className="card-grid-2 hover-up wow animate__animated animate__fadeIn">
                                                <span className="flash" />
                                                <div className="row">
                                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                                        <div className="card-grid-2-image-left">
                                                            <div className="image-box">
                                                                <img src="assets/imgs/brands/brand-6.png" alt="jobBox" />
                                                            </div>
                                                            <div className="right-info">
                                                                <Link legacyBehavior href="#">
                                                                    <a className="name-job">Quora JSC</a>
                                                                </Link>
                                                                <span className="location-small">New York, US</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 text-start text-md-end pr-60 col-md-6 col-sm-12">
                                                        <div className="pl-15 mb-15 mt-30">
                                                            <Link legacyBehavior href="#">
                                                                <a className="btn btn-grey-small mr-5">Adobe XD</a>
                                                            </Link>

                                                            <Link legacyBehavior href="#">
                                                                <a className="btn btn-grey-small mr-5">Figma</a>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card-block-info">
                                                    <h4>
                                                        <Link legacyBehavior href="job-details">
                                                            <a>Senior System Engineer</a>
                                                        </Link>
                                                    </h4>
                                                    <div className="mt-5">
                                                        <span className="card-briefcase">Part time</span>
                                                        <span className="card-time">
                                                            <span>5</span>
                                                            <span> days ago</span>
                                                        </span>
                                                    </div>
                                                    <p className="font-sm color-text-paragraph mt-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.</p>
                                                    <div className="card-2-bottom mt-20">
                                                        <div className="row">
                                                            <div className="col-lg-7 col-7">
                                                                <span className="card-text-price">
                                                                    Status:<span className="text-success">Done</span>
                                                                </span>
                                                            </div>
                                                            <div className="col-lg-5 col-5 text-end">
                                                                <Link legacyBehavior href="job-details">
                                                                    <a className="btn btn-apply-now">View Details</a>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-12 col-12">
                                            <div className="card-grid-2 hover-up wow animate__animated animate__fadeIn">
                                                <span className="flash" />
                                                <div className="row">
                                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                                        <div className="card-grid-2-image-left">
                                                            <div className="image-box">
                                                                <img src="assets/imgs/brands/brand-7.png" alt="jobBox" />
                                                            </div>
                                                            <div className="right-info">
                                                                <Link legacyBehavior href="#">
                                                                    <a className="name-job">Nintendo</a>
                                                                </Link>
                                                                <span className="location-small">New York, US</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 text-start text-md-end pr-60 col-md-6 col-sm-12">
                                                        <div className="pl-15 mb-15 mt-30">
                                                            <Link legacyBehavior href="#">
                                                                <a className="btn btn-grey-small mr-5">Adobe XD</a>
                                                            </Link>

                                                            <Link legacyBehavior href="#">
                                                                <a className="btn btn-grey-small mr-5">Figma</a>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card-block-info">
                                                    <h4>
                                                        <Link legacyBehavior href="job-details">
                                                            <a>Products Manager</a>
                                                        </Link>
                                                    </h4>
                                                    <div className="mt-5">
                                                        <span className="card-briefcase">Full time</span>
                                                        <span className="card-time">
                                                            <span>6</span>
                                                            <span> days ago</span>
                                                        </span>
                                                    </div>
                                                    <p className="font-sm color-text-paragraph mt-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.</p>
                                                    <div className="card-2-bottom mt-20">
                                                        <div className="row">
                                                            <div className="col-lg-7 col-7">
                                                                <span className="card-text-price">
                                                                    Status:<span className="text-success">Done</span>
                                                                </span>
                                                            </div>
                                                            <div className="col-lg-5 col-5 text-end">
                                                                <Link legacyBehavior href="job-details">
                                                                    <a className="btn btn-apply-now">View Details</a>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-12 col-12">
                                            <div className="card-grid-2 hover-up wow animate__animated animate__fadeIn">
                                                <span className="flash" />
                                                <div className="row">
                                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                                        <div className="card-grid-2-image-left">
                                                            <div className="image-box">
                                                                <img src="assets/imgs/brands/brand-8.png" alt="jobBox" />
                                                            </div>
                                                            <div className="right-info">
                                                                <Link legacyBehavior href="#">
                                                                    <a className="name-job">Periscope</a>
                                                                </Link>
                                                                <span className="location-small">New York, US</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 text-start text-md-end pr-60 col-md-6 col-sm-12">
                                                        <div className="pl-15 mb-15 mt-30">
                                                            <Link legacyBehavior href="#">
                                                                <a className="btn btn-grey-small mr-5">Adobe XD</a>
                                                            </Link>

                                                            <Link legacyBehavior href="#">
                                                                <a className="btn btn-grey-small mr-5">Figma</a>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card-block-info">
                                                    <h4>
                                                        <Link legacyBehavior href="job-details">
                                                            <a>Lead Quality Control QA</a>
                                                        </Link>
                                                    </h4>
                                                    <div className="mt-5">
                                                        <span className="card-briefcase">Full time</span>
                                                        <span className="card-time">
                                                            <span>6</span>
                                                            <span> days ago</span>
                                                        </span>
                                                    </div>
                                                    <p className="font-sm color-text-paragraph mt-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.</p>
                                                    <div className="card-2-bottom mt-20">
                                                        <div className="row">
                                                            <div className="col-lg-7 col-7">
                                                                <span className="card-text-price">
                                                                    Status:<span className="text-success">Done</span>
                                                                </span>
                                                            </div>
                                                            <div className="col-lg-5 col-5 text-end">
                                                                <Link legacyBehavior href="job-details">
                                                                    <a className="btn btn-apply-now">View Details</a>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="paginations">
                                        <ul className="pager">
                                            <li>
                                                <a className="pager-prev" href="#" />
                                            </li>
                                            <li>
                                                <Link legacyBehavior href="#">
                                                    <a className="pager-number">1</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link legacyBehavior href="#">
                                                    <a className="pager-number">2</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link legacyBehavior href="#">
                                                    <a className="pager-number">3</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link legacyBehavior href="#">
                                                    <a className="pager-number">4</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link legacyBehavior href="#">
                                                    <a className="pager-number">5</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link legacyBehavior href="#">
                                                    <a className="pager-number active">6</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link legacyBehavior href="#">
                                                    <a className="pager-number">7</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <a className="pager-next" href="#" />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12 col-12 pl-40 pl-lg-15 mt-lg-30">
                                <div className="sidebar-border">
                                    <h5 className="f-18">Overview</h5>
                                    <div className="sidebar-list-job">
                                        <ul>
                                            <li>
                                                <div className="sidebar-icon-item">
                                                    <i className="fi-rr-briefcase" />
                                                </div>
                                                <div className="sidebar-text-info">
                                                    <span className="text-description">Experience</span>
                                                    <strong className="small-heading">12 years</strong>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="sidebar-icon-item">
                                                    <i className="fi-rr-dollar" />
                                                </div>
                                                <div className="sidebar-text-info">
                                                    <span className="text-description">Expected Salary</span>
                                                    <strong className="small-heading">$26k - $30k</strong>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="sidebar-icon-item">
                                                    <i className="fi-rr-marker" />
                                                </div>
                                                <div className="sidebar-text-info">
                                                    <span className="text-description">Language</span>
                                                    <strong className="small-heading">English, German</strong>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="sidebar-icon-item">
                                                    <i className="fi-rr-time-fast" />
                                                </div>
                                                <div className="sidebar-text-info">
                                                    <span className="text-description">Education Level</span>
                                                    <strong className="small-heading">Master Degree</strong>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="sidebar-list-job">
                                        <ul className="ul-disc">
                                            <li>205 North Michigan Avenue, Suite 810 Chicago, 60601, USA</li>
                                            <li>Phone: (123) 456-7890</li>
                                            <li>Email: contact@Evara.com</li>
                                        </ul>
                                        <div className="mt-30">
                                            <Link legacyBehavior href="page-contact">
                                                <a className="btn btn-send-message">Send Message</a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="sidebar-border-bg bg-right">
                                    <span className="text-grey">WE ARE</span>
                                    <span className="text-hiring">HIRING</span>
                                    <p className="font-xxs color-text-paragraph mt-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto</p>
                                    <div className="mt-15">
                                        <Link legacyBehavior href="#">
                                            <a className="btn btn-paragraph-2">Know More</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
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
            </Layout>
        </>
    );
}
