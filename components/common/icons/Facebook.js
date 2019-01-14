import React from 'react';

const Facebook = props => (
	<svg width={20} height={20} {...props}>
		<defs>
			<path
				id="facebook_svg__a"
				d="M13.75 20v-6.875h1.875L16.875 10H13.75V7.5c0-.69.56-.625 1.25-.625h1.25V3.75h-2.5A3.75 3.75 0 0 0 10 7.5V10H7.5v3.125H10V20H2.5A2.503 2.503 0 0 1 0 17.5v-15C0 1.121 1.121 0 2.5 0h15C18.879 0 20 1.121 20 2.5v15c0 1.379-1.121 2.5-2.5 2.5h-3.75z"
			/>
		</defs>
		<g fill="none" fillRule="evenodd">
			<mask id="facebook_svg__b" fill="#fff">
				<use xlinkHref="#facebook_svg__a" />
			</mask>
			<use fill="#000" xlinkHref="#facebook_svg__a" />
			<g fill="#FFF" mask="url(#facebook_svg__b)">
				<path d="M0 0h20v20H0z" />
			</g>
			<path d="M0 0h20v20H0z" mask="url(#facebook_svg__b)" />
		</g>
	</svg>
);

export default Facebook;
