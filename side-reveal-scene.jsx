/* global React, useTime, Easing, interpolate, animate, clamp */
// SIDE — Logo reveal. Two complementary forces materialise from suspended
// matter: GOLD shards move with geometric precision (método / estrutura),
// GREEN particles flow organically (mente / fluidez). They gain direction,
// transform, and condense into the "S" monogram — the symbol was always
// hidden inside the movement. Then SIDE + tagline resolve. Dark, premium.

const COL = {
  bg: "#060810",
  gold: "#C8A96A",
  goldHi: "#E6CE97",
  green: "#2C5848", // brand forest #1F3D36 lifted slightly so it reads on near-black
  greenHi: "#4E8A72",
  cream: "#F5F0E8",
};

// Monogram geometry — viewBox "120 0 560 640"
const PATH_GOLD =
  "M412.09,383.69c-102.99,3.19-212.75-13.95-261.81-111.24-10.67-21.16-11.83-43.67-11.84-67.67-.01-37.94,5.85-78.17,30.85-108.1,24.5-29.33,50.61-55.28,78.08-82.06C258.17,4.1,277.17.25,292.81.24l361.4-.24-85.17,89.89-228.54,1.51c-46.15.31-85.35,35.52-101.5,72.45-20.42,46.7-12.73,96.34,18.13,133.73,34.97,42.37,101.39,62.08,154.95,86.11Z";
const PATH_GREEN =
  "M132.25,622.56l87.16-97.05,230.44-1.62c43.48-.31,84.03-27.14,104.06-64.52,36.95-68.96,13.31-151.97-49.66-196.05-26.95-18.87-56.63-30.66-89.44-35.53l-65.93-9.78c52.04-7.22,101.59-4.34,151.2,6.87,48.65,10.99,91.23,34.1,126.67,68.43,66.29,64.21,57.06,168.63.72,236.75-45.13,54.56-93.41,93.39-167.54,92.65l-327.67-.15Z";

// SIDE wordmark — viewBox "0 733 800 146"
const WORD_PATHS = [
  "M.18,830.32h24.88c.6,5.53,2.8,10.5,6.61,14.91,3.81,4.41,8.89,7.85,15.24,10.31,6.35,2.47,13.64,3.7,21.86,3.7,7.32,0,13.37-.9,18.16-2.69,4.78-1.79,8.33-4.29,10.65-7.51,2.32-3.21,3.47-6.98,3.47-11.32s-1.38-7.73-4.15-10.2c-2.77-2.47-6.99-4.56-12.67-6.28-5.68-1.72-12.93-3.4-21.75-5.04-7.32-1.35-14.42-3.14-21.3-5.38-6.88-2.24-13.04-5.08-18.5-8.52-5.46-3.44-9.75-7.66-12.89-12.67-3.14-5.01-4.71-10.95-4.71-17.82,0-7.77,2.2-14.8,6.61-21.07,4.41-6.28,10.95-11.21,19.62-14.8,8.67-3.59,19.2-5.38,31.61-5.38,18.98,0,33.48,4.37,43.49,13.12,10.01,8.74,14.87,20.59,14.57,35.53h-24.44c-.45-9.42-3.89-16.21-10.31-20.4-6.43-4.18-14.57-6.28-24.44-6.28-8.82,0-16.22,1.57-22.19,4.71-5.98,3.14-8.97,8.22-8.97,15.24,0,2.99.71,5.57,2.13,7.73,1.42,2.17,3.77,4.11,7.06,5.83,3.29,1.72,7.81,3.36,13.56,4.93,5.75,1.57,12.81,3.25,21.19,5.04,7.17,1.2,13.9,2.84,20.18,4.93,6.28,2.09,11.77,4.71,16.48,7.85s8.41,7.17,11.1,12.11,4.04,10.99,4.04,18.16c0,8.22-2.09,15.51-6.28,21.86-4.19,6.35-10.58,11.36-19.17,15.02-8.6,3.66-19.69,5.49-33.29,5.49-10.31,0-19.32-1.23-27.01-3.7-7.7-2.47-14.24-5.68-19.62-9.64-5.38-3.96-9.68-8.26-12.89-12.89-3.22-4.63-5.46-9.15-6.73-13.56-1.27-4.41-1.68-8.18-1.23-11.32Z",
  "M246.78,733.25h25.56v145.27h-25.56v-145.27Z",
  "M470.96,733.25c15.69,0,28.84,1.94,39.46,5.83,10.61,3.89,19.06,9.16,25.33,15.81,6.28,6.65,10.8,14.31,13.56,22.98,2.76,8.67,4.15,17.79,4.15,27.35s-1.5,18.98-4.48,27.8c-2.99,8.82-7.73,16.63-14.24,23.43-6.5,6.8-14.99,12.18-25.45,16.14-10.46,3.96-23.24,5.94-38.34,5.94h-69.72v-145.27h69.72ZM426.8,856.1h43.94c11.06,0,20.25-1.42,27.58-4.26,7.32-2.84,13.15-6.69,17.49-11.55,4.33-4.86,7.4-10.31,9.19-16.37,1.79-6.05,2.69-12.29,2.69-18.72s-.9-12.59-2.69-18.5c-1.79-5.9-4.86-11.21-9.19-15.92-4.34-4.71-10.17-8.44-17.49-11.21-7.32-2.76-16.52-4.15-27.58-4.15h-43.94v100.66Z",
  "M697.62,816.64v39.91h102v21.97h-127.56v-145.27h127.34v21.97h-101.78v40.35h83.4v21.07h-83.4Z",
];

