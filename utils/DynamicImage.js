import Image from "next/image";

const DynamicImages = ({ file, ...rest }) => {
	const imageBaseURL = process.env.NEXT_PUBLIC_MOVIE_IMAGE_BASE_URL;
	const imgUrl = `${imageBaseURL}${file}`;
	return <Image src={imgUrl} alt="" {...rest} />;
};

export default DynamicImages;
