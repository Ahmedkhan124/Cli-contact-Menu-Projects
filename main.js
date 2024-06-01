#! /usr/bin/env node
import inquirer from "inquirer";
// Printing the message before starting the program
console.log("Welcome to our contact number menu");
// Initilaizing an empty array to store contacts
let contact = [];
// Initilaizing the serial number for contacts
let contactSerial = 1;
// Function to display the main contact manu
async function ContactMenu() {
    const inputContact = await inquirer.prompt({
        type: "list",
        name: "contact",
        message: "What would you like to do?",
        choices: ["Add Contact", "View Contact", "Close Menu"]
    });
    // Extracting the user's choies from the input
    let { contact } = inputContact;
    if (contact === "Add Contact")
        addContact();
    if (contact === "View Contact")
        viewContact();
    if (contact === "Close Menu")
        console.log("\nThankyou for using our contact Menu");
}
// calling the function to display the contact menu
ContactMenu();
// Function to add a new contact to the contact list
async function addContact() {
    const inputContactDetails = await inquirer.prompt([
        {
            type: "input",
            name: "perName",
            message: "Enter your name"
        },
        {
            type: "input",
            name: "perNumber",
            message: "Enter your number"
        }
    ]);
    // Extracting the user's details from the input
    const { perName, perNumber } = inputContactDetails;
    // Adding the new contact to the contact array
    contact.push({ Id: contactSerial++, Name: perName, PhoneNumber: perNumber });
    console.log(`\n New Contact Number has been added\n`);
    // Displaying the contact menu again after adding a contact
    ContactMenu();
}
// Function to view all contacts
function viewContact() {
    // Printing each contact in the contact array
    if (contact.length > 0)
        contact.forEach((user) => console.log(`\n${user.Id}. Person Name: ${user.Name} | Contact Number: ${user.PhoneNumber}\n`));
    // Printing a message if no contacts are found
    else
        console.log(`\n No contact found!\n`);
    // Display the contact menu again after viewing contacts
    ContactMenu();
}
