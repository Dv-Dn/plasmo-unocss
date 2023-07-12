import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetWebFonts,
  transformerAttributifyJsx,
  transformerDirectives,
  transformerVariantGroup
} from 'unocss'

export default defineConfig({
	cli: {
		entry: [
			{
				patterns: ['src/**/*.{html,js,ts,jsx,tsx,vue,svelte,astro}'],
				outFile: './src/styles/uno.css'
			}
		]
		// entry: {} // CliEntryItem | CliEntryItem[]
	},
	presets: [
		presetUno(),
		presetAttributify(),
		presetIcons(),
		presetWebFonts({
			fonts: {
				sans: 'DM Sans',
				serif: 'DM Serif Display',
				mono: 'DM Mono'
			}
		})
	],
	transformers: [
		transformerDirectives(),
		transformerAttributifyJsx(),
		transformerVariantGroup()
	]
})
