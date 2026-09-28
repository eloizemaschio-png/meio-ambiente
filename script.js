const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Por que devemos cuidar do meio ambiente?",
        alternativas: [
            {
                texto: "Porque dependemos dele para ter água, ar, alimentos e qualidade de vida.",
                afirmacao: "Você percebeu que o meio ambiente é essencial para a nossa vida."
            },
            {
                texto: "Para garantir recursos naturais para o futuro.",
                afirmacao: "Você entendeu que preservar a natureza é importante para as futuras gerações."
            }
        ]
    },

    {
        enunciado: "Por que devemos economizar água?",
        alternativas: [
            {
                texto: "Porque a água é essencial para a vida.",
                afirmacao: "Você reconheceu que a água é um recurso essencial e deve ser preservada."
            },
            {
                texto: "Para evitar o desperdício e preservar os recursos naturais.",
                afirmacao: "Você percebeu que economizar água é uma atitude importante para o planeta."
            }
        ]
    },

    {
        enunciado: "O que podemos fazer para diminuir a quantidade de lixo?",
        alternativas: [
            {
                texto: "Separar o lixo e reciclar materiais.",
                afirmacao: "Você escolheu uma atitude que ajuda a reduzir o lixo e facilita a reciclagem."
            },
            {
                texto: "Reutilizar materiais sempre que possível.",
                afirmacao: "Você percebeu que reutilizar materiais pode diminuir o desperdício."
            }
        ]
    },

    {
        enunciado: "Por que devemos preservar as árvores?",
        alternativas: [
            {
                texto: "Porque elas ajudam o meio ambiente e produzem oxigênio.",
                afirmacao: "Você entendeu a importância das árvores para o equilíbrio ambiental."
            },
            {
                texto: "Porque elas servem de abrigo para muitos animais.",
                afirmacao: "Você percebeu que preservar as árvores também significa proteger os animais."
            }
        ]
    },

    {
        enunciado: "Qual atitude ajuda a proteger o planeta?",
        alternativas: [
            {
                texto: "Economizar energia e evitar desperdícios.",
                afirmacao: "Você escolheu uma atitude simples que ajuda a preservar os recursos naturais."
            },
            {
                texto: "Não jogar lixo nas ruas, rios e florestas.",
                afirmacao: "Você entendeu que manter a natureza limpa ajuda a proteger os animais e o meio ambiente."
            }
        ]
    }
];

let perguntaAtual = 0;
let historiaFinal = [];

function mostraPergunta() {
    if (perguntaAtual >= perguntas.length) {
        mostraResultado();
        return;
    }

    const pergunta = perguntas[perguntaAtual];

    caixaPerguntas.textContent = pergunta.enunciado;
    caixaAlternativas.innerHTML = "";

    pergunta.alternativas.forEach((alternativa) => {
        const botao = document.createElement("button");

        botao.textContent = alternativa.texto;

        botao.addEventListener("click", () => {
            respostaSelecionada(alternativa);
        });

        caixaAlternativas.appendChild(botao);
    });
}

function respostaSelecionada(alternativa) {
    historiaFinal.push(alternativa.afirmacao);

    perguntaAtual++;

    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "🌱 Uma história sobre cuidar do planeta";

    caixaAlternativas.innerHTML = "";

    const historia = `
        Tudo começou quando você decidiu conhecer melhor o meio ambiente.
        Durante essa jornada, descobriu que a natureza é essencial para a vida
        e que nossas atitudes podem fazer a diferença.

        ${historiaFinal.join(" ")}

        No final dessa jornada, ficou claro que cuidar do planeta não depende
        apenas de grandes ações. Economizar água, separar o lixo, reciclar,
        preservar as árvores, economizar energia e evitar o desperdício são
        atitudes que podem fazer parte da nossa rotina.

        Cada pequena atitude ajuda a construir um futuro melhor.

        🌎 O planeta é nossa casa. Cuidar dele é responsabilidade de todos!
    `;

    textoResultado.textContent = historia;

    if (caixaResultado) {
        caixaResultado.style.display = "block";
    }
}

mostraPergunta();