import data from "@/data.json";
import { notFound } from "next/navigation";

export const getStaticPaths = async () => {
  return {
    paths: data.jobs.map((job) => ({
      params: { id: job.url.split("/").pop() },
    })),
    fallback: false,
  };
};

export default function JobDetail({ params }: { params: { id: string } }) {
  const job = data.jobs.find((j) => j.url.endsWith(params.id.toLowerCase()));
  if (!job) {
    notFound();
  }
  return (
    <section className="bg-white border-b py-8 text-black">
      <div className="container mx-auto flex-wrap  py-12 flex flex-col space-y-8">
        <div>
          <p className="text-gray-500">{job.category}</p>
          <h1 className="text-5xl font-bold    text-gray-800">{job.title}</h1>
          <p className=" text-gray-800 leading-normal">{job.description}</p>
        </div>
        <div className="flex flex-col space-y-4">
          {["Responsibilities", "Requirements", "Deliverables"].map(
            (title, i) => {
              return (
                <div key={i} className="flex flex-col space-y-2">
                  <h2 className="font-bold text-2xl">{title}</h2>
                  <ul className="list-disc">
                    {(job[title.toLowerCase() as never] as string[]).map(
                      (item, i) => {
                        return <li key={i}>{item}</li>;
                      }
                    )}
                  </ul>
                </div>
              );
            }
          )}
        </div>
        <a
          href={`mailto:job@hyperjump.tech?subject=Apply for ${job.title}`}
          className="bg-white self-start hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        >
          Apply
        </a>
      </div>
    </section>
  );
}
