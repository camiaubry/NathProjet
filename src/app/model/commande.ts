import { Client } from "./client";

export class Commande {

    constructor(
    public id?: Number,
    public commande?: Number,
    public facture?: Number,
    public date?: Date,
    public statusValid?: Boolean,
    public statusSuivi?: String,
    public numeroSuivi?: String,
    public total?: Number,
    public client?: Client,
    ) {}

}