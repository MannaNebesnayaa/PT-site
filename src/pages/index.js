import React from "react";
import theme from "theme";
import { Theme, Link, Image, Span, Text, Section, Box, Hr, Strong, Icon } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override, StackItem, Stack } from "@quarkly/components";
import * as Components from "components";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter, FaTelegram } from "react-icons/fa";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Privat Tender
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<meta property={"og:image"} content={"https://uploads.quarkly.io/602a53318e7be4001e97a8e2/images/logo.png?v=2021-02-18T09:06:23.754Z"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/602a53318e7be4001e97a8e2/images/logo.png?v=2021-02-18T09:06:23.754Z"} type={"image/x-icon"} />
			<link rel={"apple-touch-icon"} href={"https://uploads.quarkly.io/602a53318e7be4001e97a8e2/images/logo.png?v=2021-02-18T09:06:23.754Z"} />
			<link rel={"apple-touch-icon"} sizes={"76x76"} href={"https://uploads.quarkly.io/602a53318e7be4001e97a8e2/images/logo.png?v=2021-02-18T09:06:23.754Z"} />
			<link rel={"apple-touch-icon"} sizes={"152x152"} href={"https://uploads.quarkly.io/602a53318e7be4001e97a8e2/images/logo.png?v=2021-02-18T09:06:23.754Z"} />
			<link rel={"apple-touch-startup-image"} href={"https://uploads.quarkly.io/602a53318e7be4001e97a8e2/images/logo.png?v=2021-02-18T09:06:23.754Z"} />
			<meta name={"msapplication-TileImage"} content={"https://uploads.quarkly.io/602a53318e7be4001e97a8e2/images/logo.png?v=2021-02-18T09:06:23.754Z"} />
		</Helmet>
		<Section
			height="70px"
			align-items="center"
			quarkly-title="header"
			sm-height="30px"
			sm-border-width="1px"
			sm-border-color="rgba(231, 231, 231, 0.69)"
			sm-border-style="solid"
		>
			<Override
				slot="SectionContent"
				width="100%"
				margin="0px 10% 0px 10%"
				max-width="none"
				sm-margin="0px 10% 0px 5%"
			/>
			<Stack margin="0 0px 0px 0px" quarkly-title="Stack_header" sm-align-items="center">
				{"    "}
				<StackItem
					width="50%"
					display="flex"
					quarkly-title="StackItem_logo"
					align-items="center"
					justify-content="center"
					sm-padding="16px 16px 16px 0px"
				>
					<Override slot="StackItemContent" align-items="center" sm-justify-content="center" />
					<Image
						width="50px"
						height="50px"
						src="https://uploads.quarkly.io/602a53318e7be4001e97a8e2/images/logo.png?v=2021-02-18T09:06:23.754Z"
						display="inline-block"
						padding="0px 10px 0px 0px"
						quarkly-title="logo"
						sm-width="70px"
						sm-height="50px"
						sm-align-self="center"
					/>
					<Text
						margin="0"
						md-margin="0px 0 20px 0"
						text-align="left"
						font="--headline3"
						display="inline-block"
						quarkly-title="logoname"
						sm-align-self="center"
						sm-margin="0px 0 0 0"
						sm-font="normal 600 24px/1.2 Montserrat, sans-serif"
					>
						Privat
						<Span color="--primary" sm-font="600 24px/38.4px Montserrat, sans-serif">
							Tender
						</Span>
					</Text>
					{"            "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section
			sm-padding="50px 0 120px 0"
			sm-min-height="auto"
			display="flex"
			flex-direction="row"
			quarkly-title="page_1"
			background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/602a53318e7be4001e97a8e2/images/Texting.png?v=2021-02-27T09:04:17.767Z) 115% 35% /57% no-repeat local border-box"
			padding="8% 0 8% 0"
			sm-background="linear-gradient(0deg,#ffffff 0%,rgba(238, 238, 238, 0.1) 0%),rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/602a53318e7be4001e97a8e2/images/Texting.png?v=2021-02-27T09:04:17.767Z) 115% 100%/80% no-repeat local border-box"
		>
			<Override
				slot="SectionContent"
				max-width="none"
				font="--headline3"
				margin="0px 10% 0px 10%"
				sm-margin="0px 5% 0px 5%"
			/>
			<Stack margin="0px 0px 0px 0px">
				{"    "}
				<StackItem width="100%" display="flex" sm-padding="0px 0px 0px 0px">
					<Override slot="StackItemContent" display="flex" flex-direction="row" />
					{"        "}
					<Box display="inline-block">
						<Text
							font="--base"
							text-transform="uppercase"
							letter-spacing="1px"
							max-width="850px"
							color="--grey"
							margin="0px"
							sm-font="normal 300 14px/1.5 Inter, sans-serif"
						>
							на всех платфомах
						</Text>
						<Text
							as="h1"
							margin="0 0px 32px 0px"
							font="--headline1"
							md-font="--headline2"
							color="--dark"
							max-width="850px"
							padding="8px 0px 0px 0px"
							width="100%"
							sm-font="normal 600 40px/1.2 Montserrat, sans-serif"
							sm-margin="0 0px 15px 0px"
						>
							Приложение{" "}
							<br />
							<Span
								color="--primary"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								где ищут тебя
							</Span>
							,
							<br />
							{" "}а не ты{" "}
						</Text>
						<Text
							margin="0px"
							font="--base"
							width="50%"
							sm-font="normal 300 14px/1.5 Inter, sans-serif"
							sm-width="100%"
						>
							Создавай тендеры и жди ответа от потенциальных Исполнителей. Без поиска номеров, лишних звонков и объяснения задачи каждому.
						</Text>
					</Box>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
			<Box min-width="100px" min-height="100px" display="flex" width="80%">
				<Components.Google
					width="20%"
					flex="0 1 auto"
					order="0"
					align-self="center"
					sm-order="0"
					sm-align-self="center"
					margin="0px 10px 0px 0px"
					sm-width="30%"
					sm-margin="1px 5px 0px 5px"
				/>
				<Components.Apple
					width="20%"
					align-self="center"
					margin="0px 0px 0px 10px"
					sm-margin="0px 5px 0px 5px"
					sm-width="30%"
				/>
			</Box>
			<Stack
				width="50%"
				margin="0px 0px 0px 0px"
				justify-content="flex-start"
				max-width="500px"
				sm-width="100%"
				sm-margin="0px 0px 50px 0px"
				sm-padding="20px 0px 0px 0px"
				md-width="100%"
				md-display="flex"
				lg-width="100%"
			>
				{"    "}
				<StackItem
					width="40%"
					display="flex"
					padding="0px 0px 0px 0px"
					justify-content="center"
					align-items="flex-start"
					sm-width="50%"
					md-width="50%"
				>
					<Override slot="StackItemContent" />
					{"        "}{"    "}
				</StackItem>
				{"    "}
				<StackItem
					width="40%"
					display="flex"
					padding="0px 0px 0px 0px"
					sm-width="50%"
					md-width="50%"
				>
					{"        "}{"    "}
				</StackItem>
			</Stack>
		</Section>
		<Section
			padding="50px 0 100px 0"
			sm-padding="20px 0 90px 0"
			quarkly-title="page_2"
			justify-content="center"
			background="rgba(142, 142, 142, 0) url(https://uploads.quarkly.io/602a53318e7be4001e97a8e2/images/New%20photo%20posted.png?v=2021-03-15T02:16:49.199Z) 100% 100%/38%  no-repeat local border-box"
			margin="0px 0 20px 0"
			sm-background="linear-gradient(0deg,rgba(0,0,0,0) 0%,rgba(253, 253, 253, 0.72) 0%),rgba(255, 255, 255, 0.09) url(https://uploads.quarkly.io/602a53318e7be4001e97a8e2/images/New%20photo%20posted.png?v=2021-03-15T02:16:49.199Z) 220%  60%/70% no-repeat local border-box"
			sm-justify-content="center"
		>
			<Override
				slot="SectionContent"
				align-items="center"
				margin="0px 10% 0px 10%"
				align-self="center"
				justify-content="center"
				flex-direction="column"
				sm-margin="50px 5% 0px 5%"
				sm-justify-content="center"
				sm-align-self="center"
				sm-flex="0 1 auto"
			/>
			<Text
				font="--base"
				text-transform="uppercase"
				letter-spacing="1px"
				max-width="850px"
				color="--grey"
				margin="0px"
				sm-font="normal 300 14px/1.5 Inter, sans-serif"
			>
				формат тендера
			</Text>
			<Text
				as="h2"
				font="--headline1"
				md-font="--headline2"
				margin="8px 0 0 0"
				padding="0px 0px 20px 0px"
				sm-font="normal 600 40px/1.2 Montserrat, sans-serif"
				sm-padding="0px 0px 0px 0px"
				sm-margin="1px 0 5px 0"
				sm-align-self="center"
			>
				Удобство
			</Text>
			<Stack
				sm-margin="10px 0px 0px 0px"
				sm-justify-content="center"
				sm-align-items="center"
				sm-align-self="center"
				sm-flex="0 1 auto"
			>
				{"    "}{"    "}
				<Text
					as="p"
					font="normal 300 14px/1.5 --fontFamily-googleInter"
					margin="50px 0 0 0"
					sm-margin="0px 0 0 0"
					sm-font="normal normal 300 14px/1.3 --fontFamily-googleInter"
				>
					<Span
						font="normal 600 22px/2 --fontFamily-googleMontserrat"
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
						sm-font="normal 600 20px/2 --fontFamily-googleMontserrat"
					>
						Объявление тендера
						<br />
					</Span>
					Заказчик выбирает категорию, ставит задачу, указывает дату, добавляет фотографии и объявляет тендер.{" "}
					<br />
					<br />
					<br />
					<br />
					<Span
						font="normal 600 22px/2 --fontFamily-googleMontserrat"
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
						sm-font="normal 600 20px/2 --fontFamily-googleMontserrat"
					>
						Исполнители предлагают цену
					</Span>
					<br />
					Исполнители в свою очередь находят тендер и указывают свою цену. Любой участник может предлагать новую цену основываясь на предложениях других Исполнителей.
					<br />
					<br />
					<br />
					<br />
					<Span
						font="normal 600 22px/2 --fontFamily-googleMontserrat"
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
						sm-font="normal 600 20px/2 --fontFamily-googleMontserrat"
					>
						Заказчик выбирает лучшего
						<br />
					</Span>
					Из всех предложений Заказчик выбирает наиболее подходящего на основе цены и рейтинга Исполнителя. Связывается с ним в приложении для подтверждения сделки.
				</Text>
			</Stack>
		</Section>
		<Section
			padding="50px 0px 50px 0px"
			sm-padding="40px 0"
			color="--dark"
			margin="0 5% 0 5%"
			width="90%"
			justify-content="safe center"
			background="url(https://uploads.quarkly.io/602a53318e7be4001e97a8e2/images/hexcolor-co--29323c-485563.png?v=2021-03-16T17:29:09.687Z) 0% 0%/cover"
			border-radius="30px"
			position="relative"
			sm-width="96%"
			sm-margin="0px 2% 0 2%"
		>
			<Override
				slot="SectionContent"
				margin="0px 0px 0px 0px"
				justify-content="center"
				align-items="center"
				color="--light"
			/>
			<Stack width="100%">
				<StackItem
					sm-width="33.33%"
					width="25%"
					display="flex"
					hover-transition="all 0.3s ease 0s"
					margin="0px 25 0px 0px"
				>
					<Override slot="StackItemContent" flex-direction="column" />
					<Image
						width="100px"
						src="https://uploads.quarkly.io/602a53318e7be4001e97a8e2/images/noun_engineer_578857.png?v=2021-03-16T16:35:42.081Z"
						hover-transform="scale(1.1)"
						hover-transition="all 0.2s ease 0s"
						transition="all 0.2s ease 0s"
						sm-width="70px"
					/>
					<Text
						as="h3"
						font="normal 600 24px/1.2 --fontFamily-googleMontserrat"
						margin="12px 0"
						md-font="normal 600 20px/1.2 --fontFamily-googleMontserrat"
						sm-font="normal 600 18px/1.2 --fontFamily-googleMontserrat"
					>
						Люди
					</Text>
				</StackItem>
				<StackItem sm-width="33.33%" width="25%" display="flex">
					<Override slot="StackItemContent" flex-direction="column" />
					<Image
						width="100px"
						src="https://uploads.quarkly.io/602a53318e7be4001e97a8e2/images/noun_Excavator_578860.png?v=2021-03-16T16:35:42.108Z"
						hover-transform="scale(1.1)"
						hover-transition="all 0.2s ease 0s"
						transition="all 0.2s ease 0s"
						sm-width="70px"
					/>
					<Text
						as="h3"
						font="normal 600 24px/1.2 --fontFamily-googleMontserrat"
						margin="12px 0"
						md-font="normal 600 20px/1.2 --fontFamily-googleMontserrat"
						sm-font="normal 600 18px/1.2 --fontFamily-googleMontserrat"
					>
						Работы
					</Text>
				</StackItem>
				<StackItem
					sm-width="33.33%"
					width="25%"
					display="flex"
					justify-content="center"
					align-items="center"
				>
					<Override slot="StackItemContent" flex-direction="column" />
					<Image
						width="100px"
						src="https://uploads.quarkly.io/602a53318e7be4001e97a8e2/images/noun_cyberspace_3458707.png?v=2021-03-16T16:35:42.077Z"
						hover-transform="scale(1.1)"
						hover-transition="all 0.2s ease 0s"
						transition="all 0.2s ease 0s"
						sm-width="70px"
					/>
					<Text
						as="h3"
						font="normal 600 24px/1.2 --fontFamily-googleMontserrat"
						margin="12px 0"
						md-font="normal 600 20px/1.2 --fontFamily-googleMontserrat"
						sm-font="normal 600 18px/1.2 --fontFamily-googleMontserrat"
					>
						Мир человека
					</Text>
				</StackItem>
				<StackItem
					sm-width="33.33%"
					width="25%"
					display="flex"
					justify-content="center"
					align-items="center"
				>
					<Override slot="StackItemContent" flex-direction="column" />
					<Image
						width="100px"
						src="https://uploads.quarkly.io/602a53318e7be4001e97a8e2/images/noun_cleaning_3140416.png?v=2021-03-16T16:35:42.088Z"
						hover-transform="scale(1.1)"
						hover-transition="all 0.2s ease 0s"
						transition="all 0.2s ease 0s"
						sm-width="70px"
					/>
					<Text
						as="h3"
						font="normal 600 24px/1.2 --fontFamily-googleMontserrat"
						margin="12px 0"
						md-font="normal 600 20px/1.2 --fontFamily-googleMontserrat"
						sm-font="normal 600 18px/1.2 --fontFamily-googleMontserrat"
					>
						Услуги
					</Text>
				</StackItem>
				<StackItem
					sm-width="33.33%"
					width="25%"
					display="flex"
					justify-content="center"
					align-items="center"
				>
					<Override slot="StackItemContent" flex-direction="column" />
					<Image
						width="100px"
						src="https://uploads.quarkly.io/602a53318e7be4001e97a8e2/images/noun_Express%201.png?v=2021-03-16T16:35:42.082Z"
						hover-transform="scale(1.1)"
						hover-transition="all 0.2s ease 0s"
						transition="all 0.2s ease 0s"
						sm-width="70px"
					/>
					<Text
						as="h3"
						font="normal 600 24px/1.2 --fontFamily-googleMontserrat"
						margin="12px 0"
						md-font="normal 600 20px/1.2 --fontFamily-googleMontserrat"
						sm-font="normal 600 18px/1.2 --fontFamily-googleMontserrat"
					>
						Товары
					</Text>
				</StackItem>
				<StackItem
					sm-width="33.33%"
					width="25%"
					display="flex"
					justify-content="center"
					align-items="center"
					sm-padding="16px 16px 16px 11px"
				>
					<Override slot="StackItemContent" flex-direction="column" />
					<Image
						width="100px"
						src="https://uploads.quarkly.io/602a53318e7be4001e97a8e2/images/noun_Wheelbarrow_578867.png?v=2021-03-16T16:35:42.090Z"
						hover-transform="scale(1.1)"
						hover-transition="all 0.2s ease 0s"
						transition="all 0.2s ease 0s"
						sm-width="70px"
					/>
					<Text
						as="h3"
						font="normal 600 24px/1.2 --fontFamily-googleMontserrat"
						margin="12px 0"
						md-font="normal 600 20px/1.2 --fontFamily-googleMontserrat"
						sm-width="120%"
						sm-font="normal 600 18px/1.2 --fontFamily-googleMontserrat"
					>
						Сырье и{" "}
						<br />
						материалы
					</Text>
				</StackItem>
				<StackItem
					sm-width="50%"
					width="25%"
					display="flex"
					justify-content="center"
					align-items="center"
				>
					<Override slot="StackItemContent" flex-direction="column" sm-align-items="center" />
					<Image
						width="100px"
						src="https://uploads.quarkly.io/602a53318e7be4001e97a8e2/images/noun_Bus_3475031.png?v=2021-03-16T16:35:42.101Z"
						hover-transform="scale(1.1)"
						hover-transition="all 0.2s ease 0s"
						transition="all 0.2s ease 0s"
						sm-width="70px"
					/>
					<Text
						as="h3"
						font="normal 600 24px/1.2 --fontFamily-googleMontserrat"
						margin="12px 0"
						md-font="normal 600 20px/1.2 --fontFamily-googleMontserrat"
						sm-font="normal 600 18px/1.2 --fontFamily-googleMontserrat"
					>
						Аренда и{" "}
						<br />
						шеринг
					</Text>
				</StackItem>
				<StackItem
					sm-width="50%"
					width="25%"
					display="flex"
					justify-content="center"
					align-items="center"
				>
					<Override slot="StackItemContent" flex-direction="column" sm-align-items="center" />
					<Image
						width="100px"
						src="https://uploads.quarkly.io/602a53318e7be4001e97a8e2/images/noun_Swiss%20Army%20Knife_3379962.png?v=2021-03-16T16:59:45.709Z"
						hover-transform="scale(1.1)"
						hover-transition="all 0.2s ease 0s"
						transition="all 0.2s ease 0s"
						sm-width="70px"
					/>
					<Text
						as="h3"
						font="normal 600 24px/1.2 --fontFamily-googleMontserrat"
						margin="12px 0 0px 0"
						width="130%"
						md-font="normal 600 20px/1.2 --fontFamily-googleMontserrat"
						md-width="140%"
						sm-width="108%"
						sm-font="normal 600 18px/1.2 --fontFamily-googleMontserrat"
					>
						Инструменты и оборудование
					</Text>
				</StackItem>
			</Stack>
		</Section>
		<Section
			sm-padding="40px 0 10px 0"
			color="--dark"
			margin="-25px 5% 50px 5%"
			width="90%"
			justify-content="safe center"
			background="url(https://uploads.quarkly.io/602a53318e7be4001e97a8e2/images/hexcolor-co--FD6E6A-FFC600.png?v=2021-03-16T17:32:39.508Z) 0% 0%/cover"
			border-radius="0px 0px 30px 30px"
			padding="40px 0 15px 0"
			sm-margin="-25px 2% 60px 2%"
			sm-width="96%"
		>
			<Override
				slot="SectionContent"
				margin="0px 0px 0px 0px"
				justify-content="center"
				align-items="center"
				color="--light"
			/>
			<Stack
				width="100%"
				margin="0px 0px 0px 0px"
				padding="0px 0px 0px 0px"
				sm-justify-content="space-between"
				justify-content="space-around"
			>
				<Text
					as="h3"
					font="normal 600 24px/1.2 --fontFamily-googleMontserrat"
					margin="12px 0"
					color="--dark"
					sm-font="normal 600 16px/1.2 --fontFamily-googleMontserrat"
					sm-width="32%"
				>
					<Span
						font="600 60px/36px Montserrat, sans-serif"
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
						sm-font="600 45px/36px Montserrat, sans-serif"
					>
						8
					</Span>
					{" "}
					<br />
					разделов
				</Text>
				<Text
					as="h3"
					font="normal 600 24px/1.2 --fontFamily-googleMontserrat"
					margin="12px 0"
					color="--dark"
					sm-font="normal 600 16px/1.2 --fontFamily-googleMontserrat"
					sm-width="32%"
				>
					<Span
						font="600 60px/36px Montserrat, sans-serif"
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
						sm-font="600 45px/36px Montserrat, sans-serif"
					>
						110+
					</Span>
					{" "}
					<br />
					секций
				</Text>
				<Text
					as="h3"
					font="normal 600 24px/1.2 --fontFamily-googleMontserrat"
					margin="12px 0"
					color="--dark"
					sm-font="normal 600 16px/1.2 --fontFamily-googleMontserrat"
					sm-width="32%"
				>
					<Span
						font-size="80px"
						font="600 60px/36px Montserrat, sans-serif"
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
						sm-font="600 45px/36px Montserrat, sans-serif"
					>
						985+
					</Span>
					<br />
					категорий
				</Text>
			</Stack>
		</Section>
		<Section
			padding="50px 0 100px 0"
			quarkly-title="page_3"
			justify-content="center"
			background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/602a53318e7be4001e97a8e2/images/Outbound%20marketing.png?v=2021-03-15T03:23:23.271Z) 95% 57%/40%  no-repeat local border-box"
			margin="0px 0 0 0"
			sm-background="linear-gradient(0deg,rgba(0,0,0,0) 0%,rgba(253, 253, 253, 0.72) 0%),rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/602a53318e7be4001e97a8e2/images/Outbound%20marketing.png?v=2021-03-15T03:23:23.271Z) 95% 96%/80% no-repeat local border-box"
			sm-padding="20px 0 90px 0"
		>
			<Override
				slot="SectionContent"
				align-items="center"
				margin="0px 10% 0px 10%"
				align-self="center"
				justify-content="center"
				flex-direction="column"
				sm-margin="0px 5% 0px 5%"
			/>
			<Text
				font="--base"
				text-transform="uppercase"
				letter-spacing="1px"
				max-width="850px"
				color="--grey"
				margin="0px"
				sm-font="normal 300 14px/1.5 Inter, sans-serif"
			>
				Использование приложения
			</Text>
			<Text
				as="h2"
				font="--headline1"
				md-font="--headline2"
				margin="8px 0 0 0"
				padding="0px 0px 20px 0px"
				sm-font="normal 600 40px/1.2 Montserrat, sans-serif"
				sm-margin="1px 0 0 0"
				sm-padding="0px 0px 5px 0px"
			>
				Преимущества
			</Text>
			<Stack margin="0px 0px 0px 0px" sm-margin="10px 0px 0px 0px">
				{"        "}
				<StackItem
					width="55%"
					display="flex"
					text-align="left"
					sm-width="100%"
					sm-padding="0px 0px 0px 0px"
				>
					<Override slot="StackItemContent" text-align="left" />
					<Text
						as="p"
						font="--base"
						margin="50px 0 0 0"
						sm-margin="0 0 0 0"
						sm-font="normal 300 14px/1.5 Inter, sans-serif"
					>
						<Span
							font="normal 600 24px/2 --fontFamily-googleMontserrat"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							sm-font="normal 600 20px/2 --fontFamily-googleMontserrat"
						>
							Скорость
							<br />
						</Span>
						Не нужно обзванивать исполнителя по каждому объявлению, объяснять задачу и подбирать время.{" "}
						<br />
						<br />
						<br />
						<Span
							font-size="24px"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							font="normal 600 24px/2 --fontFamily-googleMontserrat"
							sm-font="normal 600 20px/2 --fontFamily-googleMontserrat"
						>
							Экономия денег
						</Span>
						<br />
						Вы получите Исполнителей с лучшей ценой по вашему запросу! Для Заказчиков приложение бесплатно и мы не просим никаких комиссий!
						<br />
						<br />
						<br />
						<Span
							font-size="24px"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							font="normal 600 24px/2 --fontFamily-googleMontserrat"
							sm-font="normal 600 20px/2 --fontFamily-googleMontserrat"
						>
							Рейтинг
							<br />
						</Span>
						Настоящий рейтинг у Исполнителей только от Заказчиков после выполнения тендеров.
					</Text>
					{"            "}
				</StackItem>
			</Stack>
		</Section>
		<Section
			padding="60px 0 40px 0"
			sm-padding="40px 0"
			display="flex"
			flex-direction="column"
			background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/602a53318e7be4001e97a8e2/images/Chilling%20on%20couch.svg?v=2021-03-16T22:14:41.532Z) 57% 40% /30% no-repeat scroll padding-box"
			margin="60px 0 0 0"
			sm-background="linear-gradient(0deg,rgba(0,0,0,0) 0%,rgba(238, 238, 238, 0.3) 0%),rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/602a53318e7be4001e97a8e2/images/Chilling%20on%20couch.svg?v=2021-03-16T22:14:41.532Z) 57% 80% /80% no-repeat scroll padding-box"
		>
			<Stack
				color="--dark"
				font="--base"
				flex-wrap="wrap"
				align-items="center"
				border-color="--color-dark"
			>
				<StackItem width="60%" md-width="100%" max-height="430px">
					<Override slot="StackItemContent" flex-direction="column" width="60%" sm-width="100%" />
					<StackItem
						width="50%"
						display="flex"
						quarkly-title="StackItem_logo"
						align-items="center"
						justify-content="flex-start"
						sm-flex="0 1 auto"
						sm-width="30%"
					>
						<Override slot="StackItemContent" align-items="center" />
						<Image
							width="150px"
							height="100px"
							src="https://uploads.quarkly.io/602a53318e7be4001e97a8e2/images/logo.png?v=2021-02-18T09:06:23.754Z"
							display="inline-block"
							padding="0px 10px 0px 0px"
							quarkly-title="logo"
						/>
						<Text
							margin="0"
							md-margin="0px 0 20px 0"
							text-align="left"
							font="normal 600 42px/1.2 --fontFamily-googleMontserrat"
							display="inline-block"
							quarkly-title="logoname"
						>
							Privat
							<Span color="--primary">
								Tender
							</Span>
						</Text>
						{"            "}
					</StackItem>
					<Hr
						width="100%"
						background="rgba(238, 238, 238, 0.5)"
						border-color="rgba(215, 215, 215, 0.29)"
						border-width="0.04px"
						height="0px"
						padding="0px 0px 0px 0px"
					/>
					<Text as="p" font="normal 500 18px/1.5 --fontFamily-googleInter" margin="12px 0" color="--dark">
						Присоединяйся к тысячам людей{" "}
						<br />
						кто управляет своими деньгами и временем!
					</Text>
				</StackItem>
				<Stack
					width="40%"
					margin="0px 0px 0px 0px"
					max-width="800px"
					sm-width="100%"
					md-order="0"
					md-display="flex"
					md-width="100%"
					md-justify-content="center"
					sm-display="flex"
					display="grid"
					justify-items="end"
				>
					{"    "}
					<Components.GoglBotm width="57%" />
					<Components.AppBotm width="50%" padding="0px 16px 0px 15px" />
					{"    "}
				</Stack>
			</Stack>
		</Section>
		<Section padding="20px 0 30px 0" sm-padding="40px 0" md-padding="20px 0 20px 0">
			<Override
				slot="SectionContent"
				display="inline"
				sm-align-self="center"
				sm-display="flex"
				sm-justify-content="center"
				md-flex="0 0 auto"
				md-width="90%"
			/>
			<Hr
				width="100%"
				background="rgba(238, 238, 238, 0.5)"
				border-color="rgba(215, 215, 215, 0.29)"
				border-width="0.04px"
				height="0px"
				padding="0px 0px 0px 0px"
			/>
			<Stack md-width="100%" md-margin="-16px 0px -16px 0px">
				{"    "}
				<StackItem
					width="70%"
					display="flex"
					sm-width="90%"
					sm-padding="0px 16px 16px 16px"
					align-self="auto"
					md-width="100%"
					md-display="block"
					md-flex="0 0 auto"
					md-padding="16px 0px 16px 0px"
					sm-display="block"
				>
					<Override
						slot="StackItemContent"
						display="flex"
						align-self="auto"
						md-width="100%"
						md-flex-direction="row"
						md-display="flex"
						sm-display="block"
					/>
					{"        "}
					<Text
						as="p"
						font="normal 500 18px/1.5 --fontFamily-googleInter"
						margin="12px 0"
						color="--dark"
						width="50%"
						sm-width="100%"
						md-width="100%"
					>
						©
