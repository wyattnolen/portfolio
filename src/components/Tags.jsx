import React from "react";

function Tags({ data }) {
	return  (
        <ul className="flex flex-row flex-wrap">
            {data.map((tag) => (
                <li className="tag rounded-full text-accent" key={tag}>{tag}</li>
            ))}
        </ul>
        )
}

export default Tags;
