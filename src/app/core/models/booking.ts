export class Booking {
  constructor(
// tslint:disable-next-line: variable-name
  public _id: string,
  public date: {
    start: number,
    end: number,
  },
  public owner: {
    name: string,
    adress: {
      street: string,
      zipCode: string,
      city: string,
      number: number,
    },
    contact: {
      phone: string,
      email: string,
    },
  },
  public numbers: number,
  public establishment: string,
) {}
}
