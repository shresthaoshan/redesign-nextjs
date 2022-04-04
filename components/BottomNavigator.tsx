import React from "react";
import BottomNavigatorItem from "./BottomNavigatorItem";
import { m } from "framer-motion";

const BottomNavigator = () => {
	return (
		<nav>
			<m.ul
				transition={{ delay: 1 }}
				initial={{ scaleY: 0, opacity: 0 }}
				animate={{ scaleY: 1, opacity: 1 }}
				exit={{ scaleY: 0, opacity: 0 }}
			>
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
			</m.ul>
		</nav>
	);
};

export default BottomNavigator;
