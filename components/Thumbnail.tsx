import { Movie } from "../typings";
import DynamicImage from "@/utils/DynamicImage";
import { useRecoilState } from "recoil";
import { modalState, movieState } from "@/atoms/modalAtom";

interface Props {
	movie: Movie;
}

const Thumbnail = ({ movie }: Props) => {
	const [currentMovie, setCurrentMovie] = useRecoilState(movieState);
	const [showModal, setShowModal] = useRecoilState(modalState);
	return (
		<div
			className={`relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105`}
			onClick={() => {
				setCurrentMovie(movie);
				setShowModal(true);
			}}
		>
			<DynamicImage
				params="w500"
				file={movie.backdrop_path || movie.poster_path}
				className="object-cover rounded-sm md:rounded"
				fill
			/>
		</div>
	);
};

export default Thumbnail;
