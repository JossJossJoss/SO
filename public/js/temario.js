function temario ($scope){
	$scope.temas=[
		{nombre:"Introduccion",
		descripcion:"Una computadora moderna consta de uno o más procesadores, una memoria principal, discos, im- presoras, un teclado, un ratón, una pantalla o monitor, interfaces de red y otros dispositivos de en- trada/salida. En general es un sistema complejo. Si todos los programadores de aplicaciones tuvieran que comprender el funcionamiento de todas estas partes, no escribirían código alguno. Es más: el trabajo de administrar todos estos componentes y utilizarlos de manera óptima es una tarea muy desafiante. Por esta razón, las computadoras están equipadas con una capa de software llama- da sistema operativo, cuyo trabajo es proporcionar a los programas de usuario un modelo de compu- tadora mejor, más simple y pulcro, así como encargarse de la administración de todos los recursos antes mencionados",
		id :"collapseOne",
		h : "headingOne",
		bin : "true",
		link : "tema.html"},

		{nombre:"Procesos e Hilos", 
		descripcion:"Los procesos son una de las abstracciones más antiguas e importantes que proporcionan los sis- temas operativos: proporcionan la capacidad de operar (pseudo) concurrentemente, incluso cuando hay sólo una CPU disponible. Convierten una CPU en varias CPU virtuales. Sin la abstracción de los procesos, la computación moderna no podría existir. En este capítulo examinaremos con gran detalle los procesos y sus primeros primos, los hilos (threads).",
		id : "collapseTwo",
		h : "headingTwo",
		bin : "false",
		link : "tema.html"},

		{nombre:"Administracion de Memoria", 
		descripcion:"La memoria principal (RAM) es un importante recurso que debe administrarse con cuidado. Aun- que actualmente una computadora doméstica promedio tiene 10,000 veces más memoria que la IBM 7094, la computadora más grande en el mundo a principios de la década de 1960, los progra- mas están creciendo con más rapidez que las memorias. Parafraseando la ley de Parkinson diría que “los programas se expanden para llenar la memoria disponible para contenerlos”. En este capítulo estudiaremos la forma en que los sistemas operativos crean abstracciones de la memoria y cómo las administran. Lo que todo programador quisiera es una memoria privada, de tamaño y rapidez infinitas, que también sea no volátil, es decir, que no pierda su contenido cuando se desconecta de la potencia eléctrica. Y ya que estamos en ello, ¿por qué no hacerla barata también? Por desgracia, la tecnolo- gía no proporciona tales memorias en estos momentos. Tal vez usted descubra cómo hacerlo. ",
		id : "collapseThree",
		h : "headingThree",
		bin : "false",
		link : "tema.html"},

		{nombre:"Procesos e Hilos", 
		descripcion:"Los procesos son una de las abstracciones más antiguas e importantes que proporcionan los sis- temas operativos: proporcionan la capacidad de operar (pseudo) concurrentemente, incluso cuando hay sólo una CPU disponible. Convierten una CPU en varias CPU virtuales. Sin la abstracción de los procesos, la computación moderna no podría existir. En este capítulo examinaremos con gran detalle los procesos y sus primeros primos, los hilos (threads).",
		id : "collapseFour",
		h : "headingFour",
		bin : "false",
		link : "tema.html"},

	];
}