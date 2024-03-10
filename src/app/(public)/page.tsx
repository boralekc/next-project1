import React from 'react';
import { articleAPI } from '@/shared/api/ArticleService';
import { categoryAPI } from '@/shared/api/CategoryService';
import { ICategory } from '@/interfaces/ICategory';
import CategoryList from '@/features/CategoryList'
import Header from '@/widgets/app-home/_ui/Header';

export default async function HomePage() {
    const categories = await categoryAPI.getCategories();

    return (
        <>
            <div>
                {categories && categories.map((category: ICategory) => (
                    <CategoryList key={category.id} articles={category.attributes.articles} categorySlug={category.attributes.slug}/>
                ))}
            </div>
        </>
    );
}
