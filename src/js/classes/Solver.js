export default class Solver{
    static brain = {
        sledge: ["R'", 'F', "R", "F'"],
        URUR: ["U", "R", "U'", "R'"],
        RUR: ['R', 'U', "R'"],
        SecondLayer: {
            R: ["U", "R", "U'", "R'", "U'", "Y", "L'", "U", "L"],
            L: ["U'", "L'", "U", "L", "U", "Y'", "R", "U'", "R'"]
        },
        UpperCross: ["F", 'R', 'U', "R'", "U'", "F'"],
        UpperEdges: ["R", "U", "R'", "U", "R", "U2", "R'"],
        distances: {
            F:{R:"'", B:2, L:""}, 
            R:{B:"'", L:2, F:""}, 
            B:{L:"'", F:2, R:""}, 
            L:{F:"'", R:2, B:""}, 
        }
    }
    constructor(cube){
        this.cube = cube
        this.addKeyInput()
    }

    addKeyInput(){
        document.addEventListener('keyup', (event) => {
            if (this.cube.canvas.parent.classList.contains("hidden")) return
            if (event.code == "KeyP") this.solve()
        });
    }

    async solve(){
        console.log(await this.cross())
        console.log(await this.corners())
        console.log(await this.secondLayer())
        console.log(await this.upperCross())
        console.log(await this.alignUpperCross())
        console.log(await this.upperCorners())
    }

    async cross(){
        const pieces = ['DUM', 'DMR', 'DDM', 'DML']
        const connections = [
            ['UDM', 'FMM'], ['UMR', 'RMM'], ['UUM', 'BMM'], ['UML', 'LMM'],
            ['DUM', 'FMM'], ['DMR', 'RMM'], ['DDM', 'BMM'], ['DML', 'LMM']
        ]
        function findConnection(id){
            for (let connection of connections)  if (connection[0] === id) return connection[1]
        }
        
        for (const piece of pieces){
            let a = 0
            while (true){
                a++
                let position = this.findPiece(piece)
                if (['L', 'R', 'B'].includes(position[0])){
                    switch (position[0]) {
                        case 'L':
                            await this.cube.move("Y'")

                            break;
                        case 'R':
                            await this.cube.move("Y")

                            break;
                        case 'B':
                            await this.cube.move("Y2")

                            break;
                    }
                }

                position = this.findPiece(piece)
                if (position[0] === 'F'){
                    while (true){
                        position = this.findPiece(piece)
                        if (position[0] === 'U') break
                        switch (position[2]) {
                            case 'L':
                                while (true){
                                    if (!pieces.includes(this.cube.pieces['UML'].name)) {
                                        await this.cube.move("L'")
                                        break
                                    }
                                    else {
                                        if (pieces.includes(this.cube.pieces['UDM'].name))  await this.cube.move("U'")
                                        else await this.cube.move("U")
                                    }
                                }
                                break;
                        
                            case 'R':
                                while (true){
                                    if (!pieces.includes(this.cube.pieces['UMR'].name)) {
                                        await this.cube.move("R")
                                        break
                                    }
                                    else {
                                        if (pieces.includes(this.cube.pieces['UDM'].name))  await this.cube.move("U")
                                        else await this.cube.move("U'")
                                    }
                                }
                                break
                            
                            case 'M':
                                switch (position[1]){
                                    case 'U':
                                        while (true){
                                            if (!pieces.includes(this.cube.pieces['UDM'].name)) {
                                                await this.cube.move("F")
                                                break
                                            }
                                            else {
                                                if (pieces.includes(this.cube.pieces['UML'].name))  await this.cube.move("U")
                                                else await this.cube.move("U'")
                                            }
                                        }
                                        break
                                    case 'D':
                                        while (true){
                                            if (!pieces.includes(this.cube.pieces['UDM'].name)) {
                                                await this.cube.move("F'")
                                                break
                                            }
                                            else {
                                                if (pieces.includes(this.cube.pieces['UML'].name))  await this.cube.move("U")
                                                else await this.cube.move("U'")
                                            }
                                        }
                                        break
                                }
                                break
                        }
                    }
                }
                if (a=10) break
            }
        }

        let placed = 0
        while (true){
            if (placed === 4 || placed > 20) break
            for (const piece of pieces){
                let position = this.findPiece(piece)
                let current_connection = findConnection(position)
                let natural_connection = this.findPiece(findConnection(piece))

                if (current_connection === natural_connection && position[0] === 'D') {
                    placed++
                    continue
                }

                if (position[0] === 'D') continue

                let move = `U${Solver.brain.distances[current_connection[0]][natural_connection[0]]}`
                if (move !== 'Uundefined') await this.cube.move(move)
                await this.cube.move(`${natural_connection[0]}2`)
                placed++
            }
        }
        return "done"
    }
    async corners(){
        let pieces = ['DUL', 'DUR', 'DDR', 'DDL']
        const targets = ['FUR', 'UDR', 'RUL']
        const low = ['DUR', 'FDR', 'RDL']
        const connections = {DUL: 'FMM', DUR: 'RMM', DDR: 'BMM', DDL: 'LMM'}
        let placed = 0
        let limit = 0
        while (true){
            if (placed === 4 || limit > 10) break
            for (const piece of pieces){
                limit++
                let connection_location = this.findPiece(connections[piece])
                let location = this.findPiece(piece)
                if (location[0] !== 'D' && (location[0] === 'U' || location[1] === 'U')){
                    const modifier = Solver.brain.distances[connection_location[0]]['R']
                    if (typeof modifier !== 'undefined') await this.cube.move(`Y${modifier}`)
                    
                    while (true){
                        location = this.findPiece(piece)
                        if(targets.includes(location)) break
                        
                        else {
                            if (['FUL', 'UDL', 'LUR'].includes(location)) await this.cube.move("U'")
                            else await this.cube.move("U")
                        }
                    }
                }
                location = this.findPiece(piece)
                switch (location){
                    case 'FUR':
                        for (let index = 0; index < 1; index++) {
                            await this.cube.move_using_(Solver.brain['URUR'])
                            
                        }
                        pieces.splice(pieces.indexOf(piece), 1)
                        placed++
                        break
                    case 'UDR':
                        for (let index = 0; index < 3; index++) {
                            await this.cube.move_using_(Solver.brain['URUR'])
                        }
                        pieces.splice(pieces.indexOf(piece), 1)
                        placed++
                        break
                    case 'RUL':
                        for (let index = 0; index < 5; index++) {
                            await this.cube.move_using_(Solver.brain['URUR'])
                        }
                        pieces.splice(pieces.indexOf(piece), 1)
                        placed++
                        break
                    }
                }
            for (const piece of pieces){
                let location = this.findPiece(piece)

                if (location[0] !== 'D' && (location[0] === 'U' || location[1] === 'U')) break
                while (true){
                    let location = this.findPiece(piece)
                    if (low.includes(location)) break
                    await this.cube.move('Y')
                }
                await this.cube.move_using_(Solver.brain['RUR'])
                break
            }
        }
        
        return "done"
    }
    async secondLayer(){
        let pairs = [['FMR', 'RML'], ['RMR','BML'], ['BMR', 'LML'], ['LMR', 'FML']]
        const connections = [['FMR', 'FMM'], ['RML','RMM'], ['RMR','RMM'], ['BML','BMM'], ['BMR','BMM'] ,['LML','LMM'], ['LMR','LMM'], ['FML','FMM']]

        function findConnection(piece){
            for (const connection of connections) if (connection[0] === piece) return connection[1]
        }
        let solved = 0
        while (solved < 4){
            for (const pieces of pairs){
                const p0 = pieces[0]
                const p1 = pieces[1]
                let location0 = this.findPiece(p0)
                let location1 = this.findPiece(p1)
                let c0_location = this.findPiece(findConnection(p0))
                let c1_location = this.findPiece(findConnection(p1))
    
                if (location0[0] === 'U' || location1[0] === 'U') {
                    const piece = (location0[0] === 'U') ? p1 : p0
                    let location = this.findPiece(piece)
                    let connection = findConnection(piece)
                    let c_location = this.findPiece(connection)

                    let move =  `Y${Solver.brain.distances[c_location[0]]['F']}`
                    if (move !== 'Yundefined') await this.cube.move(move)

                    location = this.findPiece(piece)

                    move = `U${Solver.brain.distances[location[0]]['F']}`
                    if (move !== 'Uundefined') await this.cube.move(move)

                    const piece2 = (piece === p1) ? p0: p1
                    const side = this.findPiece(findConnection(piece2))[0]
                    console.log(piece2, side);
                    await this.cube.move_using_(Solver.brain.SecondLayer[side])
                }
                else if (location0[0] === c0_location[0] && location1[0] === c1_location[0]) solved++
                else {
                    let move =  `Y${Solver.brain.distances[location0[0]]['F']}`
                    if (move !== 'Yundefined') await this.cube.move(move)
                    await this.cube.move_using_(Solver.brain.SecondLayer[location0[2]])

                }
            }
        }

        return "done"
    }
    async upperCross(){
        const pieces = ['UDM', 'UMR', 'UUM', 'UML']
        const alg = Solver.brain.UpperCross

        let placement = {
            UDM: 0,
            UMR: 0,
            UUM: 0,
            UML: 0
        }

        let sum = 0
        for (const piece of pieces){
            let location = this.findPiece(piece)
            if (location[0] === 'U'){
                placement[location] = 1
                sum++
            }
        }
        if (sum === 0){
            await this.cube.move_using_(alg)
            await this.cube.move("U'")
            await this.cube.move_using_(alg)
            await this.cube.move_using_(alg)
        }else if (sum === 2){
            let h1 = placement['UML']
            let h2 = placement['UMR']
            let h3 = placement['UUM']
            if (h1 === h2){
                console.log('line');
                if (h1 === 1) await this.cube.move_using_(alg)
                if (h1 === 0) await this.cube.move_using_([ "U'", ...alg])
            } else {
                console.log("l shape");
                if (h1 === h3){
                    if (h1 === 1) await this.cube.move_using_([ ...alg, ...alg])
                    else await this.cube.move_using_(["U2", ...alg, ...alg])
                }else{
                    if(h1 === 1) await this.cube.move_using_(["U", ...alg, ...alg])
                    else await this.cube.move_using_(["U'", ...alg, ...alg])
                }
            }

        }
        

        return 'done'
    }
    async alignUpperCross(){
        const connections = [['FUM', 'FMM'], ['RUM', 'RMM'], ['BUM', 'BMM'], ['LUM', 'LMM']]
        function findConnection(piece){
            for (const connection of connections) if (connection[0] === piece) return connection[1]
            for (const connection of connections) if (connection[1] === piece) return connection[0]
        }
        
        while (true){
            let front = this.cube.pieces['FMM'].name
            let piece = findConnection(front)
            let location = this.findPiece(piece)
            let move = `U${Solver.brain.distances[location[0]]['F']}`
            if (move !== 'Uundefined') await this.cube.move(move)

            let r = this.cube.pieces['RUM'].name
            let b = this.cube.pieces['BUM'].name
            let l = this.cube.pieces['LUM'].name

            let r_c = this.findPiece(findConnection(r))
            let b_c = this.findPiece(findConnection(b))
            let l_c = this.findPiece(findConnection(l))

            let r_l = this.findPiece(r)
            let b_l = this.findPiece(b)
            let l_l = this.findPiece(l)

            if (r_c[0] === r_l[0] && b_c[0] === b_l[0] && l_c[0] === l_l[0]) break

            if (r_c[0] === r_l[0] || b_c[0] === b_l[0] || l_c[0] === l_l[0]) await this.cube.move_using_("Y")
            else await this.cube.move_using_(Solver.brain.UpperEdges)

        }
        return 'done'
    }
    async upperCorners(){
        

        return "done"
    }
    findPiece(piece){
        return Object.keys(this.cube.pieces).find(key => this.cube.pieces[key].name === piece);
    }

}