// ── Timing (seconds) ────────────────────────────────────────────────────────
const T = {
  fieldIn: 0.3,      // suspended matter fades into the dark
  direct: 1.9,       // forces gain direction / begin to transform
  converge: 4.2,     // condensation toward the symbol
  form: 6.0,         // matter resolves into solid form
  solidEnd: 6.85,
  union: 6.15,       // bloom — the discovery
  lockStart: 6.9,
  lockEnd: 8.0,
  wordIn: 7.8,
  taglineIn: 8.9,
};

// Deterministic pseudo-random for stable particles
function rng(seed) {
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) % 4294967296;
    return s / 4294967296;
  };
}

// ── Sample target points (outline + interior fill) from an SVG path ─────────
function samplePath(d, nOutline, nFill) {
  const NS = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(NS, "svg");
  svg.setAttribute("viewBox", "120 0 560 640");
  svg.style.cssText =
    "position:absolute;left:-9999px;top:-9999px;width:560px;height:640px;opacity:0;pointer-events:none";
  const path = document.createElementNS(NS, "path");
  path.setAttribute("d", d);
  svg.appendChild(path);
  document.body.appendChild(svg);
  const pts = [];
  try {
    const len = path.getTotalLength();
    for (let i = 0; i < nOutline; i++) {
      const p = path.getPointAtLength((len * i) / nOutline);
      pts.push({ x: p.x, y: p.y, edge: true });
    }
    const bb = path.getBBox();
    const pt = svg.createSVGPoint();
    let added = 0, tries = 0;
    while (added < nFill && tries < nFill * 60) {
      tries++;
      pt.x = bb.x + Math.random() * bb.width;
      pt.y = bb.y + Math.random() * bb.height;
      if (path.isPointInFill(pt)) {
        pts.push({ x: pt.x, y: pt.y, edge: false });
        added++;
      }
    }
  } catch (e) {
    /* graceful: empty — solid form still fades in */
  }
  document.body.removeChild(svg);
  return pts;
}

