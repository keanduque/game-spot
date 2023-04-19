import useGenres from "../hooks/useGenres";

function GenreList() {
	const { data } = useGenres();
	return (
		<ul>
			{data.map((genre) => (
				<li>{genre.name}</li>
			))}
		</ul>
	);
}

export default GenreList;
