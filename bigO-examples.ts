export class Execution {
    names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Pablo']
    ages = [3, 10, 18, 20, 22]

    create(name: string) {
        this.names.push(name) // 1
        console.log('sucesso') // 1
        // f(x) = 1 + 1 => O(f(x)) = O(1) ORDEM CONSTANTE
    }

    showNames() {
        this.names.forEach(name => { // n
            console.log({
                'Nome da pessoa:': name
            }) // n * 1
        })
        // f(x) = x * 1 => O(f(x)) = O(n) ORDEM LINEAR
    }

    showAllCombinations() {
        let matriz: [string, number][] = [] // 1
        console.log('Start: ') // 1
        for (const name of this.names) { // n 
            for (const age of this.ages) { // * n
                matriz.push([name, age]) // ** 1
            }
        }
        console.log(matriz, matriz.length) // 1
        // f(x) = 1 + 1 + (x * x * 1) + 1 => O(f(x)) = O(n²) ORDEM QUADRATICA
    }
}
