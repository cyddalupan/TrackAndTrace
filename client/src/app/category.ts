export class Category {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
}

export class CategoryKeyword {
    id: number;
    category_id: number;
    keyword: string;
    created_at: string;
    updated_at: string;
}