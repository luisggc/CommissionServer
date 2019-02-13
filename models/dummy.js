const users = [
	{
		id: "1",
		name: "Luis Coimbra",
		description: "Apaixonado por Jesus",
		age: 21,
		aim:
			"Jovem batista em busca de missões, novas experiências em evangelismo, discipulado e defesa da fé."
	},
	{
		id: "2",
		name: "Sebastião Campagnucci",
		description: "Cabra arretado",
		age: 23,
		aim: "Jovem Wesleyano revestido do poder procurando com missões"
	},
	{
		id: "3",
		name: "Giovana Ribeiro",
		description: "Jesus através da música",
		age: 23,
		aim: "Procurando louvorzões e etc para adorar a Deus"
	}
]

const events = [
	{
		name: "Evangelismo nas Ruas",
		host:
			"Igreja Batista Central em Cerâmica Igreja Batista Central em Cerâmica Igreja Batista Central em Cerâmica",
		description: "Buscar evangelismo em praças próximo à igreja",
		id: "1",
		userId: "1"
	},
	{
		name: "Pregação na Praça",
		host: "Igreja Assembléia de Deus",
		description: "Pregação em praça próxima",
		id: "2",
		userId: "2"
	},
	{
		name: "Doar agasalhos",
		host: "CRU",
		description: "Evangelismo nas universidades",
		id: "3",
		userId: "3"
	},
	{
		name: "Dar treinamentos",
		host: "Pais",
		description: "Aprendizado infanto-juvenil em escolas",
		id: "4",
		userId: "2"
	}
]

const assistances = [
	{
		id: "1",
		userId: "1",
		eventId: "1",
		type: "participant"
	},
	{
		id: "2",
		userId: "1",
		eventId: "3",
		type: "participant"
	},
	{
		id: "3",
		userId: "2",
		eventId: "3",
		type: "participant"
	}
]
