const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const NOTAS_FILE = "NOTAS_FILES.json";
const notas = [];

function addNota(nota) {
    notas.push(nota)
    fs.writeFileSync(NOTAS_FILE, JSON.stringify(notas))
}

function main() {
    rl.question(
        "Que quieres hacer ? 1. Ver un Mensaje, 2. Salir",
        (answer) => {
            switch (answer) {
                case "1":
                    rl.question("Ingresa el texto de tu nota: ",
                        (userAnswer) => {
                            addNota(userAnswer);
                            main();
                        })
                    break;
                case "2":
                    rl.close()
                    break;
                case "default":
                    console.log("Invalid option")
                    main()
                    break;
            }
        }
    )
}


main();