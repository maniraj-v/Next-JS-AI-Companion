"use client";
import { Category } from "@prisma/client";
import { useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";
import { cn } from "@/lib/utils";
import { MouseEventHandler } from "react";

interface CategoryButtonProps {
  id?: Category["id"];
  name: Category["name"];
  onClick: MouseEventHandler<HTMLButtonElement>;
  className: string;
}

interface CategoriesProps {
  data: Category[];
}

function CategoryButton({ id, name, onClick, className }: CategoryButtonProps) {
  return (
    <button
      className={cn(
        `
        flex
        items-center
        text-center
        text-xs
        md:text-sm
        px-2
        md:px-4
        py-2
        md:py-3
        rounded-md
        bg-primary/10
        hover:opacity-75
        transition
        `,
        className
      )}
      onClick={onClick}
    >
      {name}
    </button>
  );
}
function Categories({ data }: CategoriesProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const categoryId = searchParams.get("categoryId");

  const handleClick = (id: string | undefined) => {
    const query = {
      categoryId: id,
    };
    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      {
        skipNull: true,
      }
    );
    router.push(url);
  };

  return (
    <div className="w-full overflow-x-auto space-x-2 flex p-1">
      <CategoryButton
        name="Newest"
        onClick={() => handleClick(undefined)}
        className={!categoryId ? "bg-primary/25" : "bg-primary/10"}
      />
      {data.map(({ id, name }) => {
        return (
          <CategoryButton
            key={id}
            id={id}
            name={name}
            onClick={() => handleClick(id)}
            className={id === categoryId ? "bg-primary/25" : "bg-primary/10"}
          />
        );
      })}
    </div>
  );
}
export default Categories;
