import type {
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "节木",
	subtitle: "Blog",
	lang: "zh_CN", // 语言代码，例如 'en'、'zh_CN'、'ja' 等。
	themeColor: {
		hue: 185, // 主题颜色的默认色调，从 0 到 360。例如红色：0，海蓝色：200，青色：250，粉色：345
		fixed: true, // 隐藏访客的主题颜色选择器
	},
	themeMode: {
		mode: "dark",
		fixed: true,
	},
	banner: {
		enable: true,
		src: "assets/images/banner.png", // 相对于 /src 目录。如果以 '/' 开头，则相对于 /public 目录
		position: "center", // 相当于 object-position，仅支持 'top'、'center'、'bottom'。默认为 'center'
		credit: {
			enable: false, // 显示横幅图像的版权文本
			text: "", // 要显示的版权文本
			url: "", // （可选）原始艺术作品或艺术家页面的 URL 链接
		},
	},
	toc: {
		enable: true, // 在文章右侧显示目录
		depth: 2, // 目录中显示的最大标题深度，从 1 到 3
	},
	favicon: [
		// 将此数组留空以使用默认 favicon
		// {
		//   src: '/favicon/icon.png',    // favicon 的路径，相对于 /public 目录
		//   theme: 'light',              // （可选）'light' 或 'dark'，仅在您有不同模式下的不同 favicon 时设置
		//   sizes: '32x32',              // （可选）favicon 的大小，仅在您有不同大小的 favicon 时设置
		// }
	],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		LinkPreset.About,
		{
			name: "GitHub",
			url: "https://github.com/ScotiaNova/", // 内部链接不应包含基路径，因为它会自动添加
			external: true, // 显示外部链接图标并在新标签中打开
		},
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "assets/images/avatar.png", // 相对于 /src 目录。如果以 '/' 开头，则相对于 /public 目录
	name: "节木",
	bio: "敛木为节，蓄风骨于内。",
	links: [
		{
			name: "Twitter",
			icon: "fa6-brands:twitter", // 访问 https://icones.js.org/ 获取图标代码
			// 如果尚未包含相应图标集，您需要安装它
			// `pnpm add @iconify-json/<icon-set-name>`
			url: "https://twitter.com",
		},
		{
			name: "Steam",
			icon: "fa6-brands:steam",
			url: "https://store.steampowered.com",
		},
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/saicaca/fuwari",
		},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	// 注意：某些样式（如背景颜色）已被覆盖，请参阅 astro.config.mjs 文件。
	// 请选择一个深色主题，因为此博客主题目前仅支持深色背景
	theme: "github-dark",
};