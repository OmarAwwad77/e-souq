import styled, { css } from 'styled-components';
import MediaQueries from '../../media-queries';

export const billingFormStyles = css`
	gap: 1rem;
	grid-template-areas:
		'title title'
		'divider divider'
		'firstNameLabel lastNameLabel'
		'firstName lastName'
		'countryLabel countryLabel'
		'country country'
		'streetAddressLabel streetAddressLabel'
		'streetAddress streetAddress'
		'cityLabel cityLabel'
		'city city'
		'stateLabel stateLabel'
		'state state'
		'zipLabel zipLabel'
		'zip zip'
		'phoneLabel phoneLabel'
		'phone phone'
		'emailLabel emailLabel'
		'email email';

	${MediaQueries.BREAK_POINT_470_PX(css`
		grid-template-areas:
			'title title'
			'divider divider'
			'firstNameLabel firstNameLabel'
			'firstName firstName'
			'lastNameLabel lastNameLabel'
			'lastName lastName'
			'countryLabel countryLabel'
			'country country'
			'streetAddressLabel streetAddressLabel'
			'streetAddress streetAddress'
			'cityLabel cityLabel'
			'city city'
			'stateLabel stateLabel'
			'state state'
			'zipLabel zipLabel'
			'zip zip'
			'phoneLabel phoneLabel'
			'phone phone'
			'emailLabel emailLabel'
			'email email';
	`)}
`;

export const Header = styled.header`
	position: relative;
	height: 14rem;
	background-color: #2c2c2c;

	&:before {
		content: '${(p: { headerTitle: string }) => p.headerTitle}';
		position: absolute;
		${(p) => p.theme.mixins.centerElements};
		font-family: ${(p) => p.theme.fonts.zilla};
		font-size: 2.4rem;
        text-transform: uppercase;
        letter-spacing: .2rem;
		color: #fff;
	}
`;

export const BillingFormWrapper = styled.div`
	width: 60%;
	margin-bottom: ${(p) => p.theme.spacer.S};
	${MediaQueries.BREAK_POINT_720_PX(css`
		width: 100%;
	`)};
`;
