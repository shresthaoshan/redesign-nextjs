import React from "react";
import BottomNavigatorItem from "./BottomNavigatorItem";

const BottomNavigator = () => {
	return (
		<nav>
			<ul>
				<BottomNavigatorItem label="About Us" href="/about" />
				<BottomNavigatorItem
					label="Our Work"
					href="/portfolio"
					menu={[
						{
							label: "Capital",
							href: "/portfolio/capital",
						},
						{
							label: "Ventures",
							href: "/portfolio/ventures",
						},
						{
							label: "Stock Market",
							href: "/portfolio/stock",
						},
					]}
				/>
				<BottomNavigatorItem label="Our Expertise" href="/services" />
				<BottomNavigatorItem label="Contact Us" href="/contact" />
			</ul>
		</nav>
	);
};

export default BottomNavigator;
