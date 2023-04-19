import axios from "axios";

export default axios.create({
	baseURL: "https://api.rawg.io/api",
	params: {
		key: "1d764d904eb64109bf4c51d3b93a6d08",
	},
});
