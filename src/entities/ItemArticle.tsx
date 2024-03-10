import { BlocksRenderer, type BlocksContent } from '@strapi/blocks-react-renderer';

interface ItemArticleProps {
    title: string;
    content: BlocksContent;
    tag: string;
}

const ItemArticle: React.FC<ItemArticleProps> = async ({ content}) => {

  return (
    <div>
    <main className='mx-auto prose lg:prose-xl py-4 rounded-b-lg pb-20 shadow-b-lg'>
    <BlocksRenderer content={content} />
    </main>
  </div>
  )
};

export default ItemArticle;
