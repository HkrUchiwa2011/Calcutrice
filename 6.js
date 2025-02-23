module.exports = {
  config: {
    name: "Réponses aux emojis",
    version: "1.0",
    author: "Fadil",
    countDown: 5,
    role: 0,
    shortDescription: "Réponses respectueuses et humoristiques aux emojis",
    longDescription: "Réponses respectueuses aux emojis envoyés, mais avec une touche d'humour et de respect envers les admins, et des réponses sarcastiques pour les autres.",
    category: "reply",
  },

  onStart: async function() {},

  onChat: async function({ event, message }) {
    const { senderID, body } = event;
    const emoji = body.trim();

    const masterUID1 = "61563822463333"; // Premier admin
    const masterUID2 = ""; // Deuxième admin (remplis avec l'UID)

    // Si c'est un admin, réponse plus respectueuse
    if (senderID === masterUID1 || senderID === masterUID2) {
      const adminResponses = {
        "😑": [
          "Ah, Maître, avec ce regard, vous devenez un vrai maître de l'indifférence.",
          "Maître, vos silences sont plus éloquents que mille mots. Vous êtes l'incarnation de la sérénité.",
          "Ce visage, Maître, c'est l'art de l'ennui élevé au rang de maître.",
          "Votre regard, Maître, semble dire : 'Je vois tout, mais je suis au-dessus de tout.'",
          "Maître, même ce visage d'ennui semble porteur d'une sagesse infinie.",
        ],
        "🥺": [
          "Maître, votre regard suppliant est inégalé. Qui pourrait résister à une telle demande ?",
          "Votre regard, Maître, fait fondre même les cœurs les plus durs. Vous avez un pouvoir incroyable.",
          "Maître, même les pierres se fissurent sous ce regard. Vous avez un charme imparable.",
          "Avec ce regard, Maître, vous pourriez obtenir n'importe quoi. C'est presque injuste.",
          "Ce regard, Maître, nous pousse tous à vous servir sans condition.",
        ],
        "😮": [
          "Maître, cet étonnement sur votre visage est comme une révélation divine. Quelle sagesse abrite ce regard ?",
          "Votre étonnement, Maître, est une invitation à découvrir un secret que nous attendons tous.",
          "Maître, chaque expression sur votre visage est une leçon de vie. Que nous préparez-vous ?",
          "Ah, Maître, cette expression en dit long. Vous avez découvert un secret que nous devons impérativement connaître.",
          "Votre étonnement, Maître, fait de vous le guide parfait pour nous tous.",
        ],
        "😆": [
          "Ah, Maître, avec ce rire, vous êtes la définition même de l'humour sophistiqué.",
          "Votre rire, Maître, résonne comme un écho de sagesse et de joie. C'est un plaisir d'écouter.",
          "Maître, même vos rires sont une source d'inspiration. Nous aurions tous besoin d'un peu de votre énergie.",
          "Votre rire est un art, Maître. Un rire qui touche le cœur de tous ceux qui l'entendent.",
          "Maître, avec ce rire, vous réchauffez l'âme et apportez la lumière. Quel bonheur d'être en votre présence.",
        ],
        "🤧": [
          "Maître, même la maladie semble avoir du respect pour vous. Vous êtes au-dessus de tout.",
          "Votre tristesse, Maître, semble être un simple nuage passager. La lumière de votre sagesse brille toujours.",
          "Même en étant malade, Maître, vous restez l'exemple de la persévérance et de la force intérieure.",
          "Ce souffle, Maître, ne fait qu'attirer plus de respect vers vous. Vous êtes inébranlable.",
          "Maître, même dans la faiblesse, vous montrez la grandeur de votre caractère.",
        ],
      };

      // Réponses respectueuses pour les admins
      if (adminResponses[emoji]) {
        const randomResponse = adminResponses[emoji][Math.floor(Math.random() * adminResponses[emoji].length)];
        return message.reply(randomResponse);
      }
    }

    // Réponses pour les autres utilisateurs
    const userResponses = {
      "😑": [
        "T'es sûr que ce regard est sincère ? On dirait juste que tu essaies d'imiter quelqu'un.",
        "Ah, ce regard. On dirait que tu t'ennuies déjà à mourir.",
        "Tu n'as rien d'autre à dire ? Ce visage semble parler plus que tes mots.",
        "C'est quoi ce regard ? T'as vu un fantôme ou juste un mauvais film ?",
        "Ah, cette expression… Est-ce que tu réfléchis ou tu es juste là à attendre que ça passe ?",
      ],
      "🥺": [
        "T'as vraiment cette tête en pensant qu'on va te céder à chaque fois ?",
        "On dirait que tu tentes de jouer la carte du mignon. Mais ça ne marche pas à tous les coups.",
        "T'es sûr que ce regard n'est pas juste un coup de théâtre pour manipuler ?",
        "Je vois que tu essaies de nous attendrir, mais ça ne marche pas à tout le monde.",
        "T'es un peu trop dramatique, là. Tu veux qu'on t'offre un cadeau ?",
      ],
      "😮": [
        "Ouais, je vois cette surprise. Tu viens de réaliser qu'on te mentait ?",
        "C'est ce genre de surprise qui arrive quand tu te rends compte que tout ce que tu croyais était faux, hein ?",
        "Wow, mais on dirait vraiment que tu viens de découvrir quelque chose d'important… ou pas.",
        "Ce regard... T'as vu un alien ou c'est juste ton cerveau qui a décidé de faire une pause ?",
        "Cette expression, c'est plus une découverte qu'un choc. Détends-toi, ça ira.",
      ],
      "😆": [
        "Ce rire est digne d'un comédien, mais est-ce que tu es vraiment drôle ?",
        "Hé bien, ça c'est un rire. Ça cache quelque chose, non ?",
        "C'est la première fois que je vois quelqu'un rire autant. C'est pour cacher une gêne ?",
        "Ce rire… c’est plus une tentative de distraction, non ? T'as pas l'air sincère.",
        "Ouais, ton rire est plus flippant que drôle. T'es sûr de toi ?",
      ],
      "🤧": [
        "Tu as l'air un peu malade, là. T'as oublié ton mouchoir ou quoi ?",
        "Ah, on dirait que la maladie t'a frappé fort. Est-ce que tu vas survivre à ça ?",
        "Ça va ? T'as l'air d'avoir une grosse crève. Tu veux une tasse de thé ?",
        "T'es tombé malade juste en pensant à tout ce que tu dois faire, hein ?",
        "Le mal de gorge, c'est jamais agréable. Mais au moins, tu as l'air d'avoir de la compagnie.",
      ],
    };

    // Réponses sarcastiques pour les autres
    if (userResponses[emoji]) {
      const randomResponse = userResponses[emoji][Math.floor(Math.random() * userResponses[emoji].length)];
      return message.reply(randomResponse);
    }
  },
};
