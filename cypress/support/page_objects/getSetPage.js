
export class getSet {

    #firstName = "Gobi";
    #lastName;

    constructor() {
        
    }

    get fName() {
        return this.#firstName;
    }

    get lName() {
        return this.#lastName;
    }

    set lName(lastname) {
        this.#lastName = lastname;
    }


}

export const getSetter = new getSet();