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
      site: String,
    },
    public networks: [{
      name: string,
      link: string,
    }],
    public media: [{
      url: string,
      order: number,
    }],
    public profiles: string,
) { }
}
