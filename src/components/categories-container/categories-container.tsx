import React from 'react';
import {
	CategoriesWrapper,
	Category,
	CategoryContainer,
	Button,
} from './categories-container.styles';
import { Link } from '../header/header.styles';

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
					<Button>Mens</Button>
				</Link>
			</CategoryContainer>
			<CategoryContainer>
				<Category url={wonmensImageUrl} />
				<Link to='/shop/womens'>
					<Button>womens</Button>
				</Link>
			</CategoryContainer>
			<CategoryContainer>
				<Category url={sneakersImageUrl} />
				<Link to='/shop/sneakers'>
					<Button>sneakers</Button>
				</Link>
			</CategoryContainer>
			<CategoryContainer>
				<Category url={hatsImageUrl} />
				<Link to='/shop/hats'>
					<Button>hats</Button>
				</Link>
			</CategoryContainer>
		</CategoriesWrapper>
	);
};

export default CategoriesContainer;
