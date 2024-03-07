while True:
    string = input()
    moves = ["F", "B", "U", "D", "L", "R",
             "f", "b", "u", "d", "l", "r"]
    modifiers = ["'", "2"]

    alg_string = ''
    move = ''
    i = 0
    while i < len(string):
        x = string[i]
        if x in moves or x in modifiers:
            if x in moves and move:
                alg_string += f'"{move}", '
                move = ""
            move += x
        i += 1
        
    alg_string += f'"{move}"'

    # alg_string = alg_string[
    alg_string =  f"[ {alg_string} ]"
    print(alg_string)