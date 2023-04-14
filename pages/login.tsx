import PageHeader from "@/components/PageHeader";
import Image from "next/image";

const Login = () => {
	return (
		<div className="relative flex flex-col w-screen h-screen bg-black md:items-center md:justify-center md:bg-transparent">
			<PageHeader title="Login - Netflix" />
			<Image
				src="/assets/wallpaper.jpg"
				fill
				className="object-cover -z-10 opacity-60"
				alt="netflix wallpaper"
			/>
			<Image
				src="/netflix-logo.png"
				width={150}
				height={150}
				className="absolute object-contain cursor-pointer left-4 top-4 md:left-10 md:top-6"
				alt="netflix logo"
			/>
			<form className="relative px-6 py-10 mt-24 space-y-8 rounded bg-black/75 md:mt-0 md:max-w-md md:px-14">
				<h1 className="text-4xl font-semibold">Sign In</h1>
				<div className="space-y-4">
					<label className="inline-block w-full">
						<input type="email" placeholder="Email" className={`input`} />
					</label>
					<label className="inline-block w-full">
						<input type="password" placeholder="Password" className={`input`} />
					</label>
				</div>
				<button
					className="w-full rounded bg-[#E50914] hover:bg-red-700 transition-all duration-400 py-3 font-semibold"
					type="submit"
				>
					Sign In
				</button>
				<div className="text-[gray]">
					New to Netflix?{" "}
					<button className="text-white cursor-pointer hover:underline" type="submit">
						Sign up now
					</button>
				</div>
			</form>
		</div>
	);
};

export default Login;
