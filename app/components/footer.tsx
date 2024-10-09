import data from "@/data.json";

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="container mx-auto px-8">
        <div className="w-full flex flex-col md:flex-row py-6 items-center justify-center">
          <div className="flex-1 mb-6 text-gray-600 text-center md:text-left">
            {data.copyright}
          </div>
          <div className="flex-1 justify-center md:justify-end">
            <ul className="flex justify-center md:justify-end flex-1 items-center">
              {data.socials.map((s, i) => {
                return (
                  <li key={i} className="mr-3">
                    <a
                      className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className={s.icon} aria-hidden="true"></i>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
