import axios from "axios";

const instances = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZTBmNTFlYTQ3MmZlZmZjYTY2YzE3ZmI0NTA5NTU3NyIsInN1YiI6IjY1NzE4OTNiODg2MzQ4MDEwMDMyYTUyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6tdIzKwIsr6nTB4qjzBYsasi_jy6zx8B02FyxzU0Sqo",
  },
});

export default instances;