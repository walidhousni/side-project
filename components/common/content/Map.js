import { Component } from 'react';
import dynamic from 'next/dynamic';
import styled, { withTheme } from 'styled-components';

const MapContainer = styled.div`
	grid-row: 1 / 4;
	grid-column: 2 / 5;
	position: relative;
`;

const MapComponentWithNoSSR = dynamic(() => import('react-jvectormap').then(({ VectorMap }) => VectorMap), {
	ssr: false
});

const locations = [
	{ name: 'Casablanca', coords: [33.587903, -7.632965], status: 'location' },
	{ name: 'Paris', coords: [48.864716, 2.349014], status: 'location' }
];

class Map extends Component {
	render() {
		const { theme } = this.props;
		return (
			<MapContainer>
				<MapComponentWithNoSSR
					map="world_mill"
					zoomMin={6}
					zoomButtons={false}
					backgroundColor="#4a4a4a"
					containerClassName="map"
					zoomOnScroll={false}
					containerStyle={{
						width: '100%',
						height: '120%',
						position: 'absolute'
					}}
					regionStyle={{
						initial: {
							fill: '#373737',
							stroke: 'none'
						},
						hover: {
							'fill-opacity': 0.8,
							cursor: 'pointer'
						}
					}}
					markers={locations.map(l => ({ name: l.name, latLng: l.coords }))}
					markerStyle={{
						initial: {
							fill: theme.colors.primary,
							stroke: 'none'
						},
						hover: {
							fill: theme.colors.primary,
							stroke: 'none'
						}
					}}
				/>
			</MapContainer>
		);
	}
}

export default withTheme(Map);
