import { projects, github } from "@/data.json";

export default function Projects() {
  return (
    <section className="bg-white border-b py-8">
      <div className="container mx-auto flex flex-wrap pt-4 pb-12">
        <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
          Open Source
        </h1>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-4">
          {projects.map((p, i) => {
            return (
              <div key={i} className="flex flex-col flex-grow flex-shrink">
                <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow pt-6">
                  <a
                    href={p.url}
                    className="flex flex-wrap no-underline hover:no-underline"
                  >
                    <p className="w-full text-gray-600 text-xs md:text-sm px-6">
                      {p.language}
                    </p>
                    <div className="w-full font-bold text-xl text-gray-800 px-6">
                      {p.name}
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
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>

        <div className="w-full my-4 flex items-center justify-center">
          <a
            className="text-gray-500"
            href={github}
            target="blank"
            rel="noreferrer noopenner"
          >
            and more...
          </a>
        </div>
      </div>
    </section>
  );
}
