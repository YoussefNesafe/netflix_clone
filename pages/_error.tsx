import Image from "next/image";
import Link from "next/link";

const NotFoundPage = () => {
	return (
		<div className="relative flex items-center justify-center h-[100vh] w-[100%] ">
			<Image
				src="/netflix-logo.png"
				width={150}
				height={150}
				className="absolute object-contain cursor-pointer left-4 top-4 md:left-10 md:top-6"
				alt="netflix logo"
			/>
			<div className="px-40 py-20">
				<div className="flex flex-col items-center">
					<h1 className="font-bold text-[#E30913] text-9xl">404</h1>

					<h6 className="mb-2 text-2xl font-bold text-center text-gray-100 md:text-3xl">
						<span className="text-[#E30913]">Oops!</span> Page not found
					</h6>

					<p className="mb-8 text-center text-gray-500 md:text-lg">
						The page you’re looking for doesn’t exist.
					</p>

					<Link href="/" className="px-6 py-2 text-sm font-semibold bg-[#E50914] rounded ">
						Go home
					</Link>
				</div>
			</div>
		</div>
	);
};

export default NotFoundPage;
