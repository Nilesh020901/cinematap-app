export const getMoviesDetails = async ({ params }) => {
    console.log(params);
    const id = params.movieID;

    try {
        const res = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=${import.meta.env.VITE_API_KEY}`);

        if (!res.ok) {
            throw new Error("Failed to fetch movie details"); 
        }
        const data = await res.json();
        return data;
    } catch (error) {
        console.log("Error in getMoviesDetails:", error.message);
        throw error;
    }
}