// Dictionnaire contenant toutes les phrases au format {"codeDeLangue": {"idElement": "Texte dans l'element"}, "codeDeLangue2": {...}, ...}
// Les phrases peuvent contenir du code HTML (cela est parfois nécessaire, comme pour "text1" ici). Encadrez les strings avec `` au lieu de "", cela permet de faire des strings contenant des sauts de ligne, et évite les problèmes avec les caractères " et ' existants.
let lang =
{
	"en":
	{
		"text1": `Welcome to our site and let us introduce you to the exhibition
             of this year
		<br />
		<br />
		to convince you to take part in a journey through the
			<span style="color: red;">c</span> 
			<span style="color: rgb(255, 0, 132);">o</span>
			<span style="color: rgb(179, 0, 255);">l</span>
			<span style="color: rgb(34, 0, 255);">o</span>
			<span style="color: rgb(0, 128, 255);">r</span>
			<span style="color: rgb(0, 255, 157);">s</span>`,

		"text2": `Abstract art is an artistic movement that developed during the 20th century, characterized by the use 
				of shapes and colors that do not represent objects or otherwise. Abstract artists seek to explore the possibilities of 
				purely visual expression, using the formal elements of art such as 
				<span style="color: rgb(47, 239, 165);"> line, 
				<span style="color: red;"> the shape, 
				<span style="color: rgb(0, 128, 255);"> 
				color, <span style="color: rgb(255, 94, 0);"> texture <span style="color: white;"> 
				and composition to create works that have their own meaning and their own presence. 
				Abstract art can be considered a universal form of expression that transcends language and cultural barriers, 
				allowing artists to communicate <span style="color: rgb(255, 0, 132);"> ideas and 
				<span style="color: rgb(197, 102, 238);"> emotions <span style="color: white;">
				Here are some founders of abstract art`,

		"text3": `In 2023, we organized the event "A quatre main" this event is the collaboration of Jean-Michel Basquiat 
		and Andy warhol, all 2 are each great painter who decided to work together for 1 year and who realized about 160 canvases.
We talk about this collaboration as a conversation happening through painting, instead of words and two minds merging to create
 a separate third.`,

		"text4": `This exhibition took place at the Louis Vitton Foundation. Composed of 11 galleries and videos on the 
		creation of certain paintings, this event brought together more than a hundred paintings in one place and lasted 
		from April 5 to August 28.

Basquiat admires Warhol as an elder, a key figure in the art world, initiator of a new language and an original 
relationship to popular culture. In return, Warhol found in Basquiat a renewed interest in painting. With him, 
he resumed painting manually, on a very large scale.

Warhol's subjects (press headlines, logos of General Electric, Paramount, the Olympic Games) serve as a structure 
for real series that punctuate the course.`,


		"text5": `“Andy was starting most of the paintings. He put on something very recognizable, the logo of a brand, 
		and in a way I defaced it. Then I tried to bring him back, I wanted him to paint again” Jean-Michel Basquiat

“I draw first, and then I paint like Jean-Michel. I think the paintings we do together are better when you don't know 
who did what” Andy Warhol`,

		"text6": `This year we wanted to change the artist to an abstract art artist but with quite different works that 
		we were able to offer you. This year's exhibition will focus on Otto Dix`,

		"text7": `Otto Dix was a renowned German artist of the 20th century, known for his provocative and expressive art. 
		His work is often described as realistic, brutal and satirical, reflecting the realities of life in Germany during 
		the turbulent times of World War I and the interwar period. He served as a soldier in the Great War, and this 
		experience profoundly influenced his art.`,

		"text8": `Come and discover The Paintings of Otto Dix and his powerful testimony to his time through his works, 
		capturing the harsh reality of war and German society between the wars.`,

		"text9": `Our Exhibition will always take place at the Louis Vuitton Foundation, a fairly large and spacious 
		place where we have already had the opportunity to work with it is a place with a lot of accessibility.`,

		"mention": `Legal Notice`,

		"contact": `Contact us`,

		"fonda": `© 2023 Louis Vuitton Foundation. All rights reserved.`,

		"nom": `Name`,

		"mail": `E-Mail`,

		"quantite": `Quantity`,

		"Select": `Select quantity`,

		"info": `Useful information`,

		"transport": `Public transport:`,

		"1": `<span>Metro:</span> Line 1 - Station "Les Sablons"`,

		"2": `<span>Bus:</span> Line N11 - Stop "Les Sablons"`,

		"3": `<span>Bus:</span> Line N24 - Stop "Nom de l'arrêt"`,

		"4": `<span>Bus:</span> Line 63 - Stop "Fondation L. vuitton"`,

		"5": `<span>Bus:</span> Line 244 - Stop "Fondation L. vuitton"`,

		"6": `<span>Other:</span> Station Vélib 16123 (Mahatma Gandhi)`,

		"schedule": "Schedule :",

		"7": `<span>Monday - Friday: </span> 9 a.m. - 6 p.m.`,

		"8": `<span>Saturday: </span>10 a.m. - 4 p.m.`,

		"9": `<span> Sunday:</span> 12 p.m.-4 p.m.`,

		"Accueil": `Home`,

		"team": `Our team`,

		"billet": `Ticketing`,

		"achtb": "Buy Tickets",

		"yastock": `Role: Editor-in-chief - Journalist`,

		"Mamadoux":`Role: Team leader`,

		"Leplusdrole":`Role: Web Developer - Journalist`,

		"Leplusbg": `Role: Translator`,

		"LeBest": `Role: Graphic designer`,

		"LevezVous": `Role: Web Developer`,

	}
};

