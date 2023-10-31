import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMDEzM2RlMmVhMzMwOTczNjRjNDBkODVhMWZlODEzZiIsInN1YiI6IjY0NmFmOTE5NTRhMDk4MDBmZWFiZDE5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zx-Amop3B9O6dmRP3Q59sOYEY1y3UP4yA7ndj8GvNqI';

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params,
        });
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};
