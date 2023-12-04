<div align="center">

  <img src="https://miro.medium.com/max/720/0*Bd5_0cAIJozvERIe" alt="logo" width="600" height="auto" />

  <h1>EventListener</h1>

</div>

<h2>Description</h2>

It's an Eventing Library, where I implement a <b>handleClicked function</b> and in the handleClicked function, there are 3 methods. These 3 methods are <b>On</b>, <b>Trigger</b> and <b>Off</b> and I created 3 buttons on the client side Clicked On, Clicked Trigger, and Clicked Off. If someone hits one of these buttons then the response will captured in the backend and printed to the console.

  
### Concepts
<!-- #### This website is built on three basic concepts -->

- <h3>Server Side</h3>
- In the server side I implement a function 'handleClicked()' where 3 switch cases 'on', 'off' and 'trigger'. First of all check req.body contain a key or(called action) not then 'req.body.action' is pass through the switch case. Ater that according to request body payload these 3 switch cases would be run. In the 'app.js' file I also implement the mongoDb connection.

- <h3>Client Side</h3>
- In the browser interface I am create three button, Clicked On, Clicked Trigger, Clicked Off. When some one click any of this three button than the request will be capture and send to server side and print.

<h2>Technologies</h2>
<table>
      <tbody>
        <tr>
          <th>Express.js</th>
           <th>Node.js</th>
        </tr>
          <tr>
           <th>Mongodb</th>
         </tr>
      </tbody>    
</table

## Features
<table>
      <tbody>
         <tr>
          <td>Create three button in the browser interface, these are Clicked On, Clicked Trigger, Clicked Off.</td>
        </tr>
         <tr>
          <td>If someone hit any of the button than the clicked event is occure and the click event is goes to server side. </td>
        </tr>
        <tr>
          <td>After clicked, event will be reach to server side and according to the click event from client side the Event switch case will be run.The switch cases are On, Trigger and Off.</td>
        </tr>
          <td>The events like On, Trigger and Off are save to the data base and than print all the events.
          </td>
        </tr>
      </tbody>    
</table>

### NPM Packages
- express
- mongoose
- cors
- dotenv
- nodemon
### Other Applications
- Thunder Client
- Vs code

## How to setup locally and getting started to improve and add new features.
### 1. Create a new directory, cd into it and run 'git init' .
### 2. Clone this repository
### 3. Create a .gitignore file add node-modules, .env .
### 4. Run 'npm installl' , it will install all npm packages and dependencies .
### 5. Create and setup a app in google developer console and obtain CLIENT_ID and CLIENT_SECRET************
### 6. Setup mongodb Atlas database and obtain connection url.
### 7. Create a .env in config directory inside projects root directory.
### 8. setup .env variables 
- PORT
- MONGO_URI
### 9. Replace baseUrl with your host address (eg:- http://localhost:3000/ ) for Api call in const logEvents = require('./logEvents'); inside root -> frontend-> index.html
### 10. Run 'npm start' or 'nodemon app.js' to run in development mode.
### 11. To view the website 'Go Live' from inside root -> frontend -> index.html
