import Link from "next/link";
import { Button } from "./ui/button";
import ContactDialog from "./contact-dialog";

const Hero = () => {
  return (
    <div className="container">
      <div className="max-w-2xl py-16 md:py-24">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-[1.1] tracking-tighter font-semibold text-foreground/90">
          Hi, I&apos;m Jude.
        </h1>
        <p className="text-lg sm:text-xl leading-snug text-foreground/70 mt-3 tracking-tighter">
          Software engineer and CTO at StatiSense. Eight years of building data
          platforms, fintech, and AI products for emerging markets, from first
          commit to technical direction.
        </p>
        <div className="flex flex-wrap mt-8 gap-2">
          <ContactDialog />
          <Link href="/about">
            <Button
              variant="secondary"
              size="lg"
              className="text-base px-5 cursor-pointer"
            >
              About me
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
