import React from 'react';
import {
	Page,
	Text,
	View,
	Document,
	StyleSheet,
	Image
} from '@react-pdf/renderer';

const styles = StyleSheet.create({
	body: {
		backgroundColor: 'linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%)'
	},
	page: {
		maxWidth: 700,
		background: '#fbc2eb',
		borderRadius: 4,
		boxShadow: '0 0 40 rgba(0, 0, 0, 0.6)',
    padding: 30,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
   
  },
  input: {
    border: 1,
    borderColor: '#333'
  },
  text: {
    marginTop: 10,
		fontSize: 14,
		color: '#666',
		lineHeight: 1.4,
		maxWidth: 400,
  },
  image: {
    width: 120,
		borderRadius: 50,
		marginTop: 20,
  }
});

export function PdfDocument(props) {
	console.log('pdf props', props.login);
	console.log('pdf props', props.repos);
	return (
		<Document style={styles.body}>
			<Page size='A4' style={styles.page}>
				<Image style={styles.image} source={`${props.login.avatar_url}`} />
				<View style={styles.input}>
					<Text style={styles.text}>{props.login.name}</Text>
				</View>
				<View>
					<Text style={styles.text}>{props.login.location}</Text>
				</View>
				<View>
					<Text style={styles.text}>{props.public_repos}</Text>
				</View>
				<View>
					<Text style={styles.text}>{props.login.followers}</Text>
				</View>
				<View>
					<Text style={styles.text}>{props.login.following}</Text>
				</View>
			</Page>
		</Document>
	);
}
