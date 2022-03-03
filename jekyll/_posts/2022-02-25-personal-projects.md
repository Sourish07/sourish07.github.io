---
layout: post
title:  "Personal Projects: A Guide for Beginners"
subheader: "How to impress companies for that internship"
date:   2022-02-25
categories: industry
---

Personal projects are a quintessential aspect of being a Computer Science student. While my classwork has been instrumental in my learning, it pales in comparison to the role my personal projects have played in establishing the current knowledge base I have.

For CS students just starting out, beginning a personal project seems like a daunting task. I know it was for me. I want to share my tips on getting started, ones I wish I had earlier on.

There are a lot of reasons why personal projects are valuable.

Personal projects have served me well in my interviews. Companies like to see initiative taken by potential candidates, and it is a valuable talking point too. This is especially useful for landing that first internship where you don't have any previous industry experience.

For students that are unable to get internships, for whatever circumstances, personal projects allow you to hone your skills and keep yourself competitive in the eyes of companies when you do start looking for full-time opportunities.

You can also start a business through a personal project. Find an issue that someone might have and is willing to pay for it to be solved for them. Anything that you can monetize can allow you to generate passive income.

This experience can also teach you valuable skills for working with others. It can open opportunities to meet new people with similar interests, or further strengthen an already existing connection.

But perhaps most importantly, the learning that occurs here is unmatched compared to any other experience. You get to choose exactly what you want to work on and can go at whatever pace you'd like. Simply put, personal projects are a way to have fun!

It's never too late to start a personal project, nor is it as daunting once you do get the ball rolling. I hope this article makes it a little bit easier for you.

## Deciding what you want to learn

The first tip I have in starting a personal project is to figure out what skill or technology you want to learn. The area of CS is vast and rapidly expanding to new areas never even dreamt conceivable by the human mind, so finding a place to start can be tough.

Some topics I would encourage thinking about are:

- Frontend
- Backend
- Networking
- Databases
- App Development
- Game Development
- Data/Web Scraping
- APIs
- Machine Learning
- Cloud
- Hardware

For those that are absolute beginners, I personally recommend creating a simple web app that uses an Application Programming Interface (API) of any kind with the Flask library in Python. Django is a good, but more advanced, alternative to Flask.

If you prefer JavaScript, you can use Node.js. You can’t go wrong with either of these options as Python and JS are both valuable languages sought after in the industry.

Creating a web app allows for you to dive right into frontend, backend, APIs, and networking. Additionally, it’s easy to host and share with others, which will also teach you about the cloud. Then, you can put the URL on your resume to show recruiters! Check out the tutorial for a Stock Price checker app that I made [here](../tutorial/flask.html)!

## The Idea

This is another barrier for starting a project: choosing  exactly what to build. The most important thing to remember is that if your goal is to learn and get an internship, it's totally alright to create something that's already out there. You don't have to worry about your app being completely new or life changing for your users; It does't need to be the next multi-billion dollar idea.

Creating something novel or that makes you money is obviously valuable, but for a first project, it’s not a burden you need to place on yourself. Companies want to see you take initiative and a thirst to learn.

I have inserted a list of ideas for potential project ideas below, increasing in difficulty.

### Beginner ideas

These ideas are just to get you comfortable with setting up the basics of a web app and maybe using some APIs for a more memorable experience for the user.

| Idea | Skills | Potentially useful tools/technologies (not exhaustive) |
|---|---|---|
| Personal portfolio website | Frontend | HTML, CSS, JS |
| Web to-do list | Frontend, Databases | Flask, Node.js, Firebase |
| Web calculator | Frontend | Node.js, React, Flask |
| Web Tic-Tac-Toe | Frontend | Node.js, React, Flask |
| Web hangman | Frontend | Node.js, React, Flask |
| Wordle Clone | Frontend | Node.js, React, Flask |
| Chess | Frontend, APIs | Node.js, React, Flask, LIChess API |
| Checkers | Frontend | Node.js, React, Flask |
| Working with an API | APIs, Frontend | Node.js, Python |
| Weather app | Frontend, APIs | Node.js, React, Open Weather API, Flask |
| Stock Checker app | Frontend, APIs | Node.js, React, Flask, Alpha Vanguard API |
| Photo gallery | Frontend, APIs | Node.js, React, Flask, Nasa API |

