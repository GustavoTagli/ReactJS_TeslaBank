import { User } from "@phosphor-icons/react"
import { TeslaLogo } from "./pictures/tesla-logo"
import { ListItem } from "./list-item"

export function Header() {
	return (
		<header
			className={`flex justify-between items-center w-full px-60 py-6 z-50 absolute bg-transparent`}
		>
			<nav className="flex gap-16">
				<TeslaLogo className="cursor-pointer" />
				<ul className="flex gap-8 items-center">
					<ListItem text="TeslaBank" />
					<ListItem text="Conta digital" />
					<ListItem text="Pra você" />
				</ul>
			</nav>
			<button className={`text-white flex gap-4`}>
				<p className="font-medium text-lg text-inherit">Login</p>
				<User size={32} />
			</button>
		</header>
	)
}
