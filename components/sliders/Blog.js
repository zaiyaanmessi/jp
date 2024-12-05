import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

SwiperCore.use([Navigation]);

const BlogSlider = () => {
    return (
        <>
            <div className="swiper-container swiper-group-3 swiper">
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    loop={true}
                    navigation={{
                        prevEl: ".swiper-button-prev",
                        nextEl: ".swiper-button-next"
                    }}
                    className="swiper-wrapper pb-70 pt-5"
                >
                    <SwiperSlide>
                        <div className="swiper-slide">
                            <div className="card-grid-3 hover-up wow animate__animated animate__fadeIn">
                                <div className="text-center card-grid-3-image">
                                    <Link legacyBehavior href="blog-details1">
                                        <a>
                                            <figure>
                                                <img alt="jobBox" src="/assets/imgs/page/job-single-2/blogimg1.jpeg" />
                                            </figure>
                                        </a>
                                    </Link>
                                </div>
                                <div className="card-block-info">
                                    <div className="tags mb-15">
                                   
                                    </div>
                                    <h5>
                                        <Link legacyBehavior href="/blog-details1">
                                            <a>Workplace Anxiety How to Manage It</a>
                                        </Link>
                                    </h5>
                                    <p className="mt-10 color-text-paragraph font-sm">In today’s fast-paced work environment, stress and anxiety at work are more common than ever. With looming deadlines, high expectations, and interpersonal challenges.</p>
                               
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swiper-slide">
                            <div className="card-grid-3 hover-up wow animate__animated animate__fadeIn">
                                <div className="text-center card-grid-3-image">
                                    <Link legacyBehavior href="blog-details2">
                                        <a>
                                            <figure>
                                                <img alt="jobBox" src="/assets/imgs/page/job-single-2/blogimg2.jpeg" />
                                            </figure>
                                        </a>
                                    </Link>
                                </div>
                                <div className="card-block-info">
                                    <div className="tags mb-15">
                                        
                                    </div>
                                    <h5>
                                        <Link legacyBehavior href="/blog-details2">
                                            <a>Tell Me About Yourself Sample Answers for Freshers</a>
                                        </Link>
                                    </h5>
                                    <p className="mt-10 color-text-paragraph font-sm">One of the most common interview questions is "Tell me about yourself", and it can be especially tricky for freshers who may not have work experience.</p>
                                  
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swiper-slide">
                            <div className="card-grid-3 hover-up wow animate__animated animate__fadeIn">
                                <div className="text-center card-grid-3-image">
                                    <Link legacyBehavior href="blog-details3">
                                        <a>
                                            <figure>
                                                <img alt="jobBox" src="/assets/imgs/page/job-single-2/blogimg3.jpeg" />
                                            </figure>
                                        </a>
                                    </Link>
                                </div>
                                <div className="card-block-info">
                                    <div className="tags mb-15">
                                       
                                    </div>
                                    <h5>
                                        <Link legacyBehavior href="/blog-details3">
                                            <a>Proven ways to stand out in a job interview!</a>
                                        </Link>
                                    </h5>
                                    <p className="mt-10 color-text-paragraph font-sm">In today’s competitive job market, making a strong impression during a job interview can be the game-changer in landing your dream role.</p>
                                   
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="swiper-button-next" />
            <div className="swiper-button-prev" />
        </>
    );
};

export default BlogSlider;
