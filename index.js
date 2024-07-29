// Ajouter ici le ou les require() pour importer les modules dont vous aurez besoin.

const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

// Hit parade, classé du premier au dernier.
const hitParade = [
	`Jain - Come`,
	`Matt Simons - Catch & Realease`,
	`Twety One Pilots - Stressed Out`,
	`Justin Bieber - Love Yourself`,
	`Kids United - On écrit sur les murs`,
	`Rihanna - Work`,
	`Julian Perretta - Miracle`,
	`Yall - Hundred Miles`,
	`Kendji Girac - No Me Mirès Màs`,
	`Feder - Blind (feat. Emmi)`,
];

// fonction de question d'ouverture :
function poseQuestion() {
	console.log(`Que souhaitez-vous ?`);
}
poseQuestion();

rl.on('line', (answer) => {
	answer = answer.toLowerCase();
	if (answer === 'chante') {
		console.log(`Je m'appelle Charlu, je m'appelle Lili, vous êtes chez O'clock.`);
		poseQuestion();
		return;
	}
	if (answer === 'classement') {
		// afficher sans les numéros devant chaque entrée :
		// for (const i of hitParade) {
		// 	console.log(i);
		// }

		// affichage plus complet :
		for (let i = 0; i < hitParade.length; i++) {
			console.log(`n°${i + 1} -> ${hitParade[i]}`);
		}
		poseQuestion();
		return;
	}

	// méthode avec regex (la réponse doit contenir "position n"):
	const answerRegex = /position (\d+)/;
	const execRegex = answerRegex.exec(answer);
	if (execRegex) {
		const numberAnswer = parseInt(execRegex[1]);
		if (numberAnswer > 0 && numberAnswer < 11) {
			console.log(hitParade[numberAnswer - 1]);
			return;
		}
	}

	// // on séapare la réponse et on stocke les mots dans un tableau.
	// // Résultat attendu : ["position", "n"]
	// const splitAnswer = answer.split(' ');
	// const numberAnswer = parseInt(splitAnswer[1]);
	// if (
	// 	splitAnswer.length === 2 &&
	// 	splitAnswer[0] === 'position' &&
	// 	// on veut vérifier que c'est bien un nombre donc inverse de NaN :
	// 	!isNaN(numberAnswer) &&
	// 	numberAnswer > 0 &&
	// 	numberAnswer < 11
	// ) {
	// 	console.log(hitParade[numberAnswer - 1]);
	// 	return;
	// }

	if (answer === 'quitter') {
		rl.close();
		return;
	}
	console.log(`Je n'ai pas compris votre demande.`);
	poseQuestion();
});
