import axios from "axios";    
// importing axios from the axios module

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;


// axios is a popular JavaScript library used for making HTTP requests from the browser. It allows you to interact with APIs and fetch data in your web applications. Here are some key points about axios