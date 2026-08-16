export default function PageHero({
  crumbs, title, subtitle, extraPaddingBottom = false,
}: {
  crumbs: React.ReactNode;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  extraPaddingBottom?: boolean;
}) {
  return (
    <section className="pagehero" style={extraPaddingBottom ? { paddingBottom: 130 } : undefined}>
      <span className="glow1"></span><span className="glow2"></span>
      <svg className="bolt" viewBox="0 0 100 160" aria-hidden="true">
        <path d="M62 4 L18 92 L46 92 L34 156 L84 60 L54 60 Z" fill="#fff" />
      </svg>
      <div className="inwrap">
        <div className="crumbs">{crumbs}</div>
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
      <div className="curve"></div>
    </section>
  );
}