import React from "react";
import ReactDOM from "react-dom";

import chewbaccaImage from "../../img/chewbacca.jpg";
import desertImage from "../../img/desert.jpg";
import soldierImage from "../../img/soldier.jpg";
import spaceImage from "../../img/space.jpg";

export function ArticleCards() {
	return (
		<div className="row">
			<div className="card col-3">
				<img
					src={chewbaccaImage}
					className="card-img-top"
					alt="chewbacca"
				/>
				<div className="card-body">
					<h5 className="card-title">
						Top 10 Reasons Leia Ignored Chewbacca After He Returned
						from Starkiller Base
					</h5>
					<p className="card-text">
						Chewbacca very much stole The Force Awakens. He was
						funnier, sexier and much more badass than anyone else in
						the film. However, not everyone was thrilled with the
						loyal Wookiee’s standout performance.
					</p>
					<a
						href="https://www.fakingstarwars.net/2016/10/20/top-10-reasons-leia-ignored-chewbacca-returned-starkiller-base/"
						className="btn btn-warning">
						Read more
					</a>
				</div>
			</div>
			<div className="card col-3">
				<img src={desertImage} className="card-img-top" alt="desert" />
				<div className="card-body">
					<h5 className="card-title">
						Palpatine: Defunding Death Star 3 Will Lead To Slower,
						More Painful Deaths
					</h5>
					<p className="card-text">
						Early this morning, the newly resurrected leader of The
						Final Order criticized the grassroots movement to defund
						his planet-killing weapon. Emperor Palpatine believes
						The Resistance is behind the #DefundTheDeathStar
						campaign,
					</p>
					<a
						href="https://www.fakingstarwars.net/2020/06/25/palpatine-defunding-death-star-3-will-lead-to-slower-more-painful-deaths/"
						className="btn btn-warning">
						Read more
					</a>
				</div>
			</div>
			<div className="card col-3">
				<img src={soldierImage} className="card-img-top" alt="" />
				<div className="card-body">
					<h5 className="card-title">Full Episode VIII Plot Leak!</h5>
					<p className="card-text">
						Jacen’s cousin has done it again! Behold… the entire
						plot to the forthcoming Star Wars Episode VIII which
						Jacen’s cousin
					</p>
					<a
						href="https://www.fakingstarwars.net/2016/08/22/full-episode-viii-plot-leak/"
						className="btn btn-warning">
						Read more
					</a>
				</div>
			</div>
			<div className="card col-3">
				<img src={spaceImage} className="card-img-top" alt="" />
				<div className="card-body">
					<h5 className="card-title">
						Kylo Ren Stages Intervention to Help Snoke Kick Death
						Sticks Habit
					</h5>
					<p className="card-text">
						The Outer Rim — After losing his father late last year,
						Kylo Ren is doing everything in his power to
					</p>
					<a
						href="https://www.fakingstarwars.net/2017/08/07/kylo-ren-intervention/"
						className="btn btn-warning">
						Read more
					</a>
				</div>
			</div>
		</div>
	);
}
