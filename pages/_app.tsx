import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Header from "components/Header";
import { AnimatePresence, domAnimation, LazyMotion } from "framer-motion";
import BottomNavigator from "components/BottomNavigator";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<LazyMotion features={domAnimation}>
				<AnimatePresence>
					<Header />
					<Component {...pageProps} />
					<BottomNavigator />
				</AnimatePresence>
			</LazyMotion>
		</>
	);
}

export default MyApp;
