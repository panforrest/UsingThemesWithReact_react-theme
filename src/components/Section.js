import React, { Component } from 'react' 

export default (props) => {

    const orient = props.orient || 'orient-right'
    const containerClass = 'spotlight style1 ' +orient+ ' content-align-left image-position-center onscroll-image-fade-in'

    return(
	    <section className={containerClass}>
			<div className="content">
				<h2>{props.title}</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id ante sed ex pharetra lacinia sit amet vel massa. Donec facilisis laoreet nulla eu bibendum. Donec ut ex risus. Fusce lorem lectus, pharetra pretium massa et, hendrerit vestibulum odio lorem ipsum dolor sit amet.</p>
				<ul className="actions vertical">
					<li><a href="#" className="button">Learn More</a></li>
				</ul>
			</div>
			<div className="image">
				<img src="images/spotlight01.jpg" alt="" />
			</div>
		</section>
    )

}

