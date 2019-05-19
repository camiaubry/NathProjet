import { Article } from "./article";

export class Panier {

    constructor(
      public id? : string,
      public listeArticle? : Article[],
      public commandeBean? : string,

    ) {}
  
  }
