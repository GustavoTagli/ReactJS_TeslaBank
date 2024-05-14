import { CaretDown } from "@phosphor-icons/react"

export function ListItem({ text }: { text: string }) {
	return (
		<li className="flex gap-4 items-center cursor-pointer">
			<p className="text-lg font-medium">{text}</p>
			<CaretDown size={32} className="text-brand-color" />
		</li>
	)
}
