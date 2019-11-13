import convict from 'convict';

var config = convict({
  server: {
    baseUrl: {
      doc: "Base url of the server",
      format: "url",
      default: "http://localhost:3001/",
      env: "REACT_APP_BACKEND_URL",
    },
  },
});

config.validate({ allowed: 'strict' });

export default config;
