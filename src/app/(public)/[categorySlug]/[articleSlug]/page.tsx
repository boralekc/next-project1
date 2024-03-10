import ItemArticle from "@/entities/ItemArticle";
import { articleAPI } from "@/shared/api/ArticleService";
import { tagAPI } from "@/shared/api/TagService";
import TagsList from "@/features/TagsList";

interface ItemArticleProps {
    params: {
        articleSlug: string; 
    }
}

export default async function ArticlePage({ params: { articleSlug } }: ItemArticleProps) {
    const article = await articleAPI.getOneArticle(articleSlug);
    const tags = await tagAPI.getTags();

    return (
        <>
            <div className="w-screen bg-white">
                {article.map((oneArticle: IArticle) => (
                    <ItemArticle key={oneArticle.id}
                                 content={oneArticle.attributes.content}
                    />
                ))}
            </div>
            <div className="flex flex-wrapjustify-start bg-gray-100 mx-auto border-t">
                <div>
                {article.map((oneArticle: IArticle) => (
                    <div key={oneArticle.id}>
                         {oneArticle.attributes.tags.data.map((articleTag: ITag) => (
                            <TagsList key={articleTag.id} articleTag={articleTag.attributes.name} slug={oneArticle.attributes.slug} tags={tags}/>
                        ))}
                    </div>
                ))}
                </div>
            </div>
        </>
    )
}
