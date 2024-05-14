interface TopicListItemProps {
	children: React.ReactNode
	title: string
	text: string
}

export function TopicListItem(props: TopicListItemProps) {
	return (
		<li className="flex gap-8 items-center">
			<figure className="w-14 h-14 bg-white rounded-lg shadow-sm shadow-dark-20 flex items-center justify-center">
				{props.children}
			</figure>
			<div>
				<h3 className="text-xl font-medium mb-3">{props.title}</h3>
				<p className="text-base font-normal">{props.text}</p>
			</div>
		</li>
	)
}
