import "@/styles/globals.css";
import type { AppProps } from "next/app";
import AppPropsContext from "@/context/appPropsContext";
import { AuthProvider } from "@/hooks/useAuth";

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<AuthProvider>
			<AppPropsContext.Provider value={pageProps}>
				<Component {...pageProps} />
			</AppPropsContext.Provider>
		</AuthProvider>
	);
};
export default App;
