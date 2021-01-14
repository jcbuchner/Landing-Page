import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { ArticleCards } from "./article-cards.jsx";
import { NavBar } from "./navBar";
import { Jumbotron } from "./header";
import { Footer } from "./footer";

export function Home() {
	return (
		<div>
			<NavBar />
			<div className="bodyLayout">
				<Jumbotron
					title="BREAKING NEWS!"
					subtittle="Rancor at Jabba’s Palace Tests Positive for COVID"
					summary="The Imperial Department of Agriculture’s Galactic Veterinary Services Laboratories reported that the rancor, named Pateesa, is thought to be the first animal known to be infected with the virus in the Outer Rim."
					link="https://www.fakingstarwars.net/2020/04/07/rancor-tests-positive-covid-19/"
				/>
				<div className="articles">
					<ArticleCards />
				</div>
			</div>
			<Footer />
		</div>
	);
}
