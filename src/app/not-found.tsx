import Link from "next/link";
import { ArrowLeft, Droplet } from "lucide-react";

export default function NotFound() {
  return (
    <div className="grid min-h-screen place-items-center bg-gradient-to-br from-brand-50 via-rose-50 to-white p-6">
      <div className="text-center">
        <div className="mx-auto grid h-20 w-20 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-rose-600 text-white shadow-xl">
          <Droplet className="h-10 w-10 fill-white/40" />
        </div>
        <h1 className="mt-6 text-7xl font-extrabold tracking-tight text-slate-900">
          404
        </h1>
        <p className="mt-2 text-lg text-slate-600">
          We couldn't find what you were looking for.
        </p>
        <Link href="/" className="btn-primary mt-8 inline-flex">
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>
      </div>
    </div>
  );
}
