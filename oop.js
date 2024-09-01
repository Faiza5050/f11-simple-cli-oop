#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
class Institute {
    Admin;
    Owner;
    Library;
    constructor(admin, owner, library) {
        this.Admin = admin;
        this.Owner = owner;
        this.Library = library;
    }
}
class Person {
    teacher = [];
    addPerson(obj) {
        this.teacher.push(obj);
    }
}
;
const person1 = new Person();
const projectStart = async (person1) => {
    console.log(chalk.yellow("\n\t    *=*=*=*=*=*=*=*=*=*=*=*=*=*"));
    console.log(chalk.yellow("\tWELCOME TO OBJECT ORIENTED PROGRAMMING"));
    console.log(chalk.yellow("\t    *=*=*=*=*=*=*=*=*=*=*=*=*=*\n"));
    do {
        const ans = await inquirer.prompt({
            name: "select",
            type: "list",
            message: "With whom would you like to interact? \n",
            choices: ["Admin", "Owner", "Exit"],
        });
        if (ans.select == "Admin") {
            const ans = await inquirer.prompt({
                name: "admin",
                type: "input",
                message: "Enter Person Name: \n",
            });
            console.log(chalk.blueBright(`Hellow ${chalk.bold.yellowBright(ans.admin)}! What do you want to talk about?\n`));
            console.log(chalk.magenta(` I am ${chalk.bold.yellowBright(ans.admin)}, want to go for Pakistan Tour and I request you to leave for 15 days.\n`));
        }
        if (ans.select == "Owner") {
            const ans = await inquirer.prompt({
                name: "owner",
                type: "input",
                message: "Enter Person Name: \n",
            });
            const Owner = person1.teacher.find((val) => val.Admin == ans.Owner);
            if (!Owner) {
                const addNew = new Person();
                person1.addPerson(ans.owner);
                console.log(chalk.red(` Dear ${chalk.bold.yellowBright(ans.owner)}! Owner is on leave, You can talk later.\n`));
                console.log(person1.teacher);
            }
            if (Owner) {
                console.log(chalk.bold.green(` Dear ${chalk.bold.yellowBright(ans.owner)}! Accepted Your Application, You Can Go.\n`));
                console.log(person1.teacher);
            }
        }
        ;
        if (ans.select == "Exit") {
            console.log(chalk.yellow("\n\t    *=*=*=*=*=*=*=*=*=*=*=*=*=*"));
            console.log(chalk.yellow("\t\t       THE END"));
            console.log(chalk.yellow("\t    *=*=*=*=*=*=*=*=*=*=*=*=*=*\n"));
            process.exit();
        }
    } while (true);
};
projectStart(person1);
