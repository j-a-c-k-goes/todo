// Module imports.
import os from "os";
import fs from "fs";

// Message Class to Handle Greeting and Good-byes.
class Message{
	constructor(){
		this.user = process.env.USER || rocess.env.USERNAME || os.userInfo().username;
	}

	greet(user){
		const msg = `
		${this.user.toUpperCase()}\t${this.date}
		----------------------------------------------------------
		Welcome to Team Orbweaver's To-Do Application. The App's 
		purpose is to be a utility for documenting on-going 
		team tasks and activities; a minimal project manager.
		`;
		return msg;
	}
	farewell(user){
		const msg = `
		${this.user.toUpperCase()}\t${this.date}
		----------------------------------------------------------
		Thanks for using Team Orbweaver's To-Do Application.
		`;
		return msg;
	}
}

// To-Do Class
class ToDo{
	// Class Constructor to Initialize attributes and Implement. 
	// "" are placeholders for future prompts. 
	constructor (){
		this.date 		= new Date().toDateString();
		this.toDoList 	= [];
		this.desc 		= "" || undefined;
		this.type 		= "" || "Transactional" || "Occupational" || "Developmental" || "Educational" || "Recreational" || "Informational" || "Misc.";
		this.urgent 	= true || false;
		this.important 	= true || false;
		this.leverage 	= "Low" || "Medium" || "High";
		this.difficulty = "Easy" || "Medium" || "Hard";
		this.when 		= ""; 	// when will you complete this?
		this.where 		= ""; 	// where will you complete this?
		this.how 		= ""; 	// how will you complete this?
	}

	// Build the Object for the Dataset.
	build(desc, type, urgent, important, leverage, difficulty){
		const obj = {
			date: this.date
			desc: this.desc,
			type: this.type,
			when: this.when,
			where: this.where,
			how: this.how,
			difficulty: this.difficulty,
			urgent: this.urgent,
			important: this.important,
			leverage: this.leverage,
		}
		return obj;
	}

	// Write the data as a file. 
	write(){
		const obj = this.build();
		console.log("Creating New File.");
		console.table(obj)
		// fs.writeFileSync("to-do.json", JSON.stringify(obj))
	}

	// Get the data from a file.
	fetch(data){
		const data;
		return data;
	}

	// Save the data as a file.
	save(data){
	}

	// Filter all To-Do's by key name
	filterAll(data, keyName){
		const filtered;
		return filtered;
	}

	// Filter To-Do's by key name and value 
	filterBy(data, keyName, keyValue){
		const filtered;
		return filtered
	}

	//  Add Item to Dataset. 
	add(obj, data){
		let adding = true;
		this.toDoList.push(obj);
	}

	// Remove Item from Dataset. 
	remove(){}
}

const test = new ToDo();
console.log(test.welcome());
console.log(test.build());
test.write();
