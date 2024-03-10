import { ICategory } from '@/interfaces/ICategory';
import HeaderPlate from '@/shared/HeaderPlate';
import { categoryAPI } from '@/shared/api/CategoryService';
import Link from 'next/link';

export default async function Header () {
  const categories = await categoryAPI.getCategories();

  return (
    <header className="flex text-slate-800 bg-white h-24 shadow-md border-b">
      <div className="flex mx-auto items-center w-full">
        <Link href='/' className="text-xl ml-10">Your Logo</Link>
        <div className='flex justify-center mx-auto h-full'>
                {categories && categories.map((category: ICategory) => (
                    <HeaderPlate key={category.id} 
                    categoryName={category.attributes.header_name}
                    categorySlug={category.attributes.slug} />
                ))}
        </div>
        {/* <div className="flex items-center border"></div> */}
      </div>
    </header>
  );
}

