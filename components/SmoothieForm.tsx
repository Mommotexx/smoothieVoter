"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "./ui/button";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  Form,
} from "./ui/form";

import { Input } from "@/components/ui/input";
import { addSmoothie } from "@/lib/actions/smoothie.action";

const formSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "Smoothie name must be at least 2 characters.",
    })
    .max(100),
  ingredients: z.string().min(2).max(100),
});

const SmoothieForm = () => {
  const router = useRouter();
  async function onSubmit(values: z.infer<typeof formSchema>) {
    const ingredients = values.ingredients.split(",");
    const name = values.name;
    await addSmoothie({ name, ingredients });
    router.push("/dashboard");
  }

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      ingredients: "mango, pineapple, strawberry",
    },
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mx-auto flex w-full flex-col justify-center space-y-8 md:w-7/12"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Smoothie name</FormLabel>
              <FormControl>
                <Input placeholder="Mango Smoothie" {...field} />
              </FormControl>
              <FormDescription>
                This is the name of the smoothie
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="ingredients"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Ingredients. Separate by comma (,)</FormLabel>
              <FormControl>
                <Input placeholder="Mango, Pineapple, Strawberry" {...field} />
              </FormControl>
              <FormDescription>This is the list of ingredients</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default SmoothieForm;
