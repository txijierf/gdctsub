export default class UserEntity {
  constructor({
    _id,
    username,
    email,
    title,
    firstName,
    lastName,
    phoneNumber,
    password,
    sysRole,
    organizations,
    isActive,
    isEmailVerified,
    isApproved,
    creationDate,
    approvedDate,
  }) {
    this._id = _id;
    this.username = username;
    this.email = email;
    this.title = title;
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.password = password;
    this.sysRole = sysRole;
    this.organizations = organizations;
    this.isActive = isActive;
    this.isEmailVerified = isEmailVerified;
    this.isApproved = isApproved;
    this.creationDate = creationDate;
    this.approvedDate = approvedDate;
  }
}
