import { Col, Row } from 'react-bootstrap'
import { SiMacos, SiPostman, SiSlack, SiVercel } from 'react-icons/si'

const Toolstack = () => {
	return (
		<Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
			<Col xs={4} md={2} className='tech-icons'>
				<SiMacos />
			</Col>
			<Col xs={4} md={2} className='tech-icons'>
				<SiPostman />
			</Col>
			<Col xs={4} md={2} className='tech-icons'>
				<SiSlack />
			</Col>
			<Col xs={4} md={2} className='tech-icons'>
				<SiVercel />
			</Col>
		</Row>
	)
}

export default Toolstack
