import { Article } from "./article";

export class Panier {

  public id? : string
  public listeArticle? : Article[]
  public commandeBean? : string

    constructor(
      id : string,
      listeArticle : Article[],
      commandeBean : string,

    ) {
      this.id = id;
      this.listeArticle = listeArticle;
      this.commandeBean = commandeBean;
    }
  
  
  }
  