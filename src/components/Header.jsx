import SocialLink from "./SocialLink";

const Header = ({ data }) => {
	const { name, title, tag, socials } = data;

	return (
        <header className="site__header h-max-screen flex flex-col">
            <section>
                <h1 className="text-primary letter-tight">
                    <a href="/">{name}</a>
                </h1>
                <h2 className="mt-3">{title}</h2>
                <p className="mt-3">{tag}</p>
                <div className="socials flex gap-3 mt-8">
                    {socials?.map((social) => (
                        <SocialLink
                            key={social.platform}
                            platform={social.platform}
                            url={social.url}
                        />
                    ))}
                </div>
                
            </section>
        </header>
	);
};

export default Header;
