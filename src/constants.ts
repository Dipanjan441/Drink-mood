const NavbarItems = [
	{
		id: "cocktails",
		title: "Cocktails",
	},
	{
		id: "about",
		title: "About Us",
	},
	{
		id: "art",
		title: "The Art",
	},
	{
		id: "promo",
		title: "Promo",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const cocktailLists = [
	{
		name: "Chapel Hill Shiraz",
		country: "AU",
		detail: "Battle",
		price: "₹149",
	},
	{
		name: "Caten Malbee",
		country: "AU",
		detail: "Battle",
		price: "₹399",
	},
	{
		name: "Rhino Pale Ale",
		country: "CA",
		detail: "750 ml",
		price: "₹299",
	},
	{
		name: "Irish Guinness",
		country: "IE",
		detail: "600 ml",
		price: "₹299",
	},
];

const mockTailLists = [
	{
		name: "Tropical Bloom",
		country: "US",
		detail: "Battle",
		price: "₹149",
	},
	{
		name: "Passionfruit Mint",
		country: "US",
		detail: "Battle",
		price: "₹299",
	},
	{
		name: "Citrus Glow",
		country: "CA",
		detail: "750 ml",
		price: "₹199",
	},
	{
		name: "Lavender Fizz",
		country: "IE",
		detail: "600 ml",
		price: "₹249",
	},
];

const profileLists = [
	{
		imgPath: "images/profile1.png",
	},
	{
		imgPath: "images/profile2.png",
	},
	{
		imgPath: "images/profile3.png",
	},
	{
		imgPath: "images/profile4.png",
	},
];

const featureLists = [
	"Perfectly balanced blends",
	"Garnished to perfection",
	"Ice-cold every time",
	"Expertly shaken & stirred",
];

const goodLists = [
	"Handpicked ingredients",
	"Signature techniques",
	"Bartending artistry in action",
	"Freshly muddled flavors",
];

const storeInfo = {
	heading: "Where to Find Us",
	address: "456, Raq Blvd. #404, Los Angeles, CA 90210",
	contact: {
		phone: "(555) 987-6543",
		email: "hello@drinkmood.com",
	},
};

const openingHours = [
	{ day: "Mon–Thu", time: "11:00am – 12am" },
	{ day: "Fri", time: "11:00am – 2am" },
	{ day: "Sat", time: "9:00am – 2am" },
	{ day: "Sun", time: "9:00am – 1am" },
];

const socials = [
	{
		name: "Linkedin",
		icon: "images/linkdin.png",
		url: "https://linkedin.com/in/dipanjan-tripathi-652a1a207",
	},
	{
		name: "Github",
		icon: "images/github.png",
		url: "https://github.com/dipanjan441",
	},
	{
		name: "Instagram",
		icon: "images/instagram.jfif",
		url: "https://instagram.com/im_dip.10",
	},
	{
		name: "Facebook",
		icon: "images/facebook.png",
		url: "https://facebook.com/dipanjan.tripathi",
	},
	{
		name: "Youtube",
		icon: "images/youtube.png",
		url: "https://www.youtube.com/@codelens10",
	}
];

const sliderLists = [
	{
		id: 1,
		name: "Classic Mojito",
		image: "images/drink1.png",
		title: "Simple Ingredients, Bold Flavor",
		description:
			"Made with tequila, lime juice, and orange liqueur, the Margarita is easy to make and full of character. Add a salted rim for the perfect drink on summer nights.",
	},
	{
		id: 2,
		name: "Raspberry Mojito",
		image: "images/drink2.png",
		title: "A Zesty Classic That Never Fails",
		description:
			"The Margarita is a classic that balances tangy lime, smooth tequila, and a touch of sweetness. Shaken, frozen, or on the rocks—it’s always crisp & refreshing.",
	},
	{
		id: 3,
		name: "Violet Breeze",
		image: "images/drink3.png",
		title: "Simple Ingredients, Bold Flavor",
		description:
			"Made with tequila, lime juice, and orange liqueur, the Margarita is easy to make and full of character. Add a salted rim for the perfect drink on summer nights.",
	},
	{
		id: 4,
		name: "Curacao Mojito",
		image: "images/drink4.png",
		title: "Crafted With Care, Poured With Love",
		description:
			"Each cocktail is made with fresh ingredients and a passion for perfecting every pour, whether you're celebrating or simply relaxing.",
	},
];

//promo
const myServices = [
	{
		id: 1,
		title: "Custom Web Development",
	},
	{
		id: 2,
		title: "GSAP & 3D Animations",
	},
	{
		id: 3,
		title: "Interactive UI/UX Design",
	},
	{
		id: 4,
		title: "Performance Optimization",
	},
	{
		id: 5,
		title: "SEO & Marketing",
	},
	{
		id: 6,
		title: "Website Maintenance",
	},
	{
		id: 7,
		title: "Dashboard Development",
	},
	{
		id: 8,
		title: "PowerBI Development",
	}
]

const contactMailWith = "mailto:iamdip441@gmail.com?subject=Project Inquiry&body=Hi, I'm interested in working with you on a project....found you from Drink Mood";

export {
	NavbarItems,
	cocktailLists,
	mockTailLists,
	profileLists,
	featureLists,
	goodLists,
	openingHours,
	storeInfo,
	socials,
	sliderLists,
	myServices,
	contactMailWith,
};