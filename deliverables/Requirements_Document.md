# OurAudio


## Table of Contents
- [5.1 Introduction](#51-introduction)
- [5.2 Functional Requirements](#52-functional-requirements)
- [5.3 Performance Requirements](#53-performance-requirements)
- [5.4 Environmental Requirements](#54-environmental-requirements)



## 5.1 Introduction

OurAudio web application is a music platform for musicians to share, promote and get feedback on their songs. This platform is intended for those who are either new to the music industry or need help to get their sound promoted. OurAudio not only helps the musicians but also helps the public/listeners to find their new favorite artist. This web application would be available to users who sign up and create an account with OurAudio. Each user has a profile page which holds all of their submitted songs and songs awaiting feedback. Also, the profile page has a feed of all the promoted tracks that the musician has requested OurAudio to promote. Users only receive feedback on their songs (if and only if) they have given feedback on a different users song. The following UML diagram shows a structure of how the application works.

![UML diagram](./images/umldiagram.png)

The remainder of this document is structured as follows.  Section 5.2 contains the Functional Requirements of the application.  This will cover primarily everything that the user interacts with.  Section 5.3 contains the Performance Requirements.  This section addresses the applications performance, outlining any requirements in speed and efficiency when it is being used.  Finally, Section 5.4 contains the Environmental Requirements.  This outlines the software and hardware required for building, testing, and running the application.

## 5.2 Functional Requirements

The Functional Requirements for this application revolve around the user interface and what is visible to the user on the website. The features are registering, logging in, uploading song(s), giving feedback, requesting feedback and requesting promotional services. The user's information consists of fields such as artist name, name, email, password, and number of feedbacks given. The uploading songs function will allow users to upload their songs onto their profiles and be able to request feedback. Once feedback is given the song is going to be logged onto the stream page of the web application form which all of the users who have signed up for this service may listen and provide feedback on their favorite songs.

#### 5.2.1 Stream
The stream page is a place where each user can listen to all the approved songs that other artists already gave feedback on. This way artists will have the opportunity to listen to other artists songs.

- 5.2.1.1 The system shall have all approved songs on the stream page.
- 5.2.1.2 The system will approve songs based on feedback helpfulness.
- 5.2.1.3 The system will make available all feedback comments on each of the songs available.
- 5.2.1.4 The system shall allow the user to add feedback within the stream page.
- 5.2.1.5 The system shall allow users to request a song that they like for promotion.
- 5.2.1.6 The system will promote songs based on songs likeness.

#### 5.2.2 Profile
The profile page will allow the registered artist on the web application to review personal information, see all uploaded song(s), be able to delete uploaded songs. Within the profile, the artist would be able to upload songs and request for feedback.

- 5.2.2.1 The user profile will display all of the user's information in one container
- 5.2.2.2 The system will allow editing of the user's information with an edit button which opens a popup.
- 5.2.2.3 The system shall update any edited information with a save changes button
- 5.2.2.4 The system shall allow users to upload a song.
- 5.2.2.5 The system shall allow users to request feedback.
- 5.2.2.6 The system shall allow users to delete an uploaded song.
- 5.2.2.7 The system shall have a container for feedbacks to be given (Web Form with title and comment box section).

#### 5.2.3 Account Sign Up
The account sign up page is the page that any user will land on if they are not currently logged in. It functions very similarly to other sign up/log in pages for social media sites. The user will has the option to either login to an already existing account or to sign up for a new account.

- 5.2.3.1 The system shall have a container with an option to sign up for an account
- 5.2.3.2 The system will have text fields for user date entry. Fields will include the following: first name, last name, email address, password, and confirm password
- 5.2.3.3 The system shall have a submit button
- 5.2.3.4 The system shall create a new user account upon the completion of the text fields and the clicking of the submit button
- 5.2.3.5 The system shall have a text field for email address and password
- 5.2.3.6 The system shall have a text field for password
- 5.2.3.7 The system shall have a login button in the login container
- 5.2.3.8 The system shall redirect the user to their account after filling in data and clicking the appropriate button for login or sign up

#### 5.2.4 Graphical User Interface (GUI)
The GUI is the menu system that allows the user to navigate their profile and the website as a whole.  It consists of buttons Stream, Profile, Log Out and Sign up.

- 5.2.4.1 The GUI shall have a menu
- 5.2.4.2 The menu shall have buttons that link the user to their profile, Stream, and Log out
- 5.2.4.3 The GUI shall be present on every page of the web application

## 5.3 Performance Requirements

#### 5.3.1 Account Sign Up
After the user has filled out all the forms with the correct and desired information, the application shall send the information to the database and create a new account for the user within 15 seconds. It will then continue to the stream page 5 seconds afterwards.

#### 5.3.2. Login Time
The application shall confirm login information and continue to the stream page within 5 seconds after user inputs the correct credentials. If the credentials are not correct, the system will instantly prompt the user to login again.

#### 5.3.3. Upload Time
The application shall upload the file and continue onto the stream page within 10 seconds. Songs should not take too long to upload since the format file is .mp3.

#### 5.3.4. Feedback posting/editing time
###### 5.3.4.1
The application shall allow users to upload song feedback
###### 5.3.4.2
The application shall upload the feedback onto the user's profile page within 15 seconds after information is submitted to the database.
###### 5.3.4.3
The user shall be able to edit the information of the feedback
###### 5.3.4.4
The application will update the data immediately after

## 5.4 Environment Requirements

#### 5.4.1 Hardware Requirements
The following are the hardware requirments for OurAudio:

1. Computer(s)
2. Internet connection
3. Display Monitor

Because this is a web application, no specific requirements are necessary. With the exception of a computer with a working display and a good connection to the Internet.

#### 5.4.2 Software Requirements
The following are the software requirements for OurAudio:

| Category | Requirement |
| --- | --- |
| Operating System | macOS |
| Text Editor | Atom |
| Run Server | Node |
| Test Database | MongoDB |
| Graphics | Adobe Illustrator |
