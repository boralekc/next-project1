interface ArticleContent {
    children: { text: string }[];
    image: {
        url: string;
    }
}

interface ArticleListProps {
    title: string;
    content: ArticleContent[];
    categorySlug: string;
    articleSlug: string;
    description: string;
}


const HomeBigCard: React.FC<ArticleListProps> = ({ title, content, description, categorySlug, articleSlug }) => {
    return (
        <div className="w-1/3">
        <div className="line-clamp-6">{title}</div>
        <div className="line-clamp-6 mt-2">{description}</div>
        </div>
    )
}

export default HomeBigCard