const http = require('node:http');

//le tableau hit parade est dans un autre fichier
const { hitParade } = require('./hitParade')

// Votre code va ici
let counter = 0;

const server = http.createServer((request, response) => {
	response.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
	switch (request.url) {
		case '/':
			counter++;
			response.end(`Je m'appelle Charlu, <br> je m'appelle Lili, <br> vous êtes chez O'clock&nbsp;!`);
			break;

		case '/classement':
			let classement = '';
			for (const song of hitParade) {
				classement += `${song.position} : ${song.artist} - ${song.title} \n`;
			}
			response.end(classement);
			break;

		case '/stats':
			response.end(`La chanson de Charli Lulu a été vue ${counter} fois&nbsp;!`);
			break;

		default:
			response.end(`Cette page n'existe pas. Que faites-vous ici&nbsp;?`);
			break;
	}
});

server.listen(3000);
