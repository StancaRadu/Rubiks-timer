def flipper(pairs):
    for pair in pairs:
        p0 = pair[0]
        p1 = pair[1]
        pair[0] = p1
        pair[1] = p0
    print(pairs)

flipper([['FUM', 'DUM'], ['DUM', 'BDM'], ['BDM', 'UUM'], ['UUM', 'FUM'],
                ['FDM', 'DDM'], ['DDM', 'BUM'], ['BUM', 'UDM'], ['UDM', 'FDM'],

                ['FMM', 'DMM'], ['DMM', 'BMM'], ['BMM', 'UMM'], ['UMM', 'FMM']])