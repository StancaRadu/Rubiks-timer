def flipper(pairs):
    for pair in pairs:
        p0 = pair[0]
        p1 = pair[1]
        pair[0] = p1
        pair[1] = p0
    print(pairs)

flipper([["FDR", "RDR"], ["RDR", "BDR"], ["BDR", "LDR"], ["LDR", "FDR"],
                ["FDL", "RDL"], ["RDL", "BDL"], ["BDL", "LDL"], ["LDL", "FDL"],
                ["FDM", "RDM"], ["RDM", "BDM"], ["BDM", "LDM"], ["LDM", "FDM"],

                ["DUL", "DUR"], ["DUR", "DDR"], ["DDR", "DDL"], ["DDL", "DUL"],
                ["DML", "DUM"], ["DUM", "DMR"], ["DMR", "DDM"], ["DDM", "DML"],

                ['FML', 'RML'], ['RML', 'BML'], ['BML', 'LML'], ['LML', 'FML'],
                ['FMR', 'RMR'], ['RMR', 'BMR'], ['BMR', 'LMR'], ['LMR', 'FMR'],

                ['FMM', 'RMM'], ['RMM', 'BMM'], ['BMM', 'LMM'], ['LMM', 'FMM']])