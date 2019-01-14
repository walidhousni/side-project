import React, { Component } from 'react';
import { Formik } from 'formik';
// import withStyles from '@material-ui/core/styles/withStyles';
import * as Yup from 'yup';
import { Form } from './Form';

// const styles = theme => ({
// 	root: {
// 		flexGrow: 1
// 	}
// });

class QuickContact extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const { classes } = this.props;
		const validationSchema = Yup.object({
			name: Yup.string('Enter your full name').required('Name is required'),
			phoneNumber: Yup.string('Enter your phone number !').required(
				'Phone Number is required'
			)
		});
		const values = { name: '', phoneNumber: '' };
		return (
			<React.Fragment>
				<div>
					<Formik
						render={props => <Form {...props} />}
						initialValues={values}
						validationSchema={validationSchema}
					/>
				</div>
			</React.Fragment>
		);
	}
}

export default QuickContact;
