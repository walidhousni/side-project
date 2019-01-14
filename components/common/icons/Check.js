import React from 'react';

const Check = props => (
	<svg width={20} height={20} {...props}>
		<defs>
			<path id="check_svg__a" d="M6.356 14.03L1.615 9.288 0 10.891l6.356 6.356L20 3.603 18.397 2z" />
		</defs>
		<g fill="none" fillRule="evenodd">
			<mask id="check_svg__b" fill="#fff">
				<use xlinkHref="#check_svg__a" />
			</mask>
			<use fill="#000" xlinkHref="#check_svg__a" />
			<g fill="#000" mask="url(#check_svg__b)">
				<path d="M0 0h20v20H0z" />
			</g>
			<path d="M0 0h20v20H0z" mask="url(#check_svg__b)" />
		</g>
	</svg>
);

export default Check;
