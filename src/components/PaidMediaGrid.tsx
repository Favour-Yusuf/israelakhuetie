import CaseCard from "./PaidMediaCard";

export default function PaidMediaGrid() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <CaseCard
        title="White Rock Wellness"
        industry="Healthcare"
        href="/portfolio/paid-media/white-rock-wellness"
        metrics="₦10M+ Revenue · 3,364 Leads"
      />
      <CaseCard
        title="Washtrack"
        industry="SaaS"
        href="/portfolio/paid-media/washtrack"
        metrics="884 Installs · ₦30k MRR"
      />
      <CaseCard
        title="Cypex"
        industry="Pest Control"
        href="/portfolio/paid-media/cypex"
        metrics="₦595k Revenue · 17 Bookings"
      />
      <CaseCard
        title="Tech Champions"
        industry="App Development"
        href="/portfolio/paid-media/tech-champions"
        metrics="₦741M Pipeline"
      />
    </div>
  );
}
