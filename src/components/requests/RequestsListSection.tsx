"use client";

import { SearchX } from "lucide-react";
import { useMemo, useState } from "react";
import {
  ALL_BLOOD,
  CURRENT_USER_BLOOD,
  CURRENT_USER_CITY,
  DONOR_CAN_GIVE_TO,
  requests,
  type RequestTab,
} from "../../temp/requestData";
import RequestCard from "./RequestCard";
import RequestsFilterBar from "./RequestsFilterBar";

export default function RequestsListSection() {
  const [activeTab, setActiveTab] = useState<RequestTab>("All requests");
  const [blood, setBlood] = useState<string>(ALL_BLOOD);

  const filtered = useMemo(() => {
    const compatible = DONOR_CAN_GIVE_TO[CURRENT_USER_BLOOD] ?? [];

    return requests.filter((r) => {
      // Tab filter
      if (activeTab === "Urgent only" && !r.urgent) return false;
      if (activeTab === "My city" && !r.hospital.includes(CURRENT_USER_CITY))
        return false;
      if (activeTab === "Compatible" && !compatible.includes(r.blood))
        return false;

      // Blood group filter
      if (blood !== ALL_BLOOD && r.blood !== blood) return false;

      return true;
    });
  }, [activeTab, blood]);

  return (
    <section className="section py-10 sm:py-16">
      <RequestsFilterBar
        activeTab={activeTab}
        onTabChange={setActiveTab}
        blood={blood}
        onBloodChange={setBlood}
      />

      <p className="mb-4 text-xs text-slate-500">
        Showing{" "}
        <span className="font-semibold text-slate-900">{filtered.length}</span>{" "}
        of {requests.length} requests
      </p>

      {filtered.length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((r) => (
            <RequestCard key={r.name} request={r} />
          ))}
        </div>
      ) : (
        <div className="card flex flex-col items-center justify-center gap-3 py-16 text-center">
          <div className="grid h-12 w-12 place-items-center rounded-full bg-slate-100 text-slate-400">
            <SearchX className="h-6 w-6" />
          </div>
          <p className="font-semibold text-slate-900">No matching requests</p>
          <p className="max-w-sm text-sm text-slate-500">
            Try a different blood group or switch filters to see more open
            requests.
          </p>
        </div>
      )}
    </section>
  );
}