2021, ООО PT Digital.
						<br />
						{" "}Все права защищены.{" "}
					</Text>
					<Text
						font="normal 500 18px/1.5 --fontFamily-googleInter"
						color="--dark"
						order="0"
						align-self="auto"
						display="block"
						flex="0 1 auto"
						width="50%"
						margin="12px 0px 12px 0px"
						md-width="100%"
						md-align-self="auto"
						md-order="0"
						md-flex="0 1 auto"
					>
						Контакты:
						<br />
						main@privattender.com
					</Text>
					{"    "}
				</StackItem>
				<StackItem
					width="30%"
					sm-width="100%"
					sm-padding="10px 16px 16px 16px"
					display="inline"
					md-width="100%"
					md-margin="0px 0px 0px 0px"
					md-padding="0px 0px 0px 0px"
					md-display="block"
					md-flex="0 0 auto"
					md-align-self="baseline"
				>
					<Override slot="StackItemContent" justify-content="flex-end" display="block" md-width="100%" />
					<Components.QuarklycommunityKitPopup
						width="100%"
						display="block"
						overflow-x="visible"
						text-align="left"
						overflow-y="visible"
					>
						<Override
							slot="Button Open"
							background="rgba(255, 110, 48, 0)"
							color="--secondary"
							font="normal 500 15px/1.5 --fontFamily-googleInter"
							width="100%"
							display="block"
							text-align="left"
							padding="8px 24px 3px 24px"
							md-padding="8px 0px 3px 0px"
						>
							Согласие на обработку персональных данных
						</Override>
						<Override
							slot="Wrapper"
							align-self="center"
							position="relative"
							width="60%"
							border-radius="20px"
							height="60%"
							overflow-y="scroll"
						/>
						<Override slot="Button Close" padding="16px 16px 16px 16px" />
						<Text
							text-align="left"
							padding="0px 0px 0px 0px"
							font="100 16px --fontFamily-googleMontserrat"
							position="static"
							margin="1px 25px 25px 25px"
						>
							<Strong
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								font="normal 400 18px/1.5 Inter, sans-serif"
							>
								<Span
									font="600  35px/36px Montserrat, sans-serif"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									Согласие на обработку персональных данных
									<br />
								</Span>
								<br />
								Пользователь, оставляя заявку, принимает настоящее Согласие на обработку персональных данных (далее – Согласие). Действуя свободно, своей волей и в своем интересе, а также подтверждая свою дееспособность, Пользователь дает свое согласие на обработку своих персональных данных со следующими условиями:
								<br />
								<br />
								{"   "}
								<Strong
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									1.
								</Strong>
								{" "}Данное Согласие дается на обработку персональных данных, как без использования средств автоматизации, так и с их использованием.
								<br />
								<br />
								{"   "}
								<Strong
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									2.{" "}
								</Strong>
								Согласие дается на обработку следующих персональных данных: Персональные данные, не являющиеся специальными или биометрическими: номера контактных телефонов; адреса электронной почты; место работы и занимаемая должность; пользовательские данные (сведения о местоположении; тип и версия ОС; тип и версия Браузера; тип устройства и разрешение его экрана; источник откуда пришел на сайт пользователь; с какого сайта или по какой рекламе; язык ОС и Браузера; какие страницы открывает и на какие кнопки нажимает пользователь; ip-адрес.
								<br />
								<br />
								{"   "}
								<Strong
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									3.
								</Strong>
								Персональные данные не являются общедоступными.
								<br />
								<br />
								{"   "}
								<Strong
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									4.
								</Strong>
								Цель обработки персональных данных: обработка входящих запросов физических лиц с целью оказания консультирования; аналитики действий физического лица на веб-сайте и функционирования веб-сайта; проведение рекламных и новостных рассылок.
								<br />
								<br />
								{"  "}
								<Strong
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									{" "}5.
								</Strong>
								Основанием для обработки персональных данных является: ст. 24 Конституции Российской Федерации; ст.6 Федерального закона №152-ФЗ «О персональных данных»; настоящее согласие на обработку персональных данных.
								<br />
								<br />
								{"  "}
								<Strong
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									{" "}6.{" "}
								</Strong>
								В ходе обработки с персональными данными будут совершены следующие действия: сбор; запись; систематизация; накопление; хранение; уточнение (обновление, изменение); извлечение; использование; передача (распространение, предоставление, доступ); блокирование; удаление; уничтожение.
								<br />
								<br />
								{"   "}
								<Strong
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									7.{" "}
								</Strong>
								Персональные данные обрабатываются до отписки физического лица от рекламных и новостных рассылок. Также обработка персональных данных может быть прекращена по запросу субъекта персональных данных. Хранение персональных данных, зафиксированных на бумажных носителях осуществляется согласно Федеральному закону №125-ФЗ «Об архивном деле в Российской Федерации» и иным нормативно правовым актам в области архивного дела и архивного хранения.
								<br />
								<br />
								{"   "}
								<Strong
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									8.
								</Strong>
								{" "}Согласие может быть отозвано субъектом персональных данных или его представителем путем направления письменного заявления по адресу, указанному на главной странице настоящего сайта.
								<br />
								<br />
								{"   "}
								<Strong
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									9.
								</Strong>
								{" "}В случае отзыва субъектом персональных данных или его представителем согласия на обработку персональных данных владельцы сайта вправе продолжить обработку персональных данных без согласия субъекта персональных данных при наличии оснований, указанных в пунктах 2 – 11 части 1 статьи 6, части 2 статьи 10 и части 2 статьи 11 Федерального закона №152-ФЗ «О персональных данных» от 27.07.2006 г.
								<br />
								<br />
								{"  "}
								<Strong
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									{" "}10.
								</Strong>
								{" "}Настоящее согласие действует все время до момента прекращения обработки персональных данных, указанных в п.7 и п.8 данного Согласия.
							</Strong>
						</Text>
					</Components.QuarklycommunityKitPopup>
					<Components.QuarklycommunityKitPopup
						width="100%"
						display="block"
						overflow-x="visible"
						text-align="left"
						overflow-y="visible"
					>
						<Override
							slot="Button Open"
							background="rgba(255, 110, 48, 0)"
							color="--secondary"
							font="normal 500 15px/1.5 --fontFamily-googleInter"
							width="100%"
							display="block"
							text-align="left"
							padding="1px 24px 3px 24px"
							md-padding="1px 0px 3px 0px"
						>
							Пользовательское соглашение
						</Override>
						<Override
							slot="Wrapper"
							align-self="center"
							position="sticky"
							border-radius="20px"
							flex="0 1 auto"
							width="60%"
							overflow-y="scroll"
							height="60%"
						/>
						<Override slot="Button Close" padding="16px 16px 16px 16px" />
						<Text
							text-align="left"
							padding="0px 0px 0px 0px"
							font="normal 400 18px/1.5 Inter, sans-serif"
							position="static"
							margin="1px 25px 25px 25px"
						>
							<Strong
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								font="normal 400 18px/1.5 Inter, sans-serif"
							>
								<Span
									font="600  35px/36px Montserrat, sans-serif"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									Пользовательское соглашение
									<br />
								</Span>
								<br />
								<Strong
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
									font="normal 400 18px/1.5 Inter, sans-serif"
								>
									Настоящее Пользовательское Соглашение (Далее Соглашение) регулирует отношения между Администрацией информационного ресурса privattender.com (далее privattender.com или Администрация) с одной стороны и пользователем сайта  с другой.
									<br />
									{"   "}Сайт privattender.com не является средством массовой информации.
									<br />
									{"   "}Используя сайт, Вы соглашаетесь с условиями данного соглашения.
									<br />
									{"   "}
									<Strong
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
									>
										Если Вы не согласны с условиями данного соглашения, не используйте сайт privattender.com!
									</Strong>
									<br />
									<br />
									<Span
										font="600 24px/36px Montserrat, sans-serif"
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
									>
										Права и обязанности сторон
										<br />
									</Span>
									<br />
									<Strong
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
									>
										Пользователь имеет право:
										<br />
									</Strong>
									- осуществлять поиск информации на сайте
									<br />
									- получать информацию на сайте
									<br />
									- создавать информацию для сайта
									<br />
									- копировать информацию на другие сайты с разрешения Администрации сайта
									<br />
									- требовать от администрации скрытия любой информации переданной пользователем сайту
									<br />
									- использовать информацию сайта в личных некоммерческих целях
									<br />
									- использовать информацию сайта в коммерческих целях без специального разрешения
									<br />
									<br />
									<Strong
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
									>
										Администрация имеет право:
									</Strong>
									<br />
									- по своему усмотрению и необходимости создавать, изменять, отменять правила
									<br />
									- ограничивать доступ к любой информации на сайте
									<br />
									- создавать, изменять, удалять информацию
									<br />
									- отказывать в регистрации без объяснения причин
									<br />
									- отказать в возврате средств, если пользователь передумал принимать полученную заявку
									<br />
									<br />
									<Strong
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
									>
										Пользователь обязуется:
									</Strong>
									<br />
									- обеспечить достоверность предоставляемой информации
									<br />
									- обеспечивать сохранность личных данных от доступа третьих лиц
									<br />
									- не распространять информацию, которая направлена на пропаганду войны, разжигание национальной, расовой или религиозной ненависти и вражды, а также иной информации, за распространение которой предусмотрена уголовная или административная ответственность
									<br />
									- не нарушать работоспособность сайта
									<br />
									- не создавать несколько учётных записей на Сайте, если фактически они принадлежат одному и тому же лицу
									<br />
									- не совершать действия, направленные на введение других Пользователей в заблуждение
									<br />
									- не размещать материалы рекламного, эротического, порнографического или оскорбительного характера, а также иную информацию, размещение которой запрещено или противоречит нормам действующего законодательства РФ
									<br />
									- не использовать скрипты (программы) для автоматизированного сбора информации и/или взаимодействия с Сайтом и его Сервисами
									<br />
									- своевременно оплачивать оказанные услуги по реквизитам, которые будут отправлены пользователю посредством мессенджера WhatsApp
									<br />
									<br />
									<Strong
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
									>
										Администрация обязуется:
									</Strong>
									<br />
									- поддерживать работоспособность сайта за исключением случаев, когда это невозможно по независящим от Администрации причинам.
									<br />
									- осуществлять разностороннюю защиту учетной записи Пользователя
									<br />
									- защищать информацию, распространение которой ограничено или запрещено законами путем вынесения предупреждения либо удалением учетной записи пользователя, нарушившего правила
									<br />
									- оказывать информационные услуги Пользователям сайта
									<br />
									- предоставить всю доступную информацию о Пользователе уполномоченным на то органам государственной власти в случаях, установленных законом
									<br />
									<br />
									<Span
										font="600 24px/36px Montserrat, sans-serif"
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
									>
										Ответственность сторон
										<br />
									</Span>
									<br />
									- пользователь лично несет полную ответственность за распространяемую им информацию
									<br />
									- администрация не несет никакой ответственности за достоверность информации, скопированной из других источников
									<br />
									- администрация не несёт ответственность за несовпадение ожидаемых Пользователем и реально полученных услуг
									<br />
									- администрация не несет никакой ответственности за услуги, предоставляемые третьими лицами
									<br />
									- в случае возникновения форс-мажорной ситуации (боевые действия, чрезвычайное положение, стихийное бедствие и т. д.) Администрация не гарантирует сохранность информации, размещённой Пользователем, а также бесперебойную работу информационного ресурса
									<br />
									- сайт privattender.com является информационным ресурсом и не несет ответственности за качество выполненных работ, за внешний вид исполнителей и за их физическое состояние{" "}
									<br />
									<br />
									<Span
										font="600 24px/36px Montserrat, sans-serif"
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
									>
										Условия действия Соглашения
										<br />
									</Span>
									<br />
									Данное Соглашение вступает в силу при любом использовании данного сайта.
									<br />
									Соглашение действует бессрочно.
									<br />
									Администрация оставляет за собой право в одностороннем порядке изменять данное соглашение по своему усмотрению.
									<br />
									При изменении соглашения, в некоторых случаях, администрация может оповестить пользователей удобным для нее способом.
									<br />
								</Strong>
							</Strong>
						</Text>
					</Components.QuarklycommunityKitPopup>
					<Components.QuarklycommunityKitPopup width="100%" display="block" overflow-x="visible" text-align="left">
						<Override
							slot="Button Open"
							background="rgba(255, 110, 48, 0)"
							color="--secondary"
							font="normal 500 15px/1.5 --fontFamily-googleInter"
							width="100%"
							display="block"
							text-align="left"
							padding="1px 24px 3px 24px"
							md-padding="1px 0px 3px 0px"
						>
							Политика конфиденциальности
						</Override>
						<Override
							slot="Wrapper"
							align-self="center"
							position="sticky"
							border-radius="20px"
							flex="0 1 auto"
							width="60%"
							overflow-y="scroll"
							height="60%"
						/>
						<Override slot="Button Close" padding="16px 16px 16px 16px" />
						<Text
							text-align="left"
							padding="0px 0px 0px 0px"
							font="normal 400 18px/1.5 Inter, sans-serif"
							position="static"
							margin="1px 25px 25px 25px"
							overflow-x="visible"
						>
							<Strong
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								font="normal 400 18px/1.5 Inter, sans-serif"
							>
								<Span
									font="600  35px/36px Montserrat, sans-serif"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									<Strong
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
									>
										<Strong
											overflow-wrap="normal"
											word-break="normal"
											white-space="normal"
											text-indent="0"
											text-overflow="clip"
											hyphens="manual"
										>
											<Strong
												overflow-wrap="normal"
												word-break="normal"
												white-space="normal"
												text-indent="0"
												text-overflow="clip"
												hyphens="manual"
											>
												Политика конфиденциальности
												<br />
											</Strong>
										</Strong>
									</Strong>
								</Span>
								<Strong
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
									font="normal 400 18px/1.5 Inter, sans-serif"
								>
									<Span
										font="600 24px/36px Montserrat, sans-serif"
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
									>
										<br />
										1. Общие положения
									</Span>
									<br />
									<br />
									Настоящая политика обработки персональных данных составлена в соответствии с требованиями Федерального закона от 27.07.2006. №152-ФЗ «О персональных данных» (далее - Закон о персональных данных) и определяет порядок обработки персональных данных и меры по обеспечению безопасности персональных данных, предпринимаемые ООО "ПТ ДИДЖИТАЛ" (далее – Оператор).
									<br />
									<br />
									{"   "}1.1. Оператор ставит своей важнейшей целью и условием осуществления своей деятельности соблюдение прав и свобод человека и гражданина при обработке его персональных данных, в том числе защиты прав на неприкосновенность частной жизни, личную и семейную тайну.
									<br />
									{"   "}1.2. Настоящая политика Оператора в отношении обработки персональных данных (далее – Политика) применяется ко всей информации, которую Оператор может получить о посетителях веб-сайта https://privattender.com.
									<br />
									<br />
									<Span
										font="600 24px/36px Montserrat, sans-serif"
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
									>
										2. Основные понятия, используемые в Политике
										<br />
									</Span>
									<br />
									{"   "}2.1. Автоматизированная обработка персональных данных – обработка персональных данных с помощью средств вычислительной техники.
									<br />
									{"   "}2.2. Блокирование персональных данных – временное прекращение обработки персональных данных (за исключением случаев, если обработка необходима для уточнения персональных данных).
									<br />
									{"   "}2.3. Веб-сайт – совокупность графических и информационных материалов, а также программ для ЭВМ и баз данных, обеспечивающих их доступность в сети интернет по сетевому адресу https://privattender.com.
									<br />
									{"   "}2.4. Информационная система персональных данных — совокупность содержащихся в базах данных персональных данных, и обеспечивающих их обработку информационных технологий и технических средств.
									<br />
									{"   "}2.5. Обезличивание персональных данных — действия, в результате которых невозможно определить без использования дополнительной информации принадлежность персональных данных конкретному Пользователю или иному субъекту персональных данных.
									<br />
									{"   "}2.6. Обработка персональных данных – любое действие (операция) или совокупность действий (операций), совершаемых с использованием средств автоматизации или без использования таких средств с персональными данными, включая сбор, запись, систематизацию, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передачу (распространение, предоставление, доступ), обезличивание, блокирование, удаление, уничтожение персональных данных.
									<br />
									{"   "}2.7. Оператор – государственный орган, муниципальный орган, юридическое или физическое лицо, самостоятельно или совместно с другими лицами организующие и (или) осуществляющие обработку персональных данных, а также определяющие цели обработки персональных данных, состав персональных данных, подлежащих обработке, действия (операции), совершаемые с персональными данными.
									<br />
									{"   "}2.8. Персональные данные – любая информация, относящаяся прямо или косвенно к определенному или определяемому Пользователю веб-сайта https://privattender.com.
									<br />
									{"   "}2.9. Персональные данные, разрешенные субъектом персональных данных для распространения, - персональные данные, доступ неограниченного круга лиц к которым предоставлен субъектом персональных данных путем дачи согласия на обработку персональных данных, разрешенных субъектом персональных данных для распространения в порядке, предусмотренном Законом о персональных данных (далее - персональные данные, разрешенные для распространения).
									<br />
									{"   "}2.10. Пользователь – любой посетитель веб-сайта https://privattender.com.
									<br />
									{"   "}2.11. Предоставление персональных данных – действия, направленные на раскрытие персональных данных определенному лицу или определенному кругу лиц.
									<br />
									{"   "}2.12. Распространение персональных данных – любые действия, направленные на раскрытие персональных данных неопределенному кругу лиц (передача персональных данных) или на ознакомление с персональными данными неограниченного круга лиц, в том числе обнародование персональных данных в средствах массовой информации, размещение в информационно-телекоммуникационных сетях или предоставление доступа к персональным данным каким-либо иным способом.
									<br />
									{"   "}2.13. Трансграничная передача персональных данных – передача персональных данных на территорию иностранного государства органу власти иностранного государства, иностранному физическому или иностранному юридическому лицу.
									<br />
									{"   "}2.14. Уничтожение персональных данных – любые действия, в результате которых персональные данные уничтожаются безвозвратно с невозможностью дальнейшего восстановления содержания персональных данных в информационной системе персональных данных и (или) уничтожаются материальные носители персональных данных.
									<br />
									<br />
									<Span
										font="600 24px/36px Montserrat, sans-serif"
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
									>
										3. Основные права и обязанности Оператора
										<br />
									</Span>
									<br />
									{"   "}3.1. Оператор имеет право:
									<br />
									<br />
									– получать от субъекта персональных данных достоверные информацию и/или документы, содержащие персональные данные;
									<br />
									<br />
									– в случае отзыва субъектом персональных данных согласия на обработку персональных данных Оператор вправе продолжить обработку персональных данных без согласия субъекта персональных данных при наличии оснований, указанных в Законе о персональных данных;
									<br />
									<br />
									– самостоятельно определять состав и перечень мер, необходимых и достаточных для обеспечения выполнения обязанностей, предусмотренных Законом о персональных данных и принятыми в соответствии с ним нормативными правовыми актами, если иное не предусмотрено Законом о персональных данных или другими федеральными законами.
									<br />
									<br />
									{"   "}3.2. Оператор обязан:
									<br />
									<br />
									– предоставлять субъекту персональных данных по его просьбе информацию, касающуюся обработки его персональных данных;
									<br />
									<br />
									– организовывать обработку персональных данных в порядке, установленном действующим законодательством РФ;
									<br />
									<br />
									– отвечать на обращения и запросы субъектов персональных данных и их законных представителей в соответствии с требованиями Закона о персональных данных;
									<br />
									<br />
									– сообщать в уполномоченный орган по защите прав субъектов персональных данных по запросу этого органа необходимую информацию в течение 30 дней с даты получения такого запроса;
									<br />
									<br />
									– публиковать или иным образом обеспечивать неограниченный доступ к настоящей Политике в отношении обработки персональных данных;
									<br />
									<br />
									– принимать правовые, организационные и технические меры для защиты персональных данных от неправомерного или случайного доступа к ним, уничтожения, изменения, блокирования, копирования, предоставления, распространения персональных данных, а также от иных неправомерных действий в отношении персональных данных;
									<br />
									<br />
									– прекратить передачу (распространение, предоставление, доступ) персональных данных, прекратить обработку и уничтожить персональные данные в порядке и случаях, предусмотренных Законом о персональных данных;
									<br />
									<br />
									– исполнять иные обязанности, предусмотренные Законом о персональных данных.
									<br />
									<br />
									<Span
										font="600 24px/36px Montserrat, sans-serif"
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
									>
										4. Основные права и обязанности субъектов персональных данных
										<br />
									</Span>
									<br />
									{"   "}4.1. Субъекты персональных данных имеют право:
									<br />
									<br />
									– получать информацию, касающуюся обработки его персональных данных, за исключением случаев, предусмотренных федеральными законами. Сведения предоставляются субъекту персональных данных Оператором в доступной форме, и в них не должны содержаться персональные данные, относящиеся к другим субъектам персональных данных, за исключением случаев, когда имеются законные основания для раскрытия таких персональных данных. Перечень информации и порядок ее получения установлен Законом о персональных данных;
									<br />
									<br />
									– требовать от оператора уточнения его персональных данных, их блокирования или уничтожения в случае, если персональные данные являются неполными, устаревшими, неточными, незаконно полученными или не являются необходимыми для заявленной цели обработки, а также принимать предусмотренные законом меры по защите своих прав;
									<br />
									<br />
									– выдвигать условие предварительного согласия при обработке персональных данных в целях продвижения на рынке товаров, работ и услуг;
									<br />
									<br />
									– на отзыв согласия на обработку персональных данных;
									<br />
									<br />
									– обжаловать в уполномоченный орган по защите прав субъектов персональных данных или в судебном порядке неправомерные действия или бездействие Оператора при обработке его персональных данных;
									<br />
									<br />
									– на осуществление иных прав, предусмотренных законодательством РФ.
									<br />
									<br />
									{"   "}4.2. Субъекты персональных данных обязаны:
									<br />
									<br />
									– предоставлять Оператору достоверные данные о себе;
									<br />
									<br />
									– сообщать Оператору об уточнении (обновлении, изменении) своих персональных данных.
									<br />
									<br />
									{"   "}4.3. Лица, передавшие Оператору недостоверные сведения о себе, либо сведения о другом субъекте персональных данных без согласия последнего, несут ответственность в соответствии с законодательством РФ.
									<br />
									<br />
									<Span
										font="600 24px/36px Montserrat, sans-serif"
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
									>
										5. Оператор может обрабатывать следующие персональные данные Пользователя
										<br />
									</Span>
									<br />
									{"   "}5.1. Фамилия, имя, отчество.
									<br />
									{"   "}5.2. Электронный адрес.
									<br />
									{"   "}5.3. Номера телефонов.
									<br />
									{"   "}5.4. Также на сайте происходит сбор и обработка обезличенных данных о посетителях (в т.ч. файлов «cookie») с помощью сервисов интернет-статистики (Яндекс Метрика и Гугл Аналитика и других).
									<br />
									{"   "}5.5. Вышеперечисленные данные далее по тексту Политики объединены общим понятием Персональные данные.
									<br />
									{"   "}5.6. Обработка специальных категорий персональных данных, касающихся расовой, национальной принадлежности, политических взглядов, религиозных или философских убеждений, интимной жизни, Оператором не осуществляется.
									<br />
									{"   "}5.7. Обработка персональных данных, разрешенных для распространения, из числа специальных категорий персональных данных, указанных в ч. 1 ст. 10 Закона о персональных данных, допускается, если соблюдаются запреты и условия, предусмотренные ст. 10.1 Закона о персональных данных.
									<br />
									{"   "}5.8. Согласие Пользователя на обработку персональных данных, разрешенных для распространения, оформляется отдельно от других согласий на обработку его персональных данных. При этом соблюдаются условия, предусмотренные, в частности, ст. 10.1 Закона о персональных данных. Требования к содержанию такого согласия устанавливаются уполномоченным органом по защите прав субъектов персональных данных.
									<br />
									<br />
								</Strong>
							</Strong>
							<Span
								white-space="normal"
								overflow-wrap="normal"
								word-break="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								5.8.1 Согласие на обработку персональных данных, разрешенных для распространения, Пользователь предоставляет Оператору непосредственно.
								<Strong
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
									font="normal 400 18px/1.5 Inter, sans-serif"
								>
									<Strong
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
										font="normal 400 18px/1.5 Inter, sans-serif"
									>
										<br />
										<Strong
											overflow-wrap="normal"
											word-break="normal"
											white-space="normal"
											text-indent="0"
											text-overflow="clip"
											hyphens="manual"
										>
											<Strong
												overflow-wrap="normal"
												word-break="normal"
												white-space="normal"
												text-indent="0"
												text-overflow="clip"
												hyphens="manual"
											>
												{" "}
											</Strong>
										</Strong>
										5.8.2 Оператор обязан в срок не позднее трех рабочих дней с момента{" "}
										<Strong
											overflow-wrap="normal"
											word-break="normal"
											white-space="normal"
											text-indent="0"
											text-overflow="clip"
											hyphens="manual"
										>
											<Strong
												overflow-wrap="normal"
												word-break="normal"
												white-space="normal"
												text-indent="0"
												text-overflow="clip"
												hyphens="manual"
											>
												{"      "}
											</Strong>
										</Strong>
										<br />
										получения указанного согласия Пользователя опубликовать информацию об условиях обработки, о наличии запретов и условий на обработку неограниченным кругом лиц персональных данных, разрешенных для распространения.
										<br />
										5.8.3 Передача (распространение, предоставление, доступ) персональных данных, разрешенных субъектом персональных данных для распространения, должна быть прекращена в любое время по требованию субъекта персональных данных. Данное требование должно включать в себя фамилию, имя, отчество (при наличии), контактную информацию (номер телефона, адрес электронной почты или почтовый адрес) субъекта персональных данных, а также перечень персональных данных, обработка которых подлежит прекращению. Указанные в данном требовании персональные данные могут обрабатываться только Оператором, которому оно направлено.
										<br />
										5.8.4 Согласие на обработку персональных данных, разрешенных для распространения, прекращает свое действие с момента поступления Оператору требования, указанного в п. 5.8.3 настоящей Политики в отношении обработки персональных данных.
										<br />
									</Strong>
								</Strong>
							</Span>
							<Strong
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								font="normal 400 18px/1.5 Inter, sans-serif"
							>
								<Strong
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
									font="normal 400 18px/1.5 Inter, sans-serif"
								>
									<br />
									<Span
										font="600 24px/36px Montserrat, sans-serif"
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
									>
										6. Принципы обработки персональных данных
										<br />
									</Span>
									<br />
									{"   "}6.1. Обработка персональных данных осуществляется на законной и справедливой основе.
									<br />
									{"   "}6.2. Обработка персональных данных ограничивается достижением конкретных, заранее определенных и законных целей. Не допускается обработка персональных данных, несовместимая с целями сбора персональных данных.
									<br />
									{"   "}6.3. Не допускается объединение баз данных, содержащих персональные данные, обработка которых осуществляется в целях, несовместимых между собой.
									<br />
									{"   "}6.4. Обработке подлежат только персональные данные, которые отвечают целям их обработки.
									<br />
									{"   "}6.5. Содержание и объем обрабатываемых персональных данных соответствуют заявленным целям обработки. Не допускается избыточность обрабатываемых персональных данных по отношению к заявленным целям их обработки.
									<br />
									{"   "}6.6. При обработке персональных данных обеспечивается точность персональных данных, их достаточность, а в необходимых случаях и актуальность по отношению к целям обработки персональных данных. Оператор принимает необходимые меры и/или обеспечивает их принятие по удалению или уточнению неполных или неточных данных.
									<br />
									{"   "}6.7. Хранение персональных данных осуществляется в форме, позволяющей определить субъекта персональных данных, не дольше, чем этого требуют цели обработки персональных данных, если срок хранения персональных данных не установлен федеральным законом, договором, стороной которого, выгодоприобретателем или поручителем по которому является субъект персональных данных. Обрабатываемые персональные данные уничтожаются либо обезличиваются по достижении целей обработки или в случае утраты необходимости в достижении этих целей, если иное не предусмотрено федеральным законом.
									<br />
									<br />
									<Span
										font="600 24px/36px Montserrat, sans-serif"
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
									>
										7. Цели обработки персональных данных
										<br />
									</Span>
									<br />
									{"   "}7.1. Цель обработки персональных данных Пользователя:
									<br />
									<br />
									– информирование Пользователя посредством отправки электронных писем.
									<br />
									<br />
									{"   "}7.2. Также Оператор имеет право направлять Пользователю уведомления о новых продуктах и услугах, специальных предложениях и различных событиях. Пользователь всегда может отказаться от получения информационных сообщений, направив Оператору письмо на адрес электронной почты main@privattender.com с пометкой «Отказ от уведомлений о новых продуктах и услугах и специальных предложениях».
									<br />
									{"   "}7.3. Обезличенные данные Пользователей, собираемые с помощью сервисов интернет-статистики, служат для сбора информации о действиях Пользователей на сайте, улучшения качества сайта и его содержания.
									<br />
									<br />
									<Span
										font="600 24px/36px Montserrat, sans-serif"
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
									>
										8. Правовые основания обработки персональных данных
										<br />
									</Span>
									<br />
									{"   "}8.1. Правовыми основаниями обработки персональных данных Оператором являются:
									<br />
									<br />
									– Федеральный закон "Об информации, информационных технологиях и о защите информации" от 27.07.2006 N 149-ФЗ;
									<br />
									<br />
									– федеральные законы, иные нормативно-правовые акты в сфере защиты персональных данных;
									<br />
									<br />
									– согласия Пользователей на обработку их персональных данных, на обработку персональных данных, разрешенных для распространения.
									<br />
									<br />
									{"   "}8.2. Оператор обрабатывает персональные данные Пользователя только в случае их заполнения и/или отправки Пользователем самостоятельно через специальные формы, расположенные на сайте https://privattender.com или направленные Оператору посредством электронной почты. Заполняя соответствующие формы и/или отправляя свои персональные данные Оператору, Пользователь выражает свое согласие с данной Политикой.
									<br />
									{"   "}8.3. Оператор обрабатывает обезличенные данные о Пользователе в случае, если это разрешено в настройках браузера Пользователя (включено сохранение файлов «cookie» и использование технологии JavaScript).
									<br />
									{"   "}8.4. Субъект персональных данных самостоятельно принимает решение о предоставлении его персональных данных и дает согласие свободно, своей волей и в своем интересе.
									<br />
									<br />
									<Span
										font="600 24px/36px Montserrat, sans-serif"
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
									>
										9. Условия обработки персональных данных
									</Span>
									<br />
									<br />
									{"   "}9.1. Обработка персональных данных осуществляется с согласия субъекта персональных данных на обработку его персональных данных.
									<br />
									{"   "}9.2. Обработка персональных данных необходима для достижения целей, предусмотренных международным договором Российской Федерации или законом, для осуществления возложенных законодательством Российской Федерации на оператора функций, полномочий и обязанностей.
									<br />
									{"   "}9.3. Обработка персональных данных необходима для осуществления правосудия, исполнения судебного акта, акта другого органа или должностного лица, подлежащих исполнению в соответствии с законодательством Российской Федерации об исполнительном производстве.
									<br />
									{"   "}9.4. Обработка персональных данных необходима для исполнения договора, стороной которого либо выгодоприобретателем или поручителем по которому является субъект персональных данных, а также для заключения договора по инициативе субъекта персональных данных или договора, по которому субъект персональных данных будет являться выгодоприобретателем или поручителем.
									<br />
									{"   "}9.5. Обработка персональных данных необходима для осуществления прав и законных интересов оператора или третьих лиц либо для достижения общественно значимых целей при условии, что при этом не нарушаются права и свободы субъекта персональных данных.
									<br />
									{"   "}9.6. Осуществляется обработка персональных данных, доступ неограниченного круга лиц к которым предоставлен субъектом персональных данных либо по его просьбе (далее – общедоступные персональные данные).
									<br />
									{"   "}9.7. Осуществляется обработка персональных данных, подлежащих опубликованию или обязательному раскрытию в соответствии с федеральным законом.
									<br />
									<br />
									<Span
										font="600 24px/36px Montserrat, sans-serif"
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
									>
										10. Порядок сбора, хранения, передачи и других видов обработки персональных данных
										<br />
									</Span>
									<br />
									Безопасность персональных данных, которые обрабатываются Оператором, обеспечивается путем реализации правовых, организационных и технических мер, необходимых для выполнения в полном объеме требований действующего законодательства в области защиты персональных данных.
									<br />
									<br />
									{"   "}10.1. Оператор обеспечивает сохранность персональных данных и принимает все возможные меры, исключающие доступ к персональным данным неуполномоченных лиц.
									<br />
									{"   "}10.2. Персональные данные Пользователя никогда, ни при каких условиях не будут переданы третьим лицам, за исключением случаев, связанных с исполнением действующего законодательства либо в случае, если субъектом персональных данных дано согласие Оператору на передачу данных третьему лицу для исполнения обязательств по гражданско-правовому договору.
									<br />
									{"   "}10.3. В случае выявления неточностей в персональных данных, Пользователь может актуализировать их самостоятельно, путем направления Оператору уведомление на адрес электронной почты Оператора main@privattender.com с пометкой «Актуализация персональных данных».
									<br />
									{"   "}10.4. Срок обработки персональных данных определяется достижением целей, для которых были собраны персональные данные, если иной срок не предусмотрен договором или действующим законодательством.
									<br />
									Пользователь может в любой момент отозвать свое согласие на обработку персональных данных, направив Оператору уведомление посредством электронной почты на электронный адрес Оператора main@privattender.com с пометкой «Отзыв согласия на обработку персональных данных».
									<br />
									{"   "}10.5. Вся информация, которая собирается сторонними сервисами, в том числе платежными системами, средствами связи и другими поставщиками услуг, хранится и обрабатывается указанными лицами (Операторами) в соответствии с их Пользовательским соглашением и Политикой конфиденциальности. Субъект персональных данных и/или Пользователь обязан самостоятельно своевременно ознакомиться с указанными документами. Оператор не несет ответственность за действия третьих лиц, в том числе указанных в настоящем пункте поставщиков услуг.
									<br />
									{"   "}10.6. Установленные субъектом персональных данных запреты на передачу (кроме предоставления доступа), а также на обработку или условия обработки (кроме получения доступа) персональных данных, разрешенных для распространения, не действуют в случаях обработки персональных данных в государственных, общественных и иных публичных интересах, определенных законодательством РФ.
									<br />
									{"   "}10.7. Оператор при обработке персональных данных обеспечивает конфиденциальность персональных данных.
									<br />
									{"   "}10.8. Оператор осуществляет хранение персональных данных в форме, позволяющей определить субъекта персональных данных, не дольше, чем этого требуют цели обработки персональных данных, если срок хранения персональных данных не установлен федеральным законом, договором, стороной которого, выгодоприобретателем или поручителем по которому является субъект персональных данных.
									<br />
									{"   "}10.9. Условием прекращения обработки персональных данных может являться достижение целей обработки персональных данных, истечение срока действия согласия субъекта персональных данных или отзыв согласия субъектом персональных данных, а также выявление неправомерной обработки персональных данных.
									<br />
									<br />
									<Span
										font="600 24px/36px Montserrat, sans-serif"
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
									>
										11. Перечень действий, производимых Оператором с полученными персональными данными
										<br />
									</Span>
									<br />
									{"   "}11.1. Оператор осуществляет сбор, запись, систематизацию, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передачу (распространение, предоставление, доступ), обезличивание, блокирование, удаление и уничтожение персональных данных.
									<br />
									{"   "}11.2. Оператор осуществляет автоматизированную обработку персональных данных с получением и/или передачей полученной информации по информационно-телекоммуникационным сетям или без таковой.
									<br />
									<br />
									<Span
										font="600 24px/36px Montserrat, sans-serif"
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
									>
										12. Трансграничная передача персональных данных
										<br />
									</Span>
									<br />
									{"   "}12.1. Оператор до начала осуществления трансграничной передачи персональных данных обязан убедиться в том, что иностранным государством, на территорию которого предполагается осуществлять передачу персональных данных, обеспечивается надежная защита прав субъектов персональных данных.
									<br />
									{"   "}12.2. Трансграничная передача персональных данных на территории иностранных государств, не отвечающих вышеуказанным требованиям, может осуществляться только в случае наличия согласия в письменной форме субъекта персональных данных на трансграничную передачу его персональных данных и/или исполнения договора, стороной которого является субъект персональных данных.
									<br />
									<br />
									<Span
										font="600 24px/36px Montserrat, sans-serif"
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
									>
										13. Конфиденциальность персональных данных
										<br />
									</Span>
									<br />
									Оператор и иные лица, получившие доступ к персональным данным, обязаны не раскрывать третьим лицам и не распространять персональные данные без согласия субъекта персональных данных, если иное не предусмотрено федеральным законом.
									<br />
									<br />
									<Span
										font="600 24px/36px Montserrat, sans-serif"
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
									>
										14. Заключительные положения
										<br />
									</Span>
									<br />
									{"   "}14.1. Пользователь может получить любые разъяснения по интересующим вопросам, касающимся обработки его персональных данных, обратившись к Оператору с помощью электронной почты main@privattender.com.
									<br />
									{"   "}14.2. В данном документе будут отражены любые изменения политики обработки персональных данных Оператором. Политика действует бессрочно до замены ее новой версией.
									<br />
									{"   "}14.3. Актуальная версия Политики в свободном доступе расположена в сети Интернет по адресу https://privattender.com.
									<br />
									<br />
									<br />
								</Strong>
							</Strong>
						</Text>
					</Components.QuarklycommunityKitPopup>
					{"            "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<StackItem
			width="100%"
			display="flex"
			sm-width="100%"
			sm-padding="10px 16px 16px 16px"
			md-align-items="center"
			md-justify-content="center"
			md-width="100%"
			md-display="flex"
			md-padding="0px 0px 10px 0px"
			justify-content="center"
			align-items="center"
			padding="0px 0px 20px 0px"
		>
			<Override
				slot="StackItemContent"
				justify-content="center"
				display="flex"
				md-justify-content="center"
				md-align-items="center"
				align-self="center"
			/>
			<Icon
				category="ai"
				icon={AiFillInstagram}
				width="30px"
				height="30px"
				size="40px"
				color="--greyD2"
				md-margin="0px 20px 0px 20px"
			/>
			<Icon
				category="fa"
				icon={FaTwitter}
				width="30px"
				height="30px"
				size="40px"
				color="--greyD2"
				md-margin="0px 20px 0px 20px"
				padding="0px 10px 0px 10px"
			/>
			<Icon
				category="fa"
				icon={FaTelegram}
				width="30px"
				height="30px"
				size="30px"
				color="--greyD2"
				md-margin="0px 20px 0px 20px"
			/>
			{"            "}
		</StackItem>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});