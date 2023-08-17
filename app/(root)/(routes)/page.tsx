import { UserButton } from "@clerk/nextjs";
import prismadb from "@/lib/prismadb";
import SearchInput from "@/components/search-input";
import Categories from "@/components/categories";
import Companions from "@/components/companions";

interface HomeProps {
  searchParams: {
    categoryId: string;
    name: string;
  };
}
export default async function Home({ searchParams }: HomeProps) {
  const categories = await prismadb.category.findMany();
  const companions = await prismadb.companion.findMany({
    where: {
      categoryId: searchParams.categoryId,
      name: {
        search: searchParams.name,
      },
    },
    orderBy: {
      createdAt: "desc",
    },
    include: {
      _count: {
        select: {
          messages: true,
        },
      },
    },
  });
  
  return (
    <div className="p-4 h-full space-y-2">
      <SearchInput />
      <Categories data={categories} />
      <Companions data={companions} />
    </div>
  );
}
