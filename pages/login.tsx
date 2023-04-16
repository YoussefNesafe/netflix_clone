import PageHeader from "@/components/PageHeader";
import useAuth from "@/hooks/useAuth";
import Image from "next/image";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
	email: string;
	password: string;
};

const Login = () => {
	const [login, setLogin] = useState(false);
	const { signIn, signUp } = useAuth();
	const [formLoading, setFormLoading] = useState(false);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>();
	const onSubmit: SubmitHandler<Inputs> = async ({ email, password }) => {
		setFormLoading(true);
		if (login) {
			await signIn(email, password);
		} else {
			await signUp(email, password);
		}
		setFormLoading(false);
	};

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
			<form
				className="relative px-6 py-10 mt-24 space-y-8 rounded bg-black/75 md:mt-0 md:max-w-md md:px-14"
				onSubmit={handleSubmit(onSubmit)}
			>
				<h1 className="text-4xl font-semibold">Sign In</h1>
				<div className="space-y-4">
					<label className="inline-block w-full">
						<input
							type="email"
							placeholder="Email"
							className={`input ${errors.email && "border-b-2 border-orange-500"}`}
							{...register("email", { required: true })}
						/>
						{errors.email && (
							<p className="p-1 text-[13px] font-light  text-orange-500">
								Please enter a valid email.
							</p>
						)}
					</label>
					<label className="inline-block w-full">
						<input
							type="password"
							{...register("password", { required: true })}
							placeholder="Password"
							className={`input ${errors.password && "border-b-2 border-orange-500"}`}
						/>
						{errors.password && (
							<p className="p-1 text-[13px] font-light  text-orange-500">
								Your password must contain between 4 and 60 characters.
							</p>
						)}
					</label>
				</div>
				<button
					className={`w-full rounded bg-[#E50914] py-3 font-semibold ${
						formLoading ? "bg-red-300" : ""
					}`}
					onClick={() => setLogin(true)}
					type="submit"
					disabled={formLoading}
				>
					{formLoading ? "Loading..." : "Sign In"}
				</button>
				<div className="text-[gray]">
					New to Netflix?{" "}
					<button
						className="text-white cursor-pointer hover:underline"
						onClick={() => setLogin(false)}
						type="submit"
					>
						Sign up now
					</button>
				</div>
			</form>
		</div>
	);
};

export default Login;
