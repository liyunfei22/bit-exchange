"use client";
import { useEffect, useState } from "react";
import LogInIcon from "./icons/Logo";
import MenuIcon from "./icons/Menu";
import Link from "next/link";
import LogInIconLarge from "@/components/icons/Logo-large";
import { useRouter } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter(); // 使用 useRouter 钩子

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  // 监听路由变化
  useEffect(() => {
    setIsMenuOpen(false); // 当路由变化时关闭菜单
  }, [router]); // 当路由路径变化时重新运行效果

  // 点击页面空白处关闭菜单
  const handleClickOutside = (event: any) => {
    if (isMenuOpen && !event.target.closest(".header")) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    // 监听点击事件
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      // 组件卸载时移除事件监听
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [isMenuOpen, handleClickOutside]); // 当 isMenuOpen 变化时重新运行效果

  return (
    <nav className="w-full h-18 border-b lg:h-[120px] border-black	 flex justify-between items-center px-4">
      <div className="lg:hidden">
        <Link href="/">
          <LogInIcon />
        </Link>
      </div>
      <div className="hidden lg:block lg:ml-20">
        <Link href="/">
          <LogInIconLarge />
        </Link>
      </div>
      <div>
        <div className="lg:hidden" onClick={toggleMenu}>
          <MenuIcon />
        </div>
        {isMenuOpen && (
          <div className="absolute w-screen	 bg-[--foreground] p-4 shadow-lg left-0 top-18">
            <Link className="block my-2" href="/">
              Home
            </Link>
            <Link className="block my-2" href="/about">
              About Us
            </Link>
            <Link href="/#concat_us" className="block my-2">Contact Us</Link>
          </div>
        )}
        <div className="hidden lg:flex text-2xl color-black ">
          <Link className="mr-8" href="/">
            Home
          </Link>
          <Link className="mr-8" href="/about">
            About Us
          </Link>
          <Link href="/#concat_us" className="mr-8">Contact Us</Link>
        </div>
      </div>
    </nav>
  );
}
