module.exports = {
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

	theme: '@vuepress/theme-default',
	themeConfig: {
		logo: '/favicon.png',
		
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
						text: "Старый сайт",
						link: "https://launcher-sashok724.keeperjerry.ru/",
					},
					{
						text: "Сборки серверов",
						link: "https://mirror.keeperjerry.ru/launcher/v1/servers/",
					},
					{
						text: "Discord",
						link: "https://discord.com/invite/yfNVet6",
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
	},

	plugins: [
		[
			// Google Analytics
			'@vuepress/plugin-google-analytics', {
				id: 'G-N2PL2B4JJ8',
			}
		],
		[
			// Yandex metrika
			'metrika',
			{
				counter: '87356433',
				config: {
					accurateTrackBounce: true,
					clickmap: true,
					trackLinks: true,
					webvisor: true
				},
			},
		],
	],
}