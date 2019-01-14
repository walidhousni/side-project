import React from 'react';

const Youtube = props => (
	<svg width={20} height={20} {...props}>
		<defs>
			<path
				id="youtube_svg__a"
				d="M19.654 5.252c-.244-1.068-1.114-1.856-2.162-1.974-2.48-.278-4.99-.28-7.489-.278-2.499-.001-5.01 0-7.49.278-1.046.118-1.916.906-2.16 1.974C.002 6.773 0 8.434 0 10c0 1.566 0 3.227.348 4.748.245 1.068 1.115 1.856 2.162 1.974C4.99 17 7.5 17.002 10 17c2.499.001 5.009 0 7.488-.278 1.047-.118 1.917-.906 2.162-1.974C20 13.226 20 11.566 20 10c0-1.566.003-3.227-.346-4.748zM7.42 13.118V6.475l6.358 3.332-6.358 3.31z"
			/>
		</defs>
		<g fill="none" fillRule="evenodd">
			<mask id="youtube_svg__b" fill="#fff">
				<use xlinkHref="#youtube_svg__a" />
			</mask>
			<use fill="#000" fillRule="nonzero" xlinkHref="#youtube_svg__a" />
			<g fill="#FFF" mask="url(#youtube_svg__b)">
				<path d="M0 0h20v20H0z" />
			</g>
			<path d="M0 0h20v20H0z" mask="url(#youtube_svg__b)" />
		</g>
	</svg>
);

export default Youtube;
