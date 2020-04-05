import adidasNmdUrl from '../../assets/shop/adidas-nmd.png';
import adidasYeezyUrl from '../../assets/shop/yeezy.png';
import blackConverseUrl from '../../assets/shop/black-converse.png';
import whiteNikeUrl from '../../assets/shop/white-nike-high-tops.png';
import nikeRed from '../../assets/shop/nikes-red.png';
import nikeBrown from '../../assets/shop/nike-brown.png';
import nikeFunky from '../../assets/shop/nike-funky.png';
import timberlands from '../../assets/shop/timberlands.png';

import brownBrimUrl from '../../assets/shop/brown-brim.png';
import blueBeanieUrl from '../../assets/shop/blue-beanie.png';
import brownCowboy from '../../assets/shop/brown-cowboy.png';
import greyBrim from '../../assets/shop/grey-brim.png';

import blueTankTopUrl from '../../assets/shop/blue-tank.png';
import floralBlouseUrl from '../../assets/shop/floral-blouse.png';
import floralSkirtUrl from '../../assets/shop/floral-skirt.png';
import redDressUrl from '../../assets/shop/red-polka-dot-dress.png';

import camoVestUrl from '../../assets/shop/camo-vest.png';
import floralShirt from '../../assets/shop/floral-shirt.png';
import longSleeveUrl from '../../assets/shop/long-sleeve.png';
import pinkShirt from '../../assets/shop/pink-shirt.png';

import { CollectionItemType } from '../../components/collection-item/collection-item';

interface DataType {
	[key: string]: CollectionItemType[];
}

export const shopData: DataType = {
	sneakers: [
		{
			name: 'Adidas NMD',
			price: 250,
			url: adidasNmdUrl,
		},
		{
			name: 'Adidas Yeezy',
			price: 210,
			url: adidasYeezyUrl,
		},
		{
			name: 'Black Converse',
			price: 290,
			url: blackConverseUrl,
		},
		{
			name: 'Nike White AirForce',
			price: 300,
			url: whiteNikeUrl,
		},
		{
			name: 'Nike Red High Tops',
			price: 310,
			url: nikeRed,
		},
		{
			name: 'Nike Brown High Tops',
			price: 310,
			url: nikeBrown,
		},
		{
			name: 'Air Jordan Limited',
			price: 270,
			url: nikeFunky,
		},
		{
			name: 'Timberlands',
			price: 260,
			url: timberlands,
		},
	],

	hats: [
		{
			name: 'Brown Brim',
			price: 30,
			url: brownBrimUrl,
		},
		{
			name: 'Blue Beanie',
			price: 27,
			url: blueBeanieUrl,
		},
		{
			name: 'Brown Cowboy',
			price: 38,
			url: brownCowboy,
		},
		{
			name: 'Grey Brim',
			price: 25,
			url: greyBrim,
		},
	],

	womens: [
		{
			name: 'Blue Tanktop',
			price: 145,
			url: blueTankTopUrl,
		},
		{
			name: 'Floral Blouse',
			price: 159,
			url: floralBlouseUrl,
		},
		{
			name: 'Floral Dress',
			price: 180,
			url: floralSkirtUrl,
		},
		{
			name: 'Red Dots Dress',
			price: 193,
			url: redDressUrl,
		},
	],

	mens: [
		{
			name: 'Camo Down Vest',
			price: 143,
			url: camoVestUrl,
		},
		{
			name: 'Floral T-shirt',
			price: 93,
			url: floralShirt,
		},
		{
			name: 'Black & White Longsleeve',
			price: 55,
			url: longSleeveUrl,
		},
		{
			name: 'Pink T-shirt',
			price: 64,
			url: pinkShirt,
		},
	],
};

const sneakers: CollectionItemType[] = [
	{
		name: 'Adidas NMD',
		price: 250,
		url: adidasNmdUrl,
	},
	{
		name: 'Adidas Yeezy',
		price: 210,
		url: adidasYeezyUrl,
	},
	{
		name: 'Black Converse',
		price: 290,
		url: blackConverseUrl,
	},
	{
		name: 'Nike White AirForce',
		price: 300,
		url: whiteNikeUrl,
	},
	{
		name: 'Nike Red High Tops',
		price: 310,
		url: nikeRed,
	},
	{
		name: 'Nike Brown High Tops',
		price: 310,
		url: nikeBrown,
	},
	{
		name: 'Air Jordan Limited',
		price: 270,
		url: nikeFunky,
	},
	{
		name: 'Timberlands',
		price: 260,
		url: timberlands,
	},
];

const hats: CollectionItemType[] = [
	{
		name: 'Brown Brim',
		price: 30,
		url: brownBrimUrl,
	},
	{
		name: 'Blue Beanie',
		price: 27,
		url: blueBeanieUrl,
	},
	{
		name: 'Brown Cowboy',
		price: 38,
		url: brownCowboy,
	},
	{
		name: 'Grey Brim',
		price: 25,
		url: greyBrim,
	},
];

const womens: CollectionItemType[] = [
	{
		name: 'Blue Tanktop',
		price: 145,
		url: blueTankTopUrl,
	},
	{
		name: 'Floral Blouse',
		price: 159,
		url: floralBlouseUrl,
	},
	{
		name: 'Floral Dress',
		price: 180,
		url: floralSkirtUrl,
	},
	{
		name: 'Red Dots Dress',
		price: 193,
		url: redDressUrl,
	},
];

const mens: CollectionItemType[] = [
	{
		name: 'Camo Down Vest',
		price: 143,
		url: camoVestUrl,
	},
	{
		name: 'Floral T-shirt',
		price: 93,
		url: floralShirt,
	},
	{
		name: 'Black & White Longsleeve',
		price: 55,
		url: longSleeveUrl,
	},
	{
		name: 'Pink T-shirt',
		price: 64,
		url: pinkShirt,
	},
];