let current_lang = "fr";

// Récupère toutes les phrases françaises depuis le DOM chargé. Cela nous permet de ne pas avoir à stocker le français dans ce fichier (donc, pas de données en doublon).
lang["fr"] = {};

for (let key in lang["en"])
{
	dom = document.getElementById(key);

	// Si l'élément existe sur la page on procède au changement de langue
	if (dom != null && dom != undefined){
		lang["fr"][key] = dom.innerHTML;
		// s'il n'existe pas, on passe à l'itération suivante
	}else{
		continue;
	}

}

// Gérer le bouton de changement de langue et l'évènement de changement de langue
let lang_button = document.querySelector(".lang_button");
lang_button.addEventListener("mousedown", ToggleLanguage);

// Récupérer la langue depuis l'URL (paramètre GET)
let params = new URLSearchParams(document.location.search);
let param_lang = params.get("lang");
if (param_lang === "en")
{
	ToggleLanguage();
}

function ToggleLanguage()
{
	// Intervertir la langue
	if (current_lang == "fr")
	{
		current_lang = "en";
	}
	else
	{
		current_lang = "fr";
	}

	// Changer toutes les phrases dans la nouvelle langue
	for (let key in lang[current_lang]) {
		// si la l'élément existe on change, sinon on passe à l'itération suivante
		if (document.getElementById(key) != null && document.getElementById(key) != undefined){
			document.getElementById(key).innerHTML = lang[current_lang][key];
			if (key=="achtb" && document.getElementById(key) != null && document.getElementById(key) != undefined && current_lang=="en"){
				document.getElementById(key).value = "Buy tickets";
			}else if (key=="achtb" && document.getElementById(key) != null && document.getElementById(key) != undefined && current_lang=="fr"){
				document.getElementById(key).value = "Acheter des billets";
			}else{
				continue;
			}
		}else{
			continue;
		}

	}

	// Changer le drapeau
	console.log(current_lang);
	lang_button.src = "./images/" + current_lang + "_flag.png";
	
	// Changer les liens pour inclure le paramètre GET lang=en si nécessaire
	let links = document.querySelectorAll("a");
	if (current_lang == "en")
	{
		for (let i = 0; i < links.length; i++)
		{
			links[i].href = links[i].href.split("?")[0] + "?lang=en"; // Ajoute ?lang=en à l'URL
		}
		window.history.replaceState(null, null, window.location.href.split("?")[0] + "?lang=en"); // Modifie l'URL actuelle sans recharger la page
	}
	else
	{
		for (let i = 0; i < links.length; i++)
		{
			links[i].href = links[i].href.split("?")[0]; // Retire les paramètres GET
		}
		window.history.replaceState(null, null, window.location.href.split("?")[0]); // Modifie l'URL actuelle sans recharger la page
	}
}