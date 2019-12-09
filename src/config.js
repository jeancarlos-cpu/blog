const dev = {
  API_URL: "http://localhost:4000"
};

const prod = {
  API_URL: "https://protected-forest-05457.herokuapp.com/"
};

const config = process.env.REACT_APP_STAGE === "production" ? prod : dev;

export default config;
