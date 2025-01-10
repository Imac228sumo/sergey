import Typewriter from 'typewriter-effect'

const Type = () => {
	return (
		<Typewriter
			options={{
				strings: [
					'Веб разработчик',
					'Фрилансер',
					'MERN Stack Разработчик',
					'Автор открытого кода',
				],
				autoStart: true,
				loop: true,
				deleteSpeed: 50,
			}}
		/>
	)
}

export default Type
