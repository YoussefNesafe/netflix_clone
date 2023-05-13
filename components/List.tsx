import { AiOutlineCheck } from "react-icons/ai";

interface Props {
	list: string[];
	title: string;
}

const List = ({ list, title }: Props) => (
	<>
		<h1 className="mb-3 text-3xl font-medium">{title}</h1>
		<ul>
			{list.map((el, index) => (
				<li key={`${index}-element`} className="flex items-center text-lg gap-x-2">
					<AiOutlineCheck className="h-7 w-7 text-[#E50914]" /> {el}
				</li>
			))}
		</ul>
	</>
);

export default List;
