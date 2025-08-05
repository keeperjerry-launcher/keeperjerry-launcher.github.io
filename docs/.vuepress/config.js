import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  // Основные настрйоки
  base: '/',
  lang: 'ru-RU',
  title: 'KeeperJerry Launcher',
  description: "Просто начни и забудь про Gravit!",

  // Настройки темы и роутингов
	head: [
		[
			'link', 
			{ 
				rel: 'icon', 
				href: '/favicon.png'
			}
		]
	],

  theme: defaultTheme({
    // default theme config
    logo: '/favicon.png',

    colorMode: 'dark',
    colorModeSwitch: false,

    navbar: [
			{
				text: "Главная",
				link: "/",
			},
			{
				text: "Руководство",
				link: "/guide/",
			},
			{
				text: "Настройка",
				link: "/config/",
			},
			{
				text: "FAQ",
				link: "/faq/",
			},
			{
				text: "Ссылки",
				children: [
					{
						text: "Сборки серверов",
						link: "https://mirror.keeperjerry.ru/launcher/v1/servers/",
					},
					{
						text: "GitHub",
						link: "https://github.com/KeeperJerry/LauncherSchool",
					},
				],
			},
		],

    sidebar: {
			"/": [
				{
					text: "Руководство",
					children: [
						'/guide/',
						'/guide/startWork.md',
						'/guide/profiles.md',
					],
				},
				{
					text: "Настройка",
					children: [
						'/config/', 
						'/config/authLimiter.md',
						'/config/authHandler.md',
						'/config/authProvider.md',
						'/config/textureProvider.md',
						'/config/launch4JConfig.md',
						'/config/profiles.md',
					],
				},
				{
					text: "FAQ",
					children: [
						'/faq/',
						'/faq/fixProblem.md',
						'/faq/command.md',
						'/faq/customRepo.md',
					],
				},
			],
		},
  }),

  bundler: viteBundler(),
})