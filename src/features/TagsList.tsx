import ItemTag from '@/entities/ItemTag';
import React from 'react';

interface ItemArticleProps {
  title: string;
  description: string;
  tags: { id: number; attributes: { description: string; name: string; createdAt: string; updatedAt: string; publishedAt: string; articles: Object } }[];
  articles: {
    data: { id: number; attributes: { title: string; slug: string; } }[];
  };
  articleTag: string;
  slug: string;
}

const TagsList: React.FC<ItemArticleProps> = ({ tags, articleTag, slug }) => {
  const matchingTags = tags ? tags.filter(tag => tag.attributes.name === articleTag) : [];

  return (
    <main className='w-screen '>
      {matchingTags.map(tag => (
        <div key={tag.id} className='flex flex-wrap justify-center mx-auto'>
          {tag.attributes.articles.data.filter(article => article.attributes.slug !== slug).slice(0, 3)
            .map((article: any) => (
              <ItemTag key={article.id} title={article.attributes.title} description={article.attributes.description}/>
            ))}
        </div>
      ))}
    </main>
  );
};

export default TagsList;
