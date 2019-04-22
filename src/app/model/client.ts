import { Adresse } from "./adresse";

export class Client {

    constructor(
      public id? : Number,
      public nom? : string,
      public prenom? :string,
      public telephone?: string,
      public email?: string,
      public adresse?: Adresse,

    ) {}
  
  
  }
  