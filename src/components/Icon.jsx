import CodePenIcon from '../assets/svgs/socials/codepen.svg';
import GitHubIcon from '../assets/svgs/socials/github.svg';
import LinkedInIcon from '../assets/svgs/socials/linkedin.svg';
import LinkIcon from '../assets/svgs/link.svg';
import ArrowUpIcon from '../assets/svgs/arrowUp.svg';
import FileIcon from '../assets/svgs/file.svg';

const icons = {
    link: LinkIcon,
    arrowup: ArrowUpIcon,
    codepen: CodePenIcon,
    github: GitHubIcon,
    linkedin: LinkedInIcon,
    file: FileIcon,
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
