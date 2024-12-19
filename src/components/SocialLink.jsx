import Icon from "./Icon";

const SocialLink =({ platform, url })  => {
	return (
		<a href={url} target="_blank" rel="noopener noreferrer" className="flex">
			<Icon name={platform} />
		</a>
	);
}

export default SocialLink;
