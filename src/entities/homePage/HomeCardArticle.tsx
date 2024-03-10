import Link from "next/link";
import { FC } from "react";

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

const HomeCardArticle: FC<ArticleListProps> = ({ title, content, description, categorySlug, articleSlug }) => {
    
    return (
        <Link href={`/${categorySlug}/${articleSlug}`} className="flex flex-col flex-grow-0 justify-start border bg-white rounded-lg w-1/3">
            {content.map((item, index) => (
                <div key={index}>
                    {item.image && (
                        <img src={item.image.url} alt={title} className="rounded-t-lg"/>
                    )}
                </div>
            ))}
            <div className="px-3 py-3 h-3/4"> 
            <div className="font-bold text-xl">{title}</div>
            <div className="line-clamp-6 mt-2">{description}</div>
            </div>
        </Link>
    );
};

export default HomeCardArticle;


