import Image from "next/image";
import { Movie } from "../typings";
import DynamicImages from "@/utils/DynamicImage";

interface Props {
	movie: Movie;
}

function Thumbnail({ movie }: Props) {
	return (
		<div
			className={`relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105`}
		>
			<DynamicImages
				params="w500"
				file={movie.backdrop_path || movie.poster_path}
				className="object-cover rounded-sm md:rounded"
				fill
			/>
		</div>
	);
}

export default Thumbnail;
