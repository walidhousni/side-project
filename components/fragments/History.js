import { SectionContainer } from '../common/container';
import { Timeline, TimeSpot } from '../common/content';

const History = () => (
	<SectionContainer className="section section--history">
		<Timeline className="timeline">
			<TimeSpot className="timeline__item">
				<span className="label">Success</span>
				<span className="date">2018</span>
				<div className="content">
					<h1 className="title">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below.</h1>
					<p className="description">
						There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
						some form.
					</p>
				</div>
			</TimeSpot>
			<TimeSpot>
				<span className="label">Success</span>
				<span className="date">2018</span>
				<div className="content">
					<h1 className="title">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below.</h1>
					<p className="description">
						There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
						some form.
					</p>
				</div>
			</TimeSpot>
			<TimeSpot>
				<span className="label">Success</span>
				<span className="date">2018</span>
				<div className="content">
					<h1 className="title">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below.</h1>
					<p className="description">
						There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
						some form.
					</p>
				</div>
			</TimeSpot>
		</Timeline>
	</SectionContainer>
);

export default History;
