import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaGithubAlt, FaPlus, FaSpinner } from 'react-icons/fa';

import api from '../../services/api';

import Container from '../../components/Container';
import { Form, SubmitButton, List } from './styles';

export default class Main extends Component {
	state = {
		user: '',
		dataUser: [],
		loading: false
	};

	//Carregar os dados do sessionStorage
	componentDidMount() {
		const dataUser = sessionStorage.getItem('dataUser');

		if (dataUser) {
			this.setState({
				dataUser: JSON.parse(dataUser)
			});
		}
	}

	//Salvar os dados do sessionStorage
	componentDidUpdate(_, prevState) {
		const { dataUser } = this.state;

		if (prevState.dataUser !== dataUser) {
			sessionStorage.setItem('dataUser', JSON.stringify(dataUser));
		}
	}

	handleInputChange = event => {
		this.setState({
			user: event.target.value
		});
	};

	handleSubmit = async event => {
		event.preventDefault();

		this.setState({ loading: true });

		const { user, dataUser } = this.state;

		const response = await api.get(`/users/${user}`);

		const data = {
      name: response.data.name,
      username: response.data.login
    };

		this.setState({
			dataUser: [...dataUser, data],
			user: '',
			loading: false
		});
	};

	render() {
		const { user, loading, dataUser } = this.state;

		return (
			<Container>
				<h1>
					<FaGithubAlt />
					Gerador de PDF
				</h1>
				<p>
					
				</p>

				<Form onSubmit={this.handleSubmit}>
					<input
						type='text'
						placeholder='Digite o username que deseja ver o perfil'
						value={user}
						onChange={this.handleInputChange}
					/>

					<SubmitButton loading={loading}>
						{loading ? (
							<FaSpinner color='#fff' size={14} />
						) : (
							<FaPlus color='#fff' size={14} />
						)}
					</SubmitButton>
				</Form>

				<List>
					{dataUser.map(users => (
						<li key={users.name}>
							<span>{users.name}</span>
							<Link to={`/infos/${encodeURIComponent(users.username)}`}>
								Ver Perfil
							</Link>
						</li>
					))}
				</List>
			</Container>
		);
	}
}
