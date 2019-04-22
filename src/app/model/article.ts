export class Article {

  constructor(
    public id? : Number,
    public titre? : string,
    public categorie?: string,
    public prix?: Number,
    public age?: string,
    public reference?: string,
    public photo?: Blob,
    public photo2?: Blob,
    public marque?: string,
    public qualite?: string
  ) {}


}