// Build per-particle motion config from sampled target points.
function buildParticles(pts, kind, seed) {
  const r = rng(seed);
  return pts.map((pt) => {
    const ang = r() * Math.PI * 2;
    const dist = 360 + r() * 640;
    return {
      tx: pt.x,
      ty: pt.y,
      edge: pt.edge,
      ox: 400 + Math.cos(ang) * dist,
      oy: 320 + Math.sin(ang) * dist * 0.82,
      delay: kind === "gold" ? r() * 0.5 : r() * 0.95,
      ph: r() * Math.PI * 2,
      ph2: r() * Math.PI * 2,
      freq: 0.45 + r() * 0.85,
      amp: kind === "gold" ? 10 + r() * 20 : 20 + r() * 42,
      axis: r() * Math.PI * 2,
      rot0: (r() * 2 - 1) * (kind === "gold" ? 90 : 36),
      len: 14 + r() * 18,
      thick: 1.4 + r() * 1.4,
      rad: pt.edge ? 2.3 + r() * 1.5 : 1.7 + r() * 2.2,
    };
  });
}

// ── Background: deep vignette, drifting dust, faint light beams ──────────────
const PARTICLES = (() => {
  const r = rng(20260629);
  return Array.from({ length: 34 }, () => ({
    x: r() * 1920,
    y: r() * 1080,
    r: 0.6 + r() * 1.8,
    a: 0.06 + r() * 0.22,
    spd: 4 + r() * 12,
    ph: r() * Math.PI * 2,
    tw: 0.4 + r() * 1.1,
  }));
})();

function Background({ t }) {
  const bloom = interpolate(
    [T.union - 0.5, T.union + 0.05, T.union + 0.9],
    [0, 1, 0],
    [Easing.easeOutCubic, Easing.easeInQuad]
  )(t);
  const beamSweep = interpolate(
    [T.union - 0.45, T.union + 0.7],
    [0, 1],
    Easing.easeOutCubic
  )(t);

  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", background: COL.bg }}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(120% 90% at 50% 46%, #11151f 0%, #0a0d16 38%, #060810 72%, #04060c 100%)",
        }}
      />
      <svg width="1920" height="1080" style={{ position: "absolute", inset: 0 }}>
        {PARTICLES.map((p, i) => {
          const y = ((p.y - t * p.spd) % 1100 + 1100) % 1100 - 10;
          const tw = 0.55 + 0.45 * Math.sin(t * p.tw + p.ph);
          return <circle key={i} cx={p.x} cy={y} r={p.r} fill={COL.cream} opacity={p.a * tw} />;
        })}
      </svg>
      <div
        style={{
          position: "absolute",
          inset: "-20%",
          background:
            "linear-gradient(102deg, transparent 44%, rgba(200,169,106,0.05) 50%, transparent 56%)",
          opacity: 0.5 + beamSweep * 0.5,
          transform: `translateX(${-160 + beamSweep * 220}px)`,
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: "-20%",
          background:
            "linear-gradient(78deg, transparent 46%, rgba(78,138,114,0.045) 50%, transparent 54%)",
          opacity: 0.4 + beamSweep * 0.4,
          transform: `translateX(${140 - beamSweep * 200}px)`,
        }}
      />
      <div
        style={{
          position: "absolute",
          left: 960,
          top: 540,
          width: 1400,
          height: 1400,
          marginLeft: -700,
          marginTop: -700,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(230,206,151,0.5) 0%, rgba(200,169,106,0.18) 26%, rgba(78,138,114,0.06) 46%, transparent 64%)",
          opacity: bloom * 0.9,
          transform: `scale(${0.32 + bloom * 0.85})`,
          mixBlendMode: "screen",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(130% 100% at 50% 50%, transparent 52%, rgba(0,0,0,0.55) 100%)",
        }}
      />
    </div>
  );
}

