import React from "react";
import Tags from "./Tags";
import Links from "./Links";
import Icon from "./Icon";


function List({ data, type }) {
	return (
		<div>
			<ol>
				{data.content.map((item) => (
					<li className="mb-12 relative" key={item.id}>
						<article className="listItem position-relative">
							<span className="linkOverlay"></span>

							
							{type === "experiences" && item.dateRange && (
								<header className="listItem__header text-sm text-tertiary font-semibold text-uppercase letter-wide">
									{item.dateRange}
								</header>
							)}

							
							{type === "projects" && item.img && (
								<img src={item.img} alt={item.title} className="listItem__img" loading="lazy" width="200" height="48" decoding="async" />
							)}

							<div className="listItem__body">
								<h3>
									<a href={type === "projects" ? item.projectUrl : item.companyUrl}>
										{type === "projects" ? item.title : `${item.jobTitle} • ${item.company}`}{" "}
										<span className="arrowUpIcon"><Icon name="arrowup" /></span>
									</a>
								</h3>
								<p className="mt-2 text-sm">{item.description}</p>
								<div className="mt-2 text-sm">
									<Links data={item.links} />
								</div>
								<div className="mt-2">
									<Tags data={item.technologyTags} />
								</div>
							</div>
						</article>
					</li>
				))}
			</ol>
		</div>
	);
}

export default List;
