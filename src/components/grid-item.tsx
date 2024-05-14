interface GridItemProps {
	title: string
	text: string
	linkText: string
	classAdtional?: string
	children?: React.ReactNode
}

export function GridItem({
	title,
	text,
	linkText,
	children,
	classAdtional
}: GridItemProps) {
	return (
		<div
			className={`max-w-64  flex flex-col gap-4 justify-center p-5 bg-white ${classAdtional}`}
		>
			{children}

			<div>
				<h3 className="text-xl font-medium mb-2">{title}</h3>
				<p className="text-base font-normal text-ellipsis line-clamp-3">
					{text}
				</p>
			</div>
			<a
				href=""
				className="uppercase text-brand-color underline-offset-4 underline text-base font-semibold"
			>
				{linkText}
			</a>
		</div>
	)
}
