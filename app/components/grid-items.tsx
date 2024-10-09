import { Children, isValidElement } from "react";

export function GridItemsTitle({ title }: { title: string }) {
  return (
    <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
      {title}
    </h1>
  );
}

export function GridItems({
  items,
}: {
  items: {
    title: string;
    description: string;
    category: string;
    url: string;
  }[];
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-4">
      {items.map((p, i) => {
        return (
          <div key={i} className="flex flex-col flex-grow flex-shrink">
            <div className="flex-1  bg-white rounded-t rounded-b-none overflow-hidden shadow pt-6">
              <a
                href={p.url}
                className="flex flex-wrap no-underline hover:no-underline space-y-2"
              >
                <p className="w-full text-gray-600 text-xs md:text-sm px-6">
                  {p.category}
                </p>
                <div className="w-full font-bold text-xl text-gray-800 px-6">
                  {p.title}
                </div>
                <p className="text-gray-800 text-base px-6 mb-5">
                  {p.description}
                </p>
              </a>
            </div>
            <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
              {p.url.includes("github.com") ? (
                <div className="flex items-center justify-center">
                  <span className="mx-2">
                    <a
                      className="github-button"
                      href={p.url}
                      data-icon="octicon-star"
                      data-size="large"
                      data-show-count="true"
                      aria-label="Star hyperjumptech/monika on GitHub"
                    >
                      Star
                    </a>
                  </span>

                  <span className="mx-2">
                    <a
                      className="github-button"
                      href={p.url + "/fork"}
                      data-icon="octicon-repo-forked"
                      data-size="large"
                      data-show-count="true"
                      aria-label="Fork hyperjumptech/monika on GitHub"
                    >
                      Fork
                    </a>
                  </span>
                </div>
              ) : (
                <div className="flex items-center justify-center">
                  <a
                    className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                    href={p.url}
                  >
                    Read more
                  </a>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export const GridItemsMoreButton = ({
  href,
  text = "and more ...",
}: {
  href: string;
  text?: string;
}) => {
  return (
    <div className="w-full my-4 flex items-center justify-center">
      <a
        className="text-gray-500"
        href={href}
        target="blank"
        rel="noreferrer noopenner"
      >
        {text}
      </a>
    </div>
  );
};

export default function GridItemsContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  const childrenArray = Children.toArray(children);

  const title = childrenArray.find(
    (child) => isValidElement(child) && child.type === GridItemsTitle
  );

  const body = childrenArray.find(
    (child) => isValidElement(child) && child.type === GridItems
  );

  const more = childrenArray.find(
    (child) => isValidElement(child) && child.type === GridItemsMoreButton
  );

  return (
    <section className="bg-white border-b py-8">
      <div className="container mx-auto flex flex-wrap pt-4 pb-12">
        {title}
        <div className="py-12">{body}</div>
        {more}
      </div>
    </section>
  );
}
