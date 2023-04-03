interface IAddress {
  name: string;
  email: string;
}

export class Provider {
  to: IAddress;
  from: IAddress;
  subject: string;
  body: string;

  constructor(props: Provider) {
    Object.assign(this, props);
  }
}
