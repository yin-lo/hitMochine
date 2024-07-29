// Ajouter ici le ou les require pour importer les modules dont vous aurez besoin.
const readline = require('readline');

// On créé une interface de communication entre le terminal et notre programme
const rl = readline.createInterface({
	input: process.stdin,
});

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

// Fonction permettant de poser la question à l'utilisateur
function poseQuestion() {
	console.log('Que souhaitez vous ? ');
}

// à chaque fois que l'utilisateur écris une ligne de texte et appuie sur "Entrer"
rl.on('line', (answer) => {
	if (answer === 'chante') {
		// Si le texte saisi par l'utilisateur est 'chante'
		console.log(`Je m'appelle Charlu, je m'appelle Lili, vous êtes chez O'clock`);

		// On repose la question à l'utilisateur.
		poseQuestion();
	} else if (answer === 'classement') {
		// Si le texte saisi par l'utilisateur est 'classement'
		// On initialise une variable counter à 1
		let counter = 1;
		for (const song of hitParade) {
			// Pour chaque entrée du tableau, construit une chaine de caractère constituée de
			// la valeur de la variable counter, un tiret et le nom de la chanson.
			console.log(`${counter} - ${song}`);

			// on ajoute 1 à notre variable
			counter++;
		}

		// On repose la question à l'utilisateur.
		poseQuestion();
	} else if (answer === 'quitter') {
		// Si le texte saisi par l'utilisateur est 'quitter'
		console.log('Au revoir !');
		// On referme l'interface de communication entre le terminal et notre programme.
		// le programme se terminera ensuite tout seul.
		rl.close();
	} else {
		// Si aucun if précédent n'a été exécuté
		console.log(`Je n'ai pas compris votre commande.`);

		// On repose la question.
		poseQuestion();
	}
});

poseQuestion();
