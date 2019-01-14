import { FixedContainer, FlexCenterContainer, FlexSpaceBetweenContainer, ContrastContainer } from '../common/container';
import { Copyright, Language, QuizLink } from '../common/content';
import { QuizAgile } from '../common/icons';

const Footer = ({ contrast }) => (
	<ContrastContainer contrast={contrast}>
		<FixedContainer className="footer" bottom left primary>
			<FlexSpaceBetweenContainer>
				<FlexCenterContainer>
					<QuizAgile />
					<QuizLink>
						<span>Quiz Agile</span>
						It takes 2 mins but it gives a lot.
					</QuizLink>
				</FlexCenterContainer>
				<FlexCenterContainer>
					<Language>French</Language>
					<Copyright>Maltem Africa © {new Date().getFullYear()}. All rights reserved.</Copyright>
				</FlexCenterContainer>
			</FlexSpaceBetweenContainer>
		</FixedContainer>
	</ContrastContainer>
);

export default Footer;