// ── Per-particle position solver ────────────────────────────────────────────
// Returns {x, y, rot, op} for a particle at time t. `gatherEase` differs per
// force: gold snaps (expo) = método; green flows (cubic) = mente.
function solve(p, t, gatherEase) {
  const gStart = T.direct + p.delay;
  const gEnd = T.form + p.delay * 0.45;
  const gather = gatherEase(clamp((t - gStart) / (gEnd - gStart), 0, 1));

  // suspended drift (organic wander / precise oscillation)
  const driftX = Math.cos(p.axis) * Math.sin(t * p.freq + p.ph) * p.amp;
  const driftY =
    Math.sin(p.axis) * Math.sin(t * p.freq + p.ph) * p.amp +
    Math.cos(t * p.freq * 0.8 + p.ph2) * p.amp * 0.4;
  const baseX = p.ox + driftX;
  const baseY = p.oy + driftY;

  const x = baseX + (p.tx - baseX) * gather;
  const y = baseY + (p.ty - baseY) * gather;
  const rot = p.rot0 * (1 - gather);

  // fade in suspended, fade out as the solid form takes over
  const fadeIn = clamp((t - (T.fieldIn + p.delay * 0.4)) / 0.8, 0, 1);
  const handoff = clamp((t - (T.form - 0.05)) / (T.solidEnd - (T.form - 0.05)), 0, 1);
  const op = fadeIn * (1 - handoff);

  return { x, y, rot, op, gather };
}

// ── Monogram: matter → form, then lock-up scales to seat the wordmark ───────
function Monogram({ t }) {
  const [goldParts, setGoldParts] = React.useState([]);
  const [greenParts, setGreenParts] = React.useState([]);

  React.useEffect(() => {
    setGoldParts(buildParticles(samplePath(PATH_GOLD, 38, 64), "gold", 0x51de60));
    setGreenParts(buildParticles(samplePath(PATH_GREEN, 38, 64), "green", 0x2c5848));
  }, []);

  // solid form resolves from the condensed matter
  const solidOp = clamp((t - (T.form - 0.15)) / (T.solidEnd - (T.form - 0.15)), 0, 1);
  const settle = interpolate([T.form - 0.1, T.solidEnd + 0.3], [1.016, 1], Easing.easeOutCubic)(t);
  const fuseGlow = interpolate(
    [T.union - 0.6, T.union + 0.1, T.union + 1.1],
    [0, 1, 0.42],
    Easing.easeOutCubic
  )(t);

  // lock-up: assembled monogram eases up + shrinks to make room for wordmark
  const lockS = interpolate([T.lockStart, T.lockEnd], [1, 0.52], Easing.easeInOutCubic)(t);
  const lockY = interpolate([T.lockStart, T.lockEnd], [0, -176], Easing.easeInOutCubic)(t);

  return (
    <div
      style={{
        position: "absolute",
        left: 960,
        top: 540,
        transform: `translate(-50%,-50%) translateY(${lockY}px) scale(${lockS})`,
      }}
    >
      <svg width="448" height="512" viewBox="120 0 560 640" style={{ overflow: "visible" }}>
        <defs>
          <linearGradient id="sd-gold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor={COL.goldHi} />
            <stop offset="0.55" stopColor={COL.gold} />
            <stop offset="1" stopColor="#9C814C" />
          </linearGradient>
          <filter id="sd-mist" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="2.2" />
          </filter>
          <filter id="sd-spark" x="-120%" y="-120%" width="340%" height="340%">
            <feGaussianBlur stdDeviation="2.4" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* GREEN — fluidez: organic particles, soft luminous mist */}
        <g filter="url(#sd-mist)" opacity={1 - solidOp * 0.92}>
          {greenParts.map((p, i) => {
            const s = solve(p, t, Easing.easeInOutCubic);
            if (s.op <= 0.001) return null;
            return (
              <circle
                key={i}
                cx={s.x}
                cy={s.y}
                r={p.rad}
                fill={s.gather > 0.6 ? COL.green : COL.greenHi}
                opacity={s.op * 0.92}
              />
            );
          })}
        </g>

        {/* GOLD — estrutura: geometric shards / light lines, crisp glow */}
        <g filter="url(#sd-spark)" opacity={1 - solidOp * 0.92}>
          {goldParts.map((p, i) => {
            const s = solve(p, t, Easing.easeInOutExpo);
            if (s.op <= 0.001) return null;
            return (
              <rect
                key={i}
                x={-p.len / 2}
                y={-p.thick / 2}
                width={p.len}
                height={p.thick}
                rx={p.thick / 2}
                fill="url(#sd-gold)"
                opacity={s.op}
                transform={`translate(${s.x} ${s.y}) rotate(${s.rot})`}
              />
            );
          })}
        </g>

        {/* Resolved solid form */}
        <g
          opacity={solidOp}
          style={{ transformBox: "fill-box", transformOrigin: "center", transform: `scale(${settle})` }}
        >
          <path
            d={PATH_GREEN}
            fill={COL.green}
            style={{
              filter: `drop-shadow(0 0 ${10 + fuseGlow * 26}px rgba(78,138,114,${0.3 + fuseGlow * 0.4}))`,
            }}
          />
          <path
            d={PATH_GOLD}
            fill="url(#sd-gold)"
            style={{
              filter: `drop-shadow(0 0 ${8 + fuseGlow * 24}px rgba(200,169,106,${0.32 + fuseGlow * 0.45}))`,
            }}
          />
        </g>
      </svg>
    </div>
  );
}

