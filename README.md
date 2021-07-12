# OWM Client

Generate count of cities starting with a given letter.

## Prerequisites

- Java 8 or higher
- Maven
- Tomcat / Eclipse
- Node v12.13.0+

## Getting Started

- Fork the repository.
- Start the backend server.
- For eclipse users: Setup any open port in application.properties (default 8083), Click Run As > Java Application.
- For tomcat users: Generate war by `mvn package` command in backend folder, copy it in tomcat directory and setup connection port in config file.
- Server can be access through the configured url default: (http://localhost:8083)

- Start the frontend serve
- Run `npm install` in frontend directory to install all the dependencies.
- Run `npm start` to bring up the applicaiton.

- Runs the app in the development mode.<br />
Open (http://localhost:3000) to view it in the browser.
- For dev environment you can setup the backend server url in proxy in package.json. (default:http://localhost:8083)

## Authors

* **Aditi Pal** - *Initial work* - (https://github.com/adi2207)
