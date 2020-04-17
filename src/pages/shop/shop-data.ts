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
			url:
				'https://firebasestorage.googleapis.com/v0/b/e-souq.appspot.com/o/shop%2Fsneakers%2Fadidas-nmd.png?alt=media&token=0446bf26-09b1-4ac9-874c-2bdec2acb063',
		},
		{
			id: 1,
			name: 'Adidas Yeezy',
			price: 210,
			url:
				'https://firebasestorage.googleapis.com/v0/b/e-souq.appspot.com/o/shop%2Fsneakers%2Fyeezy.png?alt=media&token=4eb9f1c9-e5c3-48e3-96c7-7513caddd747',
		},
		{
			id: 2,
			name: 'Black Converse',
			price: 290,
			url:
				'https://firebasestorage.googleapis.com/v0/b/e-souq.appspot.com/o/shop%2Fsneakers%2Fblack-converse.png?alt=media&token=146a70ce-1c87-46b5-ab65-8fdff838f0c5',
		},
		{
			id: 3,
			name: 'Nike White AirForce',
			price: 300,
			url:
				'https://firebasestorage.googleapis.com/v0/b/e-souq.appspot.com/o/shop%2Fsneakers%2Fwhite-nike-high-tops.png?alt=media&token=c72a3a92-c03b-4250-a3f1-a66999c07789',
		},
		{
			id: 4,
			name: 'Nike Red High Tops',
			price: 310,
			url:
				'https://firebasestorage.googleapis.com/v0/b/e-souq.appspot.com/o/shop%2Fsneakers%2Fnikes-red.png?alt=media&token=ff9202bc-77a2-4f04-9375-f5f961d878d6',
		},
		{
			id: 5,
			name: 'Nike Brown High Tops',
			price: 310,
			url:
				'https://firebasestorage.googleapis.com/v0/b/e-souq.appspot.com/o/shop%2Fsneakers%2Fnike-brown.png?alt=media&token=77e3ca53-8c02-433c-bbd7-a85975ea732d',
		},
		{
			id: 6,
			name: 'Air Jordan Limited',
			price: 270,
			url:
				'https://firebasestorage.googleapis.com/v0/b/e-souq.appspot.com/o/shop%2Fsneakers%2Fnike-funky.png?alt=media&token=f2a6fca9-f721-4c13-b881-af53399b8e0e',
		},
		{
			id: 7,
			name: 'Timberlands',
			price: 260,
			url:
				'https://firebasestorage.googleapis.com/v0/b/e-souq.appspot.com/o/shop%2Fsneakers%2Ftimberlands.png?alt=media&token=65f5e9d3-22dc-4454-9531-f891154d4cc8',
		},
	],

	hats: [
		{
			id: 8,
			name: 'Brown Brim',
			price: 30,
			url:
				'https://firebasestorage.googleapis.com/v0/b/e-souq.appspot.com/o/shop%2Fhats%2Fbrown-brim.png?alt=media&token=3cb0901c-35c3-493a-b83b-81eece090997',
		},
		{
			id: 9,
			name: 'Blue Beanie',
			price: 27,
			url:
				'https://firebasestorage.googleapis.com/v0/b/e-souq.appspot.com/o/shop%2Fhats%2Fblue-beanie.png?alt=media&token=425b1e58-ee4a-4a5f-90be-3b9430413ca4',
		},
		{
			id: 10,
			name: 'Brown Cowboy',
			price: 38,
			url:
				'https://firebasestorage.googleapis.com/v0/b/e-souq.appspot.com/o/shop%2Fhats%2Fbrown-cowboy.png?alt=media&token=e125b614-9841-4b27-a2ab-8635f402806b',
		},
		{
			id: 11,
			name: 'Grey Brim',
			price: 25,
			url:
				'https://firebasestorage.googleapis.com/v0/b/e-souq.appspot.com/o/shop%2Fhats%2Fgrey-brim.png?alt=media&token=c6a8ca85-4208-4051-8da7-c7854cd63047',
		},
		{
			id: 12,
			name: 'Blue Snapback',
			price: 20,
			url:
				'https://firebasestorage.googleapis.com/v0/b/e-souq.appspot.com/o/shop%2Fhats%2Fblue-snapback.png?alt=media&token=7c33b430-04f0-4e47-9873-039e8a9f95d2',
		},
		{
			id: 13,
			name: 'Green Beanie',
			price: 23,
			url:
				'https://firebasestorage.googleapis.com/v0/b/e-souq.appspot.com/o/shop%2Fhats%2Fgreen-beanie.png?alt=media&token=ce8f2091-4ec1-4af1-bf62-8e46ee3b5927',
		},
		{
			id: 14,
			name: 'Palm Tree Cap',
			price: 31,
			url:
				'https://firebasestorage.googleapis.com/v0/b/e-souq.appspot.com/o/shop%2Fhats%2Fpalm-tree-cap.png?alt=media&token=f209a603-4438-4c69-b7ab-7d32d7879454',
		},
		{
			id: 15,
			name: 'Red Beanie',
			price: 38,
			url:
				'https://firebasestorage.googleapis.com/v0/b/e-souq.appspot.com/o/shop%2Fhats%2Fred-beanie.png?alt=media&token=8f6443c2-57d2-4f05-94ef-4599fb4f0a6c',
		},
	],

	womens: [
		{
			id: 16,
			name: 'Blue Tanktop',
			price: 145,
			url:
				'https://firebasestorage.googleapis.com/v0/b/e-souq.appspot.com/o/shop%2Fwomens%2Fblue-tank.png?alt=media&token=50ecbd47-82dd-44a3-8fd0-391610211f3a',
		},
		{
			id: 17,
			name: 'Floral Blouse',
			price: 159,
			url:
				'https://firebasestorage.googleapis.com/v0/b/e-souq.appspot.com/o/shop%2Fwomens%2Ffloral-blouse.png?alt=media&token=1e6f81ab-3f7d-4516-9863-2d6efebf63d3',
		},
		{
			id: 18,
			name: 'Floral Dress',
			price: 180,
			url:
				'https://firebasestorage.googleapis.com/v0/b/e-souq.appspot.com/o/shop%2Fwomens%2Ffloral-skirt.png?alt=media&token=192e89ce-b9d5-4c1f-9adc-c74687cdf683',
		},
		{
			id: 19,
			name: 'Red Dots Dress',
			price: 193,
			url:
				'https://firebasestorage.googleapis.com/v0/b/e-souq.appspot.com/o/shop%2Fwomens%2Fred-polka-dot-dress.png?alt=media&token=555933d3-83ed-4044-8251-7a83ddde0476',
		},
		{
			id: 20,
			name: 'Striped Sweater',
			price: 203,
			url:
				'https://firebasestorage.googleapis.com/v0/b/e-souq.appspot.com/o/shop%2Fwomens%2Fstriped-sweater.png?alt=media&token=1750c69b-2399-4a54-a427-20dbc108a0ce',
		},
		{
			id: 21,
			name: 'Yellow Track Suit',
			price: 151,
			url:
				'https://firebasestorage.googleapis.com/v0/b/e-souq.appspot.com/o/shop%2Fwomens%2Fyellow-track-suit.png?alt=media&token=3e617e91-bea3-4377-bfa1-53957355a9c8',
		},
		{
			id: 22,
			name: 'White Blouse',
			price: 208,
			url:
				'https://firebasestorage.googleapis.com/v0/b/e-souq.appspot.com/o/shop%2Fwomens%2Fwhite-vest.png?alt=media&token=5a00fd59-069b-4e53-945f-1e0d17f5194e',
		},
	],

	mens: [
		{
			id: 23,
			name: 'Camo Down Vest',
			price: 143,
			url:
				'https://firebasestorage.googleapis.com/v0/b/e-souq.appspot.com/o/shop%2Fmens%2Fcamo-vest.png?alt=media&token=5d05f3e7-f39e-451c-b53b-d71415484339',
		},
		{
			id: 24,
			name: 'Floral T-shirt',
			price: 93,
			url:
				'https://firebasestorage.googleapis.com/v0/b/e-souq.appspot.com/o/shop%2Fmens%2Ffloral-shirt.png?alt=media&token=3e36e6e1-4d31-4e26-b324-43a3e9cc5068',
		},
		{
			id: 25,
			name: 'Black & White Longsleeve',
			price: 55,
			url:
				'https://firebasestorage.googleapis.com/v0/b/e-souq.appspot.com/o/shop%2Fmens%2Flong-sleeve.png?alt=media&token=51d74d81-227f-4cc0-a20d-23d00c290009',
		},
		{
			id: 26,
			name: 'Pink T-shirt',
			price: 64,
			url:
				'https://firebasestorage.googleapis.com/v0/b/e-souq.appspot.com/o/shop%2Fmens%2Fpink-shirt.png?alt=media&token=d5a32ecc-2f3e-4776-a775-e206b6340d13',
		},
		{
			id: 27,
			name: 'Burgundy T-shirt',
			price: 94,
			url:
				'https://firebasestorage.googleapis.com/v0/b/e-souq.appspot.com/o/shop%2Fmens%2Fpolka-dot-shirt.png?alt=media&token=6f92b94e-adb7-46fe-9433-0d113b5a53c0',
		},
		{
			id: 28,
			name: 'Jean Long Sleeve',
			price: 76,
			url:
				'https://firebasestorage.googleapis.com/v0/b/e-souq.appspot.com/o/shop%2Fmens%2Froll-up-jean-shirt.png?alt=media&token=f3d55a3f-5abe-4c42-be0e-456e25d7e89a',
		},
	],
};
