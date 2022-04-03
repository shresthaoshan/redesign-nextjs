import React, { useState } from "react";
import Link from "next/link";
import { AnimatePresence, m } from "framer-motion";
import { useDebounce } from "use-hooks";

interface BottomNavigatorItemProps {
	label: string;
	href: string;
	menu?: Array<{
		label: string;
		href: string;
	}>;
}

const BottomNavigatorItem = (props: BottomNavigatorItemProps) => {
	const [isHovered, setIsHovered] = useState<boolean>(false);

	const hoverState = useDebounce(isHovered, 300);

	return (
		<m.li
			onHoverStart={() => {
				setIsHovered(true);
			}}
			onHoverEnd={() => {
				setIsHovered(false);
			}}
		>
			<Link href={props.href}>
				<a>{props.label}</a>
			</Link>
			<AnimatePresence>
				{props.menu && props.menu.length ? (
					hoverState ? (
						<m.div
							key={`${props.href}-hover-effect`}
							className="list"
							animate={{ opacity: 1, scaleY: 1 }}
							initial={{ opacity: 0, scaleY: 0 }}
							exit={{ opacity: 0, scaleY: 0 }}
						>
							<ul>
								{props.menu.map((item, index) => (
									<li key={index}>
										<Link href={item.href}>{item.label}</Link>
									</li>
								))}
							</ul>
						</m.div>
					) : null
				) : null}
			</AnimatePresence>
		</m.li>
	);
};

export default BottomNavigatorItem;
