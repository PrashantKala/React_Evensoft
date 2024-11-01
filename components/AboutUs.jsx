import React from 'react'
import Header from './Header'
import Navabar from './Navabar'
import ExecutiveTeam from './ExecutiveTeam';
import DeveloperTeam from './DeveloperTeam'
import Footer from './Footer'


const AboutUs = () => {
    const teamMembers = [
        {
            name: 'Chad Hughes',
            title: 'Founder & Chief Executive Officer',
            photoUrl: '../images/chad_image-Photoroom.png',
            decriptions: [
                "20+ Years AI/ML Architect and Cyber Range Experience",
                "Inventor, Software Developer, U.S. Marine Corps Veteran (Tank Commander 1990-2000)",
                "Passion for Dynamic Control Systems, AI Driven Robot Vision, Natural Language Processing, Artificial Neural Networks (particularly LLMs), Propositional Reasoning with Expert Systems and Patents in Stochastic Automata",
                "Founder and President of Evensoft, Specializing in Cybersecurity, Mobile, Single Board, Cloud, and Internet of Things",
                "Former Executive Director of Technology for ManTech, Consulting for DoD Cyber Range and Co-Founding the DoD Cybersecurity Range",
                "Founded Pacific Northwest National Laboratory’s Cybersecurity R&D Group, Serving as Chief Scientist",
                "Patents in Traffic Gen, Stim/Sim, Hypervisor and Deception Technologies"
            ],
        },
        {
            name: 'Ernest McCabe',
            title: 'Co-Founder & Chief Technology Officer',
            photoUrl: '../images/Ernest_McCaleb-Photoroom.png',
            decriptions: [
                "20+ Years Cyber Range Experience",
                "Cybersecurity Architect, Developer, and Industry Thought Leader, Contributing Valuable Insights to Industry on Cyber Workforce Development and Cyber Architecture",
                "Passion for Pushing Boundaries of Cybersecurity in Rapidly Evolving Digital Landscape, Supporting Renowned Platforms Across Cybersecurity Industry",
                "Architect of Cloud-Native Cyber Training Environments for Over 250 National and International Financial Institutions, Including Industry Giants Goldman Sachs, Bank of America, Wells Fargo, and Deutsche Bank",
                "Original Chief Architect of DISA/DoD Cyber Security Range and the USMC Cyber Security Range",
                "Consultant to Google, Assisting Google’s Development & Implementation of Sovereign Cloud"
            ],
        },
        {
            name: 'LeAnna M. Lyons',
            title: ' Chief of Staff',
            photoUrl: '../images/LeAnna-removebg.png',
            decriptions: [
                "Nearly 20 years of experience in IT operations, business integration, and executive leadership across government and commercial sectors.",
                "Holds multiple certifications, including PMI, COBIT, ITIL, and Agile, supporting her strategic approach to IT program management.",
                "Proven ability to align corporate and mission objectives with organizational goals, driving significant business growth.",
                "Recognized for fostering team unity, scalable processes, and a work environment where individuals feel valued and empowered.",
                "Distinguished as Metronome's first Executive Director of Program Delivery and a Lifetime member of the ManTech Technical Elite.",
                "Serves as a keynote speaker at the Women in CyberSecurity conference and runs a career coaching business, amplifying her influence in the tech industry",
            ],
        },
    ];
    const developerTeam = [
        {
            name: 'Trinidad Estrada',
            title: 'Release Engineering, CI/CD & Framework Services Manager',
            decriptions: [
                "14 Years Software Engineering Experience",
                "B.S. Computer Science",
            ],
        },
        {
            name: 'Ben Hildebrand',
            title: 'AI/ML Architect',
            decriptions: [
                "15 Years in AI/Computational Science",
                "PhD in Applied and Computational Mathematics, Certifications in Data Science and ML",
            ],
        },

    ];
    return (
        <>
            <Header heading={"About Evensoft"} subHeading={"Evensoft is the culmination of over 20 years of research, development, testing and successful integration into cyber training environments. Its highly experienced executive team averages 25 years of proven development, engineering and architect experience."} />
            <ExecutiveTeam teamMembers={teamMembers} />
            <DeveloperTeam developerTeam={developerTeam} />
            <Footer />
        </>
    )
}

export default AboutUs