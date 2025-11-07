interface Teacher {
	readonly firstName: string;
	readonly lastName: string;
	fullTimeEmployee: boolean;
	yearsOfExperience?: number;
	location: string;
	[key: string]: any;
}

interface Director extends Teacher {
	numberOfReports: number;
}

interface printTeacherFunction {
	firstName: string;
	lastName: string;
}

const teacher1: Teacher = {
	firstName: "John",
	lastName: "Doe",
	fullTimeEmployee: false,
	location: "London",
	contract: false,
};

function printTeacher({ firstName, lastName }: printTeacherFunction) {
	return `${firstName.charAt(0)}. ${lastName}`;
}

console.log(printTeacher(teacher1));
// export {};
