import React from 'react';
import {
	CategoriesWrapper,
	Category,
	CategoryContainer,
} from './categories-container.styles';
import { Link } from '../nav-items/nav-items.styles';
import { ButtonAnimated } from './categories-container.springs';

import mensImageUrl from '../../assets/mens.jpg';
import wonmensImageUrl from '../../assets/womens.jpg';
import sneakersImageUrl from '../../assets/sneakers.jpg';
import hatsImageUrl from '../../assets/hats.jpg';

const CategoriesContainer = () => {
	return (
		<CategoriesWrapper>
			<CategoryContainer>
				<Category url={mensImageUrl} />
				<Link to='/shop/mens'>
					<ButtonAnimated>Mens</ButtonAnimated>
				</Link>
			</CategoryContainer>
			<CategoryContainer>
				<Category url={wonmensImageUrl} />
				<Link to='/shop/womens'>
					<ButtonAnimated>womens</ButtonAnimated>
				</Link>
			</CategoryContainer>
			<CategoryContainer>
				<Category url={sneakersImageUrl} />
				<Link to='/shop/sneakers'>
					<ButtonAnimated>sneakers</ButtonAnimated>
				</Link>
			</CategoryContainer>
			<CategoryContainer>
				<Category url={hatsImageUrl} />
				<Link to='/shop/hats'>
					<ButtonAnimated>hats</ButtonAnimated>
				</Link>
			</CategoryContainer>
		</CategoriesWrapper>
	);
};

export default CategoriesContainer;
