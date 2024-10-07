<img height="100px" width="100px" src="https://github.com/devlotfi/webetu-progres/blob/main/github-assets/logo.svg">

# 📜 Webetu Progres (API Docs) {Unofficial}
The goal of this repository is to do an analysis of how the webetu progress app works, and try to document its corresponding backend API

**NOTES:**
- This repository is unofficial and is not always up to date with the official API
- This repository was only made for educational purposes and was not intended to cause any dammage to the Webetu progres services
- The documentation may not cover all endpoints or can lack type definitions due to empty server responses
- Using the api from a browser requires setting up a proxy server to bypass CORS limitations. an example proxy implementation is integrated into the docs app to make swagger UI work


# 📌 Contents
- [Tech stack](#-tech-stack)
- [Project setup](#-running-the-project-locally)
- [App info](#-running-the-project-locally)

# 💻 Tech stack

The project uses nestjs's openAPI capabilities to generate a typed openAPI schema
which can be used in the swagger UI or to generate Postman docs. In addition it can be used to generate a typed api client in frontend apps

<img src="https://skillicons.dev/icons?i=nestjs,typescript&perline=5" />

# 🌐 Running the project locally 

## Requirements
- NodeJS
- Yarn

**IMPORTANT:**
- To run the docs locally you need to clone the repo and install dependencies then run the nestjs app
- After that make sure to select the proxied url in the servers dropdown for the requests to work 
- The server may sometimes return a 500 response code even though the request is valid. this is a backend issue and the solution is just to make the request again

Docs url: [http://localhost:3000/api](http://localhost:3000/api)

## Preview
<img src="https://github.com/devlotfi/webetu-progres/blob/main/github-assets/swagger-docs.png">

# 📱 App info
After decompiling the apk and analysing the resulting code we concluded that:
The app was build using Expo (React Native)



