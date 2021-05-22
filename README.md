<h1 align="center">🚀 Dash GO - Ignite 🚀</h1>

<br>

<p align="center">
  <img alt="GitHub Top Language" src="https://img.shields.io/github/languages/top/robertomorel/dash-go?color=ff512f&style=flat-square">
</p>

<p align="center">
  <img alt="React" src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB">
  <img alt="Typescript" src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white">
  <img alt="NextJS" src="https://img.shields.io/badge/nextjs-%23000000.svg?style=for-the-badge&logo=next.js&logoColor=white">
  <img alt="GitHub" src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white"/>
</p>

----

## Technologies ✨

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [NextJS](https://nextjs.org/docs)
- [Axios](https://github.com/axios/axios)
- [Web Hook](https://nextjs.org/docs/basic-features/data-fetching)
- [Chakra](https://chakra-ui.com/docs/getting-started)
- [Mirage](https://miragejs.com/docs/getting-started/introduction/)

## About 💻

This is what the Serverless Architecture offers — It's built on next-generation public cloud services that auto-scale and charge only when used. When scale, capacity planning & cost management are automated, the result is software that's easier to build, maintain, and often up to 99% cheaper.

But, Serverless Architectures are new and therefore require a shift in how we previously thought about architectures & workflows. Our goal at Serverless Inc. is to give developers, teams and orgs all of the tools they need to build and operate serverless applications, in one simple, powerful & elegant experience.

- Event oriented architecture;
- Small parts of a project;
- Example:
  - Image Register: creating events which only have to upload images to AWS S3
- Doesn´t need a HTTP function to work
- There is a implicit server, but we don´t have any concern about scaling it, configuring it, its infra or its needed containers.
  - If we decide to use Amazon, for example, all those steps are made by the AWS available services.

> Amazon API Gateway is responsible to mapped all routes using the URL in order to know exactly which function should be executed

### Advantages
- Lower cost
- Practical e faster to build to a production
- Only pay for usage

### Modules
- BaaS => Backend as a Service
  - Firebase
- FaaS => Function as a Service
  - AWS Lambda, Azure function, Google Cloud function

## Geting Started
- Go the official documentation [here](https://www.serverless.com/examples/)!

## Running the project 🚀

- Clone the repo
```bash
git clone https://github.com/robertomorel/degreecertificate.git
```

### Dependenties
You have to inform your AWS credentials. For that, you need to create a new user on it.
> Take down the <b>key</b> and <b>secret</b> from the register

After that, you might wanna run the following command:
```bash
# "-o" is to overwrite anything
serverless config credentials --provider aws --key=YOUR_KEY --secret YOUR_SECRET -o
```

A folter called <b>.aws</b> must be created on <b>~/Users/YOUR_USER/</b>
> Look for the file "credentials"

### Running localy
```bash
# Installing all dependencies
yarn

# Initiate
yarn dev

# Initiate local DB
yarn dynamo:start
```

### Deploy
```bash
# To upload the project to AWS Lambda
yarn deploy
```

## License 📄

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

---

## Let´s Talk 🤩
[LinkedIn](https://www.linkedin.com/in/roberto-morel-6b9065193/)
