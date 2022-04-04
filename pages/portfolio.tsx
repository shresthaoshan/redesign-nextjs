import AnimatedPage from "components/AnimatedPage";
import React from "react";

const _portfolios = [
	{
		title: "SOMTU",
		type: "Web Design",
		image: "/portfolio_images/SOMTU.png",
		imageAlt: "SOMTU Portfolio",
		link: "https://somtu.onemoment.codes/",
	},
];

const Portfolio = () => {
	return (
		<AnimatedPage>
			<div className="portfolio">
				<main>
					<div className="portfolio__head">
						<div className="container">
							<h1>Our Portfolio</h1>
							<p>
								We are here to <span>innovate</span>.
							</p>
							<p>
								And <span>lead</span>.
							</p>
						</div>
					</div>
					<div className="container">
						<div className="portfolio__content">
							{_portfolios.map((item, index) => (
								<div key={`portfolio_item-${index}`} className="portfolio__item">
									<div className="img__container">
										{/* eslint-disable-next-line */}
										<img src={item.image} alt={item.imageAlt} />
									</div>
									<div className="portfolio__meta">
										<div className="portfolio__info-meta">
											<small>{item.type}</small>
											<h2>{item.title}</h2>
										</div>
										<div className="portfolio__info-link">
											<a target="_blank" rel="noreferrer" href={item.link}>
												<button className="external__link-button">
													{/* eslint-disable-next-line */}
													<img src="/icons/external_link.png" alt="external link icon" />
												</button>
											</a>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</main>
			</div>
		</AnimatedPage>
	);
};

export default Portfolio;
