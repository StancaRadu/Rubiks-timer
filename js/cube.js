class Cube{

    static ammount = 0

    constructor(type){
        this.id = Cube.ammount;
        Cube.ammount++;

        this.pieces = {
            "FUL": null, "FUM": null, "FUR": null, "FML": null, "FMM": null, "FMR": null, "FDL": null, "FDM": null, "FDR": null,
            "BUL": null, "BUM": null, "BUR": null, "BML": null, "BMM": null, "BMR": null, "BDL": null, "BDM": null, "BDR": null, 
            "TUL": null, "TUM": null, "TUR": null, "TML": null, "TMM": null, "TMR": null, "TDL": null, "TDM": null, "TDR": null, 
            "BUL": null, "BUM": null, "BUR": null, "BML": null, "BMM": null, "BMR": null, "BDL": null, "BDM": null, "BDR": null, 
            "RUL": null, "RUM": null, "RUR": null, "RML": null, "RMM": null, "RMR": null, "RDL": null, "RDM": null, "RDR": null,
            "LUL": null, "LUM": null, "LUR": null, "LML": null, "LMM": null, "LMR": null, "LDL": null, "LDM": null, "LDR": null
        }

        this.type = type;

        this.location;

    }


}

class Cube2d extends Cube{
    constructor(){
        super("2d")
        
    }
}

let cube = new Cube()
