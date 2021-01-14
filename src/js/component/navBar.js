import React from "react";

export const NavBar = () => {
	//I have to loop all the items and convert them into LIs
	let menu = [
		{ label: "Home", url: "https://www.starwars.com/" },
		{ label: "Comunity", url: "https://www.starwars.com/community" },
		{ label: "Films", url: "/https://www.starwars.com/films" },
		{ label: "Info", url: "https://es.wikipedia.org/wiki/Star_Wars" }
	];
	let logo =
		"https://seeklogo.com/images/S/Star_Wars-logo-2B2C24F703-seeklogo.com.png";

	const items = menu.map((item, index) => {
		return (
			<li className="nav-item" key={index}>
				<a className="nav-link text-white" href={item.url}>
					{item.label}
				</a>
			</li>
		);
	});

	//this methods says how the NavBar should look like in HTML
	return (
		<nav className="navbar navbar-expand-sm">
			<a className="navbar-brand" href="#">
				{/* here I pass the logo url to the navbar image */}
				<img src={logo} />
			</a>
			{/* here I pass the array of LIs into the UL */}
			<ul className="navbar-nav">{items}</ul>
		</nav>
	);
};
