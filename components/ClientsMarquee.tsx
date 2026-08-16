import { CLIENTS_ROW1, CLIENTS_ROW2 } from "@/lib/data";

function Chip({ entry }: { entry: [string | null, string, string, number] }) {
  const [logo, name, sector, count] = entry;
  return (
    <div className="cl">
      {logo && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={logo} alt={name} loading="lazy" />
      )}
      <b>{name}</b>
      <small>{sector}</small>
      {count > 0 && <span className="ct">{count} {count > 1 ? "projects" : "project"}</span>}
    </div>
  );
}

export default function ClientsMarquee() {
  return (
    <>
      <div className="marq rv">
        <div className="track">
          {[...CLIENTS_ROW1, ...CLIENTS_ROW1].map((c, i) => <Chip entry={c} key={i} />)}
        </div>
      </div>
      <div className="marq rev rv">
        <div className="track">
          {[...CLIENTS_ROW2, ...CLIENTS_ROW2].map((c, i) => <Chip entry={c} key={i} />)}
        </div>
      </div>
    </>
  );
}