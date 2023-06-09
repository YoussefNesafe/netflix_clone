import useAppProps from "@/hooks/useAppProps";
import { useState, useEffect } from "react";
import { Movie } from "@/typings";
import DynamicImage from "@/utils/DynamicImage";
import { FaPlay } from "react-icons/fa";
import { HiInformationCircle } from "react-icons/hi";
import { commons } from "@/locales/en";
import { useRecoilState } from "recoil";
import { modalState, movieState } from "@/atoms/modalAtom";
const Banner = () => {
	const { netflixOriginals } = useAppProps();
	const [movie, setMovie] = useState<Movie | null>(null);
	const [currentMovie, setCurrentMovie] = useRecoilState(movieState);
	const [showModal, setShowModal] = useRecoilState(modalState);
	useEffect(() => {
		setMovie(netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]);
	}, [netflixOriginals]);
	if (movie === null) return <h1>Loading....</h1>;
	return (
		<div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[76vh] lg:justify-end lg:pb-12">
			<div className="absolute top-0 left-0 -z-10 h-[95vh] w-[100%]">
				<DynamicImage
					file={movie?.backdrop_path || movie?.poster_path}
					alt="movie cover"
					className="object-cover"
					fill
				/>
			</div>
			<h1 className="text-2xl font-bold md:text-4xl lg:text-7xl">
				{movie?.title || movie?.name || movie?.original_name}
			</h1>
			<p className="max-w-xs text-xs text-shadow-md md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">
				{movie?.overview}
			</p>
			<div className="flex space-x-3">
				<button
					className="text-black bg-white bannerButton"
					onClick={() => {
						setCurrentMovie(movie);
						setShowModal(true);
					}}
				>
					<FaPlay className="w-4 h-4 text-black md:h-7 md:w-7" />
					{commons.play}
				</button>

				<button
					className="bannerButton bg-[gray]/70"
					onClick={() => {
						setCurrentMovie(movie);
						setShowModal(true);
					}}
				>
					<HiInformationCircle className="w-5 h-5 md:h-8 md:w-8" /> {commons.moreInfo}
				</button>
			</div>
		</div>
	);
};

export default Banner;
