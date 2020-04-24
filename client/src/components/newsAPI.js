import axios from "axios";

const BASEURL = "http://newsapi.org/v2/top-headlines?country=us";
const APIKEY = "&apiKey=c1cba5dcd6a54d59a3630711fa75994c";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};