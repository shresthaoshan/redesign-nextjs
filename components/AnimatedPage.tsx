import React from "react";
import { m } from "framer-motion";
import { useRouter } from "next/router";

const AnimatedPage = ({ children }: { children: React.ReactNode }) => {
	const { pathname } = useRouter();

	return (
		<m.div
			key={pathname}
			initial={{ opacity: 0, translateX: "-100px" }}
			animate={{ opacity: 1, translateX: 0 }}
			exit={{ opacity: 0, translateX: "300px" }}
			transition={{ duration: 0.5, easings: "easeInOut" }}
		>
			{children}
		</m.div>
	);
};

export default AnimatedPage;
