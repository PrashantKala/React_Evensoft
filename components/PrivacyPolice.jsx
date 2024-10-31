import React, { useState } from 'react';
import Header from './Header';
import Navabar from './Navabar';
import Footer from './Footer';
// import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  // State to toggle sections
  const [openSection, setOpenSection] = useState(null);

  // Toggle handler
  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  // Privacy policy sections with full sample content
  const sections = [
    {
      title: '1. In General',
      content: [
        { type: 'bullet', text: 'Evensoft® is committed to protecting and respecting the privacy of your personal information. This Privacy Policy describes how we collect, use, and handle your personal and non-personal information when you use our websites, products, and services ("Services").' },
        { type: 'bullet', text: 'Please read this Privacy Policy carefully so that you have a clear understanding of how we collect, use, and otherwise handle and protect your personal and non-personal information. If you have objections to this privacy policy, you should discontinue use of our Services and follow the procedures described below in the section entitled "Your Privacy Rights."' },
        { type: 'bullet', text: 'This Privacy Policy does not govern privacy practices associated with offline activities, websites other than ours, or practices of third parties that we do not own or control. We are not responsible for the content or privacy practices of third-party websites or integrated products to which our Services may link. You should review the privacy policies of such sites before using them.' },
        { type: 'bullet', text: 'If you are under the age of 13, please do not provide any personal information about yourself to us. If we learn that we have collected personal information from anyone under the age of 13, we will delete that information as quickly as possible. If you believe that we might have any personal information from a child under the age of 13, please contact us immediately.' },
      ],
    },
    {
      title: '2. Changes to this privacy policy',
      content: [
        { type: 'bullet', text: 'We may amend this Privacy Policy from time to time at our sole discretion. However, if we make material changes to this Privacy Policy, we will notify you of those changes. If you wish to adjust the ways we can use your personal information as the result of such changes, you can do so by following the procedure described in the section below entitled “Your Privacy Rights.”' },
      ],
    },
    {
      title: '3. Information we collect',
      content: [
        "When you use our Services, we may collect the following types of information from you:",
        {
          type: "list",
          items: [
            {
              title: "Account Information",
              description: "We collect the information you give us when you register with or use our Services, such as your name, email address, physical address, and credit card or bank information. You agree not to submit any sensitive personally-identifiable information to us, like your social security number."
            },
            {
              title: "Usage Information",
              description: "We collect general information about the use of our Services, such as which pages are accessed most frequently, the number of visits, the average time spent on the website, referring or exiting webpages, click patterns, and other similar factors. This information is collected in aggregate form, without identifying any user individually."
            },
            {
              title: "Access Information",
              description: "We may automatically collect, or we may request you to provide, certain non-personal information about the devices you use to access our Services, including your device type, browser type, operating system, session ID, and IP address."
            },
            {
              title: "Virtual Device Information",
              description: "Our Services are designed to enable you to create virtual devices, where you may load and use certain private content, such as customer apps or your own software programs. We do not collect any information about the content you may load into your virtual devices, and we are unable to access or view the content of your virtual devices unless: a) you explicitly give us access to your account for troubleshooting purposes, or b) we are required to access your account to comply with a legitimate legal request or to enforce our terms of use, in which case, we will notify you of such requirement."
            }
          ]
        }
      ]
    },
    {
      title: '4. How your information is used',
      content: [`
        We never sell your information to advertisers or other third parties. Except as provided herein, we collect, store and use your personal and non-personal information only for internal purposes, such as the following:`,
        {
          type: "list",
          items: [
            { description: "To enable you to access and use our Services. " },
            { description: "To conduct routine business operations, such as billing, identification, authentication, communications, support, marketing, and general research.  " },
            { description: "To enhance our Services, such as by providing a customized user experience, by delivering personalized communications to you about updates or special offers, by helping us troubleshoot issues you may encounter, or by analyzing aggregated data to protect or optimize our Services. " },
            { description: "To comply with any applicable law, regulation, legal process, or appropriate government request; to prevent fraud or abuse of our users; to protect our rights, property, safety, and interest; to protect any person from serious injury or death. " },
          ]
        }
      ],
    },
    {
      title: '5. Tracking: Use of cookies, web beacons and similar devices',
      content: [
        {type:'bullet', text:"In order to improve our Services and provide more convenient, relevant experiences to our customers, we and our agents may use “cookies,” “web beacons,” and similar devices to track your activities. A cookie is a small amount of data that is transferred to your browser by a web server and can only be read by the server that gave it to you. It functions as your identification card and enables us to keep track of your preferences. It cannot be executed as code or deliver viruses. A web beacon is a small transparent .gif image that is embedded in an HTML page or email used to track when the page or email has been viewed. Most browsers are initially set to accept cookies, and most services that include similar devices are typically initially activated to collect data. You can set your browser to notify you when you receive a cookie, giving you the chance to decide whether to accept it. We do not support browsers’ Do Not Track features. You can enable or disable Do Not Track by visiting the preferences or settings page of your browser. If you disable cookies, you may lose some of the features and functionality of using our Services."},
        {type:'bullet', text:"We may, either directly or indirectly, use such technologies to track your behavior on our Services for purposes of our own customer support, analytics, research, product development, fraud prevention, risk assessment, regulatory compliance, or investigation, as well as to enable you to use and access the Services. Such information is collected in anonymized form, without identifying any user individually."}
      ],
    },
    {
      title: '6. Protecting your information',
      content: [
        {type:"bullet", text:"We use a variety of security measures, including SSL, encryption, and authentication tools, to help protect your information. We do not retain your personal information for longer than is necessary for our business purposes. When we no longer need your personal information, we dispose of it safely. For example, when you delete a virtual device, all device data is immediately securely erased, and device metadata, such as the name of the device and OS version, is stored in backups which are regularly deleted."},
        {type:"bullet", text:"Our security measures include standard international data protection measures as well as those described in the EU GDPR implementing regulations. These measures may also include periodic system-wide password resets with high password strength requirements. We strongly discourage password sharing. Due to the nature of the information and related technology, we cannot be held responsible if you share your own login credentials with others. If we learn of a security breach, we will immediately reset your account password and attempt to notify you, per GDPR guidelines, to take appropriate steps."},

      ],
    },
    {
      title: '7. Third-party data processing',
      content: [
        `In submitting any third-party personal data within the context of our Services (“Third-Party Data”), you are the Data Controller, and you appoint us as a Data Processor of such data for the purpose of providing the Services. To the extent that we are a Data Processor for you in respect to such Third-Party Data, we will:`,
        {
          type:"list",
          items:[
            {description:"Implement appropriate technical and organizational measures to safeguard the Third-Party Data against any unauthorized or unlawful access, loss, destruction, theft, use, or disclosure. We implement basic level security in accordance with United States law. If higher levels of security are required, please contact us."},
            {description:"Limit access to the Third-Party Data only to those employees who need to know it to enable the Data Processor to perform the Services, and take appropriate steps to ensure the reliability of those of our employees or subcontractors who have access to such Third-Party Data."},
            {description:"Only process the personal data as specified by this Privacy Policy and in accordance with your instructions, and will not use the Third-Party Data for any purposes other than those related to the performance of the Services or pursuant to your written instructions."},
            {description:"Upon the expiry or termination of this Privacy Policy, or upon your request, cease any and all use of the Third-Party Data and destroy or return it to you."},
            {description:"Not disclose the Third-Party Data to any third-party without your prior written consent. Such consent is granted on, for example, your instruction to share a dashboard with third parties (public or within a restricted group)."},
          ]
        },
        "We as Data Processor may provide access to a subcontractor processor to any such Third-Party Data if we reasonably consider such access and processing necessary to the performance of the Services. In the event of such access and before the access takes place, we will ensure that an agreement with the third-party is in place which is sufficient to require it to treat personal data in accordance with the applicable provisions of this Privacy Policy and applicable law.",
        "You represent and warrant that you have all the appropriate consents from data subjects whose personal data are submitted to us in the course of the provision of the Services."
      ],
    },
    {
      title: '8. Disclosure to third parties',
      content: [
        'We will not share your personal information with third parties without your express consent, except in the limited circumstances described below:',
        {
          type:'list',
          items:[
            {description:"We may share your personal information with third party service providers for the limited purposes described in the section entitled “How Your Information is Used.”"},
            {description:"We will share your personal information when required by law, regulation, or litigation, and as necessary for purposes of national security, law enforcement, or other issues of public importance."},
            {description:"We may engage third parties to conduct checks against databases such as, but not limited to, public government databases (where legally allowed), to assist us with fraud prevention and risk assessment, to assist us with customer service, to serve targeted ads, and to facilitate payments or refunds. We may provide personal information about you to these third parties, or give them access to this personal information, for the limited purpose of allowing them to provide these services. We will ensure that such third parties have contractual obligations to protect this personal information and not to use it for unrelated purposes."},
            {description:"If we are acquired by or merged with another entity, we may provide customer information to such entity without obtaining your further consent. We will provide notice of such acquisitions or mergers on our website."}
          ]
        }
      ],
    },
    {
      title: '9. International transfers',
      content:[
        {type:"bullet", text:"If you are using our Services from a country other than the United States, the various communications you send and receive may result in the transfer of information across international boundaries. If you are located in the European Union, you should be aware that information you provide may be transferred to countries (including the United States) which may not have data protection laws deemed as adequate as those in the EU."}
      ],
    },
    {
      title: '10. Your privacy rights',
      content: [`We will ensure that you can exercise your rights pertaining to your personal information, including rights as provided by various data protection laws. Where applicable under relevant law, you are entitled to:`,
        {
          type:'list',
          items:[
            {description:"Have access to your personal information upon request (unless such data is already made directly available to you, for instance within your personal account)."},
            {description:"Have access to, upon request and free of charge, the categories, names, and addresses of third parties that have received your personal information for direct marketing purposes."},
            {description:"Obtain a rectification of your personal information should it be inaccurate, incomplete, or obsolete."},
            {description:"Obtain the deletion of your personal information in the situations set forth by applicable data protection law (the “right to be forgotten”)."},
            {description:"Withdraw your consent to data processing. If at any time you wish to withdraw your consent to our processing of your data or opt out of our use of your information, you may do so by sending a written notice to: support@Evensoft.com. Note that your withdrawal of consent may prevent us from providing the Services to you."},
            {description:"Object to the processing of your personal information. Where it has been collected and processed based on our legitimate interests, we may ask you to justify your request."},
            {description:"Request a limitation of the data processing in the situations set forth by applicable law."},
            {description:"Have your personal information directly transferred by us to a third-party processor of your choice (where technically feasible and when processing is based on your consent)."},
          ]
        },
        "Under certain laws, you may also have the right to “opt-out” of having your personal information sold to a third party. We do not sell your personal information to any other party. Only in the case of a merger, sale, financing, acquisition, or other transaction involving all or part of us may your information be involved in a transaction.",
        "For deletion or “right to be forgotten” requests, we will undertake a good faith effort to accommodate such requests. However, these requests may be subject to the evaluation of additional factors, including disproportionate burden or expense, or the risk to the rights, including the privacy rights, of others.",
        "We will work to resolve any inquiry you may have regarding our privacy practices. EU residents may also file a complaint before a competent data protection authority regarding the processing of your personal data. While we suggest that you contact us beforehand, if you wish to exercise this right, you should contact the competent data protection authority directly.",
        "If you have any questions, would like to exercise any of these rights, or if you need any assistance with privacy related matters, please contact us as described in the “How to Contact Us” section below. We will take the necessary steps to respond to you as soon as possible."

      ]
    },
    {
      title: '11. Your choices',
      content: [
        {type:"bullet", text:"You have control over your personal information and how we collect, use, and share it. If at any time you are uncomfortable with our use of your personal information, you may request that we stop or limit the processing of your data via email, as described in the section above entitled “Your Privacy Rights.” Note that if you opt not to provide us with certain mandatory information, then our products and services may be unavailable to you."},
        {type:"bullet", text:"You may similarly opt out of receiving certain marketing communications from us, although we may find it necessary to continue to communicate with you regarding your use of the Services."},
        {type:"bullet", text:"For our websites, you may set your browser to refuse all or some browser cookies, or to alert you when cookies are being sent. If you disable or refuse cookies, please note that some parts of our websites may then be inaccessible or not function properly."}
      ],
    },
    {
      title: '12. Governing law',
      content: [
        {type:"bullet", text:"The terms of this Privacy Policy are governed by and in accordance with the laws of the state of Florida, and, where applicable, the laws of the countries where our servers are located. You should not provide us with any Personal Information unless you consent to the application of United States law and, where applicable, Florida law, and to the use and disclosure of your information in accordance with the terms of this Privacy Policy."}
      ],
    },
    {
      title: '13. How to contact us',
      content: [
        {type:"bullet", text:"Email at: info@evensoft.dev"}
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
        <header className="policy-header bg-black">
          <h1>Privacy Policy</h1>
          <p>Last Updated: 25-Oct-2024</p>
          <p>Your privacy is important to us. It's our policy to respect your privacy regarding any information we may collect from you.</p>
        </header>
        <div className="policy-content">
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

export default PrivacyPolicy;