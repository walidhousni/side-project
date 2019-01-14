import React from 'react';

const CloseLight = props => (
	<svg width={20} height={20} {...props}>
		<title>F808AEBC-7E29-41FF-80C1-238B4BB62A66</title>
		<defs>
			<path
				id="prefix__a"
				d="M18 3.6L16.4 2 10 8.4 3.6 2 2 3.6 8.4 10 2 16.4 3.6 18l6.4-6.4 6.4 6.4 1.6-1.6-6.4-6.4z"
			/>
		</defs>
		<g fill="none" fillRule="evenodd">
			<mask id="prefix__b" fill="#fff">
				<use xlinkHref="#prefix__a" />
			</mask>
			<use fill="#000" xlinkHref="#prefix__a" />
			<g mask="url(#prefix__b)" fill="#FFF">
				<path d="M0 0h20v20H0z" />
			</g>
			<path mask="url(#prefix__b)" d="M0 0h20v20H0z" />
		</g>
	</svg>
);

export default CloseLight;
