import React from 'react';
import {
	CategoriesWrapper,
	Category,
	CategoryContainer,
	Button
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
				<Button>Mens</Button>
			</CategoryContainer>
			<CategoryContainer>
				<Category url={wonmensImageUrl} />
				<Button>womens</Button>
			</CategoryContainer>
			<CategoryContainer>
				<Category url={sneakersImageUrl} />
				<Button>sneakers</Button>
			</CategoryContainer>
			<CategoryContainer>
				<Category url={hatsImageUrl} />
				<Button>hats</Button>
			</CategoryContainer>
		</CategoriesWrapper>
	);
};

export default CategoriesContainer;