### Intermediate ideas

It's safe to assume all of the below will require some level of frontend development in addition to the listed skills. I recommend these after you've worked on one or two beginner projects.

| Idea | Skills | Potentially useful tools/technologies (not exhaustive) |
|---|---|---|
| Any beginner project, but as a mobile app | Mobile app development | Swift, Android Studio, Flutter |
| Any beginner game, but with live multiplayer | Networking, Game Development | JS, Python, Websockets|
| Snake | Frontend, Game Development | JS, React, PyGame |
| Battleship | Networking, Game Development | JS, Python, Websockets |
| Web To-do list with login | Databases, Authentication | Firebase, JS, Python |
| Create an API | Backend, APIs | Node.js, Flask |
| Budgeting app | Backend, Authentication, Databases | Firebase, Node.js, Flask |
| Live chat app | Networking, Authentication, Databases | Firebase, Node.js, Flask |
| Chat bot (Discord or Slack) | APIs, Networking | Slack API, Discord API |
| Twitter bot | APIs, Backend | Twitter API |
| Webscraping bot | Webscraping, Data aggregation | BeautifulSoup |
| Data analysis app (Prices, flights, etc.) | APIs, Data science | Node.js, Flask |
| Raspberry Pi/Jetson Nano | Hardware | Raspberry Pi, Python |

### Advanced ideas

These are for students that already have multiple projects under their belt. Please don't be intimidated!

| Idea | Skills | Potentially useful tools/technologies (not exhaustive) |
|---|---|---|
| Social media app | Authentication, Databases | Node.js, Flask, Firebase |
| Neural network from scratch | Machine learning | PyTorch, Tensorflow |
| Handwriting recognition from scratch | Machine learning | PyTorch, Tensorflow |
| Reinforcement learning | Machine learning | PyTorch, Tensorflow |
| Writing a compiler | Compilers, OS | C, C++ |
| Video game | Game development | Unity, Unreal |
| AR Clothes App | Augmented Reality | ARKit, ARCore |
| Song lyric generator | NLP, Transfer Learning | PyTorch, Tensorflow, Hugging Face API |
| Contributing to an open source project | - | - |

These three tiers are very blurry; One additional feature for an app could easily bump it up a tier. The difficultly also depends on how you choose to implement it. For example, you could use a pre-trained machine learning model or create your own from scratch to really learn the architecture.

## APIs

API stands for Application Programming Interface and it's essentially a way for your app to connect with someone else's, augmenting the functionality of your app.

For example, if you choose to make a weather app, you don't to have to worry about manually collecting weather data across the country for your user. Rather, you can simply use the Open Weather API, found [here](https://openweathermap.org/api), to grab the data. You would then be responsible for making an app that's capable of grabbing the data, processing it, and displaying it to the user in a useful manner. APIs can abstract away the unnecessarily complicated parts of your app.

*Using APIs are highly encouraged unless you're seeking to learn the specific skill the API abstracts away. All professional developers learn to get comfortable with using other people's code.*

## Tech Stack

After finally choosing (or coming up with) an idea, you'll need to choose your tech stack. Your tech stack are the languages, tools, and frameworks you’ll be using to make, test, and deploy your app. I have listed a bunch below. My goal here is to simply relay the fact that they exist and what their specific purposes are. If you think any of them might be useful for your project, I encourage you to research more on them!

### Frontend

- HTML/CSS: The bread an butter of everything on the web. They're really easy to pickup and I would go so far as to say that they're mandatory to know for anyone trying to do anything CS related. HTML stands for HyperText Markup Language and is responsible for organizing all the web elements you see on a website. CSS, or Cascading Style Sheets, is responsible for making the HTML look good.
- JavaScript: Is responsible for manipulating HTML and CSS to make your website interactive. It also has the capability to act as a backend with Node.js. No modern website is complete without JS.
- Bootstrap: A CSS library that aims to make it much easier to make a website look good.
- SCSS: A preprocessor that allows for advanced CSS syntax
- React, Vue, Angular: JavaScript frameworks for making frontend applications. They aim to make the process a little bit more structured and streamlined. I would recommend checking out React first if you need a JS framework.

