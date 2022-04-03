import {Uniquechat} from './uniquechat';
import {Category} from './category'

export class HitkeySeverity {
    id: number;
    hitkey_id: number;
    category_id: number;
    severity: number;
    created_at: string;
    updated_at: string;
    category: Category;
}

export class Hitkey {
    id: number;
    chat_id: number;
    is_report: boolean;
    is_done: boolean;
    created_at: string;
    updated_at: string;
    severities:  HitkeySeverity[];
    unique: Uniquechat;
}