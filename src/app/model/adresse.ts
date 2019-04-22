import { Article } from "./article";

export class Adresse {

    constructor(
      public id? : Number,
      public cp? : string,
      public ville?: string,
      public pays?: string,
      public rue?: string,
      public article?: Article,

    ) {}
  
  
  }
  