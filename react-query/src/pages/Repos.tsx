import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import axios from "axios";

type Repository = {
	full_name: string;
	description: string;
};

export function Repos() {
	const { data: repositories, isFetching } = useQuery<Repository[]>(
		"repos",
		async () => {
			const response = await axios.get(
				"https://api.github.com/users/yan-arcanjo/repos"
			);

			return response.data;
		},
		{
			staleTime: 1000 * 60, // 1 minute
		}
	);
	return (
		<>
			<ul>
				{isFetching && <p>Carregando...</p>}
				{repositories?.map((repo) => {
					return (
						<li key={repo.full_name}>
							<Link to={`/repos/${repo.full_name}`}>{repo.full_name}</Link>
							<p>{repo.description}</p>
						</li>
					);
				})}
			</ul>
		</>
	);
}
