import React from "react";
import PropTypes from "prop-types";

export const Jumbotron = props => {
	return (
		<div className="jumbotron">
			<h1 className="title">{props.title}</h1>
			<p className="subtitle">{props.subtittle}</p>
			<p className="summary">{props.summary}</p>
			<p className="lead">
				<a
					className="btn btn-warning btn-md"
					href={props.link}
					role="button">
					Read more
				</a>
			</p>
		</div>
	);
};

Jumbotron.propTypes = {
	title: PropTypes.string,
	subtittle: PropTypes.string,
	summary: PropTypes.string,
	link: PropTypes.string
};
