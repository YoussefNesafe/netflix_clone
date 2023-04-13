import "@/styles/globals.css";
import type { AppProps } from "next/app";
import AppPropsContext from "@/context/appPropsContext";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<AppPropsContext.Provider value={pageProps}>
			<Component {...pageProps} />
		</AppPropsContext.Provider>
	);
}
