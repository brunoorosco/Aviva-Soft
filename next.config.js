const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase, { defaultConfig }) => ({
    reactStrictMode: true,
    pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts']
        // pageExtensions: ['ts', 'tsx', 'js', 'jsx']
        //     .map((extension) => {
        //         const isDevServer = phase === PHASE_DEVELOPMENT_SERVER
        //         const prefixes = isDevServer ? ['dev', 'prod'] : ['prod']
        //         return prefixes.map((prefix) => `${prefix}.${extension}`)
        //     })
        //     .flat()
})