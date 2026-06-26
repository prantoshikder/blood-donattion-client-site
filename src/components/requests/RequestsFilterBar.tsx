import { TABS, type RequestTab } from "../../temp/requestData";
import BloodGroupSelect from "./BloodGroupSelect";

type RequestsFilterBarProps = {
  activeTab: RequestTab;
  onTabChange: (tab: RequestTab) => void;
  blood: string;
  onBloodChange: (blood: string) => void;
};

export default function RequestsFilterBar({
  activeTab,
  onTabChange,
  blood,
  onBloodChange,
}: RequestsFilterBarProps) {
  return (
    <div className="mb-5 flex flex-col gap-3 sm:mb-6 sm:flex-row sm:items-center sm:justify-between">
      <div className="scroll-x">
        {TABS.map((t) => (
          <button
            key={t}
            onClick={() => onTabChange(t)}
            className={`shrink-0 rounded-full px-4 py-2 text-xs font-semibold transition ${
              activeTab === t
                ? "bg-brand-600 text-white"
                : "border border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <BloodGroupSelect value={blood} onChange={onBloodChange} />
    </div>
  );
}
