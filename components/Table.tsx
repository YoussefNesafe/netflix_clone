import { BsCheck2 } from "react-icons/bs";
import { Product } from "@stripe/firestore-stripe-payments";
import { IoMdClose } from "react-icons/io";

interface Props {
	products: Product[];
	selectedPlan: Product | null;
}
interface TableRowProps {
	title: string;
	children: React.ReactNode;
}
interface TableColumnProps {
	content: any;
	isSelectedPlan: boolean;
}
const TableRow = ({ title, children }: TableRowProps) => {
	return (
		<tr className="tableRow">
			<td className="tableDataTitle">{title}</td>
			{children}
		</tr>
	);
};
const TableColumn = ({ content, isSelectedPlan }: TableColumnProps) => {
	return (
		<td className={`tableDataFeature ${isSelectedPlan ? "text-[#E50914]" : "text-[gray]"}`}>
			{content}
		</td>
	);
};

function Table({ products, selectedPlan }: Props) {
	return (
		<table>
			<tbody className="divide-y divide-[gray]">
				<TableRow title="Monthly price">
					{products.map((product) => (
						<TableColumn
							key={product.id}
							content={`AED${product.prices[0].unit_amount! / 100}`}
							isSelectedPlan={selectedPlan?.id === product.id}
						/>
					))}
				</TableRow>
				<TableRow title="Video quality">
					{products.map((product) => (
						<TableColumn
							key={product.id}
							content={product.metadata.videoQuality}
							isSelectedPlan={selectedPlan?.id === product.id}
						/>
					))}
				</TableRow>
				<TableRow title="Resolution">
					{products.map((product) => (
						<TableColumn
							key={product.id}
							content={product.metadata.resolution}
							isSelectedPlan={selectedPlan?.id === product.id}
						/>
					))}
				</TableRow>
				<TableRow title="Watch on your TV, computer, mobile phone and tablet">
					{products.map((product) => (
						<TableColumn
							key={product.id}
							content={
								product.metadata.portability === "true" ? (
									<BsCheck2 className="inline-block w-8 h-8" />
								) : (
									<IoMdClose className="inline-block w-8 h-8" />
								)
							}
							isSelectedPlan={selectedPlan?.id === product.id}
						/>
					))}
				</TableRow>
			</tbody>
		</table>
	);
}

export default Table;
