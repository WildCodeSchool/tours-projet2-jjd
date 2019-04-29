export class Establishment {
  constructor(
// tslint:disable-next-line: variable-name
    public _id: string,
    public name: string,
    public type: string,
    public address: {
      street: String,
      zipCode: String,
      city: String,
      number: String,
    },
    public description: string,
    public contact: {
      phone: Number,
      email: String,
    },
    public networks: [{
      name: string,
      link: string,
    }],
    public medias: [{
      url: string,
      order: number,
    }],
    public profiles: string,
) { }
}
