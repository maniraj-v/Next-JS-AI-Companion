import { UserButton } from "@clerk/nextjs";
import SearchInput from "@/components/search-input";
import Image from "next/image";

export default function Home() {
  return (
    <div className="p-4 h-full space-y-2">
      <SearchInput />
    </div>
  );
}
