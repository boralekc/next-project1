import React from 'react';
import HomeCardArticle from '@/entities/homePage/HomeCardArticle';
import HomeBigCard from '@/entities/homePage/HomeBigCard';

interface CategoryProps {
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

const CategoryList: React.FC<CategoryProps> = ({ articles, categorySlug }) => {
    
    if (!articles || !articles.data || articles.data.length === 0) {
        return <div>No articles found</div>;
    }

    const sortedArticles = [...articles.data].sort((a, b) => {
        return new Date(b.attributes.publishedAt).getTime() - new Date(a.attributes.publishedAt).getTime();
    });

    return (
        <section className='flex justify-center px-10 py-10 bg-gradient-to-b'>
            <div className='flex flex-col'>
                <div className='flex space-x-4'>
                    {sortedArticles.slice(0, 3).map((article) => (
                        <HomeCardArticle 
                            key={article.id} 
                            title={article.attributes.title}
                            content={article.attributes.content} 
                            articleSlug={article.attributes.slug}
                            categorySlug={categorySlug}
                            description={article.attributes.description}
                        />
                    ))}
                </div>
                <div className='mt-4 py-4 px-4 border rounded-xl bg-white'>
                    {sortedArticles.slice(3,9).map((article) => (
                        <HomeBigCard 
                            key={article.id} 
                            title={article.attributes.title}
                            content={article.attributes.content} 
                            articleSlug={article.attributes.slug}
                            categorySlug={categorySlug}
                            description={article.attributes.description}
                        />
                    ))}
                </div>
                <div className='flex space-x-4 mt-4 '>
                    {sortedArticles.slice(0, 4).map((article) => (
                        <HomeCardArticle 
                            key={article.id} 
                            title={article.attributes.title}
                            content={article.attributes.content} 
                            articleSlug={article.attributes.slug}
                            categorySlug={categorySlug}
                            description={article.attributes.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default CategoryList;
