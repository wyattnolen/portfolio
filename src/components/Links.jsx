import Icon from "./Icon";

function Links({ data }) {
	return (
		<ul className="flex flex-wrap gap-2">
			{data.map((link) => (
				<li key={link.url}>
					<a href={link.url} target="_blank" rel="noopener noreferrer">
                    <Icon name="link" /> {link.text} 
					</a>
				</li>
			))}
		</ul>
	);
}

export default Links;
