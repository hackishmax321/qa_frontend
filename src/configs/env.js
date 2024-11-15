const env = {
    SERVER_URL: 'https://qa-backend-hxbh.onrender.com/e-learning-portal/api/core/v01',

    // 'https://qa-backend-hxbh.onrender.com/e-learning-portal/api/core/v01'
    // 'http://localhost:5000/e-learning-portal/api/core/v01'

    QS_MAIN: [
        {
          title: 'Question 1',
          question: 'I know that different search engines may give different search results, because they are influenced by commercial factors.',
          options: ['I don t know', 'I need some help', 'I can do it by my own', 'I can help others'],
          answer: '',
          points: 1.1,
          type: 'Knowledge',
          level: 'Intermediate',
        },
        {
          title: 'Question 2',
          question: 'I know which words to use in order to find what I need quickly (e.g. to search online or within a document).',
          options: ['I don t know', 'I need some help', 'I can do it by my own', 'I can help others'],
          answer: '',
          points: 1.1,
          type: 'Skills',
          level: 'Foundation',
        },
        {
          title: 'Question 3',
          question: 'When I use a search engine, I can take advantage of its advanced features.',
          options: ['I don t know', 'I need some help', 'I can do it by my own', 'I can help others'],
          answer: '',
          points: 1.1,
          type: 'Skills',
          level: 'Intermediate',
        },
        {
          title: 'Question 4',
          question: 'I know how to find a website I have visited before.',
          options: ['I don t know', 'I need some help', 'I can do it by my own', 'I can help others'],
          answer: '',
          points: 1.1,
          type: 'Skills',
          level: 'Foundation',
        },
        {
          title: 'Question 5',
          question: 'I know how to differentiate promoted content from other content I find or receive online (e.g., recognizing an advert on social media or search engines).',
          options: ['I don t know', 'I need some help', 'I can do it by my own', 'I can help others'],
          answer: '',
          points: 1.2,
          type: 'Knowledge',
          level: 'Intermediate',
        },
        {
          title: 'Question 6',
          question: 'I know how to identify the purpose of an online information source (e.g., to inform, influence, entertain, or sell).',
          options: ['I don t know', 'I need some help', 'I can do it by my own', 'I can help others'],
          answer: '',
          points: 1.2,
          type: 'Knowledge',
          level: 'Intermediate',
        },
        {
          title: 'Question 7',
          question: 'I critically check if the information I find online is reliable.',
          options: ['I don t know', 'I need some help', 'I can do it by my own', 'I can help others'],
          answer: '',
          points: 1.2,
          type: 'Skills',
          level: 'Intermediate',
        },
        {
          title: 'Question 8',
          question: 'I know that some information on the Internet is false (e.g., fake news).',
          options: ['I don t know', 'I need some help', 'I can do it by my own', 'I can help others'],
          answer: '',
          points: 1.2,
          type: 'Knowledge',
          level: 'Foundation',
        },
        {
          title: 'Question 9',
          question: 'I know about different storage media (e.g., internal or external hard disk, USB memory, pen drive, memory card).',
          options: ['I don t know', 'I need some help', 'I can do it by my own', 'I can help others'],
          answer: '',
          points: 1.3,
          type: 'Knowledge',
          level: 'Intermediate',
        },
        {
          title: 'Question 10',
          question: 'I know how to organize digital content (e.g., documents, images, videos) using folders or tagging to find them back later.',
          options: ['I don t know', 'I need some help', 'I can do it by my own', 'I can help others'],
          answer: '',
          points: 1.3,
          type: 'Skills',
          level: 'Foundation',
        },
        {
          title: 'Question 11',
          question: 'I know how to copy and move files (e.g., documents, images, videos) between folders, devices, or on the cloud.',
          options: ['I don t know', 'I need some help', 'I can do it by my own', 'I can help others'],
          answer: '',
          points: 1.3,
          type: 'Skills',
          level: 'Foundation',
        },
        {
          title: 'Question 12',
          question: 'I know how to manage and analyse data using software (e.g. sorting, filtering, calculations)',
          options: ['I don t know', 'I need some help', 'I can do it by my own', 'I can help others'],
          answer: '',
          points: 1.3,
          type: 'Skills',
          level: 'Intermediate',
        },
        {
          title: 'Question 13',
          question: 'I know how to send, reply and forward e-mails.',
          options: ['I don t know', 'I need some help', 'I can do it by my own', 'I can help others'],
          answer: '',
          points: 2.1,
          type: 'Skills',
          level: 'Foundation',
        },
        {
          title: 'Question 14',
          question: 'I know that many communication services and social media are free of charge because they are paid for by advertising',
          options: ['I don t know', 'I need some help', 'I can do it by my own', 'I can help others'],
          answer: '',
          points: 2.1,
          type: 'Skills',
          level: 'Foundation',
        },
        {
          title: 'Question 15',
          question: 'I know how to use advanced videoconferencing features (e.g. moderating, recording audio and video)',
          options: ['I don t know', 'I need some help', 'I can do it by my own', 'I can help others'],
          answer: '',
          points: 2.1,
          type: 'Skills',
          level: 'Intermediate',
        },
        {
          title: 'Question 16',
          question: 'I know which communication tools and services (e.g. phone, email, video conference, text message) are appropriate to use in different circumstances.',
          options: ['I don t know', 'I need some help', 'I can do it by my own', 'I can help others'],
          answer: '',
          points: 2.1,
          type: 'Skills',
          level: 'Foundation',
        },
        {
          title: 'Question 17',
          question: 'I am open towards sharing digital content that I think might be interesting and useful to others',
          options: ['I don t know', 'I need some help', 'I can do it by my own', 'I can help others'],
          answer: '',
          points: 2.2,
          type: 'Skills',
          level: 'Intermediate',
        },
        {
          title: 'Question 18',
          question: 'I know how to use cloud services (e.g. Google Drive, DropBox and OneDrive) to share my files',
          options: ['I don t know', 'I need some help', 'I can do it by my own', 'I can help others'],
          answer: '',
          points: 2.2,
          type: 'Attitude',
          level: 'Intermediate',
        },
        {
          title: 'Question 19',
          question: 'I know how to change who I share content with (e.g. friends, friends of friends, everyone).',
          options: ['I don t know', 'I need some help', 'I can do it by my own', 'I can help others'],
          answer: '',
          points: 2.2,
          type: 'Skills',
          level: 'Intermediate',
        },
        {
          title: 'Question 20',
          question: 'I know how to reference the source of documents (e.g. the author or web address) that I found online.',
          options: ['I don t know', 'I need some help', 'I can do it by my own', 'I can help others'],
          answer: '',
          points: 2.2,
          type: 'Skills',
          level: 'Intermediate',
        },
        {
          title: 'Question 21',
          question: 'I know how to apply for a job using a digital platform (e.g. fill in a form, upload my CV and photo).',
          options: ['I don t know', 'I need some help', 'I can do it by my own', 'I can help others'],
          answer: '',
          points: 2.3,
          type: 'Skills',
          level: 'Foundation',
        },
        {
          title: 'Question 22',
          question: 'I know that many public services are available on the Internet (e.g. booking a health visit, submitting tax declaration, requesting birth, marriage, residence and other certificates).',
          options: ['I don t know', 'I need some help', 'I can do it by my own', 'I can help others'],
          answer: '',
          points: 2.3,
          type: 'Knowledge',
          level: 'Intermediate',
        },
        {
          title: 'Question 23',
          question: 'I know how to pay for goods and services that I buy online (e.g. using direct bank transfer, credit/debit cards, other online paymentsystems). ',
          options: ['I don t know', 'I need some help', 'I can do it by my own', 'I can help others'],
          answer: '',
          points: 2.3,
          type: 'Skills',
          level: 'Foundation',
        },
        {
          title: 'Question 24',
          question: 'It matters to me to debate social or political issues online (e.g. in online forums, news sites, Facebook, Twitter).',
          options: ['I don t know', 'I need some help', 'I can do it by my own', 'I can help others'],
          answer: '',
          points: 2.3,
          type: 'Attitude',
          level: 'Intermediate',
        },
        {
          title: 'Question 25',
          question: 'I understand the benefits of remote collaboration (e.g. reduced commuting time). ',
          options: ['I don t know', 'I need some help', 'I can do it by my own', 'I can help others'],
          answer: '',
          points: 2.4,
          type: 'Knowledge',
          level: 'Intermediate',
        },
        {
          title: 'Question 26',
          question: 'I know how to edit a shared, online document.',
          options: ['I don t know', 'I need some help', 'I can do it by my own', 'I can help others'],
          answer: '',
          points: 2.4,
          type: 'Skills',
          level: 'Intermediate',
        },
        {
          title: 'Question 27',
          question: 'I know how to invite others and give appropriate permissions to collaborate on a shared document. ',
          options: ['I don t know', 'I need some help', 'I can do it by my own', 'I can help others'],
          answer: '',
          points: 2.4,
          type: 'Skills',
          level: 'Intermediate',
        },
        {
          title: 'Question 28',
          question: 'I am aware that I should ask permission from a person before publishing or sharing photos about them.',
          options: ['I don t know', 'I need some help', 'I can do it by my own', 'I can help others'],
          answer: '',
          points: 2.5,
          type: 'Knowledge',
          level: 'Foundation',
        },
        {
          title: 'Question 29',
          question: 'I know how to recognise online messages and behaviours that attack certain groups or individuals (e.g. hate speech).',
          options: ['I don t know', 'I need some help', 'I can do it by my own', 'I can help others'],
          answer: '',
          points: 2.5,
          type: 'Skills',
          level: 'Foundation',
        },
        {
          title: 'Question 30',
          question: 'I can take the right measures if someone is doing the wrong thing online (e.g. an offensive comment, threats).',
          options: ['I don t know', 'I need some help', 'I can do it by my own', 'I can help others'],
          answer: '',
          points: 2.5,
          type: 'Attitude',
          level: 'Intermediate',
        },
        {
          title: 'Question 31',
          question: 'I know how to behave online according to the situation (e.g. formal vs informal).',
          options: ['I don t know', 'I need some help', 'I can do it by my own', 'I can help others'],
          answer: '',
          points: 2.5,
          type: 'Attitude',
          level: 'Foundation',
        },
        {
          title: 'Question 32',
          question: 'I know my digital identity is everything that identifies me in online environments (e.g. usernames, likes and posts on social media, petitions signed online).',
          options: ['I don t know', 'I need some help', 'I can do it by my own', 'I can help others'],
          answer: '',
          points: 2.6,
          type: 'Knowledge',
          level: 'Intermediate',
        },
        {
          title: 'Question 33',
          question: 'I know how to create a profile in digital environments for personal or professional purposes.',
          options: ['I don t know', 'I need some help', 'I can do it by my own', 'I can help others'],
          answer: '',
          points: 2.6,
          type: 'Knowledge',
          level: 'Intermediate',
        },
        {
          title: 'Question 34',
          question: 'I know that the EU introduced regulation on The Right to Be Forgotten (i.e. to have one s private information removed from the Internet).',
          options: ['I don t know', 'I need some help', 'I can do it by my own', 'I can help others'],
          answer: '',
          points: 2.6,
          type: 'Knowledge',
          level: 'Intermediate',
        },
        {
          title: 'Question 35',
          question: 'I know how to configure the settings in my Internet browser to prevent or limit cookies.',
          options: ['I don t know', 'I need some help', 'I can do it by my own', 'I can help others'],
          answer: '',
          points: 2.6,
          type: 'Skills',
          level: 'Advanced',
        },
        {
          title: 'Question 36',
          question: 'I know how to create and edit digital text files (e.g. Word, OpenDocument, Google Docs).',
          options: ['I don t know', 'I need some help', 'I can do it by my own', 'I can help others'],
          answer: '',
          points: 3.1,
          type: 'Skills',
          level: 'Intermediate',
        },
        {
          title: 'Question 37',
          question: 'I know how to express myself by creating digital content on the Internet (e.g. blog post, video on YouTube)',
          options: ['I don t know', 'I need some help', 'I can do it by my own', 'I can help others'],
          answer: '',
          points: 3.1,
          type: 'Skills',
          level: 'Intermediate',
        },
        {
          title: 'Question 38',
          question: 'I know how to produce a multimedia presentation with text, images, audio and video elements.',
          options: ['I don t know', 'I need some help', 'I can do it by my own', 'I can help others'],
          answer: '',
          points: 3.1,
          type: 'Knowledge',
          level: 'Advanced',
        },
        {
          title: 'Question 39',
          question: 'To express myself, I am careful to choose the right type of digital media depending on the audience and my aim (e.g. using social media to promote a project).',
          options: ['I don t know', 'I need some help', 'I can do it by my own', 'I can help others'],
          answer: '',
          points: 3.1,
          type: 'Attitude',
          level: 'Intermediate',
        },
        {
          title: 'Question 40',
          question: 'I am keen to create new digital content by mixing and modifying existing digital resources (e.g. a presentation with photos and a soundtrack found on the Internet)',
          options: ['I don t know', 'I need some help', 'I can do it by my own', 'I can help others'],
          answer: '',
          points: 3.2,
          type: 'Skills',
          level: 'Intermediate',
        },
        {
          title: 'Question 41',
          question: 'I know that some digital content can be reused and reworked legally (e.g. public domain or with Creative Commons licences).',
          options: ['I don t know', 'I need some help', 'I can do it by my own', 'I can help others'],
          answer: '',
          points: 3.2,
          type: 'Knowledge',
          level: 'Advanced',
        },
        {
          title: 'Question 42',
          question: 'I know how to edit or make changes to digital content that others have created (e.g. insert a text into an image, edit a wiki).',
          options: ['I don t know', 'I need some help', 'I can do it by my own', 'I can help others'],
          answer: '',
          points: 3.2,
          type: 'Skills',
          level: 'Advanced',
        },
        {
          title: 'Question 43',
          question: 'I know how to create something new by mixing different types of content (e.g. text and images).',
          options: ['I don t know', 'I need some help', 'I can do it by my own', 'I can help others'],
          answer: '',
          points: 3.2,
          type: 'Attitude',
          level: 'Foundation',
        },
        {
          title: 'Question 44',
          question: 'I am careful to follow the rules about copyrights and licenses of digital content that I find',
          options: ['I don t know', 'I need some help', 'I can do it by my own', 'I can help others'],
          answer: '',
          points: 3.3,
          type: 'Attitude',
          level: 'Intermediate',
        },
        {
          title: 'Question 45',
          question: 'I know that downloading or sharing digital content (e.g. music, software, films) may have ethical or legal consequences.',
          options: ['I don t know', 'I need some help', 'I can do it by my own', 'I can help others'],
          answer: '',
          points: 3.3,
          type: 'Attitude',
          level: 'Intermediate',
        },
        {
          title: 'Question 46',
          question: 'I can detect when digital content is made available illegally (e.g. software, movies, music, books, TV)',
          options: ['I don t know', 'I need some help', 'I can do it by my own', 'I can help others'],
          answer: '',
          points: 3.3,
          type: 'Knowledge',
          level: 'Intermediate',
        },
        {
          title: 'Question 47',
          question: 'I know which different types of licences apply to the use of digital content (e.g. Creative Commons licences).',
          options: ['I don t know', 'I need some help', 'I can do it by my own', 'I can help others'],
          answer: '',
          points: 3.3,
          type: 'Skills',
          level: 'Advanced',
        },
        {
          title: 'Question 48',
          question: 'I am interested in understanding how a task can be broken down into steps so that it can be automated, for example in software or by a robot',
          options: ['I don t know', 'I need some help', 'I can do it by my own', 'I can help others'],
          answer: '',
          points: 3.4,
          type: 'Skills',
          level: 'Advanced',
        },
        {
          title: 'Question 49',
          question: 'I know that programming languages (e.g. Python, Visual Basic, Java) are used to provide a digital device instructions to carry out a task',
          options: ['I don t know', 'I need some help', 'I can do it by my own', 'I can help others'],
          answer: '',
          points: 3.4,
          type: 'Skills',
          level: 'Foundation',
        },
        {
          title: 'Question 50',
          question: 'I can write scripts, macros and simple applications to automate the execution of a task.',
          options: ['I don t know', 'I need some help', 'I can do it by my own', 'I can help others'],
          answer: '',
          points: 3.4,
          type: 'Skills',
          level: 'Advanced',
        },
        {
          title: 'Question 51',
          question: 'I know that there could be different algorithmic solutions to accomplish a specific computational task (e.g. sorting and searching).',
          options: ['I don t know', 'I need some help', 'I can do it by my own', 'I can help others'],
          answer: '',
          points: 3.4,
          type: 'Skills',
          level: 'Advanced',
        },
        {
          title: 'Question 52',
          question: 'I understand the benefits and also the safety risks when using Internet-connected devices or systems (e.g. smart watches, smart home devices).',
          options: ['I don t know', 'I need some help', 'I can do it by my own', 'I can help others'],
          answer: '',
          points: 4.1,
          type: 'Skills',
          level: 'Intermediate',
        },
        {
          title: 'Question 53',
          question: 'I know about the importance of keeping the operating system, antivirus and other software up-to-date in order to prevent security issues',
          options: ['I don t know', 'I need some help', 'I can do it by my own', 'I can help others'],
          answer: '',
          points: 4.1,
          type: 'Skills',
          level: 'Intermediate',
        },
        {
          title: 'Question 54',
          question: 'I know how to configure the settings of a firewall on different devices.',
          options: ['I don t know', 'I need some help', 'I can do it by my own', 'I can help others'],
          answer: '',
          points: 4.1,
          type: 'Skills',
          level: 'Advanced',
        },
        {
          title: 'Question 55',
          question: 'I know how to recover digital information and other content (e.g. photos, contacts) from a backup',
          options: ['I don t know', 'I need some help', 'I can do it by my own', 'I can help others'],
          answer: '',
          points: 4.1,
          type: 'Skills',
          level: 'Intermediate',
        },
        {
          title: 'Question 56',
          question: 'I know how to restrict or refuse access to my geographical location.',
          options: ['I don t know', 'I need some help', 'I can do it by my own', 'I can help others'],
          answer: '',
          points: 4.2,
          type: 'Skills',
          level: 'Intermediate',
        },
        {
          title: 'Question 57',
          question: 'I know how to identify suspicious e-mail messages that try to obtain my personal data.',
          options: ['I don t know', 'I need some help', 'I can do it by my own', 'I can help others'],
          answer: '',
          points: 4.2,
          type: 'Knowledge',
          level: 'Intermediate',
        },
        {
          title: 'Question 58',
          question: 'I know how to check that the website where I am asked to provide personal data is secure (e.g. https sites, safety logo or certificate).',
          options: ['I don t know', 'I need some help', 'I can do it by my own', 'I can help others'],
          answer: '',
          points: 4.2,
          type: 'Skills',
          level: 'Intermediate',
        },
        {
          title: 'Question 59',
          question: 'I know which personal data I should not share and display online (e.g. on social media). ',
          options: ['I don t know', 'I need some help', 'I can do it by my own', 'I can help others'],
          answer: '',
          points: 4.2,
          type: 'Skills',
          level: 'Intermediate',
        },
        {
          title: 'Question 60',
          question: 'I am careful about checking the privacy policies of the digital services that I use',
          options: ['I don t know', 'I need some help', 'I can do it by my own', 'I can help others'],
          answer: '',
          points: 4.2,
          type: 'Skills',
          level: 'Intermediate',
        },
        {
          title: 'Question 61',
          question: '4.3.1 I am aware that I should manage the time I spend on my digital devices',
          options: ['I don t know', 'I need some help', 'I can do it by my own', 'I can help others'],
          answer: '',
          points: 4.3,
          type: 'Skills',
          level: 'Intermediate',
        },
        {
          title: 'Question 62',
          question: '4.3.3 I know how to protect myself from unwanted and malicious online encounters and materials (e.g. spam messages, identity theft emails).',
          options: ['I don t know', 'I need some help', 'I can do it by my own', 'I can help others'],
          answer: '',
          points: 4.3,
          type: 'Skills',
          level: 'Intermediate',
        },
        {
          title: 'Question 63',
          question: 'I know about digital tools that can help older people or people with special needs.',
          options: ['I don t know', 'I need some help', 'I can do it by my own', 'I can help others'],
          answer: '',
          points: 4.3,
          type: 'Skills',
          level: 'Advanced',
        },
        {
          title: 'Question 64',
          question: 'I seek out ways in which digital technologies could help me to live and consume in a more environmentally friendly way.',
          options: ['I don t know', 'I need some help', 'I can do it by my own', 'I can help others'],
          answer: '',
          points: 4.4,
          type: 'Skills',
          level: 'Advanced',
        },
        {
          title: 'Question 65',
          question: 'I know that old digital devices and consumables (e.g. computers, smartphones, batteries) must be appropriately disposed to minimise their environmental impact.',
          options: ['I don t know', 'I need some help', 'I can do it by my own', 'I can help others'],
          answer: '',
          points: 4.4,
          type: 'Skills',
          level: 'Intermediate',
        },
        {
          title: 'Question 66',
          question: 'I know how to reduce the energy consumption of my devices (e.g. change settings, close apps, turn off wifi).',
          options: ['I don t know', 'I need some help', 'I can do it by my own', 'I can help others'],
          answer: '',
          points: 4.4,
          type: 'Skills',
          level: 'Foundation',
        },
        {
          title: 'Question 67',
          question: 'I know "green" behaviours to follow when buying or using digital devices (e.g. purchase devices with Eco-label, restrain from unnecessary printing of digital files, do not leave mobile phones and laptop chargers connected without the device).',
          options: ['I don t know', 'I need some help', 'I can do it by my own', 'I can help others'],
          answer: '',
          points: 4.4,
          type: 'Skills',
          level: 'Intermediate',
        },
        {
          title: 'Question 68',
          question: 'When I face a technical problem, I try step-by-step to identify the problem',
          options: ['I don t know', 'I need some help', 'I can do it by my own', 'I can help others'],
          answer: '',
          points: 5.1,
          type: 'Skills',
          level: 'Intermediate',
        },
        {
          title: 'Question 69',
          question: 'I know some reasons why a digital device may fail to connect online (e.g. wrong wifi password, airplane mode on). ',
          options: ['I don t know', 'I need some help', 'I can do it by my own', 'I can help others'],
          answer: '',
          points: 5.1,
          type: 'Skills',
          level: 'Foundation',
        },
        {
          title: 'Question 70',
          question: 'When I face a technical problem, I am able to find solutions on the Internet. ',
          options: ['I don t know', 'I need some help', 'I can do it by my own', 'I can help others'],
          answer: '',
          points: 5.1,
          type: 'Skills',
          level: 'Intermediate',
        },
        {
          title: 'Question 71',
          question: 'I am able to edit the configurations of the operating system of my digital devices to solve technical problems (e.g. automatic stop/start of services, modify registry keys)',
          options: ['I don t know', 'I need some help', 'I can do it by my own', 'I can help others'],
          answer: '',
          points: 5.1,
          type: 'Skills',
          level: 'Advanced',
        },
        {
          title: 'Question 72',
          question: 'I usually try to find out if there is a technology solution that might help me address a personal or professional need.',
          options: ['I don t know', 'I need some help', 'I can do it by my own', 'I can help others'],
          answer: '',
          points: 5.2,
          type: 'Skills',
          level: 'Intermediate',
        },
        {
          title: 'Question 73',
          question: 'I know the main functions of the most common digital devices (computer, tablet, smartphone).',
          options: ['I don t know', 'I need some help', 'I can do it by my own', 'I can help others'],
          answer: '',
          points: 5.2,
          type: 'Skills',
          level: 'Foundation',
        },
        {
          title: 'Question 74',
          question: 'I know how to select the right tool, device or service to perform a given task (e.g. select a smartphone for my needs, choose a tool for a professional videocall).',
          options: ['I don t know', 'I need some help', 'I can do it by my own', 'I can help others'],
          answer: '',
          points: 5.2,
          type: 'Skills',
          level: 'Advanced',
        },
        {
          title: 'Question 75',
          question: 'I know technical solutions that can improve the access and use of digital tools such as language translation, magnification or zoom and text-to-voice functionality.',
          options: ['I don t know', 'I need some help', 'I can do it by my own', 'I can help others'],
          answer: '',
          points: 5.2,
          type: 'Skills',
          level: 'Intermediate',
        },
        {
          title: 'Question 76',
          question: 'I know that digital technology can be used as a powerful tool to innovate processes and products',
          options: ['I don t know', 'I need some help', 'I can do it by my own', 'I can help others'],
          answer: '',
          points: 5.3,
          type: 'Skills',
          level: 'Intermediate',
        },
        {
          title: 'Question 77',
          question: 'I am willing to take part in challenges and contests, aimed at solving intellectual, social or practical problems through digital technologies.',
          options: ['I don t know', 'I need some help', 'I can do it by my own', 'I can help others'],
          answer: '',
          points: 5.3,
          type: 'Skills',
          level: 'Advanced',
        },
        {
          title: 'Question 78',
          question: 'I can use data tools (e.g. databases, data mining and analysis software) that manage and organize complex information to make decisions and solve problems.',
          options: ['I don t know', 'I need some help', 'I can do it by my own', 'I can help others'],
          answer: '',
          points: 5.3,
          type: 'Skills',
          level: 'Advanced',
        },
        {
          title: 'Question 79',
          question: 'I am willing to help people in my community improve their digital skills.',
          options: ['I don t know', 'I need some help', 'I can do it by my own', 'I can help others'],
          answer: '',
          points: 5.4,
          type: 'Skills',
          level: 'Intermediate',
        },
        {
          title: 'Question 80',
          question: 'I am curious about new digital devices and applications and I am keen to experiment with them whenever I find the opportunity.',
          options: ['I don t know', 'I need some help', 'I can do it by my own', 'I can help others'],
          answer: '',
          points: 5.4,
          type: 'Skills',
          level: 'Intermediate',
        },
        {
          title: 'Question 81',
          question: 'I know how to use online learning tools to improve my digital skills (e.g. video tutorial, online courses).',
          options: ['I don t know', 'I need some help', 'I can do it by my own', 'I can help others'],
          answer: '',
          points: 5.4,
          type: 'Skills',
          level: 'Intermediate',
        },
        {
          title: 'Question 82',
          question: 'I know about new trends in the digital world and how they impact on my personal or professional life',
          options: ['I don t know', 'I need some help', 'I can do it by my own', 'I can help others'],
          answer: '',
          points: 5.4,
          type: 'Skills',
          level: 'Intermediate',
        },
      ],
      QS_SAMPLE : [
        {
          title: 'Question 1',
          question: 'What color are bananas?',
          options: ['Blue', 'Green', 'Yellow', 'Purple'],
          answer: 'Yellow',
          points: 1.0,
          type: 'Knowledge',
          level: 'Foundation',
        },
        {
          title: 'Question 2',
          question: 'Which animal says “meow”?',
          options: ['Dog', 'Cat', 'Cow', 'Sheep'],
          answer: 'Cat',
          points: 1.0,
          type: 'Knowledge',
          level: 'Foundation',
        },
        {
          title: 'Question 3',
          question: 'What is 2 + 2?',
          options: ['3', '4', '5', '6'],
          answer: '4',
          points: 1.0,
          type: 'Knowledge',
          level: 'Foundation',
        },
        {
          title: 'Question 4',
          question: 'Where do fish live?',
          options: ['In the sky', 'In the forest', 'In the water', 'In a desert'],
          answer: 'In the water',
          points: 1.0,
          type: 'Knowledge',
          level: 'Foundation',
        },
        {
          title: 'Question 5',
          question: 'Which fruit is red and often found in pies?',
          options: ['Banana', 'Apple', 'Orange', 'Grape'],
          answer: 'Apple',
          points: 1.0,
          type: 'Knowledge',
          level: 'Foundation',
        },
        {
          title: 'Question 6',
          question: 'What do bees make that is sweet and sticky?',
          options: ['Jam', 'Chocolate', 'Honey', 'Butter'],
          answer: 'Honey',
          points: 1.0,
          type: 'Knowledge',
          level: 'Foundation',
        }
      ]
}

export default env