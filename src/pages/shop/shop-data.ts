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

import { CollectionItem as CollectionItemType } from '../../components/../redux/cart/cart.types';

interface DataType {
	[key: string]: CollectionItemType[];
}

export const shopData: DataType = {
	sneakers: [
		{
			id: 0,
			name: 'Adidas NMD',
			price: 250,
			url: adidasNmdUrl,
		},
		{
			id: 1,
			name: 'Adidas Yeezy',
			price: 210,
			url: adidasYeezyUrl,
		},
		{
			id: 2,
			name: 'Black Converse',
			price: 290,
			url: blackConverseUrl,
		},
		{
			id: 3,
			name: 'Nike White AirForce',
			price: 300,
			url: whiteNikeUrl,
		},
		{
			id: 4,
			name: 'Nike Red High Tops',
			price: 310,
			url: nikeRed,
		},
		{
			id: 5,
			name: 'Nike Brown High Tops',
			price: 310,
			url: nikeBrown,
		},
		{
			id: 6,
			name: 'Air Jordan Limited',
			price: 270,
			url: nikeFunky,
		},
		{
			id: 7,
			name: 'Timberlands',
			price: 260,
			url: timberlands,
		},
	],

	hats: [
		{
			id: 8,
			name: 'Brown Brim',
			price: 30,
			url: brownBrimUrl,
		},
		{
			id: 9,
			name: 'Blue Beanie',
			price: 27,
			url: blueBeanieUrl,
		},
		{
			id: 10,
			name: 'Brown Cowboy',
			price: 38,
			url: brownCowboy,
		},
		{
			id: 11,
			name: 'Grey Brim',
			price: 25,
			url: greyBrim,
		},
	],

	womens: [
		{
			id: 12,
			name: 'Blue Tanktop',
			price: 145,
			url: blueTankTopUrl,
		},
		{
			id: 13,
			name: 'Floral Blouse',
			price: 159,
			url: floralBlouseUrl,
		},
		{
			id: 14,
			name: 'Floral Dress',
			price: 180,
			url: floralSkirtUrl,
		},
		{
			id: 15,
			name: 'Red Dots Dress',
			price: 193,
			url: redDressUrl,
		},
	],

	mens: [
		{
			id: 16,
			name: 'Camo Down Vest',
			price: 143,
			url: camoVestUrl,
		},
		{
			id: 17,
			name: 'Floral T-shirt',
			price: 93,
			url: floralShirt,
		},
		{
			id: 18,
			name: 'Black & White Longsleeve',
			price: 55,
			url: longSleeveUrl,
		},
		{
			id: 19,
			name: 'Pink T-shirt',
			price: 64,
			url: pinkShirt,
		},
	],
};
