/* eslint-disable @next/next/no-img-element */

const DynamicImages = ({ file, params = "original/", ...rest }) => {
	const imageBaseURL = "https://image.tmdb.org/t/p/";
	const imgUrl = `${imageBaseURL}${params}${file}`;
	return <img src={imgUrl} alt="" {...rest} />;
};

export default DynamicImages;
