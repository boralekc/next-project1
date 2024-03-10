export interface ICategory {
    id: number;
    attributes: {
        name: string;
        header_name: string;
        slug: string;
        articles: {
            data: []
        }
        }
    }

