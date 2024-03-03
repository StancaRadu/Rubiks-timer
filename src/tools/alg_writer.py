while True:
    string = input()
    string = string.replace("(","")
    string = string.replace(")","")
    string = string.replace(" ","")

    alg_string = ''
    move = ''
    i = 0
    while i < len(string):
        x = string[i]
        if i > 0 and x not in ["'", "2"]:
            alg_string += '"' + move + '", '
            move = ""
        move += x
        
        i += 1
    alg_string += '"' + move + '"'

    # alg_string = alg_string[
    alg_string = "[ " + alg_string + " ]"
    print(alg_string)