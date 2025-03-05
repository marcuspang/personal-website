import type { Hackathon } from '../types';

export const hackathons: Hackathon[] = [
  {
    projectTitle: 'BLS12-381 Signatures on MINA',
    hackathonTitle: 'ETHOxford 2025',
    githubLink: 'https://github.com/marcuspang/mina-bls-12-381',
    description: "Won 2nd prize for MINA's Crypto primitives prize.\nNaive implementation of BLS12-381 primitives + signatures using o1js",
    duration: 'Feb 2025'
  },
  {
    projectTitle: 'Dark Pools on MINA',
    hackathonTitle: 'ETHGlobal Singapore 2024',
    githubLink: 'https://github.com/marcuspang/mina-dark-pools',
    description: "Won 3rd prize for MINA's Protokit prize.\nSimple Dark Pool built on MINA where order matching is private and done on sequencer level. Also added some custom expiration / execution delay logic for new orders to allow for more flexibility",
    duration: 'Sep 2024'
  },
  {
		projectTitle: 'Piggy Wallet',
		hackathonTitle: 'ETHGlobal Brussles 2024',
		githubLink: 'https://github.com/marcuspang/piggy-wallet',
		websiteLink: 'https://ethglobal.com/showcase/piggy-wallet-szyeh',
		description:
			'Won top place, along with several sponsor prizes.\nWallet app that uses Safe\'s Smart Account and Rhinestone modules to provide a "plugin" wallet experience.',
		duration: 'Jul 2024'
  },
	{
		projectTitle: 'transientoor',
		hackathonTitle: 'ETH Taipei 2024',
		githubLink: 'https://github.com/marcuspang/transientoor',
		websiteLink: 'https://transientoor.vercel.app',
		description:
			'Won top place, along with a sponsor prize: Most Innovative on OP.\nMade use of transient opcodes to create a Chrome extension to allow users to approve + swap in one transaction. Also made a custom ERC721 standard to allow loans without escrows.',
		duration: 'Apr 2024'
	},
	{
		projectTitle: 'k3ys',
		hackathonTitle: 'ETHGlobal Istanbul 2023',
		githubLink: 'https://github.com/keys-connect/app',
		websiteLink: 'https://k3ys.xyz',
		description:
			'Won several pool prizes.\nDrag and drop interface to create airdrop campaign rules, and encode the logic on-chain. Allows for verifiability and ensures that rules only apply at the specified snapshot, without possibility of tampering.',
		duration: 'Nov 2023'
	},
	{
		projectTitle: 'Reco',
		hackathonTitle: 'ETH London 2023',
		githubLink: 'https://github.com/recommendoor/reco',
		websiteLink: 'https://reco-london.vercel.app',
		description:
			'Won a sponsor prize.\nBuilt a decentralized recommendation engine on Discord for communities, e.g. DAOs.',
		duration: 'Oct 2023'
	},
	{
		projectTitle: 'CredLancer',
		hackathonTitle: 'ETH Rome 2023',
		githubLink: 'https://github.com/CredLancer/CredLancer_ALL',
		description:
			'Won a sponsor prize.\nImplement privacy-preserving features for a freelancer dApp.',
		duration: 'Oct 2023'
	},
	{
		projectTitle: 'DashDAO',
		hackathonTitle: 'ETH Warsaw 2023',
		githubLink: 'https://github.com/DashDAO/dao-dashboard',
		websiteLink: 'https://dashdao.vercel.app',
		description:
			'Won 1st place.\nBuilt a dashboard for DAOs to view more detailed proposal analytics and voting history, across delegations.',
		duration: 'Sep 2023'
	},
	{
		projectTitle: 'Zap',
		hackathonTitle: 'ETH Munich 2023',
		githubLink: 'https://github.com/marcuspang/we-wallet',
		description: 'Won a sponsor prize.\nFork of wallet for Bitcoin Lightning network.',
		duration: 'Aug 2023'
	},
	{
		projectTitle: 'Programmatic NFTs',
		hackathonTitle: 'Web3 Gaming Week 2023',
		githubLink: 'https://github.com/marcuspang/programmatic-nfts',
		websiteLink: 'https://programmatic-nfts.vercel.app',
		duration: 'Jul 2023',
		description: 'Introduced new ERC6551 standard to allow for modifiable NFT metadata on-chain.'
	},
	{
		projectTitle: 'Account Abstraction Builder',
		hackathonTitle: 'ETHGlobal Tokyo 2023',
		githubLink: 'https://github.com/marcuspang/account-abstraction-builder',
		websiteLink: 'https://account-abstraction-builder.vercel.app',
		description:
			'Won some pool prizes.\nDrag and drop interface to create account abstraction rules, and bundles them into a Chrome extension.',
		duration: 'Apr 2023'
	},
	{
		projectTitle: 'DevFi',
		hackathonTitle: 'Solana Grizzlython 2023',
		githubLink: 'https://github.com/solana-devfi',
		// websiteLink: 'https://devfi-protocol.netlify.app',
		duration: 'Mar 2023',
		description: 'Bounty system for open-source projects on GitHub without prior wallet setup.'
	},
	{
		projectTitle: 'BountiFi',
		hackathonTitle: 'dotGlobal Polkadot Hackathon 2023',
		githubLink: 'https://github.com/polkadot-bountifi',
		// websiteLink: 'https://bountifi.netlify.app',
		duration: 'Mar 2023',
		description: 'Bounty system for artists.'
	},
	{
		projectTitle: 'Alfred Protocol',
		hackathonTitle: 'Polygon @ the Pit 2023',
		githubLink: 'https://github.com/Alfred-Protocol',
		// websiteLink: 'https://polygon-savings-rate.netlify.app',
		duration: 'Feb 2023',
		description: 'Platform to entrust funds with fund managers, trading on UniswapV3 positions'
	},
	{
		projectTitle: 'DeCoop',
		hackathonTitle: 'Crypto.com Hackathon 2022',
		githubLink: 'https://github.com/marcuspang/decoop',
		websiteLink: 'https://decoop.vercel.app',
		description:
			'Won 1st prize.\nLending pools for micro-finance use-cases, built a Telegram bot + custom dApp to handle repayments.',
		duration: 'Oct 2022'
	},
	{
		projectTitle: 'wentoken',
		hackathonTitle: 'NUS FinTech Hackathon 2022',
		githubLink: 'https://github.com/marcuspang/wentoken',
		websiteLink: 'https://wentoken.vercel.app',
		description: 'Won 1st prize.\nTCG-style NFT marketplace.',
		duration: 'Sep 2022'
	},
	{
		projectTitle: '101-Daomations',
		hackathonTitle: 'Hack and Roll 2022',
		githubLink: 'https://github.com/tanyonghe/101-DAOmatians',
		websiteLink: 'https://101-daomatians.vercel.app',
		duration: 'Jan 2022',
		description: 'DAO analytics tool built with Snapshot.'
	},
	{
		projectTitle: 'Learn Together',
		hackathonTitle: 'LifeHack 2021',
		githubLink: 'https://github.com/mazx4960/learntogether',
		// websiteLink: 'https://learntogether2021.herokuapp.com',
		duration: 'Mar 2022',
		description: 'Social platform for online courses.'
	}
];
