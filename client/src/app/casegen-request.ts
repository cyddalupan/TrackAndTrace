export class CasegenRequest {
	quest_id: number|null;
	casegen_id: number|null;
	message:string;
	rule: string;
	category_id: number;
	subcategory: string;
	claimant: string;
	severity: number;
	remarks: string;
}

export class CasegenOptions {
	option1: string;
	quest1: number;
	option2: string;
	quest2: number;
	option3: string;
	quest3: number;
	option4: string;
	quest4: number;
	option5: string;
	quest5: number;
	option6: string;
	quest6: number;
}