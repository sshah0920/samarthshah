import React from 'react';

import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import LanguageIcon from '@material-ui/icons/Language';

export default {
    Name: 'Samarth Shah',
    Title: 'Software Engineer',
    Birthdate: 'September 20, 1996',
    Email: 'samarthshah3140@gmail.com',
    Company: 'Cerner Corp',
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
            description1_0: '• Developed website frontend which enhanced user experience. Accomplished webpage objectives by creating site structure, page optimization and graphics integration.',
            description1_1: '• Developed reusable React functional and class components with Redux for state management.',
            description1_2: '• Improving code coverage to 90% using Enzyme.js, Chai.js and Mocha.js unit test frameworks.',
            description1_3: '• Designed processes for cleanup and performance improvements, that minimized downtime by 8%.'
        },
        {
            title: 'Software Engineering Intern  - Aditya Infotech',
            date: 'Jan 2018 - Nov 2018',
            description2_0:'• Developed microservices in Java to process data. Built and managed API’s using ext.js framework to maintain applications.', 
            description2_1:'• Worked on Frontend modules in React.JS for the users. Designed database schemas for complex entity relationships.', 
            description2_2:'• Investigating and resolving pre-existing bugs using debugging tools such as ChromeDevTools and React Developer Tools.'
        }],
    educations: [
        {
            title: 'Master of Science in Computer Science ',
            date: 'Syracuse University [Jan 2019 - Dec 2020]',
            description1_0:'Related Coursework:', 
            description1_1:'• Design and Analysis of Algorithms', 
            description1_2:'• Operating Systems', 
            description1_3:'• Internet Programming', 
            description1_4:'• Data Structures', 
            description1_5:'• Database Management Systems', 
            description1_6:'• Computer Architecture', 
            description1_7:'• Natural Language Processing', 
            description1_8:'• Structural Programming & Formal Methods',
            description1_9:'• Introduction to Data Science',
        },
        {
            title: 'B.Tech in Computer Science  & Engineering',
            date: 'ITM Vocational University [July 2014 - June 2018]',
            description2_0: 'Related Coursework:', 
            description2_2:'• Web Technologies',
            description2_3:'• JAVA Programming',
            description2_4:'• Object Oriented Programming',
            description2_5:'• Mobile Application Programming'
        },
    ],

    skills: [
        {
            title: 'Programming Languages',
            description: ["Java(Object Oriented Design)", "Golang", "Python", "C++"],
        },
        {
            title: 'Frameworks',
            description: ["ReactJs", "Ruby on Rails", "Django", "Asp .Net Core/MVC"],
        },
        {
            title: 'Databases',
            description: ["MySQL", "MongoDB(NoSQL)", "Microsoft SQL Server", "Postgresql", "Cassandra"],
        },
        {
            title: 'Web Technologies',
            description: ["HTML5", "CSS3", "XML", "PHP", "JavaScript", "Ajax", "jQuery", "JSON"],
        },
        {
            title: 'Tools and IDEs',
            description: ["GIT", "Eclipse", "Microsoft Visual Studio", "Intellij", "MS Office"],
        },
        {
            title: 'OS and Other',
            description: ["Docker", "Kubernetes", "Amazon Web Services", "Spring MVC", "Postman", "RESTful Web Services", "JIRA", "Azure Cloud"]
        }
    ],

    projects: [
        {
            tag: 'Java',
            image: 'https://resumeimages209.s3-us-west-1.amazonaws.com/simpchat.png',
            title: 'Chat Application - 2 Users',
            caption: 'Technologies Used: JAVA Swing, Socket Programming',
            description: '',
            links: [
                {link: 'https://github.com/sshah0920/TextingApp.git', icon:<GitHubIcon />}
            ]
        },
        {
            tag: 'React',
            image: 'https://resumeimages209.s3-us-west-1.amazonaws.com/eduapp.png',
            title: 'Education Portfolio',
            caption: 'Technologies Used: React, React Hooks, React Redux, Bootstrap4',
            description: '',
            links: [
                {link: 'https://github.com/sshah0920/EduApp', icon:<GitHubIcon />},
                {link: 'https://sshah0920.github.io/EduApp/', icon:<LanguageIcon />}
            ]
        },
        {
            tag: 'JavaScript',
            image: 'https://resumeimages209.s3-us-west-1.amazonaws.com/webchat.png',
            title: 'Web-Chat',
            caption: 'Technologies Used: PHP, JavaScript, AJAX, HTML5, CSS3',
            description: '',
            links: [
                {link: '', icon:<GitHubIcon />},
                {link: '', icon:<LanguageIcon />}
            ]
        },
        {
            tag: 'JavaScript',
            image: 'https://resumeimages209.s3-us-west-1.amazonaws.com/calc.png',
            title: 'Simple Calculator',
            caption: 'Technologies Used: HTML5, CSS3, JavaScript',
            description: '',
            links: [
                {link: 'https://github.com/sshah0920/SimpleCalc', icon:<GitHubIcon />},
                {link: 'https://sshah0920.github.io/SimpleCalc/', icon:<LanguageIcon />}
            ]
        },
        {
            tag: 'Java',
            image: 'https://image.shutterstock.com/image-photo/printed-html-code-website-internet-260nw-117393862.jpg',
            title: 'Ticket Reservation System',
            caption: 'Technologies Used: JAVA, Java Swing',
            description: 'Description Here',
            links: [
                {link: '', icon:<GitHubIcon />},
                {link: '', icon:<LanguageIcon />}
            ]
        },
        {
            tag: 'Python',
            image: 'https://resumeimages209.s3-us-west-1.amazonaws.com/splitceipt.png',
            title: 'Splitceipt',
            caption: 'Technologies Used: Python, Selenium, Python-Kivy, JavaScript, Web3 Client API',
            description: 'Description Here',
            links: [
                {link: 'https://github.com/sshah0920/SplitCeipt', icon:<GitHubIcon />},
                {link: '', icon:<LanguageIcon />}
            ]
        },
        {
            tag: 'Python',
            image: 'https://www.promptcloud.com/wp-content/uploads/2017/04/top-ted-talks-on-data-e1491372556650.png',
            title: 'TedTalk Analyzer',
            caption: 'Technologies Used: Python, TKinter(GUI), SKLearn, SeaBorn, Pandas, Numpy, Twitter API',
            description: '',
            links: [
                {link: '', icon:<GitHubIcon />},
                {link: '', icon:<LanguageIcon />}
            ]
        },
        {
            tag: 'ASP.Net',
            image: 'https://image.shutterstock.com/image-photo/printed-html-code-website-internet-260nw-117393862.jpg',
            title: 'E-Book Reader',
            caption: 'Technologies Used: HTML, CSS, ASP.Net Core MVC, JavaScript ES6',
            description: 'A web-application consisting of a Public Section(Static) & a Password Protected Section. Controls are implemented to change the viewing scale and make the design responsive. The application supports fuctions like upload, replace and delete a file/document. Only certain filetypes are supported. Users can view and comment on the uploaded documents.',
            links: [
                {link: '', icon:<GitHubIcon />},
                {link: '', icon:<LanguageIcon />}
            ]
        },
        {
            tag: 'Python',
            image: 'https://www.disruptivestatic.com/wp-content/uploads/2019/07/SENTIMENT.jpg',
            title: 'Sentiment Analysis - Training a Sentiment Classifier',
            caption: 'Technologies Used: Python',
            description: 'Description Here',
            links: [
                {link: '', icon:<GitHubIcon />},
                {link: '', icon:<LanguageIcon />}
            ]
        },
        {
            tag: 'JavaScript',
            image: 'https://resumeimages209.s3-us-west-1.amazonaws.com/weather.png',
            title: 'Weather App',
            caption: 'Technologies Used: JavaScript, HTML, CSS, OWM API',
            description: 'Description Here',
            links: [
                {link: 'https://github.com/sshah0920/WeatherApp', icon:<GitHubIcon />},
                {link: '', icon:<LanguageIcon />}
            ]
        },
    ]

};