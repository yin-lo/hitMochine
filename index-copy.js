// Ajouter ici le ou les require() pour importer les modules dont vous aurez besoin.

const http = require('node:http');
// Hit parade, classé du premier au dernier.

const hitParade = [
	{
		position: 1,
		artist: `Jain`,
		title: `Come`,
	},
	{
		position: 2,
		artist: `Matt Simons`,
		title: `Catch & Realease`,
	},
	{
		position: 3,
		artist: `Twety One Pilots`,
		title: `Stressed Out`,
	},
	{
		position: 4,
		artist: `Justin Bieber`,
		title: `Love Yourself`,
	},
	{
		position: 5,
		artist: `Kids United`,
		title: `On écrit sur les murs`,
	},
	{
		position: 6,
		artist: `Rihanna`,
		title: `Work`,
	},
	{
		position: 7,
		artist: `Julian Perretta`,
		title: `Miracle`,
	},
	{
		position: 8,
		artist: `Yall`,
		title: `Hundred Miles`,
	},
	{
		position: 9,
		artist: `Kendji Girac`,
		title: `No Me Mirès Màs`,
	},
	{
		position: 10,
		artist: `Feder`,
		title: `Blind (feat. Emmi)`,
	},
];

// Votre code va ici
let visited = 0;

let newHtml = `<body><div>`;
newHtml += `<p>Ton cul sur la com</p>`;
newHtml += `</div></body>`;

function showClassement() {
	let html = `<!DOCTYPE html>
	<html lang="fr" dir="ltr">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>Document</title>
		<style>
			p{color:blue; margin: 16px}
		</style>
	</head>
	<body>`;
	for (let i = 0; i < hitParade.length; i++) {
		html += `<p>n°${i + 1} -> ${hitParade[i].title} de ${hitParade[i].artist} </p>`;
	}
	html += `</body></html>`;
	return html;
}

const server = http.createServer((req, res) => {
	res.setHeader('content-type', 'text/html;charset=utf8');

	switch (req.url) {
		case '/':
			res.end(`<h1 style="margin:100px auto;padding-bottom: 40px;border-bottom:dotted 10px red; max-width:400px;text-align:center">Je m'appelle Charlu, <br> je m'appelle Lili, <br> vous êtes chez O'clock !</h1>`);
			visited++;
			break;

		case '/classement':
			res.end(showClassement());
			break;

		case '/stats':
			res.end(`<h2 style="padding:30px; background-color:yellow;margin:30px;border-radius:30px;text-align:center">La chanson de Charli Lulu a été vue ${visited} fois !</h2>`);
			break;

		default:
			res.end('<h1 style="padding:30px; background-color:red;margin:200px auto;border-radius:30px;text-align:center;font-size:80px;color:white;max-width:800px"> Page non trouvée. <br> Réessayez ! </h1>');
			break;
	}
});

server.listen(3000);
