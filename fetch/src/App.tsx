import { useState, useEffect } from "react";

type Repository = {
	full_name: string;
	description: string;
};

function App() {
	const [respositories, setRepositories] = useState<Repository[]>([]);

	useEffect(() => {
		fetch("https://api.github.com/users/diego3g/repos")
			.then((response) => response.json())
			.then((data) => setRepositories(data));
	}, []);

	return (
		<>
			<ul>
				{respositories.map((repo) => {
					return (
						<li key={repo.full_name}>
							<strong>{repo.full_name}</strong>
							<p>{repo.description}</p>
						</li>
					);
				})}
			</ul>
		</>
	);
}

export default App;
