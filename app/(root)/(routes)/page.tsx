import { UserButton } from "@clerk/nextjs";
import prismadb from "@/lib/prismadb";
import SearchInput from "@/components/search-input";
import Categories from "@/components/categories";

export default async function Home() {
  const categories = await prismadb.category.findMany();

  return (
    <div className="p-4 h-full space-y-2">
      <SearchInput />
      <Categories data={categories} />
    </div>
  );
}
