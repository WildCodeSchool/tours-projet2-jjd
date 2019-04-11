export class Profile {
  constructor(

public firstName: string,
public lastName: string,
public key: string,

public adress: {
  street: string,
  zipCode: string,
  city: string,
  number: string,
},

public contact: {
  fax: string,
  phone: string,
  email: string,
},
) { }
}
