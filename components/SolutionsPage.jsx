import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';

const SolutionsPage = () => {
    useEffect(() => {
        const handleScroll = () => {
            const cards = document.querySelectorAll('.card');
            cards.forEach(card => {
                const rect = card.getBoundingClientRect();
                const isVisible = rect.top < window.innerHeight - 100 && rect.bottom > 100;
                if (isVisible) {
                    card.classList.add('visible');
                } else {
                    card.classList.remove('visible');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <Header heading="AI-Driven Innovation for Real-World Challenges" subHeading="From enhancing your workforce with AI personas to revolutionizing cyber operations, Evensoft delivers cutting-edge solutions tailored to your mission-critical needs." />
            <section className="cards ms-auto me-auto mt-5 mb-5 ">
                <article className="card card--1">
                    <div className="card__img" style={{ backgroundImage: `url('../images/jane.png')` }} />
                    <div className="card__info">
                        <h2 className="card__title">Jane AI</h2>
                        <h4 className="">Your Digital Workforce Partner</h4>
                        <p className="card__by">
                            A customizable AI persona with voice and hearing, designed to augment your
                            team and transform operations.
                        </p>
                    </div>
                </article>
                <article className="card card--2">
                    <div className="card__img" style={{ backgroundImage: `url('../images/quickscan.png')` }} />
                    <div className="card__info">
                        <h2 className="card__title">QuickScan Engine</h2>
                        <h4 className="">Advanced Security Auditing</h4>
                        <p className="card__by">
                            Leverage AI-driven insights to audit security plans and attain unmatched
                            compliance ratings.
                        </p>
                    </div>
                </article>
                <article className="card card--3">
                    <div className="card__img" style={{ backgroundImage: `url('../images/animate.png')` }} />
                    <div className="card__info">
                        <h2 className="card__title">Animate</h2>
                        <h4 className="">Cyber Range Traffic Generator</h4>
                        <p className="card__by">

                            Bring life to your cyber research and training missions with dynamic
                            behavior and traffic generation.

                        </p>
                    </div>
                </article>
            </section>
            <Footer />
        </>
    );
};

export default SolutionsPage;


// const ImageSlider = () => {
//     const images = [
//       '../images/oracle.png',
//       '../images/modex.png',
//       '../images/westerdigital.png',
//       '../images/witfoo.png',
//       '../images/cubic.png',
//       '../images/westerdigital.png',
//       '../images/modex.png',
//       '../images/oracle.png',
//       // '../images/',
//       // '../images/',
//       // Add more images as needed
//     ];