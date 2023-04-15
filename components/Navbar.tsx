import Image from "next/image";
import { navbarContent } from "@/locales/en";
import { AiOutlineSearch, AiFillBell } from "react-icons/ai";
import Link from "next/link";
import { useEffect, useState } from "react";
import useAuth from "@/hooks/useAuth";

const Navbar = () => {
	const { links, Kids } = navbarContent;
	const [isScrolled, setIsScrolled] = useState(false);
	const { logout } = useAuth();
	const handleScroll = () => {
		window.scrollY > 0 ? setIsScrolled(true) : setIsScrolled(false);
	};
	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	return (
		<header className={`${isScrolled && "bg-[#141414]"}`}>
			<div className="flex items-center space-x-2 md:space-x-10 ">
				<Image
					src="/netflix-logo.png"
					width={100}
					height={100}
					className="object-contain cursor-pointer"
					alt="netflix logo"
				/>
				<ul className="hidden space-x-4 md:flex">
					{links.map(({ title }, index) => (
						<li key={index} className="headerLink">
							{title}
						</li>
					))}
				</ul>
			</div>
			<div className="flex items-center space-x-4 text-sm font-light">
				<AiOutlineSearch className="hidden w-6 h-6 sm:inline" />
				<p className="hidden lg:inline">{Kids}</p>
				<AiFillBell className="w-6 h-6" />
				{/* <Link href="/account"> */}
				<Image
					src="/assets/account-img.png"
					alt="Account image"
					className="rounded cursor-pointer"
					width={30}
					height={30}
					onClick={logout}
				/>
				{/* </Link> */}
			</div>
		</header>
	);
};

export default Navbar;
