import { Link } from "react-router-dom";

function Thumbnail({ article }) {
  return (
    <Link to={`/blog/${article.filename}`}>
      <div className="container my-5 p-3 block w-full h-32 shadow-purple-400 shadow-md hover:shadow-lg hover:shadow-purple-400 hover:cursor-pointer">
        <h2 className="pb-2 text-xl font-bold italic text-yellow-100">
          {article.title}
        </h2>
        <p>{article.digest}</p>
        <p className="italic text-base">
          by {article.author} on {article.date}
        </p>
      </div>
    </Link>
  );
}

export default Thumbnail;
