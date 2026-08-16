import Link from "next/link";

export default function PageCta({
  title, text, linkLabel, href = "/contact",
}: {
  title: string; text: string; linkLabel: string; href?: string;
}) {
  return (
    <div className="pagecta">
      <h3>{title}</h3>
      <p>{text}</p>
      <Link className="btn btn-g" href={href}>{linkLabel}</Link>
    </div>
  );
}