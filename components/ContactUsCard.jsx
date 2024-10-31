import React from 'react';

const ContactUsCard = () => {
    return (
        <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
            {/* <h3 style={{fontSize:"3rem", width:"400px", color: 'black', textTransform: 'uppercase', fontWeight: 'bold', margin:"auto", marginBottom:"2rem" }}>Get in Touch</h3> */}
            <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Contact us</h1>
            <p style={{ color: '#555' }}>
                Give us a call or drop by anytime, we endeavour to answer all enquiries within 24 hours on business days.
                We will be happy to answer your questions.
            </p>

            <div style={{ marginTop: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                    <span role="img" aria-label="address" style={{ fontSize: '1.5rem', marginRight: '10px' }}>🌐</span>
                    <div>
                        <h4 style={{ margin: '0', fontWeight: 'bold' }}>Our Address:</h4>
                        <p style={{ margin: '0', color: '#555' }}>
                            Random address<br />
                            random 600<br />
                            random, VA 2024
                        </p>
                    </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                    <span role="img" aria-label="mail" style={{ fontSize: '1.5rem', marginRight: '10px' }}>✉️</span>
                    <div>
                        <h4 style={{ margin: '0', fontWeight: 'bold' }}>Our Mailbox:</h4>
                        <p style={{ margin: '0', color: '#555' }}>info@evensoft.dev</p>
                    </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                    <span role="img" aria-label="phone" style={{ fontSize: '1.5rem', marginRight: '10px' }}>📞</span>
                    <div>
                        <h4 style={{ margin: '0', fontWeight: 'bold' }}>Our Phone:</h4>
                        <p style={{ margin: '0', color: '#555' }}>+1 111-111-1111</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUsCard;
