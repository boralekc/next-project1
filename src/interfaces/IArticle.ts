interface IArticle {
    id: number
    attributes: {
        id: number;
        title: string;
        content: {
            children: {
                text: string;
            };
        };
        publishedAt: string;
        description: string;
        slug: string;
        tags: {
            data: [];
        }
    }
}
