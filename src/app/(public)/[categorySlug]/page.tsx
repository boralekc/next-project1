import ArticleList from "@/features/ArticleList";
import { ICategory } from "@/interfaces/ICategory";
import { articleAPI } from "@/shared/api/ArticleService";
import { categoryAPI } from "@/shared/api/CategoryService";

interface ItemCategoryProps {
    params: {
        categorySlug: string;
    }
}

export default async function CategoryPage ({ params: { categorySlug } }: ItemCategoryProps) {
    const category = await categoryAPI.getOneCategory(categorySlug);

    return (
        <>
            <div >
                {category && category.map((oneCategory: ICategory) => (
                    <ArticleList key={oneCategory.id} articles={oneCategory.attributes.articles} categorySlug={oneCategory.attributes.slug}/>
                ))}
            </div>
        </>
    );
}