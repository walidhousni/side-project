import { Fragment } from 'react';
import { Caroussel, Separator } from '../../common/content';
import { SectionContainer } from '../../common/container';
import CardsList from './CardsList';
import Links from './Links';
import Card from './Card';

const dots = ['Internal', 'External', 'Case studies'];

const Blog = () => (
	<SectionContainer className="section section--blog">
		<Caroussel horizontal dots={dots}>
			{dots.map((s, i) => (
				<Fragment key={i}>
					<CardsList>
						{[1, 2, 3].map((e, j) => (
							<Card key={j} />
						))}
					</CardsList>
					<Separator />
					<Links />
				</Fragment>
			))}
		</Caroussel>
	</SectionContainer>
);

export default Blog;
