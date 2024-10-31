


import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
// import './PrivacyPolicy.css';

const TermsofUse = () => {
  // State to toggle sections
  const [openSection, setOpenSection] = useState(null);

  // Toggle handler
  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const sections = [
    {
      title: '1. Acceptance',
      content: [
        { type: 'bullet', text: 'By clicking the acceptance box or button, signing a relevant Order Form, or accessing the Evensoft Site or using the Evensoft Products or Evensoft Services, you accept and agree to be bound by these Terms and Conditions (“Terms”). If you do not agree to these Terms, then do not order, access, or use the Site, Evensoft Products, or Evensoft Services.' },
        { type: 'bullet', text: 'The Evensoft Services are made available only to persons who are the age of majority and can form legally binding contracts under applicable law. Without limiting the foregoing, the Evensoft Services are not intended to be used by individuals under the age of 18. If you do not qualify, do not access or use the Site, Evensoft Products, or Evensoft Services.' },
        { type: 'bullet', text: 'If you are accepting these Terms on behalf of a company, a governmental body, or other legal entity, you represent and warrant that you have the authority to bind such entity; that such entity agrees to be legally bound by the Terms; and that neither you nor such entity are barred from using the Evensoft Services or accepting the Terms under the laws of the applicable jurisdiction. If acceptance is on behalf of an entity, then any reference to the terms “you” and “your” shall mean that entity. Evensoft and Customer, Authorized User (as defined herein) and you may be referred to herein collectively as the “Parties” or individually as a “Party.”' },
        { type: 'bullet', text: 'Your use of the Evensoft Services is also subject to our Privacy Policy and Intellectual Property Policy, which are available on the Site at www.evensoft.com/privacy and www.evensoft.com/IP, respectively, as well as any policies and procedures we publish from time to time (collectively, the “Policies”). We reserve the right to modify these Terms at any time, with such changes becoming effective upon Evensoft posting the modified Terms to the Site. Each time you use the Site, Evensoft Products, or Evensoft Services, the then-current version of the Terms will apply. If you use the Site, Evensoft Products, or Evensoft Services after a modification of these Terms, you agree to be bound by the Terms as modified.' },
        { type: 'bullet', text: 'You represent that any information you submit to us when using the Site, Evensoft Products, or Evensoft Services is accurate, truthful, and current. You also represent that your use of the Site, Evensoft Products, or Evensoft Services does not violate any applicable law or regulation.' },
      ],
    },
    {
      title: '2. Definitions',
      content: [
        "The definitions for some of the defined terms used in this Agreement are set forth below. The definitions for other defined terms are set forth elsewhere in this Agreement.",
        {
          type: "list",
          items: [
            {
              title: "2.1“Affiliate”",
              description: "means, with respect to any entity, any other entity that, directly or indirectly, through one or more intermediaries, controls, is controlled by, or is under common control with, such entity. The term “control” means the possession, directly or indirectly, of the power to direct or cause the direction of the management and policies of an entity, whether through the ownership of voting securities, by contract, or otherwise."
            },
            {
              title: "2.2“Authorized User”",
              description: "means an employee, agent, representative, or individual contractor of Customer (including, any sales representatives and retailers), or such other party who has been authorized by Customer to use the Evensoft Products and Evensoft Services, as well as any guest invited by Customer to access and use the Evensoft Products or Evensoft Services."
            },
            {
              title: "2.3“Evensoft MATRIX”",
              description: "means the automated mobile application security testing product developed by Evensoft that runs automated security checks and provides a report of the outcome."
            },
            {
              title: "2.4“Evensoft Product(s)”",
              description: "means the products or applications offered by Evensoft in connection with the Evensoft Services that are described on the applicable Order Form including without limitation the Evensoft Software and the Equipment."
            },
            {
              title: "2.5“Evensoft SaaS”",
              description: "means Evensoft Software provided in the form of software-as-a-service, and related hosting, maintenance and/or support Evensoft Services made available by Evensoft for remote access and use by Customer and its Authorized Users, including any Documentation and Updates thereto."
            },
            {
              title: "2.6“Evensoft Services”",
              description: "means the services provided by Evensoft under the applicable Evensoft Order Form, including but not limited to the Evensoft SaaS and other services as Evensoft may offer or provide from time to time."
            },
            {
              title: "2.7“Evensoft Software”",
              description: "means the virtualization software developed by Evensoft and such other software as may be from time to time offered by Evensoft as standalone executable software, software pre-installed on Equipment, software-as-a-service, or other such means as may be determined by Evensoft from time to time."
            },
            {
              title: "2.8“Destructive Elements”",
              description: "means computer code, programs, or programming devices that are intentionally designed to disrupt, modify, access, delete, damage, deactivate, disable, harm, or otherwise impede in any manner, including aesthetic disruptions or distortions, the operation of the Evensoft Product or any other associated software, firmware, hardware, computer system, or network (including, without limitation, “Trojan horses,” “viruses,” “worms,” “time bombs,” “time locks,” “devices,” “traps,” “access codes,” or “drop dead” or “trap door” devices) or any other harmful, malicious, or hidden procedures, routines, or mechanisms that would cause the Evensoft Product to cease functioning or to damage or corrupt data, storage media, programs, equipment, or communications, or otherwise interfere with operations."
            },
            {
              title: "2.9“Documentation”",
              description: "means any guides and other documentation for any Evensoft Product or Evensoft Service that Evensoft provides to Customer either directly or through publication on the Evensoft SaaS or other means made available to the Customer."
            },
            {
              title: "2.10 “Equipment”",
              description: "means certain ARM-based servers or other hardware sold, leased, or rented to Customer under an applicable Order Form containing an object-code version of the Evensoft Software."
            },
            {
              title: "2.11 “Intellectual Property Right(s)”",
              description: "means, with respect to any thing, material or work (hereinafter, a “Work”): (a) any and all worldwide copyrights, trademarks, trade secrets and any other intellectual property and proprietary rights and legal protections in and to such Work including but not limited to all rights under treaties and conventions and applications related to any of the foregoing; (b) all patents, patent applications, registrations and rights to make applications and registrations for the foregoing; (c) all goodwill associated with the foregoing; (d) all renewals, extensions, reversions or restorations of all such rights; (e) all works based upon, derived from, or incorporating the Work; (f) all income, royalties, damages, claims, and payments now or hereafter due or payable with respect thereto; (g) all causes of action, either in law or in equity for past, present or future infringement based on the Work; (h) all rights corresponding to each of the foregoing throughout the world; and (i) all the rights embraced or embodied therein, including but not limited to, the right to duplicate, reproduce, copy, distribute, publicly perform, display, license, adapt, prepare derivative works from the Work, together with all physical or tangible embodiments of the Work."
            },
            {
              title: "2.12 “Order Form”",
              description: "means a document that is signed or otherwise agreed to by authorized representatives of both Parties and that sets forth various terms and conditions applicable to the Evensoft Products and Evensoft Services purchased or subscribed for by the Customer, which may include any or all of the following: (i) the Evensoft SaaS to be provided by Evensoft; (ii) any Evensoft Product(s) being ordered; (iii) the Subscription Term; (iv) the applicable fees; and (v) other mutually-agreed upon terms and conditions. Each Evensoft Order Form is deemed incorporated into and made a part of this Agreement. To the extent any provision set forth in the Evensoft Order Form conflicts with any provision set forth elsewhere in this Agreement, the provision set forth in this Agreement shall govern, unless the Evensoft Order Form includes the section numbers of this Agreement that the Parties agree no longer govern or are modified for the matters covered thereby."
            },
            {
              title: "2.13“Prohibited Content” ",
              description: "means content that: (i) is illegal under applicable law; (ii) violates any third party’s intellectual property rights, including, without limitation, copyrights, trademarks, patents, and trade secrets; (iii) contains indecent or obscene material; (iv) contains libelous, slanderous, or defamatory material, or material constituting an invasion of privacy or misappropriation of publicity rights; (v) promotes unlawful or illegal goods, Evensoft Services, or activities; (vi) contains false, misleading, or deceptive statements, depictions, or sales practices; (vii) contains Destructive Elements; or (viii) is otherwise objectionable to Evensoft in its sole discretion."
            },
            {
              title: "2.14“Severe Infraction”",
              description: "means breach or violation by Customer or any Authorized User of their respective obligations not to (nor authorize, permit, or encourage any third party to) do the following: (i) reverse engineer, decompile, disassemble, or otherwise attempt to discern the source code or interface protocols of the Evensoft Software or Evensoft Services; (ii) modify, adapt, or translate the Evensoft Software or Evensoft Services; (iii) make any copies of the Evensoft Software or Evensoft Services; (iv) resell, distribute, or sublicense the Evensoft Software, Evensoft Services, any Evensoft Product, or use any of the foregoing for the benefit of anyone other than Customer or the Authorized Users unless expressly set forth in the Evensoft Order Form; (v) use the Evensoft Software, Evensoft Services, or any Evensoft Product (1) in violation of any applicable law or regulation, for any illegal purpose, or in a way that violates, infringes, or misappropriates Evensoft’s or any third party’s Intellectual Property Rights, as determined by Evensoft in its sole and absolute discretion, (2) in order to build a competitive (or substitute) product or service, or (3) for any purpose not specifically permitted in this Agreement; (vi) introduce, post, or upload to the Evensoft Software, Evensoft Services, or any Evensoft Product any Prohibited Content; (vii) attempt a denial of service attack on the Evensoft system or any part thereof, or attempt to hack or break any security mechanism of or on the system or any Service; (viii) access or use the Evensoft system or any Service or Evensoft Product in a way that poses a security or service risk to Evensoft, to any user of Evensoft Services offered by Evensoft, to any third party on the Evensoft SaaS, or to any of Evensoft’s or their respective customers, or may subject Evensoft or any third party to liability or damages; (ix) access or use the Evensoft Software or Evensoft Services in a way intended to avoid incurring Fees or exceeding usage limits or quotas; or (x) if Evensoft determines, in its sole and absolute discretion, that the provision of any of the Evensoft Software, Evensoft Services or Evensoft Products to Customer or any Authorized User is prohibited by any applicable law, or has become impractical or unfeasible for any legal or regulatory reason."
            },
            {
              title: "2.15 “Site” ",
              description: "means Evensoft’s website located at www.Evensoft.com or any other website under the ownership and control of Evensoft and provided in connection with the Evensoft Products and Evensoft Services."
            },
            {
              title: "2.16 “Site Installation”",
              description: "means any collection of Evensoft servers connected on a single cluster, accessed via a single URL (domain)."
            },
            {
              title: "2.17“Subscription Term”",
              description: "is the applicable license or subscription period defined and set forth in the Evensoft Order Form. If for any reason the Evensoft Order Form does not provide a Subscription Term, the Subscription Term shall be twelve (12) months from the Effective Date specified in the Evensoft Order Form."
            },
            {
              title: "2.18“Updates”",
              description: "means any corrections, fixes, patches, workarounds, and minor modifications to the Evensoft Software or Evensoft SaaS that Evensoft provides generally to customers, but specifically excludes any new Evensoft offerings or add-ons to the existing Evensoft Software or Evensoft SaaS."
            },
          ]
        }
      ]
    },
    {
      title: '3. Registration and Account',
      content: [
        { type: 'bullet', text: 'Certain of the Evensoft Services, including the Evensoft SaaS, or portions of the Site may require Customer to register for an account (“Account”). As part of the Account creation process, Customer may be asked to provide a username and password unique to the Account (“Login Information”). Customer is responsible for the confidentiality and use of Customer’s Login Information and agrees not to transfer or disclose Customer’s Login Information to any third party other than an individual with express authority to act on Customer’s behalf. If Customer suspects any unauthorized use of Customer’s Account, Customer agrees to notify Evensoft immediately. Customer is solely responsible for any activities occurring under Customer’s Account. Customer has no ownership right to Customer’s Account. When registering for an Account and accessing the Evensoft Services, Customer represents and warrants that the information Customer enters for Customer’s organization is correct. Customer acknowledges and agrees that Customer is responsible for all activity under Authorized User.' },
      ],
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
      title: '5. Third-Party Materials',
      content: [
        {
          type: "list",
          items: [
            {
              title: "5.1 Third-Party Websites",
              description: "The Site may contain links to websites Evensoft do not operate, control, or maintain (“Third-Party Websites”). Evensoft does not endorse any Third-Party Websites, and Evensoft makes no representation or warranty in any respect regarding the Third-Party Websites. Any links to Third-Party Websites are provided solely for Customer’s convenience. If Customer accesses any Third-Party Websites, Customer does so at Customer’s own risk and waives any and all claims against Evensoft regarding the Third-Party Websites or Evensoft’s links thereto."
            },
            {
              title: "5.2 Third-Party Software",
              description: "The Evensoft Products and Evensoft Services may be compatible with certain software, applications, and resources Evensoft does not operate, control, or maintain (“Third-Party Software”). Evensoft is not affiliated with and does not endorse any Third-Party Software, and Evensoft makes no representation or warranty in any respect regarding any Third-Party Software. Any links to Third Party Software provided through the Site, Evensoft Products, or Evensoft Services are provided solely for Customer’s convenience. If Customer accesses or uses any Third-Party Software, Customer does so at Customer’s own risk and waives any and all claims against Evensoft regarding the Third-Party Software or Evensoft’s links thereto."
            },
            {
              title: "5.3 Third-Party Terms and Conditions",
              description: "Customer’s use of any Third-Party Software may be governed by the specific terms and conditions set forth by such third parties. Accordingly, Customer acknowledges that the use of any Third-Party Websites or Third-Party Software is governed by such terms and conditions and licenses between Customer and such third parties (“Third-Party Terms and Conditions”). Customer agrees and acknowledges that it is responsible for complying with such Third-Party Terms and Conditions. Customer agrees to indemnify Evensoft for any costs, including attorneys’ fees, arising from any claims against Evensoft due to actions of Customer which allegedly violate such third-party terms and conditions."
            },
            {
              title: "5.4 NXP Terms and Conditions.”",
              description: "In the event that any End User breaches any confidentiality or use restrictions in this Agreement that are related to any Intellectual Property Rights owned by NXP Semiconductors Netherlands B.V., whose principal place of business is situated at High Tech Campus 60, Eindhoven, 5656 AG, The Netherlands (“NXP”), it is intended that NXP will have the right to enforce any rights conferred on it under this Agreement and to that extent NXP will have the same rights against the End User as would be available if it were a party to this Agreement."
            },
          ]
        }
      ]
    },
    {
      title: '6. Customer Data',
      content: [
        {
          type: "list",
          items: [
            {
              title: "6.1 Ownership",
              description: "Customer owns all right, title, and interest in and to (a) any intellectual property existing prior to the effective date of this Agreement that was owned or developed by Customer or Customer’s licensees or subcontractors, (b) anything Customer develops independent of Customer’s relationship with Evensoft, (c) documents, email, or other data uploaded through the Evensoft Services or otherwise provided to Evensoft in the course of using the Evensoft Products or Evensoft Services, including all Intellectual Property Rights therein, provided to Evensoft by Customer, or (d) any other data or documents uploaded to the Evensoft Services by Customer or any of its Authorized Users, (collectively, “Customer Data”). Evensoft shall not use Customer Data, except as expressly permitted by this Agreement, required by law, required to provide the Evensoft Services to Customer, or as otherwise authorized by Customer in writing. Specifically subject to the restrictions in this paragraph, Evensoft shall have the right to collect and analyze data and other information relating to the provision, use, and performance of various aspects of the Evensoft Services and related systems and technologies (including, without limitation, anonymous and aggregated information concerning use of Customer Data in the Evensoft Services) (“Usage Data”), and Evensoft own of all such Usage Data. No rights or licenses are granted in the Customer Data except as expressly set forth herein."
            },
            {
              title: "6.2 Data Security",
              description: "Evensoft is dedicated to keeping Customer Data secure. Evensofthas implemented and will maintain technical and organizational measures commensurate with generally accepted industry standards designed to protect Customer Data against accidental or unlawful loss, alteration, access or disclosure. Such measures will include but are not limited to encryption, monitoring, network controls, personnel training, and regular security testing. Upon termination of this Agreement, or when Customer closes Customer’s Account, Evensoft will remove Customer Data from Evensoft’s servers within thirty (30) days."
            },
          ]
        }
      ]
    },

    {
      title: '7. User Content Generally',
      content: [
        { type: 'bullet', text: 'When Customer posts content and/or information to the Site or in connection with the Evensoft Services, whether within Customer’s Account as Customer Data, or otherwise (collectively, “User Content”), Customer represents and warrants to Evensoft that (1) Customer owns or has rights to use the User Content, (2) the posting of the User Content does not violate any rights of any person or entity, and (3) Customer has no agreement with or obligations to any third party that would prohibit Customer’s use of the Site, Evensoft Products, or Evensoft Services in the manner so used. Customer agrees to pay all royalties, fees, and any other monies owing to any person or entity by reason of any User Content posted by Customer to the Site or through the Evensoft Services.' },
      ],
    },

    {
      title: '8. Fees and Payment Terms',
      content: [
        {
          type: "list",
          items: [
            {
              title: "8.1 Payment Terms",
              description: "Customer owns all right, title, and interest in and to (a) any intellectual property existing prior to the effective date of this Agreement that was owned or developed by Customer or Customer’s licensees or subcontractors, (b) anything Customer develops independent of Customer’s relationship with Evensoft, (c) documents, email, or other data uploaded through the Evensoft Services or otherwise provided to Evensoft in the course of using the Evensoft Products or Evensoft Services, including all Intellectual Property Rights therein, provided to Evensoft by Customer, or (d) any other data or documents uploaded to the Evensoft Services by Customer or any of its Authorized Users, (collectively, “Customer Data”). Evensoft shall not use Customer Data, except as expressly permitted by this Agreement, required by law, required to provide the Evensoft Services to Customer, or as otherwise authorized by Customer in writing. Specifically subject to the restrictions in this paragraph, Evensoft shall have the right to collect and analyze data and other information relating to the provision, use, and performance of various aspects of the Evensoft Services and related systems and technologies (including, without limitation, anonymous and aggregated information concerning use of Customer Data in the Evensoft Services) (“Usage Data”), and Evensoft own of all such Usage Data. No rights or licenses are granted in the Customer Data except as expressly set forth herein."
            },
            {
              title: "8.2 Device-Hours and Burst Charges",
              description: "Certain subscription plans for the Evensoft SaaS product include a specific number of “device-hours” per calendar month. One “device-hour” represents a single virtual device being in an “On” or “Paused” state for a period of one hour. Device-hours are measured by pooling together individual virtual device usage sessions within each month, then rounding up to the nearest hour. The number of “plan device-hours" + " per month included for Customer use with a purchased subscription plan is indicated by the relevant SKU specified in the Products section of the Order Form. For any calendar month during the Subscription Term, if Customer usage of the Evensoft Product exceeds their plan device-hours, " + "burst device-hours" + "will be charged to the customer for the calendar month period. Burst device-hours are charged at the same device-hour rate as plan device-hours. If incurred, a customer invoice for the month period will be generated and sent to the Customer for payment with terms as specified on the relevant Order Form. For any calendar month during the Subscription Term, if Customer usage of Evensoft Product does not exceed their plan device-hours, unused device-hours do not rollover to the following month period"
            },
            {
              title: "8.3 Late Payments",
              description: "If Customer fails to make any undisputed payment when due, in addition to all other remedies that may be available: (i) Evensoft may charge interest on the past due amount at the highest rate permitted under applicable law, calculated daily and compounded monthly; (ii) Evensoft may withdraw any discounts offered in the Order Form; and (iii) Customer shall reimburse Evensoft for all costs incurred by Evensoft in collecting any late payments or interest, including attorneys’ fees, court costs, and collection agency fees."
            },
            {
              title: "8.4 Taxes",
              description: "Applicable taxes will be calculated and reflected on the invoice. However, unless otherwise specified, all Fees and other amounts payable by Customer under this Agreement are exclusive of taxes and similar assessments. Customer is responsible for all sales, use, and excise taxes, and any other similar taxes, duties, and charges of any kind imposed by any federal, state, or local governmental or regulatory authority on any amounts payable by Customer hereunder, but in all cases excluding any taxes imposed on Evensoft’s income, employment, or property."
            },
            {
              title: "8.5 Disputes",
              description: "Where the Customer disputes any amount invoiced in good faith, it will: (i) notify Evensoft as soon as reasonably practicable, however, not later than ten (10) business days after receipt of the relevant invoice; (ii) pay the balance of the invoice that is not in dispute by the due date; and (iii) pay the balance and any interest as set out in Clause 8.1 above on sums found or agreed to be due within ten (10) business days after resolution of the dispute.Affiliate Orders."
            },
            {
              title: "8.6 Affiliate Orders",
              description: "The Parties agree that Affiliates of Customer may execute their own Order or Orders with Evensoft, as mutually agreed by the parties. This will create a separate agreement between Evensoft and the Affiliate incorporating the terms of this Agreement whereby the Affiliate shall be deemed “Customer”. Neither Customer nor Customer’s Affiliate shall have any rights under each other’s agreement with Evensoft and a breach or termination of any such agreement will not result in a breach or termination of any other agreement."
            },
          ]
        }
      ]
    },
    {
      title: '9. Term and Termination',
      content: [
        {
          type: "list",
          items: [
            {
              title: "9.1 Term",
              description: "The term of this Agreement shall commence on the applicable Effective Date specified in the Order Form and continue for the Subscription Term, unless otherwise terminated as provided in this Section. Unless otherwise provided in the applicable Order Form, the Subscription Term will automatically renew for a term of equal length, unless Customer notifies Evensoft of its intention not to renew at least thirty (30) days in advance of the expiration of the current term."
            },
            {
              title: "9.2 Termination for Inactivity",
              description: "Either Party may terminate this Agreement or any Order Form upon written notice to the other Party if there are no current Evensoft Order Forms in effect and none have been effective within the previous sixty (60) days."
            },
            {
              title: "9.3 Termination by Customer",
              description: "Customer may terminate this Agreement at the end of the Subscription Term specified in the Evensoft Order Form by providing thirty (30) days written notice to Evensoft. Notwithstanding the foregoing, Customer may cancel any subscription based Evensoft Service at any time from Customer’s Account settings or as otherwise agreed by Evensoft in writing. Customer will continue to have access to that Evensoft Service through the end of Customer’s then current billing period, but Customer will not be entitled to a refund or credit for any Subscription Fees already due or paid."
            },
            {
              title: "9.4 Termination by Evensoft.",
              description: "Evensoft may terminate this Agreement or suspend Customer’s or any Authorized User’s access to Evensoft Products and/or Evensoft Services if, in Evensoft’s sole and absolute discretion, the Customer, or any of its Affiliates, employees, contractors or Authorized Users: (i) use any of Evensoft’s Intellectual Property Rights other than as expressly permitted herein; (ii) is in default or breach of any provisions of this Agreement and such breach, if capable of cure, is not cured within thirty (30) days; (iii) is in default of any of its undisputed payment obligations to Evensoft and such payment obligation is not cured within ten (10) business days; or (iv) commences liquidation or dissolution proceedings, disposes of or attempts to dispose of its assets other than in the ordinary course of business, fails to continue its business, makes an assignment for the benefit of creditors, or if Customer becomes the subject of a voluntary or involuntary bankruptcy or similar proceeding. Evensoft may, in its sole and absolute discretion, immediately and with or without notice, suspend or terminate the Customer license in whole or in part and with respect to any or all Authorized Users or otherwise, or terminate this Agreement or any Evensoft Order Form, if Customer or any Authorized User commits a Severe Infraction."
            },
            {
              title: "9.5 Termination of an Authorized User.",
              description: "By Customer. Customer may terminate any Authorized User’s right to access and use the Evensoft Products or Evensoft Services by changing the Authorized User configurations in the Company Account.By Evensoft.Evensoft may terminate the right of any Authorized User to access and use the Evensoft Products or Evensoft Services immediately and without notice if: "
            },
            {
              title: "9.6 Effect of Expiration or Termination",
              description: "Upon expiration or earlier termination of this Agreement, any licenses granted hereunder will also terminate, and, without limiting Customer’s obligations hereunder, Customer shall cease using and delete, destroy, or return all copies of the Evensoft Software (whether from the Equipment or otherwise) and certify in writing to Evensoft that the Evensoft Software has been deleted or destroyed. No expiration or termination will affect Customer’s obligation to pay all Fees that may have become due before such expiration or termination or entitle Customer to any refund."
            },
          ]
        }
      ]
    },

    {
      title: '10. Support',
      content: [
        { type: 'bullet', text: 'Customer may use Evensoft’s self-service Knowledge Base at support.Evensoft.com to find answers to most common questions. Customer may submit support requests via the Evensoft Help Desk at support.Evensoft.com, or by emailing support@Evensoft.com. Evensoft will typically respond to support requests within one business day, and will use commercially reasonable efforts to resolve support requests in a prompt and timely manner. Support is provided Monday - Friday 9-5 EST, except on federally recognized US holidays.' },
        { type: 'bullet', text: 'In order to resolve support requests, Evensoft may require Customer to provide a general description of the operating environment, a list of hardware components, a reproducible test case, and certain log files, trace files, or system files. Failure to provide this information may prevent Evensoft from identifying and resolving the alleged issue. Support is provided only for users with active Subscriptions. Evensoft reserves the right to provide Company with a workaround in lieu of fixing an alleged defect should Evensoft in its sole judgment determine that it is more effective to do so. Support requests are limited to Evensoft Products that are current and up to date.' },
        { type: 'bullet', text: 'Support is provided for general technical support questions concerning the operation of Evensoft Products. This support does not include assistance with user or third-party generated software (e.g. applications), including software (e.g. custom virtual device models or extensions) when generated through the use of Evensoft Products or Evensoft provided tools. This support also does not include assistance with Customer or third-party computer systems or networks. Customers may purchase additional support services from Evensoft as available and as defined in relevant addendums to this Agreement.' },
      ],
    },


    {
      title: '11. Modifications; Maintenance; Updates',
      content: [
        {
          type: "list",
          items: [
            {
              title: "11.1 Modifications",
              description: "Evensoft reserves the right to, and may at any time from time to time: (i) enhance, modify or remove any feature(s) or functionality of any Site, Evensoft Product, or Evensoft Services; (ii) add additional service offerings; or (iii) remove service offerings (parts (i) – (iii) collectively, “Service Revisions”). Evensoft may notify Customer of any material Service Revisions that will substantially impact Customer’s use of the Evensoft Products or Evensoft Services by posting notice of such material Service Revisions on the Evensoft SaaS or other support page or by e-mail. Unless, and only to the extent, Evensoft provides otherwise, any Service Revisions will become effective immediately upon their implementation by Evensoft. Customer’s and any Authorized User’s continued use of any Evensoft Product or Evensoft Service after any Service Revisions become effective constitutes Customer’s and that Authorized User’s acceptance of the Service Revisions."
            },
            {
              title: "11.2 Maintenance",
              description: "At any time from time to time, with or without notice and without Evensoft liability to Customer or any Authorized User, all or part of any Evensoft Products or Evensoft Services may be suspended: (i) in order to maintain (e.g. update, modify, upgrade, patch or repair) the Evensoft system or any part or aspect of its infrastructure; (ii) as Evensoft determines may be required by applicable law; (iii) as Evensoft determines to be necessary to protect its system or any part thereof, or any other party of its infrastructure, from unauthorized access or any attack; or (iv) as the result of technical issues or system failures. Evensoft will make a good faith effort to notify Customer in advance of any scheduled suspension of the applicable Evensoft Products or Evensoft Services."
            },
            {
              title: "11.3 Updates",
              description: "The Site, Evensoft Products, and Evensoft Services, including their functions and functionality, may be changed by Evensoft while this Agreement is in effect by means of Updates. Updates may modify or delete in their entirety certain features and functionalities. Customer acknowledges and agrees that Updates will be deemed to be part of the Site, Evensoft Products, and Evensoft Services, as applicable, and will be subject to the terms and conditions of this Agreement. Customer agrees to install or otherwise implement Updates when made available by Evensoft, and Customer understands and agrees that failure to install or implement Updates as they are made available by Evensoft will void all performance warranties and any support obligations Evensoft has under this Agreement, even if Customer has paid for Premium Support."
            },
          ]
        },
      ],
    },
    {
      title: '12. Notice of Infringement',
      content: [
        { type: "bullet", text: "Evensoft respects intellectual property laws and expects all Customers to do the same. It is Evensoft’s policy to terminate in appropriate circumstances the Accounts of Customers who repeatedly infringe or are believed to be repeatedly infringing the rights of Intellectual Property owners. Claims of trademark, copyright, or patent infringement or any other alleged intellectual property violations should be sent to Evensoft’s designated agent, pursuant to Evensoft’s Intellectual Property Policy (www.Evensoft.com/IP)." }
      ],
    },

    {
      title: '13. Warranty Disclaimer',
      content: [
        {
          type: 'list',
          items: [
            {
              title: "13.1 Disclaimer",
              description: "Except as otherwise provided herein, Customer understands and agrees that the Evensoft Technology are available on an “as is” basis, without any other warranty, and that Customer uses the Site, Evensoft Products, and Evensoft Services at Customer’s own risk.”"
            },
            {
              title: "13.2 Equipment Warranty",
              description: "All Evensoft Products that include hardware Equipment include a 1-year limited hardware warranty from date of purchase. Evensoft Products must have an active Subscription Term and have current and up to date Evensoft software. Any modification of Equipment by Customer will void this warranty, and Evensoft may not provide support services for EvensoftEvensoft Products running on modified Equipment. The warranty is an exchange service that involves like-for-like replacement of defective, as deemed by Evensoft at its sole discretion, Equipment with new Equipment provided by Evensoft. Evensoft may request defective equipment to be returned to Evensoft or require the Customer to provide proof of software deletion or destruction via a means provided by Evensoft and that is reasonable for the Customer to execute. Evensoft will incur all costs for shipping Equipment to and from the Customer. Evensoft will make every commercially reasonable effort to diagnose defective Equipment and perform the exchange service as quickly as possible.”"
            },
            {
              title: "13.3 Disclaimer",
              description: "EXCEPT AS EXPRESSLY PROVIDED IN THIS SECTION 13, Evensoft DISCLAIMS, TO THE MAXIMUM EXTENT PERMITTED BY LAW, ANY AND ALL WARRANTIES, WHETHER EXPRESS OR IMPLIED, INCLUDING, WITHOUT LIMITATION, (A) WARRANTIES OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE, (B) WARRANTIES AGAINST INFRINGEMENT OF ANY THIRD PARTY INTELLECTUAL PROPERTY OR PROPRIETARY RIGHTS, (C) WARRANTIES RELATING TO DELAYS, INTERRUPTIONS, ERRORS, OR OMISSIONS IN THE Evensoft SERVICES OR ON THE SITE, (D) WARRANTIES RELATING TO THE ACCURACY OR CORRECTNESS OF DATA ON THE Evensoft PRODUCTS AND/OR Evensoft SERVICES, AND (E) ANY OTHER WARRANTIES OTHERWISE RELATING TO Evensoft’S PERFORMANCE, NONPERFORMANCE, OR OTHER ACTS OR OMISSIONS.Evensoft DOES NOT WARRANT THAT THE SITE, Evensoft PRODUCTS, OR THE Evensoft SERVICES WILL OPERATE ERROR-FREE. IF CUSTOMER’S USE OF THE SITE, Evensoft PRODUCTS, OR THE Evensoft SERVICES RESULTS IN THE NEED FOR SERVICING OR REPLACING EQUIPMENT OR DATA, Evensoft ARE NOT RESPONSIBLE FOR ANY SUCH COSTS. Evensoft SPECIFICALLY DISCLAIMS ANY LIABILITY FOR RESULTS OBTAINED FROM Evensoft MATRIX. SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF CERTAIN CATEGORIES OF DAMAGES OR IMPLIED WARRANTIES; THEREFORE, THE ABOVE LIMITATIONS MAY NOT APPLY TO CUSTOMER. IN SUCH JURISDICTIONS, OUR LIABILITY IS LIMITED TO THE GREATEST EXTENT PERMITTED BY LAW.”"
            },
          ]
        }
      ],
    },

    {
      title: '14. Exclusion of Certain Damages; Limitation of Liability',
      content: [
        {
          type: 'list',
          items: [
            {
              title: "14.1 No Consequential Damages",
              description: "In no event will either Party be liable for any indirect, special, incidental, exemplary, punitive, treble or consequential damages (including, without limitation, loss of business, revenue, profits, goodwill, data or other economic advantage) arising out of or relating to this Agreement, however caused and based on any theory of liability, whether breach of contract, breach of warranty, tort (including negligence), product liability or otherwise, even if the other Party is advised of the possibility of such damages."
            },
          ]
        },
        {
          type: 'list',
          items: [
            {
              title: "14.2 Liability Cap",
              description: "Each Party’s total liability (including attorneys’ fees) arising out of or related to this Agreement will not exceed the amount paid by Customer to Evensoft under this Agreement during the twelve (12) month period prior to the date the claim arose."
            },
          ]
        },
        {
          type: 'list',
          items: [
            {
              title: "14.3 Excluded Claims",
              description: "The foregoing limitations under this Section 14 do not apply to (i) Customer’s breach of sections 4.1 (License Grant) or 4.3 (Restrictions); (ii) a Party’s indemnification obligations under Section 15; (ii) damages arising out of a breach of the other party’s intellectual property rights; (iii) damages arising out of a Party’s gross negligence or willful misconduct; or (iv) any other liability that cannot be excluded under applicable law."
            },
          ]
        },


      ]
    },
    {
      title: '15. Indemnification',
      content: [
        {
          type: 'list',
          items: [
            {
              title: "15.1 By EvensoftEvensoft",
              description: "Evensoft shall indemnify, defend, and hold harmless Customer from and against any and all losses, damages, liabilities, costs (including reasonable attorneys’ fees) (“Losses”) incurred by Customer resulting from any third-party claim, suit, action, or proceeding (“Third-Party Claim”) that the Evensoft Technology, or any use of the EvensoftEvensoft Technology in accordance with this Agreement, infringes or misappropriates such third party’s intellectual property rights; provided that Customer promptly notifies Evensoft in writing of the claim, cooperates with Evensoft, and allows Evensoft sole authority to control the defense and settlement of such claim (so long as such settlement does not adversely affect Customer). If such a claim is made or appears possible, Customer agrees to permit Evensoft, at Evensoft’s sole discretion, to (A) modify or replace the Evensoft Technology, or component or part thereof, to make it non-infringing, or (B) obtain the right for Customer to continue use. If EvensoftEvensoft determines that neither of these alternatives is reasonably available, either party may terminate this Agreement, in its entirety or with respect to the affected component or part, effective immediately on written notice to Customer. This Section 15.1 will not apply to the extent that the alleged infringement arises from: (A) use of the Evensoft Technology in combination with data, software, hardware, equipment, or technology not provided by Evensoft or authorized by Evensoft in writing; (B) modifications to the Evensoft Technology not made by Evensoft or authorized by Evensoft in writing; or (C) use of any version other than the most current version of the Evensoft Technology delivered to Customer; or (D) Third-Party Software. THIS SECTION 15.1 SETS FORTH CUSTOMER’S SOLE REMEDIES AND Evensoft’S SOLE LIABILITY AND OBLIGATION FOR ANY ACTUAL, THREATENED, OR ALLEGED CLAIMS THAT THE Evensoft TECHNOLOGY INFRINGES, MISAPPROPRIATES, OR OTHERWISE VIOLATES ANY INTELLECTUAL PROPERTY RIGHTS OF ANY THIRD PARTY."
            },
            {
              title: "15.2 By Customer",
              description: "Customer agrees to indemnify and hold harmless Evensoft, our affiliates and our and their officers, directors, partners, agents, and employees from and against any loss, liability, claim, or demand, including reasonable attorneys’ fees (collectively, “Claims”), made by any third party due to or arising out of Customer’s use of the Evensoft Technology in violation of this Agreement, , or Customer Data and/or User Content. Customer agrees to be solely responsible for defending any Claims against or suffered by Evensoft, subject to our right to participate with counsel of our own choosing. Furthermore, Customer agrees to indemnify and hold Evensoft harmless for any damages arising out of a breach of security or any compromise of Customer’s Account."
            },
          ]
        }
      ]
    },
    {
      title: '16. Confidential Information',
      content: [
        { type: "bullet", text: "From time to time during the Term, either Customer or Evensoft may disclose or make available to the other party information about its business affairs, products, confidential intellectual property, trade secrets, third-party confidential information, and other sensitive or proprietary information, whether orally or in writing, and whether or not identified as “confidential” (collectively, “Confidential Information”). Confidential Information does not include information that, at the time of disclosure is: (a) in the public domain; (b) known to the receiving Party at the time of disclosure; (c) rightfully obtained by the receiving Party on a non-confidential basis from a third party; or (d) independently developed by the receiving Party. The receiving Party shall not disclose the disclosing Party’s Confidential Information to any person or entity, except to the receiving Party’s employees who have a need to know the Confidential Information for the receiving Party to exercise its rights or perform its obligations hereunder. Notwithstanding the foregoing, each Party may disclose Confidential Information to the limited extent required (i) in order to comply with the order of a court or other governmental body, or as otherwise necessary to comply with applicable law, provided that the Party making the disclosure pursuant to the order shall first have given written notice to the other Party and made a reasonable effort to obtain a protective order; or (ii) to establish a Party’s rights under this Agreement, including to make required court filings. On the expiration or termination of this Agreement, the receiving Party shall promptly return to the disclosing Party all copies, whether in written, electronic, or other form or media, of the disclosing Party’s Confidential Information, or destroy all such copies and certify in writing to the disclosing Party that such Confidential Information has been destroyed. Each Party’s obligations of non-disclosure with regard to Confidential Information are effective as of the Effective Date and will expire five years from the date first disclosed to the receiving Party; provided, however, with respect to any Confidential Information that constitutes a trade secret (as determined under applicable law), such obligations of non-disclosure will survive the termination or expiration of this Agreement for as long as such Confidential Information remains subject to trade secret protection under applicable law" },
      ],
    },
    {
      title: '17. Governing Law',
      content: [
        { type: "bullet", text: "This Agreement are governed by Delaware law, without giving effect to conflicts of law principles. Customer agrees that, to the extent applicable and expressly subject to the dispute resolution provisions below, to submit to the exclusive jurisdiction of the state and federal courts located in the state of Delaware in circumstances where this Agreement permit litigation in court." },
      ],
    },
    {
      title: '18. Dispute Resolution',
      content: [
        "PLEASE READ THIS SECTION CAREFULLY. IT CONTAINS PROCEDURES FOR MANDATORY BINDING ARBITRATION AND A CLASS ACTION WAIVER.",
        {
          type: 'list',
          items: [
            {
              title: "18.1 Notice Requirement and Informal Dispute Resolution",
              description: "Any dispute, controversy, or claim arising out of or relating to this contract, including the formation, interpretation, breach, or termination thereof, including whether the claims asserted are arbitrable, will be referred to and finally determined by arbitration. Before either Evensoft or Customer may seek arbitration, the party seeking arbitration must send the other party a written Notice of Dispute (“Notice”) describing the nature and basis of the claim or dispute and the requested relief. A Notice to Evensoft should be sent to: Evensoft, LLC, 1301 N Congress Ave, Suite 410, Boynton Beach, FL 33426. After the Notice is received, Customer and Evensoft may attempt to resolve the claim or dispute informally. If the Parties do not resolve the claim or dispute within thirty (30) days after the Notice is received, either party may begin an arbitration proceeding. The amount of any settlement offer made by any party may not be disclosed to the arbitrator until after the arbitrator has determined the amount of the award, if any, to which either party is entitled."
            },
            {
              title: "18.2 Arbitration Rules",
              description: "Arbitration shall be initiated through the American Arbitration Association (“AAA”), an established alternative dispute resolution provider (“ADR Provider”) that offers arbitration as set forth in this section. If AAA is not available to arbitrate, the parties shall agree to select an alternative ADR Provider. The rules of the ADR Provider shall govern all aspects of the arbitration, including but not limited to the method of initiating and/or demanding arbitration, except to the extent such rules conflict with this Agreement. The AAA Commercial Arbitration Rules (the “Arbitration Rules”) governing the arbitration are available online at www.adr.org or by calling the AAA at 1-800-778-7879. The arbitration shall be conducted by a single, neutral arbitrator. Any claims or disputes where the total amount of the award sought is less than Ten Thousand U.S. Dollars (US $10,000.00) shall be resolved through binding non-appearance-based arbitration. For claims or disputes where the total amount of the award sought is Ten Thousand U.S. Dollars (US $10,000.00) or more, the right to a hearing will be determined by the Arbitration Rules. Any hearing will be held in Palm Beach County, Florida, unless the parties agree otherwise. Any judgment on the award rendered by the arbitrator may be entered in any court of competent jurisdiction. Each party shall bear its own costs (including attorney’s fees) and disbursements arising out of the arbitration and shall pay an equal share of the fees and costs of the ADR Provider."
            },
            {
              title: "18.3 Additional Rules for Non-Appearance Based Arbitration",
              description: "The arbitration shall be conducted by telephone, online and/or based solely on written submissions; the specific manner shall be chosen by the party initiating the arbitration. The arbitration shall not involve any personal appearance by the parties or witnesses unless otherwise agreed by the parties."
            },
            {
              title: "18.4 Time Limits",
              description: "If either Customer or Evensoft pursue arbitration, the arbitration action must be initiated and/or demanded within the statute of limitations (i.e., the legal deadline for filing a claim) and within any deadline imposed under the AAA Rules for the pertinent claim."
            },
            {
              title: "18.5 Authority of Arbitrator",
              description: "If arbitration is initiated, the arbitrator will decide the rights and liabilities, if any, of the parties involved, and the dispute will not be consolidated with any other matters or joined with any other cases or parties. The arbitrator shall have the authority to grant motions dispositive of all or part of any claim. The arbitrator shall have the authority to award monetary damages, and to grant any non-monetary remedy or relief available to an individual under applicable law, the Arbitration Rules, and this Agreement. The arbitrator shall issue a written award and statement of decision describing the essential findings and conclusions on which the award is based, including the calculation of any damages awarded. The arbitrator has the same authority to award relief on an individual basis that a judge in a court of law would have. The award of the arbitrator is final and binding upon Customer and us."
            },
            {
              title: "18.6 Waiver of Jury Trial",
              description: "THE PARTIES HEREBY WAIVE THEIR CONSTITUTIONAL AND STATUTORY RIGHTS TO GO TO COURT AND HAVE A TRIAL IN FRONT OF A JUDGE OR A JURY, instead electing that all claims and disputes shall be resolved by arbitration under this Agreement. Arbitration procedures are typically more limited, more efficient and less costly than rules applicable in a court and are subject to very limited review by a court. In the event any litigation should arise between Customer and Evensoft in any state or federal court in a suit to vacate or enforce an arbitration award or otherwise, CUSTOMER AND Evensoft WAIVE ALL RIGHTS TO A JURY TRIAL, instead electing that the dispute be resolved by a judge."
            },
            {
              title: "18.7 Waiver of Class or Consolidated Actions",
              description: "ALL CLAIMS AND DISPUTES WITHIN THE SCOPE OF THIS SECTION 20 MUST BE ARBITRATED OR LITIGATED ON AN INDIVIDUAL BASIS AND NOT ON A CLASS BASIS, AND CLAIMS OF MORE THAN ONE USER CANNOT BE ARBITRATED OR LITIGATED JOINTLY OR CONSOLIDATED WITH THOSE OF ANY OTHER USER."
            },
            {
              title: "18.8 Confidentiality",
              description: "All aspects of the arbitration proceeding, including but not limited to the award of the arbitrator and compliance therewith, shall be strictly confidential. Customer agree to maintain confidentiality unless otherwise required by law. This paragraph shall not prevent a party from submitting to a court of law any information necessary to enforce this Section, to enforce an arbitration award, or to seek injunctive or equitable relief"
            },
            {
              title: "18.9 Severability",
              description: " If any part or parts of this Section 20 are found under the law to be invalid or unenforceable by a court of competent jurisdiction, then such specific part or parts shall be of no force and effect and shall be severed and the remainder of this Section 20 shall continue in full force and effect."
            },
            {
              title: "18.10 Right to Waive",
              description: " Any or all rights and limitations set forth in this Section 20 may be waived by the party against whom the claim is asserted. Such waiver shall not waive or affect any other portion of this Section 20."
            },
            {
              title: "18.11 Survival of Agreement",
              description: "This Section 20 will survive the termination of this Agreement."
            },
            {
              title: "18.12 Small Claims Court",
              description: "Notwithstanding the foregoing, either Customer or Evensoft may bring an individual action in small claims court."
            },
            {
              title: "18.13 Emergency Equitable Relief",
              description: "Notwithstanding the foregoing, either party may seek emergency equitable relief before a state or federal court in order to maintain the status quo pending arbitration. A request for interim measures shall not be deemed a waiver of any other rights or obligations under this Section 20."
            },
            {
              title: "18.14 Claims Not Subject to Arbitration",
              description: "Notwithstanding the foregoing, claims of defamation, violation of the Computer Fraud and Abuse Act, and infringement or misappropriation of our Intellectual Property Rights shall not be subject to this Section 20."
            },
          ]
        }
      ]
    },
    {
      title: '19. Notice for California Users',
      content: [
        { type: "bullet", text: "Under California Civil Code Section 1789.3, California Website users are entitled to the following specific consumer rights notice: The Complaint Assistance Unit of the Division of Consumer Services of the California Department of Consumer Affairs may be contacted in writing at 1625 N. Market Blvd., Suite S-202, Sacramento, California 95834, or by telephone at (800) 952-5210." }
      ],
    },
    {
      title: '20. Force Majeure',
      content: [
        { type: "bullet", text: "Nonperformance of either Party will be excused to the extent that performance is rendered impossible by strike, fire, flood, governmental acts, orders or restrictions, failure of suppliers, or any other reason where failure to perform is beyond the control of and not caused by the negligence of such Party." }
      ],
    },
    {
      title: '21. U.S. Government',
      content: [
        { type: "bullet", text: "With respect to the procurement or use of any Evensoft Service or Evensoft Product by or for any agency or part of the U.S. Government, any software provided in connection with any Service and any related explanatory written materials are “commercial items” as that term is defined at 48 CFR Section 2.102, consisting of “Commercial Computer Software” and “Commercial Computer Software Documentation” as such terms are used in 48 CFR Section 12.212 or 48 CFR Section 227.7202, as applicable. Consistent with 48 CFR Section 12.212 or 48 CFR Section 227.7202-1 through 227.7202-4, as applicable, the Commercial Computer Software and Commercial Computers Software Documentation are being licensed to the U.S. Government end Authorized Users (a) only as Commercial Items; and (b) with only those rights as are granted to Customer or its Authorized Users pursuant to the terms, conditions and restrictions of this Agreement. All computer software, technical data and documentation were developed exclusively at private expense by Evensoft or its third-party licensors or suppliers." }
      ],
    },
    {
      title: '22. Entire Agreement',
      content: [
        { type: "bullet", text: "This Agreement including any Order Forms, Policies, and any exhibits to any of the foregoing contains the entire understanding of the Parties with respect to the subject matter hereof and supersedes and replaces all prior or contemporaneous agreements, proposals, understandings, commitments, or negotiations with respect thereto, including, without limitation, any confidentiality or non-disclosure agreements, whether written or oral, and any prior click-wrap, shrink-wrap, or browse-wrap agreements between the Parties with respect to the terms and conditions hereof. There are no other oral or written understandings, terms, or conditions, and neither Party has relied upon any representation, express or implied, not contained in this Agreement. No additional terms in any Customer-issued document such as a purchase order, even if signed by Evensoft, shall amend, replace or supersede this Agreement." }
      ],
    },
    {
      title: '23. Notices',
      content: [
        { type: "bullet", text: "All notices, requests, consents, claims, demands, waivers, and other communications hereunder must be in writing and addressed to the Parties at the physical addresses or email addresses set forth on the signature page of this Agreement (or to such other address that may be designated by the Party giving notice from time to time in accordance with this Section). All notices must be delivered by personal delivery, nationally recognized overnight courier (with all fees pre-paid), email, (with confirmation of transmission) or certified or registered mail (in each case, return receipt requested, postage pre-paid). Except as otherwise provided in this Agreement, a notice is effective only: (i) upon receipt by the receiving Party, and (ii) if the Party giving the notice has complied with the requirements of this Section." }
      ],
    },
    {
      title: '24. Amendment and Modification; Waiver',
      content: [
        { type: "bullet", text: "No amendment to or modification of this Agreement is effective unless it is in writing and signed by an authorized representative of each Party. No waiver by any Party of any of the provisions hereof will be effective unless explicitly set forth in writing and signed by the Party so waiving. Except as otherwise set forth in this Agreement, (i) no failure to exercise, or delay in exercising, any rights, remedy, power, or privilege arising from this Agreement will operate or be construed as a waiver thereof and (ii) no single or partial exercise of any right, remedy, power, or privilege hereunder will preclude any other or further exercise thereof or the exercise of any other right, remedy, power, or privilege." }
      ],
    },
    {
      title: '25. Severability',
      content: [
        { type: "bullet", text: "If any provision of this Agreement is invalid, illegal, or unenforceable in any jurisdiction, such invalidity, illegality, or unenforceability will not affect any other term or provision of this Agreement or invalidate or render unenforceable such term or provision in any other jurisdiction. Upon such determination that any term or other provision is invalid, illegal, or unenforceable, the Parties hereto shall negotiate in good faith to modify this Agreement so as to effect the original intent of the Parties as closely as possible in a mutually acceptable manner in order that the transactions contemplated hereby be consummated as originally contemplated to the greatest extent possible." }
      ],
    },
    {
      title: '26. Assignment',
      content: [
        { type: "bullet", text: "Neither Party will assign or transfer any part of this Agreement without the prior written consent of the other Party, except in the case of an assignment due to corporate reorganization, change of control, consolidation, merger, reincorporation, sale of all or substantially all of its assets related to this Agreement or a similar transaction or series of transactions by either Party, which may occur without written consent. This Agreement will be binding upon and inure to the benefit of the Parties and their respective permitted successors and assigns." }
      ],
    },
    {
      title: '27. Equitable Relief',
      content: [
        { type: "bullet", text: "The Parties acknowledge and agree that a breach or threatened breach by such Party of any of its obligations hereunder could cause the non-breaching Party irreparable harm for which monetary damages would not be an adequate remedy and agrees that, in the event of such breach or threatened breach, the non-breaching Party will be entitled to seek equitable relief, including a restraining order, an injunction, specific performance, and any other relief that may be available from any court, without any requirement to post a bond or other security, or to prove actual damages or that monetary damages are not an adequate remedy. Such remedies are not exclusive and are in addition to all other remedies that may be available at law, in equity, or otherwise." }
      ],
    },
    {
      title: '28. Compliance with Laws and Export Control',
      content: [
        { type: "bullet", text: "Each Party will comply with all applicable laws and government regulations, including, if applicable, the export laws and regulations of the United States and other applicable jurisdictions, in connection with providing and using Evensoft Technology. Without limiting the foregoing, (i) each Party represents that is not named on any government list of persons or entities prohibited from receiving exports, and (ii) Customer shall not, and shall ensure that Named Users do not, violate any export embargo, prohibition, restrictions or other similar law in connection with this Agreement." },
        { type: "bullet", text: "Customer is responsible for obtaining all necessary licenses to import the Evensoft Technology, for customs importation of the goods, and for all costs and risks of carrying out customs formalities. If shipment of the Equipment is delayed at Customer’s request or as a result of Customer’s failure to facilitate customs clearance, Customer shall bear all reasonable and necessary transportation and/or storage related costs of holding such Equipment." }
      ],
    },
    {
      title: '29. Anti-Corruption',
      content: [
        { type: "bullet", text: "Neither Party has received or been offered any illegal or improper bribe, kickback, payment, gift, or thing of value from an employee or agent of the other Party in connection with this Agreement. Reasonable gifts and entertainment provided in the ordinary course of business do not violate the above restrictions." },
      ],
    },
    {
      title: '30. Marketing',
      content: [
        { type: "bullet", text: "Unless Customer directs otherwise in writing, which direction may be given at any time, Customer agrees that Evensoft may display Customer’s company name and logo (in accordance with any trademark guidelines provided) as a Evensoft customer in a manner that does not suggest your use or endorsement of any specific Evensoft product or service." }
      ],
    },
    {
      title: '31. Survival',
      content: [
        { type: "bullet", text: "Any right or obligation of the Parties in this Agreement which, by its express terms or nature and context is intended to survive termination or expiration of this Agreement, will survive any such termination or expiration." },
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
    {/* <Header/> */}
      <div className="policy-container bg-black">
        <header className="policy-header">
          <h1>Terms of Use</h1>
          <p>Last Updated: 25-Oct-2024</p>
          <p>The Evensoft® Products and Evensoft Services (defined below), and all content and features contained therein, are owned and operated by Evensoft, Inc., a Delaware corporation (hereinafter sometimes also referred to as “Evensoft”, “we”, “us”, or “our”).</p>
        </header>
        <div className="policy-content">
        <p>IMPORTANT: PLEASE READ ALL OF THE FOLLOWING TERMS OF USE CAREFULLY. THESE TERMS CONTAIN IMPORTANT INFORMATION REGARDING YOUR LEGAL RIGHTS, REMEDIES AND OBLIGATIONS. THESE INCLUDE (BUT ARE NOT LIMITED TO) VARIOUS LIMITATIONS AND EXCLUSIONS, A BINDING ARBITRATION CLAUSE, A CLASS ACTION WAIVER, A CLAUSE THAT GOVERNS THE JURISDICTION AND VENUE OF DISPUTES, AND OBLIGATIONS TO COMPLY WITH APPLICABLE LAWS AND REGULATIONS.</p>
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

export default TermsofUse;
