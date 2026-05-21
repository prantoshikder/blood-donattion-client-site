import Link from "next/link";
import { AtSign, Globe, Mail, MapPin, Phone, Share2 } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="section grid gap-10 py-12 sm:grid-cols-2 sm:py-14 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <Logo />
          <p className="mt-4 max-w-sm text-sm text-slate-600">
            A modern blood donation platform connecting people who give life
            with those who need it most.
          </p>
          <div className="mt-5 flex gap-2">
            {[AtSign, Share2, Globe].map((I, i) => (
              <a
                key={i}
                href="#"
                aria-label={`Social link ${i + 1}`}
                className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 text-slate-500 transition hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700 active:scale-95"
              >
                <I className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-slate-900">Platform</h4>
          <ul className="mt-4 space-y-2 text-sm text-slate-600">
            <li><Link href="/donors" className="hover:text-brand-600">Find Donors</Link></li>
            <li><Link href="/requests" className="hover:text-brand-600">Blood Requests</Link></li>
            <li><Link href="/dashboard" className="hover:text-brand-600">Dashboard</Link></li>
            <li><Link href="/about" className="hover:text-brand-600">About Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-slate-900">Support</h4>
          <ul className="mt-4 space-y-2 text-sm text-slate-600">
            <li><Link href="/faq" className="hover:text-brand-600">FAQ</Link></li>
            <li><Link href="/contact" className="hover:text-brand-600">Contact</Link></li>
            <li><Link href="#" className="hover:text-brand-600">Privacy Policy</Link></li>
            <li><Link href="#" className="hover:text-brand-600">Terms of Service</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-slate-900">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
              <span className="break-all">support@reddrop.app</span>
            </li>
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
              +880 1700 000 000
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
              Dhaka, Bangladesh
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-200">
        <div className="section flex flex-col items-center justify-between gap-2 py-5 text-xs text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} RedDrop. All rights reserved.</p>
          <p>Made with ❤ to save lives.</p>
        </div>
      </div>
    </footer>
  );
}
