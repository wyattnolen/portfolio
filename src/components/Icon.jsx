import CodePenIcon from '../assets/socials/codepen.svg';
import GitHubIcon from '../assets/socials/github.svg';
import LinkedInIcon from '../assets/socials/linkedin.svg';
import LinkIcon from '../assets/link.svg';
import ArrowUpIcon from '../assets/arrowUp.svg';

const icons = {
    link: LinkIcon,
    arrowup: ArrowUpIcon,
    codepen: CodePenIcon,
    github: GitHubIcon,
    linkedin: LinkedInIcon,
};

const Icon = ({ name, alt = "", className = "", ...props }) => {
    const SvgIcon = icons[name];

    if (!SvgIcon) {
        console.warn(`Icon with name "${name}" does not exist.`);
        return null;
    }

    return (
        <SvgIcon
            className={className}
            aria-label={alt}
            {...props}
            style={{...props.style }}
        />
    );
};

export default Icon;
