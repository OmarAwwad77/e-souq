import React, { ChangeEvent } from 'react';

import {
	FormWrapper,
	Label,
	Required,
	Title,
	titleGridArea,
	Divider,
	dividerGridArea,
	Select
} from './form.styles';
import FormInput from './form-input/form-input';

import {
	FieldsType,
	FormPropsType,
	FormStateType,
	ValidationType
} from './form.types';

const From: React.FC<FormPropsType> = ({ gridCss, state, setState }) => {
	const selectHandler = (selectedOption: { value: string; label: string }) => {
		const fieldToUpdate = state.fields.find(f => f.type === 'select');
		console.log(fieldToUpdate);
		const newState: FormStateType = {
			...state,
			fields: [
				...state.fields.filter(field => field.type !== 'select'),
				{
					...fieldToUpdate!,
					value: selectedOption
				}
			]
		};
		console.log(newState);

		setState(newState);
	};

	const inputOnchangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		const fieldId = e.target.id;
		const fieldValue = e.target.value;
		const fieldToUpdate = state.fields.find(field => field.label === fieldId);
		const errorMessage = checkFieldValidity(
			fieldValue,
			fieldToUpdate!.validation!
		);
		const isValid = errorMessage ? false : true;

		const fieldsUpdated: FieldsType[] = [
			...state.fields.filter(field => field.label !== fieldId),
			{
				...fieldToUpdate!,
				value: fieldValue,
				isValid,
				errorMessage
			}
		];
		const isFormValidUpdated = checkFormValidity(fieldsUpdated);

		const newState: FormStateType = {
			fields: fieldsUpdated,
			isFormValid: isFormValidUpdated
		};

		setState(newState);
	};

	return (
		<FormWrapper css={gridCss} onSubmit={e => e.preventDefault()}>
			<Title gridArea={titleGridArea}>Billing details</Title>
			<Divider gridArea={dividerGridArea} />
			{state.fields.map(field => {
				return (
					<React.Fragment key={field.label}>
						<Label htmlFor={field.label} gridArea={`${field.label}Label`}>
							{field.displayLabel ?? field.label}
							{field.validation?.required && <Required>*</Required>}
						</Label>
						{field.type === 'text' ? (
							<FormInput
								gridArea={field.label}
								id={field.label}
								onChange={inputOnchangeHandler}
								value={field.value as string}
								errorMessage={field.errorMessage!}
							/>
						) : (
							<Select
								gridArea={field.label}
								className='react-select-container'
								classNamePrefix='react-select'
								options={field.options}
								value={field.value}
								onChange={selectHandler}
							/>
						)}
					</React.Fragment>
				);
			})}
		</FormWrapper>
	);
};

export default From;

const checkFormValidity = (fieldsUpdated: FieldsType[]) => {
	let isFormValid = true;
	fieldsUpdated.map(field => {
		isFormValid = isFormValid && (field.isValid ?? true);
	});
	return isFormValid;
};

const checkFieldValidity = (
	val: string,
	validationObj: ValidationType
): null | string => {
	if (validationObj.required) {
		const isValid = val.trim() !== '';
		if (!isValid) return 'Required Field';
	} //

	if (validationObj.type === 'text') {
		const pattern = /^[a-z]*$/i;
		const isValid = pattern.test(val);
		if (!isValid) return 'Only Text Allowed';
	}

	if (validationObj.type === 'email') {
		const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
		const isValid = pattern.test(val);
		if (!isValid) return 'Invalid Email';
	}
	if (validationObj.type === 'phoneNo') {
		const pattern = /^\d+$/;
		const isValid = pattern.test(val);
		if (!isValid) return 'Invalid Phone Number';
	}

	if (validationObj.type === 'number') {
		const pattern = /^-?\d+\.?\d*$/;
		const isValid = pattern.test(val);
		if (!isValid) return 'Only Numbers Allowed';
	}

	if (validationObj.maxLen) {
		const isValid = val.length <= validationObj.maxLen;
		if (!isValid) return `Maximum ${validationObj.maxLen} Characters`;
	}
	if (validationObj.minLen) {
		const isValid = val.length >= validationObj.minLen;
		if (!isValid) return `Minimum ${validationObj.minLen} Characters`;
	}

	return null;
};
