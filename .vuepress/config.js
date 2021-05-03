module.exports = {
    title: 'Flux',
    description: 'Documentation for Flux Core - A Drag and Drop Visual Scripting System',
    theme: 'yuu',
    head: [
        ['link', { rel: 'icon', type: "images/png", sizes: "16x16", href: '/images/logo-color-16.png' }],
        ['link', { rel: 'icon', type: "images/png", sizes: "32x32", href: '/images/logo-color-32.png' }],
        ['link', { rel: 'icon', href: '/images/logo-color-32.png' }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['meta', { name: 'theme-color', content: '#A846EB' }],
        ['meta', { name: 'background-color', content: '#1A1A1A' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['link', { rel: 'apple-touch-icon', href: '/images/logo-color-152.png' }],
        ['link', { rel: 'mask-icon', href: '/images/logo-color-maskable-192.png', color: '#A846EB' }],
        ['meta', { name: 'msapplication-TileImage', content: '/images/logo-color-144.png' }],
        ['meta', { name: 'msapplication-TileColor', content: '#1A1A1A' }]
    ],
    themeConfig: {
        logo: '/images/logo-color.svg',
        yuu: {
            defaultDarkTheme: true,
            defaultColorTheme: 'purple',
            disableThemeIgnore: true,
            disableDarkTheme: false,
        }
    },
    plugins: {
        '@vuepress/pwa': {
            serviceWorker: true,
            updatePopup: true
        }
    }
}
