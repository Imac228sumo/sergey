import { Col, Container, Row } from 'react-bootstrap'
import bitsOfCode from '../../Assets/Projects/blog.png'
import chatify from '../../Assets/Projects/chatify.png'
import editor from '../../Assets/Projects/codeEditor.png'
import emotion from '../../Assets/Projects/emotion.png'
import leaf from '../../Assets/Projects/leaf.png'
import suicide from '../../Assets/Projects/suicide.png'
import Particle from '../Particle'
import { default as ProjectCard, default as ProjectCards } from './ProjectCard'

const Projects = () => {
	return (
		<Container fluid className='project-section'>
			<Particle />
			<Container>
				<h1 className='project-heading'>
					My Recent <strong className='purple'>Works </strong>
				</h1>
				<p style={{ color: 'white' }}>
					Here are a few projects I've worked on recently.
				</p>
				<Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
					<Col md={4} className='project-card'>
						<ProjectCard
							imgPath={chatify}
							title='Chatify'
							description='Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages.'
						/>
					</Col>

					<Col md={4} className='project-card'>
						<ProjectCard
							imgPath={bitsOfCode}
							title='Bits-0f-C0de'
							description='My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown.'
						/>
					</Col>

					<Col md={4} className='project-card'>
						<ProjectCard
							imgPath={editor}
							title='Editor.io'
							description='Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage'
						/>
					</Col>

					<Col md={4} className='project-card'>
						<ProjectCard
							imgPath={leaf}
							title='Plant AI'
							description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
						/>
					</Col>

					<Col md={4} className='project-card'>
						<ProjectCards
							imgPath={suicide}
							title='Ai For Social Good'
							description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
						/>
					</Col>

					<Col md={4} className='project-card'>
						<ProjectCard
							imgPath={emotion}
							title='Face Recognition and Emotion Detection'
							description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
						/>
					</Col>
				</Row>
			</Container>
		</Container>
	)
}

export default Projects