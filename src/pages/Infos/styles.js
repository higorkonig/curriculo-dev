import styled from 'styled-components';

export const Loading = styled.div`
	color: #fff;
	font-size: 32px;
	font-weight: bold;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
`;

export const Owner = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	a {
		color: #666;
		font-size: 16px;
		text-decoration: none;
	}

	img {
		width: 120px;
		border-radius: 50%;
		margin-top: 20px;
	}

	h1 {
		font-size: 24px;
		margin-top: 10px;
	}

	p {
		margin-top: 10px;
		font-size: 14px;
		color: #666;
		line-height: 1.4;
		text-align: center;
		max-width: 400px;
	}
`;

export const Form = styled.form`
	margin-top: 30px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	input {
		flex: 1;
		border: 1px solid #eee;
		padding: 10px 15px;
		margin: 5px 5px;
		border-radius: 4px;
		font-size: 16px;
	}

	a {
		flex: 1;
		border: 1px solid #eee;
		padding: 10px 15px;
		margin: 5px 5px;
		border-radius: 4px;
		font-size: 16px;
    text-decoration: none
	}
`;

export const RepoList = styled.ul`
	padding-top: 30px;
	margin-top: 30px;
	border-top: 1px solid #d3d3d3;
	list-style: none;

  h1 {
    margin-bottom: 30px;
  }

	li {
		display: flex;
    flex-wrap: wrap;
		padding: 15px 10px;
		border: 1px solid #d3d3d3;
		border-radius: 4px;

		& + li {
			margin-top: 10px;
		}

		img {
			width: 36px;
			height: 36px;
			border-radius: 50%;
			border: 2px solid #d3d3d3;
		}

		div {
			flex: 1;
			margin-left: 15px;

			strong {
				font-size: 16px;

				a {
					text-decoration: none;
					color: #333;

					&:hover {
						color: #84e;
					}
				}

				span {
					background: #eee;
					color: #9a80b6;
					border-radius: 2px;
					font-size: 12px;
					font-weight: 600;
					height: 20px;
					padding: 3px 4px;
					margin-left: 20px;
				}
			}

			p {
				margin-top: 5px;
				font-size: 12px;
				color: #999;
			}
		}
	}
`;

export const ButtonDownload = styled.button.attrs(props => ({
	type: 'button',
}))`
	background: #fbc2eb;
  color: #fff;
  font-weight: bold;
	border: 0;
	padding: 0 15px;
	border-radius: 4px;
  margin: 20px 5px;
  height: 50px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);


`;

export const Footer = styled.footer`
	a {
		text-decoration: none;
		color: #fff;
		font-size: 16px;
		font-family: monospace, sans-serif;
		text-align: center;
		font-style: italic;
		font-weight: bold;
	}
`;