// ── Wordmark: SIDE resolves with a left-to-right light wipe + fade ──────────
function Wordmark({ t }) {
  const op = animate({ from: 0, to: 1, start: T.wordIn, end: T.wordIn + 0.7, ease: Easing.easeOutCubic })(t);
  const wipe = animate({ from: 0, to: 100, start: T.wordIn, end: T.wordIn + 1.0, ease: Easing.easeInOutCubic })(t);
  const rise = animate({ from: 22, to: 0, start: T.wordIn, end: T.wordIn + 0.9, ease: Easing.easeOutCubic })(t);

  return (
    <div
      style={{
        position: "absolute",
        left: 960,
        top: 600,
        width: 540,
        marginLeft: -270,
        transform: `translateY(${rise}px)`,
        opacity: op,
        clipPath: `inset(0 ${100 - wipe}% 0 0)`,
      }}
    >
      <svg width="540" height="98.5" viewBox="0 733 800 146" style={{ display: "block" }}>
        {WORD_PATHS.map((d, i) => (
          <path key={i} d={d} fill={COL.cream} />
        ))}
      </svg>
    </div>
  );
}

// ── Tagline ─────────────────────────────────────────────────────────────────
function Tagline({ t }) {
  const op = animate({ from: 0, to: 1, start: T.taglineIn, end: T.taglineIn + 0.9, ease: Easing.easeOutCubic })(t);
  const ls = animate({ from: 0.45, to: 0.3, start: T.taglineIn, end: T.taglineIn + 1.2, ease: Easing.easeOutCubic })(t);
  return (
    <div
      style={{
        position: "absolute",
        left: 960,
        top: 730,
        transform: "translateX(-50%)",
        opacity: op,
        display: "flex",
        alignItems: "center",
        gap: 18,
      }}
    >
      <span style={{ height: 1, width: 40, background: "rgba(200,169,106,0.55)" }} />
      <span
        style={{
          fontFamily: "'Schibsted Grotesk', sans-serif",
          fontSize: 21,
          fontWeight: 500,
          textTransform: "uppercase",
          letterSpacing: `${ls}em`,
          color: "#C9BCA6",
          whiteSpace: "nowrap",
        }}
      >
        O outro lado da alta performance
      </span>
      <span style={{ height: 1, width: 40, background: "rgba(200,169,106,0.55)" }} />
    </div>
  );
}

function SideReveal() {
  const t = useTime();
  return (
    <div style={{ position: "absolute", inset: 0, fontFamily: "'Schibsted Grotesk', sans-serif" }}>
      <Background t={t} />
      <Monogram t={t} />
      <Wordmark t={t} />
      <Tagline t={t} />
    </div>
  );
}

window.SideReveal = SideReveal;
