import PageHeader from "@/components/PageHeader";
import useAuth from "@/hooks/useAuth";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { commons, plansPage } from "@/locales/en";
import List from "@/components/List";

const Plans = () => {
	const { logout, user } = useAuth();

	return (
		<div>
			<PageHeader title="Plans - Netflix" />
			<header className="border-b border-white/10 bg-[#141414]">
				<Link href="/">
					<Image
						src="/netflix-logo.png"
						width={150}
						height={150}
						className="absolute object-contain cursor-pointer left-4 top-4 md:left-10 md:top-6"
						alt="netflix logo"
					/>
				</Link>
				<button className="text-lg font-medium hover:underline" onClick={logout}>
					{commons.signOut}
				</button>
			</header>
			<main className="max-w-5xl px-5 pb-12 mx-auto transition-all pt-28 md:px-10">
				<List list={plansPage.list} title={plansPage.title} />
				<div className="flex flex-col mt-4 space-y-4">
					<div className="flex items-center self-end justify-end w-full md:w-3/5">
						<div className={`planBox`}>Standard</div>
						<div className={`planBox`}>Standard</div>
						<div className={`planBox`}>Standard</div>
					</div>
					{/* <Table /> */}
					<button
						className={`mx-auto w-11/12 rounded bg-[#E50914] py-4 text-xl shadow hover:bg-[#f6121d] md:w-[420px] `}
						onClick={() => {}}
					>
						Subscribe
					</button>
				</div>
			</main>
		</div>
	);
};

export default Plans;
