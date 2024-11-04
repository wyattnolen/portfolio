import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import List from "./components/List";
import { header, experiences, projects } from "./data";

function App() {
	return (
		<div className="App site flex flex-col flex-md-row justify-between h-min-screen">
			<Header data={header} />
			<main className="site__main">
				<section className="mb-36">
					<AboutMe />
				</section>
				<section className="mb-36">
					<List data={experiences} type="experiences" />
				</section>
				<section className="mb-36">
					<List data={projects} type="projects" />
				</section>
			</main>
		</div>
	);
}

export default App;