### Backend

These are the languages/tools used server-side, or for actually doing the heavy lifting of your application. Frontend gives the user buttons to press and forms to fill out, while the backend actually processes the data and does something with it. It could be making an API call, updating a database, or calculating some output based on user input.

- Python: By far my favorite language. Its Flask and Django libraries make it so easy to develop web apps and its easy-to-write syntax makes programming much faster.
- JavaScript: JS can be a backend technology as well with its Node.js library. Having your frontend and backend be the same technology can make development easier.
- C/C++: Known as the languages to turn to when you need speed over everything else. These have a steep learning curve and are not recommended for beginners.
- Java: Spring is a web framework for making web apps with Java.
- Ruby: Ruby on Rails is the web framework if you want to use Ruby for your app.

### Networking

If you're making a web app, you'll need to learn how to send data across the internet. Some things to research are:

- Websockets
- Apache web server
- Nginx web server
- AJAX
- Socket.IO

### APIs

I've talked about APIs above, but I highly recommend incorporating one of these into your app idea. Here are some really cool APIs that exist.

- Genius API (for songs)
- Twitter API (for a Twitter bot)
- Open Weather API
- Nasa API
- Slack/Discord APIs
- Alpha Vanguard API
- Lex API (for creating chatbots)
- OpenAI API (for NLP)
- Hugging Face API (for more pre-trained ML models)

### Databases

Databases will hold all of the data for you app, even after the user exits the app. Before choosing a database, I would recommend thinking about the data and its structure your app needs to store. For example, if your data is going to be tabular, you should go for a SQL database.

