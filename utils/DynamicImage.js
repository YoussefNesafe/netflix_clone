import Image from "next/image";

const DynamicImages = ({ file, params = "original/", ...rest }) => {
	const imageBaseURL = "https://image.tmdb.org/t/p/";
	const imgUrl = `${imageBaseURL}${params}${file}`;
	return <Image src={imgUrl} alt="" {...rest} />;
};

export default DynamicImages;
