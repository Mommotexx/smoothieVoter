import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <section className="mt-16 flex flex-col gap-3">
      <h1 className="text-4xl">Welcome to the smoothie voting app</h1>
      <p>
        Please login to check out and vote for the smoothies you love the most
      </p>
      <div className="flex w-full justify-center">
        <Link className="w-full md:w-[100px]" href={"/sign-in"}>
          <Button className="w-full">Log In</Button>
        </Link>
      </div>
    </section>
  );
}
