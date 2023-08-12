import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <main className="text-gray-600">
      Home page (Protected)
      <div>
        <UserButton />
      </div>
    </main>
  );
}
