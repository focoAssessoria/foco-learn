"use client";

import { Search } from "@mui/icons-material";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Navbar = () => {
  const router = useRouter();

  const [search, setSearch] = useState<string>("");
  const [dropdownMenu, setDropdownMenu] = useState<boolean>(false);

  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // Cleanup function to remove the event listener when component unmounts
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    signOut({ callbackUrl: "/login" });
  };

  return (
    <div className={`navbar bg-[#141414]/60`}>
      <Link href="/">
        <img src="/logo.png" alt="" className="logo" />
      </Link>

      {/* <div className="nav-links">
        <Link href="/" className="nav-link">
          Home
        </Link>
        <Link href="/my-list" className="nav-link">
          My List
        </Link>
      </div> */}

      <div className="nav-right">
        <div className="search">
          <input
            placeholder="Pesquisar..."
            className="input-search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button disabled={search === ""}>
            <Search
              className="icon"
              onClick={() => router.push(`/search/${search}`)}
            />
          </button>
        </div>

        <img
          src="/smallLogo.png"
          className="profile"
          alt=""
          onClick={() => setDropdownMenu(!dropdownMenu)}
        />

        {dropdownMenu && (
          <div className="dropdown-menu">
            <a onClick={handleLogout}>Sair</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
