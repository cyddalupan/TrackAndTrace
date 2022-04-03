import { Quest } from './quest';

export class Casegen {
	id: number;
	quest_id: number;
	report_category_id: number;
	subcategory: string;
	claimant: string;
	severity: number;
	remarks: string;
	created_at: string;
	updated_at: string;
	quest: Quest;
}
