import {
	AppleLogo,
	ArrowRight,
	Clock,
	CreditCard,
	CurrencyDollar,
	DeviceMobileCamera,
	Gift,
	GooglePlayLogo,
	Percent,
	Shield,
	ShoppingCartSimple,
	Smiley
} from "@phosphor-icons/react"
import { BackgroundFirstSection } from "./components/composition-background/background-first-section"
import { Header } from "./components/header"
import "./styles/main.css"
import { CreditCardFigure } from "./components/pictures/credit-card--figure"
import { PhoneWithEmojis } from "./components/pictures/phone-with-emojis"
import { TopicListItem } from "./components/topic-list-item"
import { BackgroundThirdSection } from "./components/composition-background/background-third-section"
import { GridItem } from "./components/grid-item"

function App() {
	return (
		<>
			<Header />
			<main className="h-screen scroll-smooth w-full flex flex-col items-center">
				<section id="section1" className="bg-dark-30 h-screen flex relative">
					<div className="z-10 w-7/12 h-full flex flex-col gap-16 justify-center">
						<div className="flex flex-col gap-4">
							<h1 className="font-semibold text-5xl text-brand-color">
								TeslaBank
								<br /> Banco 100% digital
							</h1>
							<p className="font-medium text-xl text-dark-10">
								Abrir uma conta digital nunca foi tão simples!
							</p>
						</div>
						<div className="flex gap-8 items-center">
							<button className="text-white bg-brand-color rounded-sm px-10 py-4 flex gap-3 items-center justify-center">
								<span>Abrir uma conta</span>
								<ArrowRight size={24} />
							</button>
							<AppleLogo weight="fill" size={40} className="text-brand-color" />
							<GooglePlayLogo
								weight="fill"
								size={40}
								className="text-brand-color"
							/>
						</div>
					</div>
					<div className="m-0 absolute z-10 w-[45vw] h-screen bg-brand-color flex items-center justify-center">
						<CreditCardFigure width={600} height={358} />
					</div>
					<BackgroundFirstSection className="absolute w-full h-auto top-1/2 -translate-y-1/2" />
				</section>
				<section
					id="section2"
					className="h-screen w-full px-60 flex items-center gap-32"
				>
					<PhoneWithEmojis width={600} height={831} />
					<div>
						<div className="flex flex-col gap-6 mb-14">
							<h2 className="text-3xl font-semibold">
								Abra sua conta{" "}
								<span className="text-brand-color">gratuita</span>!
							</h2>
							<p className="font-normal">
								Envie e receba dinheiro de forma mais prática e rápida. Faça
								Pix, TEDs e transferências com agendamento para todos os bancos
								sem pagar nada
							</p>
						</div>
						<ul className="flex flex-col gap-20">
							<TopicListItem
								title="Seu dinheiro rendendo mais"
								text="Rendem mais que a poupança e você resgata quando quiser"
							>
								<CurrencyDollar size={35} className="text-brand-color" />
							</TopicListItem>
							<TopicListItem
								title="Conta digital 100% grátis"
								text="Transferências, boletos de depósito e outros serviços gratuitos"
							>
								<DeviceMobileCamera size={35} className="text-brand-color" />
							</TopicListItem>
							<TopicListItem
								title="Cartão sem anuidade"
								text="Conta digital com cartão de crédito sem anuidade e sem complicação"
							>
								<Smiley size={35} className="text-brand-color" />
							</TopicListItem>
						</ul>
					</div>
				</section>
				<section
					id="section3"
					className="bg-dark-30 h-screen w-full px-60 flex flex-col justify-center relative gap-10"
				>
					<div className="z-10">
						<span className="uppercase text-brand-color font-medium mb-3">
							#inovação
						</span>
						<h2 className="text-3xl font-semibold">
							Quais as vantagens
							<br />
							de usar<span className="text-brand-color">TeslaBank</span>?
						</h2>
					</div>
					<div className="z-10 grid gap-4 grid-cols-4">
						<GridItem
							title="Cartão TeslaBank"
							text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quas veritatis ipsum! Ullam."
							linkText="Veja as opções"
						>
							<CreditCard className="text-brand-color" size={35} />
						</GridItem>
						<GridItem
							title="Investimentos"
							text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quas veritatis ipsum! Ullam."
							linkText="Conheça agora"
						>
							<ShoppingCartSimple className="text-brand-color" size={35} />
						</GridItem>
						<GridItem
							title="Atendimento 24h"
							text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quas veritatis ipsum! Ullam."
							linkText="Veja as opções"
						>
							<Clock className="text-brand-color" size={35} />
						</GridItem>
						<GridItem classAdtional="opacity-0" title="" text="" linkText="" />
						<GridItem classAdtional="opacity-0" title="" text="" linkText="" />
						<GridItem
							title="Segurança"
							text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quas veritatis ipsum! Ullam."
							linkText="Conheça as seguranças"
						>
							<Shield className="text-brand-color" size={35} />
						</GridItem>
						<GridItem
							title="Sem taxas"
							text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quas veritatis ipsum! Ullam."
							linkText="Como funciona"
						>
							<Percent className="text-brand-color" size={35} />
						</GridItem>
						<GridItem
							title="Receba prêmios"
							text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quas veritatis ipsum! Ullam."
							linkText="Veja como"
						>
							<Gift className="text-brand-color" size={35} />
						</GridItem>
					</div>
					<BackgroundThirdSection className="absolute -ml-60 w-full h-auto top-1/2 -translate-y-1/2" />
				</section>
			</main>
		</>
	)
}

export default App
