"use client";

import { DataContext } from "@/utils/context";
import Image from "next/image";
import { useContext } from "react";

const defaultImage = {
	id: "1YHXFeOYpN0",
	slug: "water-droplets-on-clear-glass-1YHXFeOYpN0",
	alternative_slugs: {
		en: "water-droplets-on-clear-glass-1YHXFeOYpN0",
		es: "water-droplets-on-clear-glass-1YHXFeOYpN0",
		ja: "透明ガラスについた水滴-1YHXFeOYpN0",
		fr: "gouttelettes-deau-sur-verre-transparent-1YHXFeOYpN0",
		it: "goccioline-dacqua-su-vetro-trasparente-1YHXFeOYpN0",
		ko: "투명한-유리에-물방울-1YHXFeOYpN0",
		de: "wassertropfen-auf-klarem-glas-1YHXFeOYpN0",
		pt: "goticulas-de-agua-em-vidro-transparente-1YHXFeOYpN0",
	},
	created_at: "2018-01-11T18:11:05Z",
	updated_at: "2024-03-30T05:44:34Z",
	promoted_at: "2018-01-13T09:43:58Z",
	width: 3200,
	height: 4800,
	color: "#404059",
	blur_hash: "LXE{YCx^0JD%%#bbIUIoNaR+xat7",
	description: "Drips",
	alt_description: "water droplets on clear glass",
	breadcrumbs: [
		{
			slug: "backgrounds",
			title: "HQ Background Images",
			index: 0,
			type: "landing_page",
		},
		{
			slug: "nature",
			title: "Nature Backgrounds",
			index: 1,
			type: "landing_page",
		},
		{
			slug: "water",
			title: "Water Backgrounds",
			index: 2,
			type: "landing_page",
		},
	],
	urls: {
		raw: "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?ixid=M3w1ODUxNTN8MHwxfHNlYXJjaHwxfHxSYWlufGVufDB8fHx8MTcxMTgwNDYwOHww&ixlib=rb-4.0.3",
		full: "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1ODUxNTN8MHwxfHNlYXJjaHwxfHxSYWlufGVufDB8fHx8MTcxMTgwNDYwOHww&ixlib=rb-4.0.3&q=85",
		regular:
			"https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1ODUxNTN8MHwxfHNlYXJjaHwxfHxSYWlufGVufDB8fHx8MTcxMTgwNDYwOHww&ixlib=rb-4.0.3&q=80&w=1080",
		small:
			"https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1ODUxNTN8MHwxfHNlYXJjaHwxfHxSYWlufGVufDB8fHx8MTcxMTgwNDYwOHww&ixlib=rb-4.0.3&q=80&w=400",
		thumb:
			"https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1ODUxNTN8MHwxfHNlYXJjaHwxfHxSYWlufGVufDB8fHx8MTcxMTgwNDYwOHww&ixlib=rb-4.0.3&q=80&w=200",
		small_s3:
			"https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1515694346937-94d85e41e6f0",
	},
	links: {
		self: "https://api.unsplash.com/photos/water-droplets-on-clear-glass-1YHXFeOYpN0",
		html: "https://unsplash.com/photos/water-droplets-on-clear-glass-1YHXFeOYpN0",
		download:
			"https://unsplash.com/photos/1YHXFeOYpN0/download?ixid=M3w1ODUxNTN8MHwxfHNlYXJjaHwxfHxSYWlufGVufDB8fHx8MTcxMTgwNDYwOHww",
		download_location:
			"https://api.unsplash.com/photos/1YHXFeOYpN0/download?ixid=M3w1ODUxNTN8MHwxfHNlYXJjaHwxfHxSYWlufGVufDB8fHx8MTcxMTgwNDYwOHww",
	},
	likes: 3109,
	liked_by_user: false,
	current_user_collections: [],
	sponsorship: null,
	topic_submissions: {},
	asset_type: "photo",
	user: {
		id: "JuqHbHtpPDE",
		updated_at: "2024-03-28T17:17:16Z",
		username: "maxwbender",
		name: "Max Bender",
		first_name: "Max",
		last_name: "Bender",
		twitter_username: null,
		portfolio_url: "https://www.instagram.com/maxwbender/",
		bio: "Show your support by following, commenting and sharing my page on IG",
		location: "Chicago IL",
		links: {
			self: "https://api.unsplash.com/users/maxwbender",
			html: "https://unsplash.com/@maxwbender",
			photos: "https://api.unsplash.com/users/maxwbender/photos",
			likes: "https://api.unsplash.com/users/maxwbender/likes",
			portfolio: "https://api.unsplash.com/users/maxwbender/portfolio",
			following: "https://api.unsplash.com/users/maxwbender/following",
			followers: "https://api.unsplash.com/users/maxwbender/followers",
		},
		profile_image: {
			small:
				"https://images.unsplash.com/profile-1633957546554-9692b70575bbimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
			medium:
				"https://images.unsplash.com/profile-1633957546554-9692b70575bbimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
			large:
				"https://images.unsplash.com/profile-1633957546554-9692b70575bbimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128",
		},
		instagram_username: "maxwbender",
		total_collections: 37,
		total_likes: 1837,
		total_photos: 495,
		total_promoted_photos: 111,
		accepted_tos: true,
		for_hire: false,
		social: {
			instagram_username: "maxwbender",
			portfolio_url: "https://www.instagram.com/maxwbender/",
			twitter_username: null,
			paypal_email: null,
		},
	},
	tags: [
		{
			type: "search",
			title: "rain",
		},
		{
			type: "landing_page",
			title: "water",
			source: {
				ancestry: {
					type: {
						slug: "wallpapers",
						pretty_slug: "HD Wallpapers",
					},
					category: {
						slug: "nature",
						pretty_slug: "Nature",
					},
					subcategory: {
						slug: "water",
						pretty_slug: "Water",
					},
				},
				title: "Hd water wallpapers",
				subtitle: "Download free water wallpapers",
				description:
					"Choose from a curated selection of water wallpapers for your mobile and desktop screens. Always free on Unsplash.",
				meta_title: "Water Wallpapers: Free HD Download [500+ HQ] | Unsplash",
				meta_description:
					"Choose from hundreds of free water wallpapers. Download HD wallpapers for free on Unsplash.",
				cover_photo: {
					id: "fbbxMwwKqZk",
					slug: "white-and-black-cardboard-box-fbbxMwwKqZk",
					alternative_slugs: {
						en: "white-and-black-cardboard-box-fbbxMwwKqZk",
						es: "caja-de-carton-blanca-y-negra-fbbxMwwKqZk",
						ja: "白と黒の段ボール箱-fbbxMwwKqZk",
						fr: "boite-en-carton-blanc-et-noir-fbbxMwwKqZk",
						it: "scatola-di-cartone-bianca-e-nera-fbbxMwwKqZk",
						ko: "흰색과-검은색-판지-상자-fbbxMwwKqZk",
						de: "weisser-und-schwarzer-karton-fbbxMwwKqZk",
						pt: "caixa-de-papelao-branca-e-preta-fbbxMwwKqZk",
					},
					created_at: "2019-07-29T16:55:54Z",
					updated_at: "2024-03-25T20:36:09Z",
					promoted_at: null,
					width: 3631,
					height: 5446,
					color: "#f3f3f3",
					blur_hash: "LZMQ^s%hM_%M~qDiMx%MD$ofWBt7",
					description: null,
					alt_description: "white and black cardboard box",
					breadcrumbs: [],
					urls: {
						raw: "https://images.unsplash.com/photo-1564419320461-6870880221ad?ixlib=rb-4.0.3",
						full: "https://images.unsplash.com/photo-1564419320461-6870880221ad?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
						regular:
							"https://images.unsplash.com/photo-1564419320461-6870880221ad?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
						small:
							"https://images.unsplash.com/photo-1564419320461-6870880221ad?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
						thumb:
							"https://images.unsplash.com/photo-1564419320461-6870880221ad?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max",
						small_s3:
							"https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1564419320461-6870880221ad",
					},
					links: {
						self: "https://api.unsplash.com/photos/white-and-black-cardboard-box-fbbxMwwKqZk",
						html: "https://unsplash.com/photos/white-and-black-cardboard-box-fbbxMwwKqZk",
						download: "https://unsplash.com/photos/fbbxMwwKqZk/download",
						download_location:
							"https://api.unsplash.com/photos/fbbxMwwKqZk/download",
					},
					likes: 594,
					liked_by_user: false,
					current_user_collections: [],
					sponsorship: null,
					topic_submissions: {},
					asset_type: "photo",
					premium: false,
					plus: false,
					user: {
						id: "8Ae1yJe8OoA",
						updated_at: "2024-03-07T03:26:17Z",
						username: "boxedwater",
						name: "Boxed Water Is Better",
						first_name: "Boxed Water Is Better",
						last_name: null,
						twitter_username: "boxedwater",
						portfolio_url:
							"https://boxedwaterisbetter.com/?utm_source=brand-referral&utm_medium=unsplash&utm_campaign=stigmatize-plastic",
						bio: "👋  We're a sustainable alternative to plastic water bottles.\r\n🚫  Ditch plastic bottles  🌲  Plant trees with us using #BetterPlanet Boxed Water is 100% pure, 92% sustainably packaged & 100%  recyclable. Let’s build a #BetterPlanet together. ",
						location: "Holland, MI",
						links: {
							self: "https://api.unsplash.com/users/boxedwater",
							html: "https://unsplash.com/@boxedwater",
							photos: "https://api.unsplash.com/users/boxedwater/photos",
							likes: "https://api.unsplash.com/users/boxedwater/likes",
							portfolio: "https://api.unsplash.com/users/boxedwater/portfolio",
							following: "https://api.unsplash.com/users/boxedwater/following",
							followers: "https://api.unsplash.com/users/boxedwater/followers",
						},
						profile_image: {
							small:
								"https://images.unsplash.com/profile-1557251674406-effb9d313841?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
							medium:
								"https://images.unsplash.com/profile-1557251674406-effb9d313841?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
							large:
								"https://images.unsplash.com/profile-1557251674406-effb9d313841?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128",
						},
						instagram_username: "boxedwater",
						total_collections: 2,
						total_likes: 3,
						total_photos: 272,
						total_promoted_photos: 20,
						accepted_tos: true,
						for_hire: false,
						social: {
							instagram_username: "boxedwater",
							portfolio_url:
								"https://boxedwaterisbetter.com/?utm_source=brand-referral&utm_medium=unsplash&utm_campaign=stigmatize-plastic",
							twitter_username: "boxedwater",
							paypal_email: null,
						},
					},
				},
			},
		},
		{
			type: "landing_page",
			title: "texture",
			source: {
				ancestry: {
					type: {
						slug: "backgrounds",
						pretty_slug: "Backgrounds",
					},
					category: {
						slug: "art",
						pretty_slug: "Art",
					},
					subcategory: {
						slug: "texture",
						pretty_slug: "Texture",
					},
				},
				title: "Texture backgrounds",
				subtitle: "Download free texture background images",
				description:
					"Regular backgrounds aren't enough for you? Get one with a little texture. Unsplash has a ton of gorgeous texture backgrounds, each with its own unique style, and each free to use!",
				meta_title:
					"900+ Texture Background Images: Download HD Backgrounds on Unsplash",
				meta_description:
					"Choose from hundreds of free texture backgrounds. Download beautiful, curated free backgrounds on Unsplash.",
				cover_photo: {
					id: "vC8wj_Kphak",
					slug: "flowers-beside-yellow-wall-vC8wj_Kphak",
					alternative_slugs: {
						en: "flowers-beside-yellow-wall-vC8wj_Kphak",
						es: "flores-junto-a-la-pared-amarilla-vC8wj_Kphak",
						ja: "黄色い壁のそばの花-vC8wj_Kphak",
						fr: "fleurs-a-cote-du-mur-jaune-vC8wj_Kphak",
						it: "fiori-accanto-al-muro-giallo-vC8wj_Kphak",
						ko: "노란-벽-옆의-꽃-vC8wj_Kphak",
						de: "blumen-neben-gelber-wand-vC8wj_Kphak",
						pt: "flores-ao-lado-da-parede-amarela-vC8wj_Kphak",
					},
					created_at: "2017-02-15T08:32:55Z",
					updated_at: "2024-03-25T20:25:56Z",
					promoted_at: "2017-02-15T08:32:55Z",
					width: 3456,
					height: 5184,
					color: "#d9c0a6",
					blur_hash: "LQP=+Pxta$og%%j]WWj@Dhayofae",
					description: "Find more inspiring photos: https://monaeendra.com/",
					alt_description: "flowers beside yellow wall",
					breadcrumbs: [
						{
							slug: "images",
							title: "1,000,000+ Free Images",
							index: 0,
							type: "landing_page",
						},
						{
							slug: "feelings",
							title: "Feelings Images",
							index: 1,
							type: "landing_page",
						},
						{
							slug: "beautiful",
							title: "Beautiful Pictures & Images",
							index: 2,
							type: "landing_page",
						},
					],
					urls: {
						raw: "https://images.unsplash.com/photo-1487147264018-f937fba0c817?ixlib=rb-4.0.3",
						full: "https://images.unsplash.com/photo-1487147264018-f937fba0c817?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
						regular:
							"https://images.unsplash.com/photo-1487147264018-f937fba0c817?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
						small:
							"https://images.unsplash.com/photo-1487147264018-f937fba0c817?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
						thumb:
							"https://images.unsplash.com/photo-1487147264018-f937fba0c817?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max",
						small_s3:
							"https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1487147264018-f937fba0c817",
					},
					links: {
						self: "https://api.unsplash.com/photos/flowers-beside-yellow-wall-vC8wj_Kphak",
						html: "https://unsplash.com/photos/flowers-beside-yellow-wall-vC8wj_Kphak",
						download: "https://unsplash.com/photos/vC8wj_Kphak/download",
						download_location:
							"https://api.unsplash.com/photos/vC8wj_Kphak/download",
					},
					likes: 13890,
					liked_by_user: false,
					current_user_collections: [],
					sponsorship: null,
					topic_submissions: {
						"textures-patterns": {
							status: "approved",
							approved_on: "2020-04-06T14:20:11Z",
						},
					},
					asset_type: "photo",
					premium: false,
					plus: false,
					user: {
						id: "-tVYuvmMiPA",
						updated_at: "2024-01-24T18:08:35Z",
						username: "monaeendra",
						name: "Mona Eendra",
						first_name: "Mona",
						last_name: "Eendra",
						twitter_username: null,
						portfolio_url: "https://monaeendra.com/",
						bio: "Passionate photographer capturing beauty and soul in people and places. I am available for collaborations!",
						location: "Copenhagen ",
						links: {
							self: "https://api.unsplash.com/users/monaeendra",
							html: "https://unsplash.com/@monaeendra",
							photos: "https://api.unsplash.com/users/monaeendra/photos",
							likes: "https://api.unsplash.com/users/monaeendra/likes",
							portfolio: "https://api.unsplash.com/users/monaeendra/portfolio",
							following: "https://api.unsplash.com/users/monaeendra/following",
							followers: "https://api.unsplash.com/users/monaeendra/followers",
						},
						profile_image: {
							small:
								"https://images.unsplash.com/profile-1470086144548-9b86aec8f374?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
							medium:
								"https://images.unsplash.com/profile-1470086144548-9b86aec8f374?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
							large:
								"https://images.unsplash.com/profile-1470086144548-9b86aec8f374?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128",
						},
						instagram_username: "monaeendra",
						total_collections: 0,
						total_likes: 289,
						total_photos: 39,
						total_promoted_photos: 11,
						accepted_tos: false,
						for_hire: true,
						social: {
							instagram_username: "monaeendra",
							portfolio_url: "https://monaeendra.com/",
							twitter_username: null,
							paypal_email: null,
						},
					},
				},
			},
		},
	],
};

const BackgroundImage = () => {
	const { pictures } = useContext(DataContext);

	const pictureSource =
		pictures?.results?.[0]?.urls?.full || defaultImage.urls.full;
	const pictureAlt =
		pictures?.results?.[0]?.description || defaultImage.description;

	return (
		<div className="min-h-full w-full absolute left-0 top-0 -z-20 rounded-2xl overflow-hidden">
			<Image
				className="object-cover brightness-[30%]"
				fill
				src={pictureSource}
				alt={pictureAlt}
			/>
		</div>
	);
};

export default BackgroundImage;
