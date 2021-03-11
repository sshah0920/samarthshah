import React from 'react';

import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import LanguageIcon from '@material-ui/icons/Language';

import calcImage from '../assets/images/calc.png';

export default {
    Name: 'Samarth Shah',
    Title: 'Software Developer',
    Birthdate: 'September 20, 1996',
    Email: 'samarthshah3140@gmail.com',
    Job: 'Software Engineer',
    Address: 'Newark, California, USA',
    Phone: '+1(510)-766-4199',
    Skype: 'samarth.shah40',

    socials: {
        facebook: {
            link: 'https://www.facebook.com/samarthshah209/',
            text: 'Facebook',
            icon: <FacebookIcon />,
        },
        twitter: {
            link: 'https://twitter.com/samarthshah209',
            text: 'Twitter',
            icon: <TwitterIcon />
        },
        linkedin: {
            link: 'https://www.linkedin.com/in/samarthshah20/',
            text: 'LinkedIn',
            icon: <LinkedInIcon />
        },
        github: {
            link: 'https://github.com/sshah0920',
            text: 'GitHub',
            icon: <GitHubIcon />
        },
    },
    About: "I'm a Computer Science Graduate from Syracuse University having 6 years of academic experience in Software Development. I am an avid learner and an enthusiastic Software Developer with experience in Software Development. ",

    experiences: [
        {
            title: 'Web Developer - iConsult - Syracuse University',
            date: 'April 2020 - Nov 2020 ',
            description: ' • Developed websites from front to backend using PHP, JavaScript, and HTML. Enhanced user experience and accomplished webpage objectives by creating site structure, navigation, page optimization and graphics integration. • Led end-to-end web application development and creative design decisions. Participated in design reviews and code reviews for scheduled upcoming features. • Improved the website speed by 12% using the asynchronous loading for CSS and JavaScript file. • Prototyped new product features such as Call to Action and Live chat with ReactJS and WordPress for Content Management Systems. • Designed processes for cleanup and performance improvements, that minimized downtime by 8%.'
        },
        {
            title: 'Software Engineer  - Aditya Infotech',
            date: 'Jan 2018 - Nov 2018',
            description: ' • Developed dynamic and interactive web-applications that ensured high traffic, page views, and user experience, resulting in 23% increase in performance, designed modular elements using react and optimized cross-browser, multi-platform compatibility • Oversaw full lifecycle of software development of 3 projects. Followed the scrum management process • Fixed bugs from existing websites and implemented enhancements that significantly improved web functionality and speed • Facilitated in-theme customization, plug-in configuration, and customization of database structure for websites • Collaborated with a team of 6 engineers and worked closely to meet project requirements, goals, and desired functionality'
        }],
    educations: [
        {
            title: 'Master of Science in Computer Science ',
            date: 'Syracuse University [Jan 2019 - Dec 2020]',
            description: 'Related Coursework: Design and Analysis of Algorithms, Operating Systems, Internet Programming, Computer Architecture, Database Management Systems, Social Media & Data Mining, Natural Language Processing, Structural Programming & Formal Methods'
        },
        {
            title: 'B.Tech in Computer Science  & Engineering',
            date: 'ITM Vocational University [July 2014 - June 2018]',
            description: 'Related Coursework: Data Structures, Web Technologies, JAVA Programming, Object Oriented Programming, Mobile Application Programming'
        },
    ],

    skills: [
        {
            title: 'Programming Languages',
            description: ["Java", "C++(Boject Oriented Design)", "Python", "Andorid Programming"],
        },
        {
            title: 'Frameworks',
            description: ["Django", "Bootstrap", "ReactJS", "REST", "Ruby", "MVC", "Material UI"],
        },
        {
            title: 'Databases',
            description: ["MySQL", "MongoDB(NoSQL)", "Microsoft SQL Server", "SQLite", "Postgresql"],
        },
        {
            title: 'Web Technologies',
            description: ["HTML5", "CSS3", "XML", "PHP", "JavaScript", "Ajax", "Angular", "Node", "JSON"],
        },
        {
            title: 'Tools and IDEs',
            description: ["Github", "Eclipse", "Microsoft Visual Studio", "Android Studio", "Atom", "MS Office"],
        },
        {
            title: 'OS and Other',
            description: ["Docker", "Windows", "Linux"]
        }
    ],

    projects: [
        {
            tag: 'Java',
            image: 'https://resumeimages209.s3-us-west-1.amazonaws.com/simpchat.png',
            title: 'Chat Application - 2 Users',
            caption: 'Caption Here',
            description: 'Project 1 description',
            links: [
                {link: 'https://github.com/sshah0920/TextingApp.git', icon:<GitHubIcon />},
                {link: '#', icon:<LanguageIcon />}
            ]
        },
        {
            tag: 'React',
            image: 'https://resumeimages209.s3-us-west-1.amazonaws.com/eduapp.png',
            title: 'Education Portfolio',
            caption: 'A Simple React Web App to add Education details.',
            description: 'Project 2 description',
            links: [
                {link: 'https://github.com/sshah0920/EduApp', icon:<GitHubIcon />},
                {link: 'https://sshah0920.github.io/EduApp/', icon:<LanguageIcon />}
            ]
        },
        {
            tag: 'JavaScript',
            image: 'https://image.shutterstock.com/image-photo/printed-html-code-website-internet-260nw-117393862.jpg',
            title: 'Web-Chat',
            caption: 'Caption Here',
            description: 'Project 3 description',
            links: [
                {link: '', icon:<GitHubIcon />},
                {link: '', icon:<LanguageIcon />}
            ]
        },
        {
            tag: 'JavaScript',
            image: 'https://resumeimages209.s3-us-west-1.amazonaws.com/calc.png',
            title: 'Simple Calculator',
            caption: 'Simple Calculator',
            description: 'Project 4 description',
            links: [
                {link: 'https://github.com/sshah0920/SimpleCalc', icon:<GitHubIcon />},
                {link: 'https://sshah0920.github.io/SimpleCalc/', icon:<LanguageIcon />}
            ]
        },
        {
            tag: 'Android Programming',
            image: 'https://image.shutterstock.com/image-photo/printed-html-code-website-internet-260nw-117393862.jpg',
            title: 'Project 5',
            caption: 'Caption Here',
            description: 'Project 5 description',
            links: [
                {link: '', icon:<GitHubIcon />},
                {link: '', icon:<LanguageIcon />}
            ]
        },
        {
            tag: 'Python',
            image: 'https://image.shutterstock.com/image-photo/printed-html-code-website-internet-260nw-117393862.jpg',
            title: 'Splitceipt',
            caption: 'Caption Here',
            description: 'Description Here',
            links: [
                {link: '', icon:<GitHubIcon />},
                {link: '', icon:<LanguageIcon />}
            ]
        },
        {
            tag: 'Python',
            image: 'https://image.shutterstock.com/image-photo/printed-html-code-website-internet-260nw-117393862.jpg',
            title: 'TedTalk Analyzer',
            caption: 'Caption Here',
            description: 'Description Here',
            links: [
                {link: '', icon:<GitHubIcon />},
                {link: '', icon:<LanguageIcon />}
            ]
        },
        {
            tag: 'Asp .Net',
            image: 'https://image.shutterstock.com/image-photo/printed-html-code-website-internet-260nw-117393862.jpg',
            title: 'E-Book Reader',
            caption: 'Caption Here',
            description: 'Description Here',
            links: [
                {link: '', icon:<GitHubIcon />},
                {link: '', icon:<LanguageIcon />}
            ]
        },
    ]

};