import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FaStar } from 'react-icons/fa';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { PdfDocument } from '../Curriculo';

import api from '../../services/api';

import Container from '../../components/Container';
import { Loading, Owner, RepoList, Form, ButtonDownload } from './styles';

export default class Infos extends Component {
	static propTypes = {
		match: PropTypes.shape({
			params: PropTypes.shape({
				userName: PropTypes.string
			})
		}).isRequired
	};

	state = {
		login: {},
		repos: [],
		loading: true
	};

	async componentDidMount() {
		const { match } = this.props;

		const userName = decodeURIComponent(match.params.userName);

		const [login, repos] = await Promise.all([
			api.get(`/users/${userName}`),
			api.get(`/users/${userName}/repos`)
		]);

		this.setState({
			login: login.data,
			repos: repos.data,
			loading: false
		});
	}

	render() {
		const { login, repos, loading } = this.state;

		if (loading) {
			return <Loading>Carregando...</Loading>;
		}

		return (
			<>
				<Container>
					<Owner>
						<Link to='/'>Voltar aos users</Link>
						<img src={login.avatar_url} alt={login.login} />
						<h1>{login.name}</h1>
						<p>{login.bio}</p>
					</Owner>
					<Form>
						<label>Nome: </label>
						<input type='text' value={login.name} disabled />
						<label>Local: </label>
						<input type='text' value={login.location} disabled />
						<label>Respositórios públicos: </label>
						<input type='text' value={login.public_repos} disabled />
						<label>E-mail</label>

						<input
							type='text'
							value={
								login.email == null ? 'E-mail não disponivel' : login.email
							}
							disabled
						/>
						<label>Seguidores</label>
						<input type='text' value={login.followers} disabled />
						<label>Segue</label>
						<input type='text' value={login.following} disabled />
						<a href={login.blog} target='_blank'>
							Blog pessoal
						</a>
					</Form>
					<RepoList>
						<h1>Repositórios</h1>

						{repos.map(repo => (
							<li key={String(repo.id)}>
								{/* <img src={repo.user.avatar_url} alt={repo.user.login} /> */}
								<div>
									<strong>
										<a href={repo.html_url} target='_blank'>
											{repo.name}
										</a>
										<span>{repo.language}</span>
										<span>
											<FaStar color='#ffd700' size={14} />{' '}
											{repo.stargazers_count}
										</span>
									</strong>
									<p>{repo.description}</p>
								</div>
							</li>
						))}
					</RepoList>
					{/* <PDFDownloadLink
						document={<PdfDocument login={login} repos={repos} />}
						fileName={`${login.name}.pdf`}
						style={{
              background: '#fbc2eb',
              color: '#fff',
              fontWeight: 'bold',
              border: 0,
              padding: 15,
              borderRadius: 4,
              marginTop: 150,
              height: 50,
              boxShadow: '5 5 5 rgba(0, 0, 0, 0.3)',
              textDecoration: 'none'
						}}
					>
						{({ blob, url, loading, error }) =>
							loading ? 'Gerando PDF' : 'Download PDF'
						}
					</PDFDownloadLink> */}
					<ButtonDownload
						onClick={() => {
							window.print('', 'print', 'height=200,width=200');
						}}
					>
						Gerar PDF
					</ButtonDownload>
				</Container>
			</>
		);
	}
}
