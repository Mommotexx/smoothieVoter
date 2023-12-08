import { Button } from "@/components/ui/button";
import { auth } from "@clerk/nextjs";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function Home() {
  const { userId } = auth();
  if (userId) redirect("/dashboard");
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
