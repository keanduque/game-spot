//import useData from "./useData"; // data from server
import genres from "../data/genres"; // static data

export interface Genre {
	id: number;
	name: string;
	image_background: string;
}
//const useGenres = () => useData<Genre>("/genres"); // server data
const useGenres = () => ({ data: genres, isLoading: false, error: null });

export default useGenres;
