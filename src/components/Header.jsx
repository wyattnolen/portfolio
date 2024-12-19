import SocialLink from "./SocialLink";
import Icon from "./Icon";
import resume from '../assets/wyatt_nolen_resume.pdf';


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
                <div className="socials flex gap-3 mt-8 items-center">
                    <a 
                        className="tag flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm bg-white text-dark px-4 py-2 m-0 pointer hover-bg-accent hover-text-dark" 
                        href={resume} 
                        download="wyatt-nolen-resume.pdf"
                        rel="noopener noreferrer"
                    >
                        <Icon name="file"/>
                        Resume
                    </a>
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
