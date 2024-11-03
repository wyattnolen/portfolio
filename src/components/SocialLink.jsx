import Icon from "./Icon";

const SocialLink =({ platform, url })  => {
	return (
		<a href={url} target="_blank" rel="noopener noreferrer">
			<Icon name={platform} />
		</a>
	);
}

export default SocialLink;
