"use client";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";

const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <Button
      size="icon"
      variant="secondary"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="cursor-pointer"
    >
      {resolvedTheme === "dark" ? (
        <HiOutlineSun className="size-5" />
      ) : (
        <HiOutlineMoon className="size-5" />
      )}
    </Button>
  );
};

export default ThemeToggle;
