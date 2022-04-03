import Image from "next/image";
import Link from "next/link";
import React from "react";
import { m } from "framer-motion";

const Header = () => {
	return (
		<header>
			<div className="header__container">
				<m.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.4 }}>
					<Image src="/logo.png" width={60} height={80} alt="Burgeon Tech Logo" />
				</m.div>
				<div className="nav__menu">
					<div className="ctas">
						<Link passHref href="/contact?type=meeting&ref=landing">
							<m.div
								initial={{ opacity: 0, translateX: 120 }}
								transition={{ delay: 0.3 }}
								animate={{ opacity: 1, translateX: 0 }}
							>
								<button>
									<span>Set-up A Meeting With Us</span>
								</button>
							</m.div>
						</Link>
					</div>
					{/* <ul>
						<li>
							<Link href="/about">
								<a>Who are we</a>
							</Link>
						</li>
						<li>
							<Link href="/portfolio">
								<a>What have we done</a>
							</Link>
						</li>
						<li>
							<Link href="/contact">
								<a>How to find us</a>
							</Link>
						</li>
					</ul> */}
				</div>
			</div>
		</header>
	);
};

export default Header;
