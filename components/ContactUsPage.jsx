import React from 'react';
import Footer from './Footer';

const ContactUsPage = () => {
  return (
    <>
      <div

        style={{
          fontFamily: 'Arial, sans-serif',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '80vh',
          backgroundColor: '#f7f7f7',
          padding: '20px',
        }}
      >
        <div
          className='contactUsCard'
          style={{
            padding: '40px',
            maxWidth: '600px',
            width: '100%',
            backgroundColor: '#fff',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            border: '1px solid #ddd',
          }}
        >
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold', textAlign: 'center' }}>Contact Us</h1>
          <p style={{ color: '#000', textAlign: 'center', fontWeight:"300" }}>
            Give us a call or drop by anytime, we endeavor to answer all inquiries within 24 hours on business days.
            We will be happy to answer your questions.
          </p>

          <div style={{ marginTop: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
              <span role="img" aria-label="address" style={{ fontSize: '1.5rem', marginRight: '10px' }}>🌐</span>
              <div>
                <h4 style={{ margin: '0', fontWeight: 'bold' }}>Our Address:</h4>
                <p style={{ margin: '0', color: '#000' ,fontWeight:"300" }}>
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
                <p style={{ margin: '0', color: '#000' ,fontWeight:"300" }}>info@evensoft.dev</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
              <span role="img" aria-label="phone" style={{ fontSize: '1.5rem', marginRight: '10px' }}>📞</span>
              <div>
                <h4 style={{ margin: '0', fontWeight: 'bold' }}>Our Phone:</h4>
                <p style={{ margin: '0', color: '#000' ,fontWeight:"300" }}>+1 111-111-1111</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUsPage;
