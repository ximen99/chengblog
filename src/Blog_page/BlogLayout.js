import { Outlet, Link } from "react-router-dom";
import NavTitle from "./NavTitle";

function BlogLayout() {
  return (
    <div className="min-w-full min-h-screen bg-indigo-800 text-white text-lg relative">
      <header className="bg-indigo-400 px-40 py-5 sticky top-0 left-0 right-0">
        <nav className="flex justify-between items-center">
          <Link to="./blog">
            <h1 className="text-2xl font-bold hover:cursor-pointer group">
              <i className="fa-solid fa-heart text-rose-600 group-hover:animate-ping" />{" "}
              Cheng's Blog
            </h1>
          </Link>
          <ul className="flex content-end">
            <NavTitle>
              <Link to="./blog">Blog</Link>
            </NavTitle>
            <NavTitle>
              <Link to="./About">About</Link>
            </NavTitle>
          </ul>
        </nav>
      </header>
      <Outlet />
    </div>
  );
}

export default BlogLayout;
