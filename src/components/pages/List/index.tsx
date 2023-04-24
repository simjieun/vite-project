import { FC } from "react";
import { Link } from "react-router-dom";
import { ListData } from "../../../data/list";

const List: FC = () => {
  return (
    <div className="grid h-full grid-rows-[auto_1fr]">
      <div className="mb-0 h-[54px]">
        <header className="sticky top-0 z-[1] grid h-[54px] items-center bg-violet px-5 text-white [contain:paint] [view-transition-name:site-header]">
          <Link to="/">HTTP 203</Link>
        </header>
      </div>
      <div className="bg-slate-400">
        <div>
          <div className="px-5">
            <ol className="mx-auto my-0 mt-5 flex w-fit flex-row flex-wrap justify-center rounded-[19px] bg-white px-1 py-1.5">
              <li className="block">
                <Link
                  to="/"
                  className="block rounded-[1000px] px-3 py-1 text-violet"
                >
                  All
                </Link>
              </li>
              <li className="block">
                <Link
                  to="/"
                  className="block rounded-[1000px] px-3 py-1 text-violet"
                >
                  Bramus
                </Link>
              </li>
              <li className="block">
                <Link
                  to="/"
                  className="block rounded-[1000px] px-3 py-1 text-violet"
                >
                  Cassie
                </Link>
              </li>
              <li className="block">
                <Link
                  to="/"
                  className="block rounded-[1000px] px-3 py-1 text-violet"
                >
                  Ada
                </Link>
              </li>
              <li className="block">
                <Link
                  to="/"
                  className="block rounded-[1000px] px-3 py-1 text-violet"
                >
                  Surma
                </Link>
              </li>
              <li className="block">
                <Link
                  to="/"
                  className="block rounded-[1000px] px-3 py-1 text-violet"
                >
                  Paul
                </Link>
              </li>
            </ol>
          </div>
          <ol className="p-4.5 m-0 grid auto-cols-auto grid-flow-row gap-1.5">
            {ListData.map((item, index) => (
              <li>
                <Link to="/">
                  <img src={item.img} alt={item.title} />
                </Link>
                <p>
                  <time>{item.date}</time>
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};
export default List;
