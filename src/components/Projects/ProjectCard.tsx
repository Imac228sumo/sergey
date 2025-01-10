import Card from 'react-bootstrap/Card'

export interface IProjectCardProps {
	imgPath: string
	title: string
	description: string
}

function ProjectCard({ description, imgPath, title }: IProjectCardProps) {
	return (
		<Card className='project-card-view'>
			<Card.Img variant='top' src={imgPath} alt='card-img' />
			<Card.Body>
				<Card.Title>{title}</Card.Title>
				<Card.Text style={{ textAlign: 'justify' }}>{description}</Card.Text>
			</Card.Body>
		</Card>
	)
}
export default ProjectCard
