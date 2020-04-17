import React, { useState, useEffect, useCallback } from 'react';
import { animated } from 'react-spring';

import {
	images,
	AnimType,
	SliderText,
	ArrowBox,
	Image,
	LeftArrow,
	RightArrow,
	SliderWrapper,
	imagesText,
} from './slider.styles';
import { SliderTextAnimated } from './slider.springs';

interface AnimState {
	enter: number;
	leave: number;
	counter: number;
}

const initialState = {
	enter: 0,
	leave: 0,
	counter: 0,
};

const Slider = () => {
	const [animState, setAnimState] = useState<AnimState>(initialState);

	const changeImage = useCallback(
		(direction: 'forward' | 'backward') => {
			const oldCounter = animState.counter;
			let newCounter: number;
			if (direction === 'backward') {
				animState.counter === 0
					? (newCounter = images.length - 1)
					: (newCounter = animState.counter - 1);
			} else {
				newCounter = (animState.counter + 1) % images.length;
			}

			setAnimState({
				leave: oldCounter,
				enter: newCounter,
				counter: newCounter,
			});
		},
		[animState.counter]
	);

	useEffect(() => {
		const intervalId = setInterval(() => {
			changeImage('forward');
		}, 5000);

		return () => {
			clearInterval(intervalId);
		};
	}, [changeImage]);

	const checkAnimType = (index: number): AnimType => {
		let animType: AnimType = 'none';
		if (index === animState.enter) {
			animType = 'in';
		} else if (index === animState.leave) {
			animType = 'out';
		}
		return animType;
	};

	return (
		<SliderWrapper>
			<ArrowBox isLeft={true}>
				<LeftArrow onClick={() => changeImage('backward')} />
			</ArrowBox>
			<ArrowBox isLeft={false}>
				<RightArrow onClick={() => changeImage('backward')} />
			</ArrowBox>
			{images.map((imgUrl, index) => (
				<Image key={index} image={imgUrl} fade={checkAnimType(index)} />
			))}

			<SliderTextAnimated>
				{imagesText.map((text, i) => animState.counter === i && text)}
			</SliderTextAnimated>

			{/* <SliderText>
					{imagesText.map((text, i) => animState.counter === i && text)}
				</SliderText> */}
		</SliderWrapper>
	);
};

export default Slider;
