import AnimatedPage from "components/AnimatedPage";
import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
	return (
		<AnimatedPage>
			<div className="home">
				<main className="landing">
					<div className="landing__container">
						<div className="content__text">
							<h3>
								We believe in <span>real growth</span>.
							</h3>
							<h1>
								Let&apos;s grow <span>together</span>.
							</h1>
							<div className="ctas">
								{/* <Link passHref href="/contact?type=meeting&ref=landing">
									<button>
										<span>Set-up A Meeting With Us</span>
									</button>
								</Link>
								<div className="divider">
									<b>/</b>
								</div> */}
								<Link passHref href="/portfolio">
									<button>
										<span>Explore Our Projects</span>
									</button>
								</Link>
							</div>
						</div>
					</div>
				</main>
			</div>
		</AnimatedPage>
	);
};

export default Home;
