const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, id, email, githubUsername) {
        super(name, id, email);
        this.githubUsername = githubUsername;
    }

    s

    getGithubUsername() {
        return this.githubUsername;
    }


    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;