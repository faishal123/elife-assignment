type AlternativeSlugsType = Record<string, string>;

type UserType = {
	id: string;
	updated_at: string;
	username: string;
	name: string;
	first_name: string;
	last_name: string;
	twitter_username: string;
	portfolio_url: string;
	bio: string;
	location: string;
	links: Record<string, string>;
	profile_image: {
		small: string;
		medium: string;
		large: string;
	};
	instagram_username: string;
	total_collections: number;
	total_likes: number;
	total_photos: number;
	total_promoted_photos: number;
	accepted_tos: boolean;
	for_hire: boolean;
	social: SocialType;
};

type BreadCrumbType = {
	slug: string;
	title: string;
	index: number;
	type: string;
};

type SocialType = {
	instagram_username: string;
	portfolio_url: string;
	twitter_username: string;
	paypal_email: string;
};

type TagsType = { type: string; title: string }[];

type UnsplashPhotoType = {
	id: string;
	slug: string;
	alternative_slugs: AlternativeSlugsType;
	created_at: string;
	updated_at: string;
	promoted_at: string;
	width: number;
	height: number;
	color: string;
	blur_hash: string;
	description: string;
	alt_description: string;
	breadcrumbs: BreadCrumbType[];
	urls: {
		raw: string;
		full: string;
		regular: string;
		small: string;
		thumb: string;
		small_s3: string;
	};
	links: Record<string, string>;
	likes: number;
	liked_by_user: false;
	current_user_collections: UserType[];
	sponsorship: null;
	topic_submissions: Record<string, Record<string, string>>;
	asset_type: string;
	user: UserType;
	tags: TagsType;
};

export type UnsplashResponseType = {
	total: number;
	total_pages: number;
	results: UnsplashPhotoType[];
};
