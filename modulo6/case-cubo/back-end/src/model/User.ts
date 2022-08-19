export class User {

  constructor(
    private id: string,
    private firstName: string,
    private lastName: string,
    private participation: number,
  ) {}

  public getId() {
    return this.id
  }

  public getFirstName() {
    return this.firstName
  }

  public getLastName() {
    return this.lastName
  }

  public getParticipation() {
    return this.participation
  }

  static toUserModel(data: any): User {
    // return new User(data.firstName, data.lastName, data.participation)
    return new User(data.id, data.firstName, data.lastName, data.participation)
  }
}