export const header = {
	name: "Wyatt Nolen",
	title: "Fullstack Developer",
	tag: "Lifelong Learner | Web Enthusiast",
	socials: [
        { platform: "codepen", url: "https://codepen.io/wyattnolen" },
		{ platform: "linkedin", url: "https://linkedin.com/in/wyatt-nolen-185a1864" },
		{ platform: "github", url: "https://github.com/wyattnolen" },
	],
};

export const experiences = {
	title: "Experiences",
	content: [
		{
			id: 1,
			dateRange: "2023 - Present",
			jobTitle: "Fullstack Developer",
			company: "Kalio",
			companyUrl: "https://www.kaliocommerce.com/",
			description:
				"Research, build, style, and ship high-quality websites, for a diverse array of projects for clients. Identify and coach clients on opportunites to improve e-commerce funnel conversion. Provide leadership within team through close collaboration, knowledge shares, and spearheading the development of new features.",
			technologyTags: ["C#", "ASP.NET", "Javascript", "HTML & CSS"],
			links: [
				{
					text: "Van Dykes",
					url: "https://www.vandykes.com/",
				},
				{
					text: "Park Seed",
					url: "https://www.parkseed.com/",
				},
				{
					text: "Agri Supply",
					url: "https://www.agrisupply.com/",
				},
				{
					text: "Dover Saddlery",
					url: "https://www.doversaddlery.com/",
				},
				{
					text: "SStack",
					url: "https://sstack.com",
				},
				{
					text: "Positive Promotions",
					url: "https://www.positivepromotions.com/",
				},
				{
					text: "Sun Harvest",
					url: "https://www.sunharvestcitrus.com/",
				},
				{
					text: "Republic of Tea",
					url: "https://www.republicoftea.com/",
				},
				{
					text: "Black Widow",
					url: "https://www.blackwidowpro.com/",
				},
				{
					text: "PBS Animal Health",
					url: "https://www.pbsanimalhealth.com/",
				},
			],
		},
		{
            id: 2,
			dateRange: "2015 - 2023",
			jobTitle: "Frontend Developer",
			company: "PureRomance",
			companyUrl: "https://www.pureromance.com/",
			description:
				"Built and maintained critical components used to construct Pure Romance's frontend. Worked closely with cross-functional teams, including marketing, designers, and product managers, to implement and advocate for best practices in web accessibility and patterns.",
			technologyTags: ["Vue", "React", "TypeScript", "Javascript", "HTML & SCSS"],
			links: [],
		},
	],
};

export const projects = {
	title: "Projects",
	content: [
		{
			id: 1,
			img: "/assets/projects/agriPartFinder.webp",
            projectUrl: "https://www.agrisupply.com/parts.aspx?p=26912",
			title: "Part Finder",
			description: "Developed a web tool that transforms reference specs into an interactive shopping experience, allowing customers to easily identify and purchase replacement parts. Built a seamless interface for browsing manufacturer manuals and parts lists",
			technologyTags: ["Javascript", "HTML & CSS"],
			links: [],
		},
        {
			id: 2,
			img: "/assets/projects/fdr1.png",
            projectUrl: "https://www.fdrfourfreedomspark.org/",
			title: "FDR 4 Freedoms",
			description: "Contributed to the FDR Four Freedoms website, collaborating with designers, historians, and developers to create an engaging and accessible digital experience. Developed interactive, responsive features while ensuring historical accuracy and modern web standards. Focused on performance, accessibility, and cross-device compatibility to enhance educational outreach.",
			technologyTags: ["Javascript", "HTML & CSS"],
			links: [],
		},
		{
			id: 3,
			img: "/assets/projects/pureromance.png",
            projectUrl: "https://www.pureromance.com/",
			title: "Replatform Pure Romance",
			description: "Led the migration of Pure Romance from Prowess to Shopify. Created Shopify themes using Liquid, JavaScript, and JSON to enhance UX and align with branding. Integrated third-party apps and APIs to optimize functionality and improve performance. Focused on scalability, mobile responsiveness, and best practices for modern e-commerce.",
			technologyTags: ["Shopify", "Javascript", "HTML & CSS", "AWS Lambda", "GraphQL"],
			links: [],
		},
	],
};
