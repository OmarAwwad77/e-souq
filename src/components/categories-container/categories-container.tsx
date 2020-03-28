import React from 'react';
import {
	CategoriesWrapper,
	Category,
	CategoryContainer,
	CategoryButton
} from './categories-container.styles';

import mensImageUrl from '../../assets/mens.jpg';
import wonmensImageUrl from '../../assets/womens.jpg';
import sneakersImageUrl from '../../assets/sneakers.jpg';
import hatsImageUrl from '../../assets/hats.jpg';

const CategoriesContainer = () => {
	return (
		<CategoriesWrapper>
			<CategoryContainer>
				<Category url={mensImageUrl} />
				<CategoryButton>Mens</CategoryButton>
			</CategoryContainer>
			<CategoryContainer>
				<Category url={wonmensImageUrl} />
				<CategoryButton>womens</CategoryButton>
			</CategoryContainer>
			<CategoryContainer>
				<Category url={sneakersImageUrl} />
				<CategoryButton>sneakers</CategoryButton>
			</CategoryContainer>
			<CategoryContainer>
				<Category url={hatsImageUrl} />
				<CategoryButton>hats</CategoryButton>
			</CategoryContainer>
		</CategoriesWrapper>
	);
};

export default CategoriesContainer;