- Google Firebase: The easiest database to start off with. If your app idea needs a database, I highly recommend Firebase. It offers real-time updates and has built in support for user authentication. One thing to note is it does not offer any sort of structure to your data (which probably isn't needed for a beginner project anyways).

Other options include:

- MongoDB: Another No-SQL database
- MySQL and PostgreSQL: Very popular SQL databases
- GraphQL and Neo4J: Used for graph databases

### App Development

- Java: Used for Android app development. Easy way to get into Android App dev if you already know Java
- Kotlin: The more modern language used to create Android apps
- Swift: Apple's language for creating apps for iOS, iPadOS, WatchOS, or MacOS
- Flutter, React Native, Ionic: Frameworks used for cross-platform development between iOS and Android. This is useful if you want one codebase, but to deploy it to two platforms. If you want to stick with JavaScript, then look at React Native or Ionic, but don't shy away from Flutter either. Flutter uses a language called Dart.

### Game Development

A game is one of the hardest projects one could take on. Good luck if you choose to travel down this path. For simple games, however, check out Pygame, a Python library for making games.

- Unreal Engine
- Unity (C#)
- Pygame

### Webscraping

Webscraping is the process of writing a bot that pulls data or other information from websites on the internet. It's very useful for checking info like prices or a website where an API might not be available.

- BeautifulSoup: A Python library that can parse HTML code from any website and return the appropriate data.
- Selenium: A library for Python or Java that is much more advanced. It emulates a human user on the website, allowing web elements controlled with JS to be loaded.

### Data Analysis and Visualization

A natural extension of a webscraping project. With all of the data our there, we need easy ways to visual and understand it.

- Pandas: The staple Python library to perform data analysis
- Matplotlib, mpld3, Plotly: All Python libraries that offer different features when it comes to data visualization
- Chart.js, D3, Plotly: Different JS libraries for data visualization

### Machine Learning

The best language to use when getting started with machine learning is Python, hands down. For more high performance applications, C++ is preferred.

- TensorFlow, PyTorch, Keras: Useful ML libraries for Python to implement neural networks
- SciKit-Learn: Python library for other popular ML algorithms
- CUDA (C++ or Python): Used to parallelize programming with GPUs
- OpenGym: API for reinforcement learning environments

### Cloud

You'll need to host your app somewhere, and chances are it'll be with one of the following cloud providers. Knowing the cloud is a very attractive skill for companies as the cloud's popularity continues to skyrocket.

- Amazon Web Services
- Google Cloud
- Microsoft Azure
- Heroku

### Hardware (Gross)

For the students that want their project to have a physical prepense in the real world, consider adding some hardware component. This is a unique way to standout from projects that use solely software.

- Raspberry Pi
- Arduino
- Jetson Nano

### Example Tech Stack

For one of my first personal projects, this was the tech stack my partner and I chose:

- Frontend: HTML/CSS
- Backend: Python (Django)
- Database: PostgreSQL
- APIs: Genius API
- Cloud: Heroku

## Other Tips

Here are a couple other things I urge you to think about when starting your project.

### How to Learn

It can be very difficult knowing where to start, but a simple "{insert language or tool here} tutorial" search on Google can often lead to the best results. The first video or website you click on might not be the best one, but it's often enough to push you in the right direction. Don't be afraid to leave a video or article halfway if it isn't helpful.

Consider:

- Documentation for the tool/technology
- YouTube
- Udemy
- Coursera
- LinkedIn Learning

My take on paid courses is this: If it's under 20 dollars and the reviews are sparkling, it doesn't hurt to pay the money if you can afford it. However, it is by no means necessary. The benefit with a paid course is the content tends to be longer, better structured, and much more in-depth and you'll often get a direct channel to contact the course instructor.

For me, the courses I bought for Python and Tensorflow were totally worth it. But it's definitely not worth buying a course about using the Open Weather API. Definitely check out free options first.

### Source Control

Git is a source control tool that everyone should "git" good at 😀 It allows you to maintain different versions of your app, so if you implement a change that ends up breaking everything, you can easily restore a previous state of your app. GitHub allows you to store your project in the cloud.

While source control if you're working alone is highly recommended, if you're working with a partner, it's a must. Plus, Git is a really important tool very commonly used in industry.

### Integrated Development Environment (IDE)

An IDE is an application that manages all of your app's files in one central location. The most common one is Visual Studio Code. It can manage all of your different files&mdash;whether its your Python, JS, HTML, CSS, text, etc., helps with source control, helps with debugging, and even provides linting and other useful extensions.

I highly recommend just downloading VSCode and trying it out. JetBrains also makes some good IDEs, such as PyCharm for Python or IntelliJ for Java.

You could always use a regular text editor, but it'll slow down your development process.

### Authentication and Security

If your app deals with user passwords or credit card information, you need to be very careful to protect your users' data. Nice thing is, Node.js, Flask, Django, and Firebase all have built in options for authentication.

If you're dealing with payments, I highly urge you use an external service like PayPal or Stripe. This abstracts away all of the security concerns when dealing with payment information.

### Planning

Take a moment to outline your app. It's very common in the industry to split up your work into one or two week chunks called "sprints." There are many tools to help you manage what tasks you want to complete each sprint.

Spring planning helps you keep track of your progress and where you are in relation to your end goal. It also helps when there are multiple people working on a project together.

- GitHub Projects
- Trello
- Google Docs (Please no)

### Interviews

A final consideration to make about a project is how easy it is to talk about it, whether it's to a recruiter, interviewer, or a friend. If it's really easy to explain (doesn't mean the app itself has to be simple), then it's more likely to better showcase your abilities as a programmer.

## Make the First Google Search

I know this was a lot of information, but these are just my tips and advice I have from years of working on personal projects, by myself and with others.

The biggest tip I have is to just get started. Make that first Google search, watch that first tutorial, and install that first package you'll need! Once you get some momentum, finishing the first project will seem so much easier. Then, each successive one will also seem much more achievable.

The skills I've learned through my personal projects are much better aligned to the work I've done in industry as opposed to my classes. Classes don't teach you version control, frameworks and libraries, or how to host your app on the cloud.

If you have any questions or need any help with your own personal projects, please don't hesitate to reach out! I would love to help. But meanwhile, good luck as you embark on this new journey.
