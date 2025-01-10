import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import {
	AiFillStar,
	AiOutlineFundProjectionScreen,
	AiOutlineHome,
	AiOutlineUser,
} from 'react-icons/ai'
import { CgGitFork } from 'react-icons/cg'
import { Link } from 'react-router-dom'
import logo from '../Assets/logo.png'

const MyNavbar = () => {
	const [expanded, setExpanded] = useState<boolean>(false)
	const [blur, setBlur] = useState(false)

	function scrollHandler() {
		if (window.scrollY >= 20) {
			setBlur(true)
		} else {
			setBlur(false)
		}
	}

	window.addEventListener('scroll', scrollHandler)

	return (
		<Navbar
			expanded={Boolean(expanded)}
			fixed='top'
			expand='md'
			className={blur ? 'sticky' : 'navbar'}
		>
			<Container>
				<Navbar.Brand href='/' className='d-flex'>
					<img src={logo} className='img-fluid logo' alt='brand' />
				</Navbar.Brand>
				<Navbar.Toggle
					aria-controls='responsive-navbar-nav'
					onClick={() => {
						setExpanded(expanded ? false : true)
					}}
				>
					<span></span>
					<span></span>
					<span></span>
				</Navbar.Toggle>
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav className='ms-auto' defaultActiveKey='#home'>
						<Nav.Item>
							<Nav.Link as={Link} to='/' onClick={() => setExpanded(false)}>
								<AiOutlineHome style={{ marginBottom: '2px' }} /> Главная
							</Nav.Link>
						</Nav.Item>

						<Nav.Item>
							<Nav.Link
								as={Link}
								to='/about'
								onClick={() => setExpanded(false)}
							>
								<AiOutlineUser style={{ marginBottom: '2px' }} /> Обо мне
							</Nav.Link>
						</Nav.Item>

						<Nav.Item>
							<Nav.Link
								as={Link}
								to='/project'
								onClick={() => setExpanded(false)}
							>
								<AiOutlineFundProjectionScreen
									style={{ marginBottom: '2px' }}
								/>{' '}
								Проекты
							</Nav.Link>
						</Nav.Item>

						<Nav.Item className='fork-btn'>
							<Button
								href='https://github.com/soumyajit4419/Portfolio'
								target='_blank'
								className='fork-btn-inner'
							>
								<CgGitFork style={{ fontSize: '1.2em' }} />{' '}
								<AiFillStar style={{ fontSize: '1.1em' }} />
							</Button>
						</Nav.Item>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default MyNavbar
