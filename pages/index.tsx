import { modalState } from "@/atoms/modalAtom";
import Banner from "@/components/Banner";
import Modal from "@/components/Modal";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import RowMovie from "@/components/RowMovie";
import Plans from "@/components/Plans";
import useAuth from "@/hooks/useAuth";
import payments from "@/lib/stripe";
import { commons } from "@/locales/en";
import { Movie } from "@/typings";
import requests from "@/utils/requests";
import { Product, getProducts } from "@stripe/firestore-stripe-payments";
import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";

interface Props {
	netflixOriginals: Movie[];
	trendingNow: Movie[];
	topRated: Movie[];
	actionMovies: Movie[];
	comedyMovies: Movie[];
	horrorMovies: Movie[];
	romanceMovies: Movie[];
	documentaries: Movie[];
	products: Product[];
}

const Home = ({
	netflixOriginals,
	actionMovies,
	comedyMovies,
	documentaries,
	horrorMovies,
	romanceMovies,
	topRated,
	trendingNow,
	products,
}: Props) => {
	const { loading } = useAuth();
	const showModal = useRecoilValue(modalState);
	const { push } = useRouter();
	const subscription = false;
	if (loading || subscription === null) return null;
	if (!subscription) return <Plans products={products} />;
	return (
		<div className="relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[140vh]">
			<PageHeader title="Home - Netflix" />
			<Navbar />
			<main className="relative pb-24 pl-4 lg:space-y-24 lg:pl-16 ">
				<Banner />
				<section className="md:space-y-24">
					<RowMovie title={commons.tredingNow} movies={trendingNow} />
					<RowMovie title={commons.topRated} movies={topRated} />
					<RowMovie title={commons.action} movies={actionMovies} />
					<RowMovie title={commons.comedies} movies={comedyMovies} />
					<RowMovie title={commons.horror} movies={horrorMovies} />
					<RowMovie title={commons.romance} movies={romanceMovies} />
					<RowMovie title={commons.documentaries} movies={documentaries} />
				</section>
			</main>
			{showModal && <Modal />}
		</div>
	);
};

export default Home;

export const getServerSideProps = async () => {
	const products = await getProducts(payments, {
		includePrices: true,
		activeOnly: true,
	})
		.then((res) => res)
		.catch((err) => console.log(err.message));

	const [
		netflixOriginals,
		trendingNow,
		topRated,
		actionMovies,
		comedyMovies,
		horrorMovies,
		romanceMovies,
		documentaries,
	] = await Promise.all([
		fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
		fetch(requests.fetchTrending).then((res) => res.json()),
		fetch(requests.fetchTopRated).then((res) => res.json()),
		fetch(requests.fetchActionMovies).then((res) => res.json()),
		fetch(requests.fetchComedyMovies).then((res) => res.json()),
		fetch(requests.fetchHorrorMovies).then((res) => res.json()),
		fetch(requests.fetchRomanceMovies).then((res) => res.json()),
		fetch(requests.fetchDocumentaries).then((res) => res.json()),
	]);

	return {
		props: {
			netflixOriginals: netflixOriginals.results,
			trendingNow: trendingNow.results,
			topRated: topRated.results,
			actionMovies: actionMovies.results,
			comedyMovies: comedyMovies.results,
			horrorMovies: horrorMovies.results,
			romanceMovies: romanceMovies.results,
			documentaries: documentaries.results,
			products,
		},
	};
};
