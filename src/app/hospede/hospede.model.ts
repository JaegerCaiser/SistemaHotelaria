class Hospede {
    constructor(
        public id: number,
        public name: string,
        public lastName: string,
        public birthday: string,
        public document: string,
        public credcard: number,
        public telefone: string,
        public checkin: number
    ) {
    }
}

export {Hospede};
