export class Establishment {
  constructor(
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
