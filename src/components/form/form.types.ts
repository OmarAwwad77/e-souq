import { SetStateAction, Dispatch } from 'react';
import {
	FlattenInterpolation,
	ThemeProps,
	DefaultTheme
} from 'styled-components';

export type GridCss = FlattenInterpolation<ThemeProps<DefaultTheme>>;

export type ValidationType = {
	required?: boolean;
	maxLen?: number;
	minLen?: number;
	shouldMatch?: string;
	type?: 'email' | 'phoneNo' | 'text' | 'number';
};

export type FieldsType = {
	type: 'text' | 'select';
	label: string;
	displayLabel?: string;
	value: string | { value: string; label: string };
	options?: { value: string; label: string }[];
	isValid?: boolean;
	errorMessage?: null | string;
	validation?: ValidationType;
};

export interface FormStateType {
	fields: FieldsType[];
	isFormValid: boolean;
}

export interface FormPropsType {
	gridCss: GridCss;
	state: FormStateType;
	setState: Dispatch<SetStateAction<FormStateType>>;
}
