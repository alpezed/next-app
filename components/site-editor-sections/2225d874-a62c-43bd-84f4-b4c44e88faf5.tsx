export default function ThreeUpFeatures() {
  const items = [
    { t: "Fast", d: "Ships in milliseconds, not minutes." },
    { t: "Reliable", d: "Battle-tested and production ready." },
    { t: "Simple", d: "An API you can learn in an afternoon." },
  ];
  return (
    <section style={{ padding: "72px 24px", background: "#f8fafc", color: "#0f172a" }}>
      <h2 style={{ textAlign: "center", fontSize: 32, fontWeight: 800, margin: "0 0 48px" }}>Everything you need</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 24, maxWidth: 1000, margin: "0 auto" }}>
        {items.map((it) => (
          <div key={it.t} style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 12, padding: 24 }}>
            <h3 style={{ fontSize: 20, fontWeight: 700, margin: "0 0 8px" }}>{it.t}</h3>
            <p style={{ color: "#475569", margin: 0 }}>{it.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
