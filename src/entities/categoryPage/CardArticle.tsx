import Link from "next/link";
import { FC } from "react";
import BlockTagItemArticle from "../../features/TagsList";

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

const CardArticle: FC<ArticleListProps> = ({ title, content, description, categorySlug, articleSlug }) => {
    
    return (
        <Link href={`/${categorySlug}/${articleSlug}`} className="flex flex-col mr-6 mb-6 flex-grow-0 justify-start border bg-white rounded-xl w-80">
            {content.map((item, index) => (
                <div key={index}>
                    {item.image && (
                        <img src={item.image.url} alt={title} className="rounded-t-xl"/>
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

export default CardArticle;
