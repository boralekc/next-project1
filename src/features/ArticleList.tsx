import CardArticle from '@/entities/categoryPage/CardArticle';
import React from 'react';

interface ArticleListProps {
    categorySlug: string;
    articles: {
        data: {
            id: number;
            attributes: {
                title: string;
                content: [{
                    children: [{
                        text: string;
                    }] 
                }]
                createdAt: string,
                updatedAt: string,
                publishedAt: string
                slug: string;
                description: string;
            }
        }[]
    }
}

const ArticleList: React.FC<ArticleListProps> = ({ articles, categorySlug }) => {

    if (!articles || !articles.data || articles.data.length === 0) {
        return <div>No articles found</div>;
    }

    const sortedArticles = [...articles.data].sort((a, b) => {
        return new Date(b.attributes.publishedAt).getTime() - new Date(a.attributes.publishedAt).getTime();
    });

    return (
        <section className='pt-10 bg-gradient-to-b px-10 py-10'>
            <div className='flex flex-wrap justify-center mx-auto'>
                {sortedArticles.map((article) => (
                    <CardArticle 
                        key={article.id} 
                        title={article.attributes.title}
                        content={article.attributes.content} 
                        articleSlug={article.attributes.slug}
                        categorySlug={categorySlug}
                        description={article.attributes.description}
                    />
                ))}
            </div>
        </section>
    );
}

export default ArticleList;
