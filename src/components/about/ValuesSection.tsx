import { values } from "@/temp/aboutData";

export default function ValuesSection() {
  return (
    <section className="bg-slate-50/70 py-12 sm:py-20">
      <div className="section">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="heading-2 text-balance">What we stand for</h2>
          <p className="mt-4 text-sm text-slate-600 sm:text-base">
            Three values guide every product decision we make.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:mt-12 sm:gap-6 md:grid-cols-3">
          {values.map((v) => (
            <div key={v.t} className="card">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-linear-to-br from-brand-500 to-rose-600 text-white shadow-md">
                <v.i className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                {v.t}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{v.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
