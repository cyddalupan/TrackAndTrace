import { Fbuser } from './fbuser';

export class ReportSeverity {
    id: number;
    report_id: number;
    category_id: number;
    category_name: string;
    severity: string;
    created_at: string;
    updated_at: string;
}

export class Report {
    id?: number;
    fb_id: number;
    person_id?: number;
    report_category_id: number;
    sub_category: string;
    claimant: string;
    severity: number;
    is_active?: boolean;
    remarks: string;
    created_at?: string;
    updated_at?: string;
    severities?:  ReportSeverity[];
    fbuser?: Fbuser;
}
