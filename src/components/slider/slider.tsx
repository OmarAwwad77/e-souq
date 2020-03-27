import React, { useState, useEffect, useCallback } from 'react';
import {
	images,
	AnimType,
	SliderText,
	ArrowBox,
	Image,
	LeftArrow,
	RightArrow,
	SliderWrapper,
	imagesText
} from './sliderStyles';

interface AnimState {
	enter: number;
	leave: number;
	counter: number;
}

const initialState = {
	enter: 0,
	leave: 0,
	counter: 0
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
				counter: newCounter
			});
		},
		[animState.counter]
	);

	useEffect(() => {
		const intervalId = setInterval(() => {
			changeImage('forward');
		}, 6000);

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

			<SliderText>
				{imagesText.map((text, i) => animState.counter === i && text)}
			</SliderText>
		</SliderWrapper>
	);
};

export default Slider;

/* Todo (27/3)
	1- working arrows 				(done)
	2- slider text anim             (done)
	3- pointer navlinks and logo 	(done)
	4- restructure files (styles)  	(done)
	5- create gridLayout            (done)
	6- footer 						(done)

*/
