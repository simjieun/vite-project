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
      <div className="bg-zinc-300">
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
          <ol className="m-0 grid auto-cols-[135px] grid-flow-row auto-rows-max grid-cols-35 gap-4 bg-zinc-300 p-4">
            {ListData.map((item, index) => (
              <li className="block shadow-md">
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
