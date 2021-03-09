import React from 'react';

import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import LanguageIcon from '@material-ui/icons/Language';
import CalcImage from '../assets/images/calc.png';

export default {
    Name: 'Samarth Shah',
    Title: 'Software Developer',
    Birthdate: 'September 20 1996',
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
            description: 'Developed websites from front to backend using PHP, JavaScript, and HTML. Enhanced user experience and accomplished webpage objectives by creating site structure, navigation, page optimization and graphics integration. Led end-to-end web application development and creative design decisions. Participated in design reviews and code reviews for scheduled upcoming features. Improved the website speed by 12% using the asynchronous loading for CSS and JavaScript file. Prototyped new product features such as Call to Action and Live chat with ReactJS and WordPress for Content Management Systems. Designed processes for cleanup and performance improvements, that minimized downtime by 8%.'
        },
        {
            title: 'Aditya Infotech',
            date: 'Jan 2018 - Nov 2018',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. '
        }],
    educations: [
        {
            title: 'Syracuse University',
            date: 'Master of Science in Computer Science (Jan 2019 - Dec 2020)',
            description: 'Related Coursework: Design and Analysis of Algorithms, Operating Systems, Internet Programming, Computer Architecture, Database Management Systems, Social Media & Data Mining, Natural Language Processing, Structural Programming & Formal Methods'
        },
        {
            title: 'ITM Vocational University',
            date: 'B.Tech in Computer Science (July 2014 - June 2018)',
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
            image: 'https://image.shutterstock.com/image-photo/printed-html-code-website-internet-260nw-117393862.jpg',
            title: 'Project 1',
            caption: 'Caption Here',
            description: 'Project 1 description',
            links: [
                {link: '', icon:''},
                {link: '', icon:''}
            ]
        },
        {
            tag: 'React',
            image: 'https://previews.dropbox.com/p/thumb/ABERoPX8FQrXeAedpilSHkCXWJsiDao1EHIAI0sty0LM6Pb7u-Lk4_crgJ4gzSCp4esPIMYq8_F9pMTVVsv3OT37bOcYjecrnTP4FNIt3wpjd9aULda-g6OObvJKnIsV3QoadB71FLq4xB0uWlRWoFCcpKC_Cy3cAA0eyiomiklrmMR1SG1S-r-q7nY790fqFsoAf6BYNGP5ggMs9-vb2mBzKZlJP3caG1AowC6tvqsxy1bX4QbZZ47Up_Jbei09ta4ko6Gmhcar-g69mqE1XzayONrihcqEdNe_t4_WkhLGXb5rGxa2qbaB28tW0NoT2LuAkforej57W2P_FzQqFDQ7wzKS4Xhc0npDNz4nv96F8A/p.png?fv_content=true&size_mode=5',
            title: 'Education Portfolio',
            caption: 'A Simple React Web App to add Education details.',
            description: 'Project 2 description',
            links: [
                {link: 'https://github.com/sshah0920/EduApp', icon:<GitHubIcon />},
                {link: 'https://sshah0920.github.io/EduApp/', icon:<LanguageIcon />}
            ]
        },
        {
            tag: 'Python',
            image: 'https://image.shutterstock.com/image-photo/printed-html-code-website-internet-260nw-117393862.jpg',
            title: 'Project 3',
            caption: 'Caption Here',
            description: 'Project 3 description',
            links: [
                {link: '', icon:''},
                {link: '', icon:''}
            ]
        },
        {
            tag: 'JavaScript',
            image:'https://previews.dropbox.com/p/thumb/ABGUkGViN0YBSLx4aN53JawymAXtmZSIECmd0XdJSUXU6m9G-NcnfIebPdHmIrK3li7oYfZZ14xncyvjEJeSQimCEvyztE1YjLGpBlBDngiCOEECAKmir87-SqJOnbZ_CjLA1KGnkB4jJQOmx06cP3tMzaTkcBDrEbsm6YSPHjOHAfl5B8KUjECPWpLV5GV7tXG5yx1NxFTff09v1k-NGTgTJQjAl4RA3-l4WZDphzmcNC4RkCOWdBYC355PztDQ-XmpTOU3cTvn5CHGO1ZwHB9LgZ9QJ8RmZodNmM2YVP_ZEfqp0e3H2lCzuL4ypy5JEq0tCMUVqn45FycsXDTsUEi8LuV_g6J6GmjXl89fn9BlOA/p.png?fv_content=true&size_mode=5',
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
                {link: '', icon:''},
                {link: '', icon:''}
            ]
        },
    ]

};