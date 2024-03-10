'use client'
import Link from "next/link";
import { usePathname } from "next/navigation"

interface HeaderProps {
    categoryName: string;
    categorySlug: string;
}

const HeaderPlate: React.FC<HeaderProps> = ({ categoryName, categorySlug }) => {
const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

    return (
        <Link href={`/${categorySlug}`} className={`flex justify-center items-center text-center h-full w-2/4 font-bold px-2 hover:bg-gray-100 hover:text-gray-900 ${isActive(`/${categorySlug}`) ? 'bg-gray-100 text-black' : ''}`}>
                {categoryName} 
        </Link>
    );
}

export default HeaderPlate;
