export interface CustomLink {
	platform: string;
	title: string;
	href: string;
	isExternal?: boolean;
}

export interface Hackathon {
	hackathonTitle: string;
    projectTitle: string;
	description?: string;
	githubLink?: string;
	websiteLink?: string;
	duration: string;
}
