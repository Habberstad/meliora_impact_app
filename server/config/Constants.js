const prod = {
  url: {
    API_URL: "https://meliora-impact-connect.herokuapp.com"
  }
};

const dev = {
  url: {
    API_URL: "http://localhost:3000"
  }
};

export const config = process.env.NODE_ENV === "production" ? prod : dev;