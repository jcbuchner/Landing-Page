import React from "react";

export const Footer = () => {
	let text = "Follow Star Wars";
	let logo =
		"https://as01.epimg.net/meristation/imagenes/2019/12/05/noticias/1575540224_970121_1575540345_noticia_normal.jpg";
	let icon1 = <i className="fab fa-instagram" />;
	let icon2 = <i className="fab fa-youtube" />;
	let icon3 = <i className="fab fa-twitter" />;
	return (
		<div className="footer d-flex">
			<img src={logo} />
			<a className="text-white" href="#">
				{/* here I pass the logo url to the navbar image */}
				<p className="text-footer ">{text}</p>
				<div className="d-flex justify-content-between">
					{icon1}
					{icon2}
					{icon3}
				</div>
			</a>
		</div>
	);
};
