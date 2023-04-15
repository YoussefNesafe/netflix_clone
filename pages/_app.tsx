import "@/styles/globals.css";
import type { AppProps } from "next/app";
import AppPropsContext from "@/context/appPropsContext";
import { AuthProvider } from "@/hooks/useAuth";
import { RecoilRoot } from "recoil";

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<RecoilRoot>
			<AuthProvider>
				<AppPropsContext.Provider value={pageProps}>
					<Component {...pageProps} />
				</AppPropsContext.Provider>
			</AuthProvider>
		</RecoilRoot>
	);
};
export default App;
