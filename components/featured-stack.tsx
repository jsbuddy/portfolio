import Link from "next/link";
import { BiSolidChevronRight } from "react-icons/bi";
import { featuredStack } from "@/lib/stack";
import SectionTitle from "./section-title";
import { Button } from "./ui/button";

const FeaturedStack = () => {
  return (
    <div className="container">
      <SectionTitle
        title="Stack"
        subtitle="Software and resources I use on a regular basis."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
        {featuredStack.map((item) => (
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
      <Link href="/stack">
        <Button variant="secondary" className="mt-10 px-4 cursor-pointer">
          View all
          <BiSolidChevronRight />
        </Button>
      </Link>
    </div>
  );
};

export default FeaturedStack;
