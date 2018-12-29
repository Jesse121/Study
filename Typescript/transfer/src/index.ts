function Student(firstName, middleInitial, lastName) {
    this.firstName = firstName;
    this.middleInitial = middleInitial;
    this.lastName = lastName;
    this.fullName = firstName + " " + middleInitial + " " + lastName;
}