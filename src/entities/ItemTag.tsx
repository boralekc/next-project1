
interface ItemTagProps {
    title: string;
    description: string;
}

const ItemTag: React.FC<ItemTagProps> = async ({ title, description }) => {
  
  return (
    <main className='flex rounded-lg border w-1/4 mx-4 my-4 h-48 bg-white'>
    {title}{description}
    </main>
  )
};

export default ItemTag;
