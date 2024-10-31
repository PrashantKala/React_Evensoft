import React, { useState } from 'react';
import Header from './Header';
import Navabar from './Navabar';
import Footer from './Footer';
// import './PrivacyPolicy.css';

const IntellectualPropertyPolicy = () => {
  // State to toggle sections
  const [openSection, setOpenSection] = useState(null);

  // Toggle handler
  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const sections = [
    {
      title: 'Notice of alleged infringement',
      content: [
        { type: 'bullet', text: 'Provide your mailing address, telephone number, and, if available, email address.' },
        { type: 'bullet', text: 'Identify the Intellectual Property that you claim has been infringed by providing a comprehensive list of the items (works, trademarks, etc.) that you claim have been infringed. If your work is registered with the United States Patent and Trademark Office, United States Copyright Office, or other Intellectual Property office or jurisdiction, you must include copies of the registration certificates or information sufficient to confirm that such work is in fact protected.' },
        { type: 'bullet', text: 'Identify the material that you claim is infringing (or to be the subject of infringing activity) and that is to be removed or access to which is to be disabled, and information reasonably sufficient to permit us to locate the material, including at a minimum, if applicable, the URL of the link shown on the Site, Evensoft Products, or Evensoft Services where such material may be found.' },
        { type: 'bullet', text: 'Provide your full legal name and electronically sign and affirm the following statement: "I hereby affirm that I have a good faith belief that the disputed use of the material is not authorized by the owner, its agent, or the law (e.g., as a fair use). I affirm that the information in this Notice is accurate and, under penalty of perjury, that I am the owner, or authorized to act on behalf of the owner, of the Intellectual Property or of an exclusive right under the Intellectual Property that is allegedly infringed."' },
        { type: 'bullet', text: 'Deliver this Notice, with all items completed, to us by e-mail to info@evensoft.dev.' },
      ],
    },
  
  ];


  const renderContent = (content) => {
    if (typeof content === 'string') {
      return <p>{content}</p>;
    } else if (content.type === 'bullet') {
      return (
        <ul>
          <li>{content.text}</li>
        </ul>
      );
    } else if (content.type === 'list') {
      return (
        <ul>
          {content.items.map((item, index) => (
            <li key={index}>
              {item.title && <strong>{item.title}: </strong>}
              {item.description}
            </li>
          ))}
        </ul>
      );
    }
    return null;
  };


  return (
    <>
      <div className="policy-container bg-black">
        <header className="policy-header">
          <h1>Intellectual Property Policy</h1>
          <p>Last Updated: 25-Oct-2024</p>
          <p>Evensoft® respects the Intellectual Property rights of others and expects its users to do the same.</p>
        </header>
        <div className="policy-content">
        <p>Evensoft, Inc. (“we” or “us”) respects the Intellectual Property rights of others and expects its users to do the same. Under the U.S. Digital Millennium Copyright Act (“DMCA”), copyright owners can file a complaint where they believe materials infringe on their copyright. It is our policy, in appropriate circumstances and at our discretion, to disable and/or terminate the Account or access of users who infringe or are repeatedly charged with infringing the Intellectual Property rights of others, including copyrights, trademarks, trade secrets, and patents. We will respond expeditiously to claims of Intellectual Property infringement committed using the Site, Evensoft Products, or Evensoft Services (as defined in our Terms of Use) that are adequately and timely reported to us. Terms capitalized but not defined in this Intellectual Property Policy shall have the meaning ascribed to them in our Terms of Use.</p>
        <p>If you are an Intellectual Property owner, or are authorized to act on behalf of one, or authorized to act under any exclusive right under copyright, please report alleged infringements taking place on or through the Site, Evensoft Products, or Evensoft Services by submitting a complete Notice of Alleged Infringement (“Notice”) as described below and delivering it to us. Upon receipt of the Notice as described below, we will take whatever action, in our sole discretion, we deem appropriate, including removal of the alleged infringing content from the Site, Evensoft Products, or Evensoft Services, as applicable.</p>
          {sections.map((section, index) => (
            <div className="policy-section" key={index}>
              <button
                className="policy-section-title"
                onClick={() => toggleSection(index)}
              >
                {section.title}
                <span className="toggle-icon">
                  {openSection === index ? '-' : '+'}
                </span>
              </button>
              {openSection === index && (
                <div className="policy-section-content">
                  {section.content.map((content, idx) => (
                    <div key={idx}>{renderContent(content)}</div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default IntellectualPropertyPolicy;