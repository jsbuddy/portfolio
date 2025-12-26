import type { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { stack } from "@/lib/stack";

export const metadata: Metadata = {
  title: "Stack",
  description:
    "The languages, frameworks, and tools Jude Francis uses daily to build software.",
  alternates: { canonical: "/stack" },
};

const StackPage = () => {
  return (
    <div className="container">
      <div className="mt-10 mb-6 sm:mb-10">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tighter">
          Stack
        </h1>
        <p className="mt-1 text-foreground/60">
          Tools, resources, and software I use daily
        </p>
      </div>
      {stack.map((category) => (
        <Card key={category.name} className="mb-10 not-dark:bg-gray-50">
          <CardContent className="px-6 sm:px-8">
            <h3 className="mb-8 font-semibold">{category.name}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8">
              {category.items.map((item) => (
                <div key={item.title} className="flex items-center gap-3">
                  <item.icon size={36} />
                  <div>
                    <h3 className="font-medium leading-none">{item.title}</h3>
                    <p className="text-foreground/60 leading-none mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default StackPage;
