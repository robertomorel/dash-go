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

This project simulates a users control application.
Its been made during the course of ReactJS from RocketSeat Ignite 2021.

It has a bunch of interesting features, like pagination; API builder with MirageJS; query runner with react-query; chakra-ui; and husky to easier run linter.

### Forms
1. Controlled Components
- Components where we can control their state
- Basically when we monitor each typing of a person inside an input and save it in the state
- This is the mostly used in smaller forms - with 1, 2, or 3 fields
  - Because we store just few state info into the component
- There is no performance problem in React at first
- You must use the "debounce" concept
  - So that the "setSearch" search is only called after the user stops typing (1s or 2s)
  - Useful to use hook for this
- Example:
```jsx
const [search, setSearch] = useState('')
<input ...props value={search} onChange={event => setSearch(event.targe.value)} />
```

2. Uncontrolled Components
- Way to access the value of the input only at the time we will need it
- We do not store the value of each input in a state
- We must use the reference of the inputs
- `useRef` stores a ref. of the input inside the DOM (HTML element tree)
  - Which type of element this <i>ref</i> belongs to (HTMLInputElement)
- We can also normally use the <i>ref</i> to focus the input
- Example:
```jsx
const searchInputRef = useRef<HTMLInputElement>(null)
console.log(searchInputRef.current.value)
if (true) searchInputRef.current.focus()
<input ...props ref={searchInputRef} />
```

3. <b>formik</b> library
- To know more access the [link](formik.org)

4. <b>react-hook-form</b> library
- To know more access the [link](react-hook-form.com)
- We can continue using the standard react form components, using just a few hook methods to link the fields with the library
  - We got more control of the fields
  - Validations etc.
- Based on the idea of Uncontrolled Components

5. <b>unform</b> library
- To know more access the [link](github.com/unform/unform)
- Recommended for forms that are in need of high performance
- Large forms
- Based on the idea of Uncontrolled Components

### Data Fetching
Search for data of a backend or another hosted application

> Ex.: fetch & axios

Problem:
- When we´re using `useEffect` and saving information inside a state, after the page be dropped, all data is deleted.
- When the page is reopenned, the same data is reloaded again
- Performance loss

### Local Data Caching
It´s possible to store the data from made requests into a cache of the application. When the data is needed again while a period of time (which the data has small chances of changing), these data can be salved and displayed effectively.

- Increased effectiveness and usability
- Data synchronizing with the "data syncing"
- "React Query" tool
  - SWR
- MirageJS
  - It gives a way to build a temporary API in cases of the non backend existence
  - Could give fake data, by a known schema and pré-define models
  - To initiate miragejs, run: `yarn install mirajejs -D`

### React Query
It creates a temporary cache whenever an HTTP request is made by BE

- This cache is mapped from a few keys
- Strategy: Stale While Revalidate
- Keep cached in FE by the 'users' and {page} params keys

## Geting Started ⚡
- Go the Chacka-UI official documentation [here](https://chakra-ui.com/docs/getting-started)!

## Running the project 🚀

- Clone the repo
```bash
git clone https://github.com/robertomorel/dash-go.git
```

- Run the application
```bash
# Installing dependencies
yarn install

# Run
yarn dev
```

- To run with higher performance
```bash
yarn build && yarn start
```

## License 📄

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

---

## Let´s Talk 🤩
[LinkedIn](https://www.linkedin.com/in/roberto-morel-6b9065193/)
