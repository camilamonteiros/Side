/* @ds-bundle: {"format":3,"namespace":"SideDesignSystem_d0448e","components":[{"name":"Icon","sourcePath":"components/brand/Icon.jsx"},{"name":"ICON_NAMES","sourcePath":"components/brand/Icon.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Pillar","sourcePath":"components/brand/Pillar.jsx"},{"name":"SIDE_PATHS","sourcePath":"components/brand/logoPaths.js"},{"name":"SIDE_VIEWBOX","sourcePath":"components/brand/logoPaths.js"},{"name":"RankRow","sourcePath":"components/data/RankRow.jsx"},{"name":"Badge","sourcePath":"components/feedback/Badge.jsx"},{"name":"ProgressBar","sourcePath":"components/feedback/ProgressBar.jsx"},{"name":"ProgressRing","sourcePath":"components/feedback/ProgressRing.jsx"},{"name":"Tag","sourcePath":"components/feedback/Tag.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"RadioGroup","sourcePath":"components/forms/RadioGroup.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Avatar","sourcePath":"components/layout/Avatar.jsx"},{"name":"Card","sourcePath":"components/layout/Card.jsx"},{"name":"Divider","sourcePath":"components/layout/Divider.jsx"},{"name":"Stat","sourcePath":"components/layout/Stat.jsx"},{"name":"SegmentedControl","sourcePath":"components/navigation/SegmentedControl.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/brand/Icon.jsx":"dc366dae2c1b","components/brand/Logo.jsx":"0443395c2d39","components/brand/Pillar.jsx":"28a380f7fddf","components/brand/logoPaths.js":"4161e3b3240c","components/data/RankRow.jsx":"79313f0b57d5","components/feedback/Badge.jsx":"64ab18a9b5ef","components/feedback/ProgressBar.jsx":"6d2ba732f7c7","components/feedback/ProgressRing.jsx":"3db374a89b9a","components/feedback/Tag.jsx":"73963fc48d7b","components/feedback/Toast.jsx":"5365b22936c7","components/forms/Button.jsx":"29ab8d610d0d","components/forms/Checkbox.jsx":"d0c3eaf63630","components/forms/Field.jsx":"c6fad115684e","components/forms/Input.jsx":"7c39cad60463","components/forms/RadioGroup.jsx":"a7a2649fb162","components/forms/Select.jsx":"e49e7ec7eb33","components/forms/Switch.jsx":"557fe1f71487","components/forms/Textarea.jsx":"29956372d51f","components/layout/Avatar.jsx":"72b7331e97eb","components/layout/Card.jsx":"30d66ed32adf","components/layout/Divider.jsx":"348fa7f4b0a1","components/layout/Stat.jsx":"6d3e1c3f9c69","components/navigation/SegmentedControl.jsx":"cd23ed54b697","components/navigation/Tabs.jsx":"5ea3a1aefa75","ui_kits/app/app-screens.jsx":"7c79bf6127ba","ui_kits/marketing/marketing-sections.jsx":"55870a7885bc"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SideDesignSystem_d0448e = window.SideDesignSystem_d0448e || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SIDE · Icon — thin-line iconography (Lucide-style geometry, MIT).
 * Stroke-based, 24px grid, refined 1.75 default weight to match the
 * brand's quiet-luxury line work. Brand pillars: foco, estudo, mente,
 * progresso, descanso, equilibrio.
 */
const PATHS = {
  // --- Brand pillars ---
  foco: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.4"/>',
  estudo: '<path d="M12 7v13"/><path d="M3.5 5.5A2 2 0 0 1 5 5h5a2 2 0 0 1 2 2v13a2.5 2.5 0 0 0-2-1H5a1.5 1.5 0 0 1-1.5-1.5z"/><path d="M20.5 5.5A2 2 0 0 0 19 5h-5a2 2 0 0 0-2 2v13a2.5 2.5 0 0 1 2-1h5a1.5 1.5 0 0 0 1.5-1.5z"/>',
  mente: '<path d="M12 5a3 3 0 0 0-3 3 2.5 2.5 0 0 0-2 4 2.5 2.5 0 0 0 1.5 4.5A2.5 2.5 0 0 0 12 19V5Z"/><path d="M12 5a3 3 0 0 1 3 3 2.5 2.5 0 0 1 2 4 2.5 2.5 0 0 1-1.5 4.5A2.5 2.5 0 0 1 12 19"/>',
  progresso: '<path d="M5 20V11"/><path d="M12 20V5"/><path d="M19 20v-6"/>',
  descanso: '<path d="M19 13.5A7.5 7.5 0 0 1 10.5 5a7.5 7.5 0 1 0 8.5 8.5Z"/>',
  equilibrio: '<path d="M12 20.5C8 17.5 4 14 4 9.5A4 4 0 0 1 12 7a4 4 0 0 1 8 2.5c0 4.5-4 8-8 11Z"/>',
  // --- UI ---
  'chevron-right': '<path d="m9 6 6 6-6 6"/>',
  'chevron-left': '<path d="m15 6-6 6 6 6"/>',
  'chevron-down': '<path d="m6 9 6 6 6-6"/>',
  'chevron-up': '<path d="m18 15-6-6-6 6"/>',
  'arrow-right': '<path d="M5 12h14"/><path d="m13 6 6 6-6 6"/>',
  'arrow-up-right': '<path d="M7 17 17 7"/><path d="M7 7h10v10"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  'check-circle': '<circle cx="12" cy="12" r="9"/><path d="m9 12 2 2 4-4"/>',
  x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
  plus: '<path d="M12 5v14"/><path d="M5 12h14"/>',
  minus: '<path d="M5 12h14"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>',
  menu: '<path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h16"/>',
  'more-horizontal': '<circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/>',
  bell: '<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>',
  settings: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
  play: '<path d="M7 4.5v15l12-7.5z"/>',
  pause: '<path d="M9 5v14"/><path d="M15 5v14"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  calendar: '<rect x="3.5" y="5" width="17" height="16" rx="2"/><path d="M3.5 10h17"/><path d="M8 3v4"/><path d="M16 3v4"/>',
  lock: '<rect x="4.5" y="11" width="15" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3.5 7 8.5 6 8.5-6"/>',
  eye: '<path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z"/><circle cx="12" cy="12" r="3"/>',
  flame: '<path d="M12 3s5 4 5 9a5 5 0 0 1-10 0c0-1.5.8-2.8 1.6-3.7C9 9 9.5 7.5 9 6c2 .5 3 1.8 3 1.8S12.5 5 12 3Z"/>',
  trophy: '<path d="M7 4h10v5a5 5 0 0 1-10 0Z"/><path d="M7 6H4.5a2.5 2.5 0 0 0 2.5 4"/><path d="M17 6h2.5a2.5 2.5 0 0 1-2.5 4"/><path d="M12 14v3"/><path d="M9 20h6"/><path d="M10 17h4l-.5 3h-3z"/>',
  'trending-up': '<path d="m3 16 5.5-5.5 3 3L21 5"/><path d="M15 5h6v6"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  leaf: '<path d="M5 19c0-9 6-13 14-13 0 8-4 14-13 14"/><path d="M5 19c2-4 5-6 9-7"/>',
  target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.4"/>',
  star: '<path d="m12 4 2.2 4.9 5.3.5-4 3.6 1.2 5.2L12 16l-4.7 2.7L8.5 13.5 4.5 9.9l5.3-.5z"/>',
  'book-open': '<path d="M12 7v13"/><path d="M3.5 5.5A2 2 0 0 1 5 5h5a2 2 0 0 1 2 2v13a2.5 2.5 0 0 0-2-1H5a1.5 1.5 0 0 1-1.5-1.5z"/><path d="M20.5 5.5A2 2 0 0 0 19 5h-5a2 2 0 0 0-2 2v13a2.5 2.5 0 0 1 2-1h5a1.5 1.5 0 0 0 1.5-1.5z"/>',
  home: '<path d="M4 11.5 12 4l8 7.5"/><path d="M6 10v9.5h12V10"/>',
  grid: '<rect x="4" y="4" width="7" height="7" rx="1"/><rect x="13" y="4" width="7" height="7" rx="1"/><rect x="4" y="13" width="7" height="7" rx="1"/><rect x="13" y="13" width="7" height="7" rx="1"/>',
  logout: '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="m16 17 5-5-5-5"/><path d="M21 12H9"/>',
  filter: '<path d="M3 5h18l-7 8v6l-4-2v-4z"/>',
  headphones: '<path d="M4 14v-2a8 8 0 0 1 16 0v2"/><rect x="3" y="14" width="4" height="6" rx="1.5"/><rect x="17" y="14" width="4" height="6" rx="1.5"/>'
};
function Icon({
  name,
  size = 20,
  strokeWidth = 1.75,
  color = 'currentColor',
  style = {},
  ...rest
}) {
  const inner = PATHS[name];
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "none",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      display: 'inline-block',
      flexShrink: 0,
      ...style
    },
    "aria-hidden": "true",
    dangerouslySetInnerHTML: {
      __html: inner || ''
    }
  }, rest));
}
const ICON_NAMES = Object.keys(PATHS);
Object.assign(__ds_scope, { Icon, ICON_NAMES });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Icon.jsx", error: String((e && e.message) || e) }); }

// components/brand/Pillar.jsx
try { (() => {
/**
 * SIDE · Pillar — a brand pillar token (foco, estudo, mente, progresso,
 * descanso, equilibrio). The dualidade made tangible.
 * layout: 'row' | 'stack' | 'tile'
 */
const PILLARS = {
  foco: {
    icon: 'foco',
    label: 'Foco'
  },
  estudo: {
    icon: 'estudo',
    label: 'Estudo'
  },
  mente: {
    icon: 'mente',
    label: 'Mente'
  },
  progresso: {
    icon: 'progresso',
    label: 'Progresso'
  },
  descanso: {
    icon: 'descanso',
    label: 'Descanso'
  },
  equilibrio: {
    icon: 'equilibrio',
    label: 'Equilíbrio'
  }
};
function Pillar({
  name = 'foco',
  label,
  description,
  layout = 'row',
  tone = 'green',
  style = {}
}) {
  const p = PILLARS[name] || PILLARS.foco;
  const ic = {
    green: 'var(--green-700)',
    gold: 'var(--gold-600)',
    ink: 'var(--text)'
  }[tone] || 'var(--green-700)';
  const text = label || p.label;
  if (layout === 'tile') {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 14,
        padding: 'var(--space-6)',
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-card)',
        boxShadow: 'var(--shadow-sm)',
        ...style
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 44,
        height: 44,
        borderRadius: 'var(--radius-md)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--surface-inset)'
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: p.icon,
      size: 24,
      color: ic,
      strokeWidth: 1.5
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 'var(--text-xl)',
        color: 'var(--text)',
        marginBottom: 4
      }
    }, text), description && /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-ui)',
        fontSize: 'var(--text-sm)',
        color: 'var(--text-muted)',
        lineHeight: 'var(--lh-normal)'
      }
    }, description)));
  }
  if (layout === 'stack') {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 8,
        ...style
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: p.icon,
      size: 26,
      color: ic,
      strokeWidth: 1.5
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-ui)',
        fontSize: 'var(--text-2xs)',
        fontWeight: 'var(--fw-semibold)',
        letterSpacing: 'var(--ls-wider)',
        textTransform: 'uppercase',
        color: 'var(--text-muted)'
      }
    }, text));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: p.icon,
    size: 20,
    color: ic,
    strokeWidth: 1.6
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--text-base)',
      fontWeight: 'var(--fw-medium)',
      color: 'var(--text)'
    }
  }, text));
}
Object.assign(__ds_scope, { Pillar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Pillar.jsx", error: String((e && e.message) || e) }); }

// components/brand/logoPaths.js
try { (() => {
// SIDE logo geometry (viewBox 0 0 799.62 881.43). Generated from brand SVG.
const SIDE_PATHS = {
  monoFluid: "M132.25,622.56l87.16-97.05,230.44-1.62c43.48-.31,84.03-27.14,104.06-64.52,36.95-68.96,13.31-151.97-49.66-196.05-26.95-18.87-56.63-30.66-89.44-35.53l-65.93-9.78c52.04-7.22,101.59-4.34,151.2,6.87,48.65,10.99,91.23,34.1,126.67,68.43,66.29,64.21,57.06,168.63.72,236.75-45.13,54.56-93.41,93.39-167.54,92.65l-327.67-.15Z",
  monoStructure: "M412.09,383.69c-102.99,3.19-212.75-13.95-261.81-111.24-10.67-21.16-11.83-43.67-11.84-67.67-.01-37.94,5.85-78.17,30.85-108.1,24.5-29.33,50.61-55.28,78.08-82.06C258.17,4.1,277.17.25,292.81.24l361.4-.24-85.17,89.89-228.54,1.51c-46.15.31-85.35,35.52-101.5,72.45-20.42,46.7-12.73,96.34,18.13,133.73,34.97,42.37,101.39,62.08,154.95,86.11Z",
  word: ["M.18,830.32h24.88c.6,5.53,2.8,10.5,6.61,14.91,3.81,4.41,8.89,7.85,15.24,10.31,6.35,2.47,13.64,3.7,21.86,3.7,7.32,0,13.37-.9,18.16-2.69,4.78-1.79,8.33-4.29,10.65-7.51,2.32-3.21,3.47-6.98,3.47-11.32s-1.38-7.73-4.15-10.2c-2.77-2.47-6.99-4.56-12.67-6.28-5.68-1.72-12.93-3.4-21.75-5.04-7.32-1.35-14.42-3.14-21.3-5.38-6.88-2.24-13.04-5.08-18.5-8.52-5.46-3.44-9.75-7.66-12.89-12.67-3.14-5.01-4.71-10.95-4.71-17.82,0-7.77,2.2-14.8,6.61-21.07,4.41-6.28,10.95-11.21,19.62-14.8,8.67-3.59,19.2-5.38,31.61-5.38,18.98,0,33.48,4.37,43.49,13.12,10.01,8.74,14.87,20.59,14.57,35.53h-24.44c-.45-9.42-3.89-16.21-10.31-20.4-6.43-4.18-14.57-6.28-24.44-6.28-8.82,0-16.22,1.57-22.19,4.71-5.98,3.14-8.97,8.22-8.97,15.24,0,2.99.71,5.57,2.13,7.73,1.42,2.17,3.77,4.11,7.06,5.83,3.29,1.72,7.81,3.36,13.56,4.93,5.75,1.57,12.81,3.25,21.19,5.04,7.17,1.2,13.9,2.84,20.18,4.93,6.28,2.09,11.77,4.71,16.48,7.85s8.41,7.17,11.1,12.11,4.04,10.99,4.04,18.16c0,8.22-2.09,15.51-6.28,21.86-4.19,6.35-10.58,11.36-19.17,15.02-8.6,3.66-19.69,5.49-33.29,5.49-10.31,0-19.32-1.23-27.01-3.7-7.7-2.47-14.24-5.68-19.62-9.64-5.38-3.96-9.68-8.26-12.89-12.89-3.22-4.63-5.46-9.15-6.73-13.56-1.27-4.41-1.68-8.18-1.23-11.32Z", "M246.78,733.25h25.56v145.27h-25.56v-145.27Z", "M470.96,733.25c15.69,0,28.84,1.94,39.46,5.83,10.61,3.89,19.06,9.16,25.33,15.81,6.28,6.65,10.8,14.31,13.56,22.98,2.76,8.67,4.15,17.79,4.15,27.35s-1.5,18.98-4.48,27.8c-2.99,8.82-7.73,16.63-14.24,23.43-6.5,6.8-14.99,12.18-25.45,16.14-10.46,3.96-23.24,5.94-38.34,5.94h-69.72v-145.27h69.72ZM426.8,856.1h43.94c11.06,0,20.25-1.42,27.58-4.26,7.32-2.84,13.15-6.69,17.49-11.55,4.33-4.86,7.4-10.31,9.19-16.37,1.79-6.05,2.69-12.29,2.69-18.72s-.9-12.59-2.69-18.5c-1.79-5.9-4.86-11.21-9.19-15.92-4.34-4.71-10.17-8.44-17.49-11.21-7.32-2.76-16.52-4.15-27.58-4.15h-43.94v100.66Z", "M697.62,816.64v39.91h102v21.97h-127.56v-145.27h127.34v21.97h-101.78v40.35h83.4v21.07h-83.4Z"]
};
const SIDE_VIEWBOX = {
  full: '0 0 800 881.43',
  mono: '120 0 560 640',
  word: '0 733 800 146'
};
Object.assign(__ds_scope, { SIDE_PATHS, SIDE_VIEWBOX });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/logoPaths.js", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SIDE · Logo
 * variant: 'monogram' | 'wordmark' | 'lockup'
 * tone:    'brand' (gold-gradient + green) | 'ink' | 'cream' | 'gold' | 'green'
 * The monogram unites estrutura (gold, sharp) + fluidez (green, curved).
 * Gold is rendered as a metallic gradient (set gradient={false} for flat).
 */
let _uid = 0;
function Logo({
  variant = 'lockup',
  tone = 'brand',
  size,
  height,
  gradient = true,
  style = {},
  ...rest
}) {
  const gid = React.useMemo(() => 'side-g' + ++_uid, []);
  const goldFill = gradient ? `url(#${gid})` : 'var(--gold-600)';
  const flat = {
    ink: 'var(--ink-800)',
    cream: 'var(--side-cream-2)',
    gold: goldFill,
    green: 'var(--green-700)'
  };
  const fillFor = which => {
    if (tone === 'brand') return which === 'structure' ? goldFill : '#1F3D36';
    return flat[tone] || 'currentColor';
  };
  const Defs = /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: gid,
    x1: "0",
    y1: "0",
    x2: "1",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "#E3CF9E"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "46%",
    stopColor: "#C8A96A"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "#9C7C3C"
  })));
  const useGoldGrad = gradient && (tone === 'brand' || tone === 'gold');
  if (variant === 'monogram') {
    const h = height || size || 40;
    return /*#__PURE__*/React.createElement("svg", _extends({
      viewBox: __ds_scope.SIDE_VIEWBOX.mono,
      height: h,
      style: {
        display: 'block',
        ...style
      },
      role: "img",
      "aria-label": "SIDE"
    }, rest), useGoldGrad && Defs, /*#__PURE__*/React.createElement("path", {
      d: __ds_scope.SIDE_PATHS.monoFluid,
      fill: fillFor('fluid')
    }), /*#__PURE__*/React.createElement("path", {
      d: __ds_scope.SIDE_PATHS.monoStructure,
      fill: fillFor('structure')
    }));
  }
  if (variant === 'wordmark') {
    const h = height || size || 22;
    const wf = flat[tone] || 'var(--ink-800)';
    return /*#__PURE__*/React.createElement("svg", _extends({
      viewBox: __ds_scope.SIDE_VIEWBOX.word,
      height: h,
      style: {
        display: 'block',
        ...style
      },
      role: "img",
      "aria-label": "SIDE"
    }, rest), useGoldGrad && Defs, __ds_scope.SIDE_PATHS.word.map((d, i) => /*#__PURE__*/React.createElement("path", {
      key: i,
      d: d,
      fill: tone === 'gold' ? goldFill : wf
    })));
  }

  // lockup
  const h = height || size || 96;
  const wf = tone === 'brand' ? 'var(--ink-800)' : flat[tone] || 'var(--ink-800)';
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 800 881.43",
    height: h,
    style: {
      display: 'block',
      ...style
    },
    role: "img",
    "aria-label": "SIDE"
  }, rest), useGoldGrad && Defs, /*#__PURE__*/React.createElement("path", {
    d: __ds_scope.SIDE_PATHS.monoFluid,
    fill: fillFor('fluid')
  }), /*#__PURE__*/React.createElement("path", {
    d: __ds_scope.SIDE_PATHS.monoStructure,
    fill: fillFor('structure')
  }), __ds_scope.SIDE_PATHS.word.map((d, i) => /*#__PURE__*/React.createElement("path", {
    key: i,
    d: d,
    fill: tone === 'gold' ? goldFill : wf
  })));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/data/RankRow.jsx
try { (() => {
/**
 * SIDE · RankRow — a leaderboard row (Ranking de Hoje).
 * Top 3 positions get a gold accent.
 */
function RankRow({
  position,
  name,
  detail,
  value,
  avatarSrc,
  highlight = false,
  style = {}
}) {
  const isTop = position <= 3;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '10px 12px',
      borderRadius: 'var(--radius-md)',
      background: highlight ? 'color-mix(in srgb, var(--gold-600) 12%, transparent)' : 'transparent',
      border: highlight ? '1px solid var(--gold-300)' : '1px solid transparent',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 24,
      textAlign: 'center',
      flexShrink: 0,
      fontFamily: 'var(--font-data)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--fw-semibold)',
      color: isTop ? 'var(--gold-600)' : 'var(--text-subtle)'
    }
  }, String(position).padStart(2, '0')), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 30,
      height: 30,
      borderRadius: '50%',
      flexShrink: 0,
      overflow: 'hidden',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--green-700)',
      color: 'var(--side-cream-2)',
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--fw-semibold)'
    }
  }, avatarSrc ? /*#__PURE__*/React.createElement("img", {
    src: avatarSrc,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : name?.split(/\s+/).slice(0, 2).map(w => w[0]).join('').toUpperCase()), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--text-base)',
      fontWeight: 'var(--fw-medium)',
      color: 'var(--text)',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, name), detail && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--text-xs)',
      color: 'var(--text-subtle)'
    }
  }, detail)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-data)',
      fontSize: 'var(--text-base)',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--text)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, value));
}
Object.assign(__ds_scope, { RankRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/RankRow.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Badge.jsx
try { (() => {
/** SIDE · Badge — small status/label pill. tone: neutral|green|gold|positive|attention|critical|info */
function Badge({
  tone = 'neutral',
  subtle = true,
  children,
  dot = false,
  style = {}
}) {
  const map = {
    neutral: ['var(--ink-100)', 'var(--ink-700)', 'var(--ink-800)', '#fff'],
    green: ['var(--green-100)', 'var(--green-700)', 'var(--green-700)', 'var(--side-cream-2)'],
    gold: ['var(--gold-200)', 'var(--gold-900)', 'var(--grad-gold)', 'var(--ink-900)'],
    positive: ['var(--positive-soft)', 'var(--positive)', 'var(--positive)', '#fff'],
    attention: ['var(--attention-soft)', 'var(--gold-900)', 'var(--attention)', 'var(--ink-900)'],
    critical: ['var(--critical-soft)', 'var(--critical)', 'var(--critical)', '#fff'],
    info: ['var(--info-soft)', 'var(--info)', 'var(--info)', '#fff']
  };
  const [softBg, softFg, solidBg, solidFg] = map[tone] || map.neutral;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      height: 22,
      padding: '0 9px',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--text-2xs)',
      fontWeight: 'var(--fw-semibold)',
      letterSpacing: '0.04em',
      textTransform: 'uppercase',
      whiteSpace: 'nowrap',
      background: subtle ? softBg : solidBg,
      color: subtle ? softFg : solidFg,
      ...style
    }
  }, dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: 'currentColor',
      opacity: 0.85
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Badge.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ProgressBar.jsx
try { (() => {
/** SIDE · ProgressBar — linear progress. tone: green|gold|ink */
function ProgressBar({
  value = 0,
  max = 100,
  tone = 'green',
  height = 8,
  showLabel = false,
  style = {}
}) {
  const pct = Math.max(0, Math.min(100, value / max * 100));
  const fill = {
    green: 'var(--green-700)',
    gold: 'var(--gold-600)',
    ink: 'var(--ink-800)'
  }[tone] || 'var(--green-700)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height,
      background: 'var(--surface-inset)',
      borderRadius: 'var(--radius-pill)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: pct + '%',
      height: '100%',
      background: fill,
      borderRadius: 'var(--radius-pill)',
      transition: 'width var(--dur-slow) var(--ease-emphatic)'
    }
  })), showLabel && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-data)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)',
      fontVariantNumeric: 'tabular-nums',
      minWidth: 38,
      textAlign: 'right'
    }
  }, Math.round(pct), "%"));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ProgressRing.jsx
try { (() => {
/**
 * SIDE · ProgressRing — circular gauge (the dashboard %). Gold→green sweep.
 */
function ProgressRing({
  value = 0,
  max = 100,
  size = 96,
  thickness = 9,
  tone = 'brand',
  label,
  sublabel,
  style = {}
}) {
  const pct = Math.max(0, Math.min(1, value / max));
  const r = (size - thickness) / 2;
  const c = 2 * Math.PI * r;
  const id = React.useId ? React.useId() : 'sr' + Math.random().toString(36).slice(2);
  const single = {
    green: 'var(--green-700)',
    gold: 'var(--gold-600)',
    ink: 'var(--ink-800)'
  }[tone];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: size,
      height: size,
      ...style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    style: {
      transform: 'rotate(-90deg)'
    }
  }, tone === 'brand' && /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: id,
    x1: "0",
    y1: "0",
    x2: "1",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "#C8A96A"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "#2A4E45"
  }))), /*#__PURE__*/React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: r,
    fill: "none",
    stroke: "var(--surface-inset)",
    strokeWidth: thickness
  }), /*#__PURE__*/React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: r,
    fill: "none",
    stroke: tone === 'brand' ? `url(#${id})` : single,
    strokeWidth: thickness,
    strokeLinecap: "round",
    strokeDasharray: c,
    strokeDashoffset: c * (1 - pct),
    style: {
      transition: 'stroke-dashoffset var(--dur-slower) var(--ease-emphatic)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: size * 0.30,
      fontWeight: 'var(--fw-medium)',
      color: 'var(--text)',
      lineHeight: 1,
      letterSpacing: '-0.01em'
    }
  }, label != null ? label : Math.round(pct * 100) + '%'), sublabel && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--text-2xs)',
      letterSpacing: 'var(--ls-wide)',
      textTransform: 'uppercase',
      color: 'var(--text-subtle)'
    }
  }, sublabel)));
}
Object.assign(__ds_scope, { ProgressRing });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ProgressRing.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tag.jsx
try { (() => {
/** SIDE · Tag — removable/selectable chip. */
function Tag({
  children,
  selected = false,
  onRemove,
  leadingIcon,
  onClick,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("span", {
    onClick: onClick,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      height: 30,
      padding: '0 12px',
      borderRadius: 'var(--radius-pill)',
      cursor: onClick ? 'pointer' : 'default',
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--fw-medium)',
      background: selected ? 'var(--green-700)' : 'var(--surface-2)',
      color: selected ? 'var(--text-on-green)' : 'var(--text)',
      border: `1px solid ${selected ? 'var(--green-700)' : 'var(--border)'}`,
      transition: 'var(--transition-control)',
      ...style
    }
  }, leadingIcon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex'
    }
  }, leadingIcon), children, onRemove && /*#__PURE__*/React.createElement("span", {
    onClick: e => {
      e.stopPropagation();
      onRemove();
    },
    style: {
      display: 'inline-flex',
      marginRight: -3,
      opacity: 0.7,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18M6 6l12 12"
  }))));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
/** SIDE · Toast — notification. tone: neutral|green|gold|critical */
function Toast({
  title,
  description,
  tone = 'neutral',
  icon,
  onClose,
  style = {}
}) {
  const accent = {
    neutral: 'var(--ink-700)',
    green: 'var(--green-700)',
    gold: 'var(--gold-600)',
    critical: 'var(--critical)'
  }[tone] || 'var(--ink-700)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 12,
      width: 340,
      maxWidth: '100%',
      padding: '14px 16px',
      background: 'var(--surface)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-lg)',
      borderLeft: `3px solid ${accent}`,
      animation: 'side-rise var(--dur-base) var(--ease-emphatic)',
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      color: accent,
      marginTop: 1
    }
  }, icon), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--text-base)',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--text)'
    }
  }, title), description && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)',
      marginTop: 2,
      lineHeight: 'var(--lh-normal)'
    }
  }, description)), onClose && /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: 'var(--text-subtle)',
      padding: 2,
      display: 'inline-flex',
      marginTop: -1
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18M6 6l12 12"
  }))));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SIDE · Button
 * Refined, confident actions. Primary = forest green (works on both themes),
 * accent = brand gold for premium / brand-moment CTAs.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  full = false,
  loading = false,
  disabled = false,
  leadingIcon = null,
  trailingIcon = null,
  type = 'button',
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      height: 32,
      padding: '0 14px',
      font: 'var(--text-sm)',
      gap: 7,
      icon: 15
    },
    md: {
      height: 40,
      padding: '0 20px',
      font: 'var(--text-base)',
      gap: 9,
      icon: 17
    },
    lg: {
      height: 48,
      padding: '0 28px',
      font: 'var(--text-md)',
      gap: 10,
      icon: 19
    }
  };
  const s = sizes[size] || sizes.md;
  const variants = {
    primary: {
      background: 'var(--green-700)',
      color: 'var(--text-on-green)',
      border: '1px solid var(--green-700)',
      '--hover-bg': 'var(--green-600)',
      '--hover-bd': 'var(--green-600)'
    },
    accent: {
      background: 'var(--grad-gold)',
      color: 'var(--text-on-gold)',
      border: '1px solid var(--gold-700)',
      '--hover-bg': 'var(--grad-gold-bright)',
      '--hover-bd': 'var(--gold-800)'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--text)',
      border: '1px solid var(--border)',
      '--hover-bg': 'var(--surface-2)',
      '--hover-bd': 'var(--border-strong)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-muted)',
      border: '1px solid transparent',
      '--hover-bg': 'var(--surface-2)',
      '--hover-bd': 'transparent'
    },
    danger: {
      background: 'var(--critical)',
      color: '#fff',
      border: '1px solid var(--critical)',
      '--hover-bg': '#874137',
      '--hover-bd': '#874137'
    }
  };
  const v = variants[variant] || variants.primary;
  const isDisabled = disabled || loading;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: isDisabled,
    onMouseEnter: e => {
      if (isDisabled) return;
      e.currentTarget.style.background = v['--hover-bg'];
      e.currentTarget.style.borderColor = v['--hover-bd'];
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = v.background;
      e.currentTarget.style.borderColor = (v.border || '').split(' ').pop();
    },
    onMouseDown: e => {
      if (!isDisabled) e.currentTarget.style.transform = 'translateY(0.5px) scale(0.992)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'none';
    },
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: s.gap,
      height: s.height,
      padding: s.padding,
      width: full ? '100%' : 'auto',
      font: 'inherit',
      fontFamily: 'var(--font-ui)',
      fontSize: s.font,
      fontWeight: 'var(--fw-semibold)',
      letterSpacing: '0.005em',
      borderRadius: 'var(--radius-control)',
      cursor: isDisabled ? 'not-allowed' : 'pointer',
      opacity: isDisabled ? 0.5 : 1,
      whiteSpace: 'nowrap',
      transition: 'var(--transition-control)',
      WebkitTapHighlightColor: 'transparent',
      ...v,
      ...style
    }
  }, rest), loading && /*#__PURE__*/React.createElement(Spinner, {
    size: s.icon
  }), !loading && leadingIcon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: s.icon,
      height: s.icon
    }
  }, leadingIcon), children, !loading && trailingIcon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: s.icon,
      height: s.icon
    }
  }, trailingIcon));
}
function Spinner({
  size = 16
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      border: '2px solid currentColor',
      borderTopColor: 'transparent',
      display: 'inline-block',
      animation: 'side-spin 0.7s linear infinite',
      opacity: 0.9
    }
  });
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
/** SIDE · Checkbox — controlled or uncontrolled. */
function Checkbox({
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  label,
  id,
  style = {}
}) {
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const isOn = checked !== undefined ? checked : internal;
  const toggle = () => {
    if (disabled) return;
    if (checked === undefined) setInternal(!isOn);
    onChange?.(!isOn);
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.55 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    role: "checkbox",
    "aria-checked": isOn,
    tabIndex: disabled ? -1 : 0,
    onClick: toggle,
    onKeyDown: e => {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        toggle();
      }
    },
    style: {
      width: 20,
      height: 20,
      borderRadius: 'var(--radius-sm)',
      flexShrink: 0,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: isOn ? 'var(--green-700)' : 'var(--surface)',
      border: `1.5px solid ${isOn ? 'var(--green-700)' : 'var(--border-strong)'}`,
      transition: 'var(--transition-control)',
      outline: 'none'
    }
  }, isOn && /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--text-on-green)",
    strokeWidth: "3",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  }))), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--text-base)',
      color: 'var(--text)'
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
/** SIDE · Field — label + helper/error wrapper for any control. */
function Field({
  label,
  htmlFor,
  hint,
  error,
  required = false,
  children,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 7,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: htmlFor,
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--fw-medium)',
      color: 'var(--text)',
      letterSpacing: '0.005em'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gold-700)',
      marginLeft: 4
    }
  }, "*")), children, (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--text-xs)',
      color: error ? 'var(--critical)' : 'var(--text-subtle)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SIDE · Input — text field. Quiet by default, gold focus.
 */
function Input({
  size = 'md',
  invalid = false,
  leadingIcon = null,
  trailingIcon = null,
  disabled = false,
  style = {},
  wrapStyle = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const sizes = {
    sm: {
      h: 34,
      px: 12,
      font: 'var(--text-sm)'
    },
    md: {
      h: 42,
      px: 14,
      font: 'var(--text-base)'
    },
    lg: {
      h: 50,
      px: 16,
      font: 'var(--text-md)'
    }
  };
  const s = sizes[size] || sizes.md;
  const borderColor = invalid ? 'var(--critical)' : focus ? 'var(--focus-ring)' : 'var(--border)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      height: s.h,
      padding: `0 ${s.px}px`,
      background: 'var(--surface)',
      border: `1px solid ${borderColor}`,
      borderRadius: 'var(--radius-field)',
      boxShadow: focus ? 'var(--ring)' : 'none',
      opacity: disabled ? 0.55 : 1,
      transition: 'var(--transition-control)',
      ...wrapStyle
    }
  }, leadingIcon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      color: 'var(--text-subtle)'
    }
  }, leadingIcon), /*#__PURE__*/React.createElement("input", _extends({
    disabled: disabled,
    onFocus: e => {
      setFocus(true);
      rest.onFocus?.(e);
    },
    onBlur: e => {
      setFocus(false);
      rest.onBlur?.(e);
    },
    style: {
      flex: 1,
      minWidth: 0,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      font: 'inherit',
      fontFamily: 'var(--font-ui)',
      fontSize: s.font,
      color: 'var(--text)',
      ...style
    }
  }, rest)), trailingIcon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      color: 'var(--text-subtle)'
    }
  }, trailingIcon));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/RadioGroup.jsx
try { (() => {
/** SIDE · RadioGroup — single choice. options: [{value,label,hint}]. */
function RadioGroup({
  name,
  value,
  defaultValue,
  onChange,
  options = [],
  disabled = false,
  style = {}
}) {
  const [internal, setInternal] = React.useState(defaultValue);
  const current = value !== undefined ? value : internal;
  const select = v => {
    if (disabled) return;
    if (value === undefined) setInternal(v);
    onChange?.(v);
  };
  return /*#__PURE__*/React.createElement("div", {
    role: "radiogroup",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      ...style
    }
  }, options.map(opt => {
    const on = current === opt.value;
    return /*#__PURE__*/React.createElement("label", {
      key: opt.value,
      style: {
        display: 'flex',
        alignItems: 'flex-start',
        gap: 11,
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.55 : 1
      }
    }, /*#__PURE__*/React.createElement("span", {
      role: "radio",
      "aria-checked": on,
      tabIndex: disabled ? -1 : 0,
      onClick: () => select(opt.value),
      onKeyDown: e => {
        if (e.key === ' ' || e.key === 'Enter') {
          e.preventDefault();
          select(opt.value);
        }
      },
      style: {
        width: 20,
        height: 20,
        borderRadius: '50%',
        flexShrink: 0,
        marginTop: 1,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: `1.5px solid ${on ? 'var(--green-700)' : 'var(--border-strong)'}`,
        background: 'var(--surface)',
        transition: 'var(--transition-control)',
        outline: 'none'
      }
    }, on && /*#__PURE__*/React.createElement("span", {
      style: {
        width: 9,
        height: 9,
        borderRadius: '50%',
        background: 'var(--green-700)'
      }
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 2
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-ui)',
        fontSize: 'var(--text-base)',
        color: 'var(--text)'
      }
    }, opt.label), opt.hint && /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-ui)',
        fontSize: 'var(--text-xs)',
        color: 'var(--text-subtle)'
      }
    }, opt.hint)));
  }));
}
Object.assign(__ds_scope, { RadioGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/RadioGroup.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** SIDE · Select — native select with brand chrome. */
function Select({
  size = 'md',
  invalid = false,
  disabled = false,
  children,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const sizes = {
    sm: {
      h: 34,
      font: 'var(--text-sm)'
    },
    md: {
      h: 42,
      font: 'var(--text-base)'
    },
    lg: {
      h: 50,
      font: 'var(--text-md)'
    }
  };
  const s = sizes[size] || sizes.md;
  const borderColor = invalid ? 'var(--critical)' : focus ? 'var(--focus-ring)' : 'var(--border)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'inline-flex',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      appearance: 'none',
      WebkitAppearance: 'none',
      width: '100%',
      height: s.h,
      padding: '0 38px 0 14px',
      background: 'var(--surface)',
      border: `1px solid ${borderColor}`,
      borderRadius: 'var(--radius-field)',
      boxShadow: focus ? 'var(--ring)' : 'none',
      fontFamily: 'var(--font-ui)',
      fontSize: s.font,
      color: 'var(--text)',
      outline: 'none',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.55 : 1,
      transition: 'var(--transition-control)',
      ...style
    }
  }, rest), children), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 13,
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      color: 'var(--text-subtle)',
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.75",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m6 9 6 6 6-6"
  }))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
/** SIDE · Switch — on/off toggle. */
function Switch({
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  label,
  style = {}
}) {
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const isOn = checked !== undefined ? checked : internal;
  const toggle = () => {
    if (disabled) return;
    if (checked === undefined) setInternal(!isOn);
    onChange?.(!isOn);
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.55 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    role: "switch",
    "aria-checked": isOn,
    tabIndex: disabled ? -1 : 0,
    onClick: toggle,
    onKeyDown: e => {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        toggle();
      }
    },
    style: {
      width: 44,
      height: 26,
      borderRadius: 'var(--radius-pill)',
      flexShrink: 0,
      background: isOn ? 'var(--green-700)' : 'var(--border-strong)',
      padding: 3,
      display: 'inline-flex',
      alignItems: 'center',
      transition: 'background-color var(--dur-base) var(--ease-out)',
      outline: 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      borderRadius: '50%',
      background: 'var(--paper-000)',
      boxShadow: 'var(--shadow-sm)',
      transform: isOn ? 'translateX(18px)' : 'translateX(0)',
      transition: 'transform var(--dur-base) var(--ease-emphatic)'
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--text-base)',
      color: 'var(--text)'
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** SIDE · Textarea */
function Textarea({
  invalid = false,
  rows = 4,
  disabled = false,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const borderColor = invalid ? 'var(--critical)' : focus ? 'var(--focus-ring)' : 'var(--border)';
  return /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows,
    disabled: disabled,
    onFocus: e => {
      setFocus(true);
      rest.onFocus?.(e);
    },
    onBlur: e => {
      setFocus(false);
      rest.onBlur?.(e);
    },
    style: {
      width: '100%',
      padding: '11px 14px',
      background: 'var(--surface)',
      border: `1px solid ${borderColor}`,
      borderRadius: 'var(--radius-field)',
      boxShadow: focus ? 'var(--ring)' : 'none',
      resize: 'vertical',
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--text-base)',
      lineHeight: 'var(--lh-normal)',
      color: 'var(--text)',
      outline: 'none',
      opacity: disabled ? 0.55 : 1,
      transition: 'var(--transition-control)',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/layout/Avatar.jsx
try { (() => {
/** SIDE · Avatar — initials or image. */
function Avatar({
  name = '',
  src,
  size = 40,
  tone = 'green',
  style = {}
}) {
  const initials = name.trim().split(/\s+/).slice(0, 2).map(w => w[0]).join('').toUpperCase();
  const tones = {
    green: ['var(--green-700)', 'var(--side-cream-2)'],
    gold: ['var(--gold-600)', 'var(--ink-900)'],
    ink: ['var(--ink-800)', 'var(--side-cream-2)']
  };
  const [bg, fg] = tones[tone] || tones.green;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      flexShrink: 0,
      overflow: 'hidden',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: src ? 'var(--surface-inset)' : bg,
      color: fg,
      fontFamily: 'var(--font-ui)',
      fontWeight: 'var(--fw-semibold)',
      fontSize: size * 0.38,
      letterSpacing: '0.01em',
      ...style
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : initials);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/layout/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SIDE · Card — premium surface container.
 * variant: 'surface' (default) | 'inset' | 'outline' | 'ink' (dark luxe) | 'gold-edge'
 */
function Card({
  variant = 'surface',
  interactive = false,
  padding = 'var(--card-pad)',
  children,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const variants = {
    surface: {
      background: 'linear-gradient(var(--surface), var(--surface)) padding-box, linear-gradient(155deg, rgba(26,26,26,.13), rgba(26,26,26,.03) 55%, rgba(26,26,26,0)) border-box',
      border: '1px solid transparent',
      boxShadow: 'var(--shadow-sm)'
    },
    inset: {
      background: 'var(--surface-inset)',
      border: '1px solid transparent',
      boxShadow: 'none'
    },
    outline: {
      background: 'transparent',
      border: '1px solid transparent',
      boxShadow: 'none',
      backgroundImage: 'linear-gradient(transparent, transparent), linear-gradient(155deg, rgba(26,26,26,.18), rgba(26,26,26,.04) 60%, rgba(26,26,26,0))',
      backgroundOrigin: 'border-box',
      backgroundClip: 'padding-box, border-box'
    },
    ink: {
      background: 'linear-gradient(var(--night-800), var(--night-800)) padding-box, linear-gradient(155deg, rgba(245,240,232,.18), rgba(245,240,232,.03) 55%, rgba(245,240,232,0)) border-box',
      border: '1px solid transparent',
      boxShadow: 'var(--shadow-md)',
      color: 'var(--side-cream-2)'
    },
    'gold-edge': {
      background: 'linear-gradient(var(--surface), var(--surface)) padding-box, var(--grad-gold) border-box',
      border: '1px solid transparent',
      boxShadow: 'var(--shadow-sm)'
    }
  };
  const v = variants[variant] || variants.surface;
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => interactive && setHover(true),
    onMouseLeave: () => interactive && setHover(false),
    style: {
      borderRadius: 'var(--radius-card)',
      padding,
      transition: 'var(--transition-control)',
      cursor: interactive ? 'pointer' : 'default',
      transform: interactive && hover ? 'translateY(-2px)' : 'none',
      ...v,
      boxShadow: interactive && hover ? 'var(--shadow-lg)' : v.boxShadow,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Card.jsx", error: String((e && e.message) || e) }); }

// components/layout/Divider.jsx
try { (() => {
/** SIDE · Divider — hairline separator, optional centered label. */
function Divider({
  label,
  orientation = 'horizontal',
  style = {}
}) {
  if (orientation === 'vertical') {
    return /*#__PURE__*/React.createElement("span", {
      style: {
        width: 1,
        alignSelf: 'stretch',
        background: 'var(--border)',
        ...style
      }
    });
  }
  if (!label) {
    return /*#__PURE__*/React.createElement("hr", {
      style: {
        border: 'none',
        borderTop: '1px solid var(--border)',
        margin: 0,
        ...style
      }
    });
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: 'var(--border)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--text-2xs)',
      fontWeight: 'var(--fw-semibold)',
      letterSpacing: 'var(--ls-wider)',
      textTransform: 'uppercase',
      color: 'var(--text-subtle)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: 'var(--border)'
    }
  }));
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Divider.jsx", error: String((e && e.message) || e) }); }

// components/layout/Stat.jsx
try { (() => {
/**
 * SIDE · Stat — a single metric: label, value, optional delta + trend.
 * Values use the display serif for that editorial, premium feel.
 */
function Stat({
  label,
  value,
  unit,
  delta,
  trend,
  hint,
  align = 'left',
  style = {}
}) {
  const trendColor = trend === 'up' ? 'var(--positive)' : trend === 'down' ? 'var(--critical)' : 'var(--text-subtle)';
  const arrow = trend === 'up' ? 'm5 13 5-5 5 5' : trend === 'down' ? 'm5 8 5 5 5-5' : 'M5 10h10';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      alignItems: align === 'center' ? 'center' : 'flex-start',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--text-2xs)',
      fontWeight: 'var(--fw-semibold)',
      letterSpacing: 'var(--ls-wider)',
      textTransform: 'uppercase',
      color: 'var(--text-subtle)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-4xl)',
      fontWeight: 'var(--fw-medium)',
      lineHeight: 1,
      color: 'var(--text)',
      letterSpacing: '-0.01em'
    }
  }, value), unit && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--text-md)',
      color: 'var(--text-muted)'
    }
  }, unit)), (delta != null || hint) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, delta != null && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 3,
      color: trendColor,
      fontFamily: 'var(--font-data)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--fw-medium)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 20 20",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: arrow
  })), delta), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--text-xs)',
      color: 'var(--text-subtle)'
    }
  }, hint)));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Stat.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SegmentedControl.jsx
try { (() => {
/** SIDE · SegmentedControl — pill segmented selector. options:[{value,label}] */
function SegmentedControl({
  options = [],
  value,
  defaultValue,
  onChange,
  size = 'md',
  style = {}
}) {
  const [internal, setInternal] = React.useState(defaultValue ?? options[0]?.value);
  const current = value !== undefined ? value : internal;
  const select = v => {
    if (value === undefined) setInternal(v);
    onChange?.(v);
  };
  const h = size === 'sm' ? 32 : 38;
  const idx = options.findIndex(o => o.value === current);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'inline-grid',
      gridAutoFlow: 'column',
      gridAutoColumns: '1fr',
      padding: 3,
      height: h,
      background: 'var(--surface-inset)',
      borderRadius: 'var(--radius-pill)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 3,
      bottom: 3,
      left: 3,
      width: `calc((100% - 6px) / ${options.length})`,
      transform: `translateX(${idx * 100}%)`,
      background: 'var(--surface)',
      borderRadius: 'var(--radius-pill)',
      boxShadow: 'var(--shadow-sm)',
      transition: 'transform var(--dur-base) var(--ease-emphatic)'
    }
  }), options.map(o => {
    const on = current === o.value;
    return /*#__PURE__*/React.createElement("button", {
      key: o.value,
      onClick: () => select(o.value),
      style: {
        position: 'relative',
        zIndex: 1,
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: '0 16px',
        fontFamily: 'var(--font-ui)',
        fontSize: size === 'sm' ? 'var(--text-sm)' : 'var(--text-base)',
        fontWeight: on ? 'var(--fw-semibold)' : 'var(--fw-medium)',
        color: on ? 'var(--text)' : 'var(--text-muted)',
        whiteSpace: 'nowrap',
        transition: 'color var(--dur-fast) var(--ease-out)'
      }
    }, o.label);
  }));
}
Object.assign(__ds_scope, { SegmentedControl });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SegmentedControl.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
/** SIDE · Tabs — underline tabs. items: [{value,label,icon}] */
function Tabs({
  items = [],
  value,
  defaultValue,
  onChange,
  style = {}
}) {
  const [internal, setInternal] = React.useState(defaultValue ?? items[0]?.value);
  const current = value !== undefined ? value : internal;
  const select = v => {
    if (value === undefined) setInternal(v);
    onChange?.(v);
  };
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: 'flex',
      gap: 4,
      borderBottom: '1px solid var(--border)',
      ...style
    }
  }, items.map(it => {
    const on = current === it.value;
    return /*#__PURE__*/React.createElement("button", {
      key: it.value,
      role: "tab",
      "aria-selected": on,
      onClick: () => select(it.value),
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        padding: '10px 14px 12px',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        position: 'relative',
        fontFamily: 'var(--font-ui)',
        fontSize: 'var(--text-base)',
        fontWeight: on ? 'var(--fw-semibold)' : 'var(--fw-medium)',
        color: on ? 'var(--text)' : 'var(--text-muted)',
        transition: 'color var(--dur-fast) var(--ease-out)'
      }
    }, it.icon && /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex'
      }
    }, it.icon), it.label, it.badge != null && /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-data)',
        fontSize: 'var(--text-2xs)',
        color: 'var(--text-subtle)'
      }
    }, it.badge), /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        left: 6,
        right: 6,
        bottom: -1,
        height: 2,
        borderRadius: 2,
        background: 'var(--gold-600)',
        transform: on ? 'scaleX(1)' : 'scaleX(0)',
        transformOrigin: 'center',
        transition: 'transform var(--dur-base) var(--ease-emphatic)'
      }
    }));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/app-screens.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* SIDE app · fluid edition. Dynamic, organic, unexpected.
   Morphing orbs, flowing gold→green auras, floating dock.
   Composes DS primitives from window.SideDesignSystem_d0448e. */
const DS = window.SideDesignSystem_d0448e;
const {
  Logo,
  Icon,
  RankRow,
  Button,
  Avatar
} = DS;

/* ---------- atoms ---------- */
function Eyebrow({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '0.22em',
      textTransform: 'uppercase',
      color: 'rgba(245,240,232,.5)',
      ...style
    }
  }, children);
}
function Metric({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-data)',
      fontVariantNumeric: 'tabular-nums',
      letterSpacing: '-0.04em',
      ...style
    }
  }, children);
}

/* Moving mesh-gradient background — gold + green blobs anchored to distinct
   corners, each drifting on its own slow loop behind the near-black canvas. */
function Aura({
  intensity = 1
}) {
  const blob = (style, anim) => /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      borderRadius: '50%',
      filter: 'blur(46px)',
      willChange: 'transform',
      ...style,
      animation: anim
    }
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      overflow: 'hidden',
      pointerEvents: 'none',
      zIndex: 0
    }
  }, blob({
    top: '-24%',
    left: '-26%',
    width: '74%',
    height: '60%',
    background: `radial-gradient(circle, rgba(214,189,128,${0.62 * intensity}), rgba(200,169,106,0) 70%)`
  }, 'side-mesh-a 16s var(--ease-in-out) infinite'), blob({
    bottom: '-26%',
    right: '-28%',
    width: '84%',
    height: '66%',
    background: `radial-gradient(circle, rgba(31,61,54,${1.0 * intensity}), rgba(31,61,54,0) 68%)`
  }, 'side-mesh-b 21s var(--ease-in-out) infinite'), blob({
    top: '-12%',
    right: '-20%',
    width: '56%',
    height: '46%',
    background: `radial-gradient(circle, rgba(110,139,111,${0.5 * intensity}), rgba(110,139,111,0) 72%)`
  }, 'side-mesh-c 19s var(--ease-in-out) infinite'), blob({
    bottom: '-18%',
    left: '-22%',
    width: '60%',
    height: '50%',
    background: `radial-gradient(circle, rgba(156,124,60,${0.46 * intensity}), rgba(156,124,60,0) 70%)`
  }, 'side-mesh-d 24s var(--ease-in-out) infinite'));
}

/* Morphing organic orb that holds a value */
function FluidOrb({
  size = 196,
  value = '78',
  unit = '%',
  label = 'Foco',
  sub
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: size,
      height: size,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: -10,
      background: 'var(--grad-dualidade)',
      borderRadius: '62% 38% 54% 46% / 56% 52% 48% 44%',
      animation: 'side-morph 9s ease-in-out infinite',
      filter: 'blur(2px)',
      opacity: 0.95
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 6,
      background: 'radial-gradient(120% 120% at 30% 25%, #14241F 0%, #080B14 70%)',
      borderRadius: '62% 38% 54% 46% / 56% 52% 48% 44%',
      animation: 'side-morph 9s ease-in-out infinite',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      color: 'rgba(245,240,232,.45)',
      fontSize: 10
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement(Metric, {
    style: {
      fontSize: size * 0.34,
      fontWeight: 600,
      color: '#F5F0E8'
    }
  }, value), /*#__PURE__*/React.createElement(Metric, {
    style: {
      fontSize: size * 0.13,
      color: 'var(--gold-500)'
    }
  }, unit)), sub && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 11,
      color: 'rgba(245,240,232,.55)',
      whiteSpace: 'nowrap'
    }
  }, sub)));
}

/* Soft panel — a straight form whose edge fades instead of drawing a hard box.
   A faded gradient hairline (brightest top-left) keeps text fully contained. */
function Capsule({
  children,
  style,
  grad,
  radius = 20
}) {
  const base = grad ? {
    background: grad,
    border: '1px solid transparent'
  } : {
    background: 'linear-gradient(rgba(245,240,232,.07), rgba(245,240,232,.022)) padding-box, linear-gradient(155deg, rgba(245,240,232,.24), rgba(245,240,232,.05) 52%, rgba(245,240,232,0)) border-box',
    border: '1px solid transparent'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      padding: '20px 22px',
      borderRadius: radius,
      backdropFilter: 'blur(7px)',
      overflow: 'hidden',
      boxShadow: 'inset 0 1px 0 rgba(245,240,232,.05)',
      ...base,
      ...style
    }
  }, children);
}

/* Flowing sparkline (organic curve) */
function Wave({
  data,
  w = 150,
  h = 44,
  color = 'var(--gold-500)'
}) {
  const max = Math.max(...data),
    min = Math.min(...data);
  const pts = data.map((v, i) => [i / (data.length - 1) * w, h - (v - min) / (max - min || 1) * (h - 6) - 3]);
  let d = `M ${pts[0][0]} ${pts[0][1]}`;
  for (let i = 1; i < pts.length; i++) {
    const [x0, y0] = pts[i - 1],
      [x1, y1] = pts[i];
    const cx = (x0 + x1) / 2;
    d += ` C ${cx} ${y0}, ${cx} ${y1}, ${x1} ${y1}`;
  }
  return /*#__PURE__*/React.createElement("svg", {
    width: w,
    height: h,
    style: {
      display: 'block',
      overflow: 'visible'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: `${d} L ${w} ${h} L 0 ${h} Z`,
    fill: color,
    opacity: "0.12"
  }), /*#__PURE__*/React.createElement("path", {
    d: d,
    fill: "none",
    stroke: color,
    strokeWidth: "2.5",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: pts[pts.length - 1][0],
    cy: pts[pts.length - 1][1],
    r: "3.5",
    fill: color
  }));
}

/* ---------- LOGIN ---------- */
function LoginScreen({
  onEnter
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '60px 28px 40px',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(Aura, {
    intensity: 1.15
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 26
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "monogram",
    height: 104,
    style: {
      position: 'relative',
      animation: 'side-float 8s ease-in-out infinite'
    }
  }), /*#__PURE__*/React.createElement(Logo, {
    variant: "wordmark",
    tone: "cream",
    height: 20,
    style: {
      position: 'relative',
      marginTop: 8
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 23,
      color: 'var(--side-cream-2)',
      textAlign: 'center',
      letterSpacing: '-0.01em'
    }
  }, "Foco na sua", /*#__PURE__*/React.createElement("br", null), "melhor vers\xE3o.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    full: true,
    onClick: onEnter
  }, "Entrar"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    full: true,
    onClick: onEnter,
    style: {
      color: 'var(--side-cream-2)',
      borderColor: 'rgba(245,240,232,.2)'
    }
  }, "Criar conta"), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginTop: 6,
      fontFamily: 'var(--font-ui)',
      fontSize: 10,
      letterSpacing: '0.24em',
      textTransform: 'uppercase',
      color: 'rgba(245,240,232,.4)'
    }
  }, "Estudo \xB7 Mente \xB7 M\xE9todo")));
}

/* ---------- DASHBOARD ---------- */
function DashboardScreen() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      padding: '4px 20px 28px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Quarta \xB7 29 jun"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 27,
      color: 'var(--side-cream-2)',
      marginTop: 3,
      letterSpacing: '-0.02em'
    }
  }, "Ol\xE1, Marina")), /*#__PURE__*/React.createElement(Avatar, {
    name: "Marina Costa",
    tone: "gold",
    size: 44
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      padding: '6px 0 4px'
    }
  }, /*#__PURE__*/React.createElement(FluidOrb, {
    size: 158,
    value: "78",
    unit: "%",
    label: "Foco hoje",
    sub: "em dia"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Capsule, {
    style: {
      flex: 1
    },
    radius: 22
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      fontSize: 10
    }
  }, "Tempo"), /*#__PURE__*/React.createElement(Metric, {
    style: {
      fontSize: 26,
      fontWeight: 600,
      color: '#F5F0E8',
      display: 'block',
      marginTop: 6
    }
  }, "2:45"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(Wave, {
    data: [3, 4, 3, 5, 4, 6, 7],
    w: 120,
    h: 32,
    color: "var(--green-400)"
  }))), /*#__PURE__*/React.createElement(Capsule, {
    style: {
      flex: 1
    },
    radius: 22
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      fontSize: 10
    }
  }, "Sequ\xEAncia"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 4,
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement(Metric, {
    style: {
      fontSize: 26,
      fontWeight: 600,
      color: '#F5F0E8'
    }
  }, "12"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 12,
      color: 'var(--gold-500)'
    }
  }, "dias")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(Wave, {
    data: [2, 3, 4, 3, 5, 6, 8],
    w: 120,
    h: 32,
    color: "var(--gold-500)"
  })))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Plano de hoje \xB7 3/5"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 12,
      color: 'var(--gold-500)'
    }
  }, "Ver tudo")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 9
    }
  }, /*#__PURE__*/React.createElement(PlanItem, {
    icon: "estudo",
    title: "Matem\xE1tica \xB7 Fun\xE7\xF5es",
    meta: "45 min",
    done: true
  }), /*#__PURE__*/React.createElement(PlanItem, {
    icon: "mente",
    title: "Respiro guiado",
    meta: "8 min",
    done: true
  }), /*#__PURE__*/React.createElement(PlanItem, {
    icon: "foco",
    title: "F\xEDsica \xB7 Revis\xE3o",
    meta: "40 min"
  }), /*#__PURE__*/React.createElement(PlanItem, {
    icon: "descanso",
    title: "Pausa consciente",
    meta: "15 min"
  })))));
}
function PlanItem({
  icon,
  title,
  meta,
  done
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 13,
      padding: '13px 18px',
      borderRadius: 16,
      border: '1px solid transparent',
      background: done ? 'linear-gradient(rgba(31,61,54,.34), rgba(31,61,54,.2)) padding-box, linear-gradient(155deg, rgba(245,240,232,.18), rgba(245,240,232,0) 60%) border-box' : 'linear-gradient(rgba(245,240,232,.06), rgba(245,240,232,.018)) padding-box, linear-gradient(155deg, rgba(245,240,232,.2), rgba(245,240,232,0) 60%) border-box'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 36,
      height: 36,
      flexShrink: 0,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 12,
      background: done ? 'var(--grad-dualidade)' : 'rgba(245,240,232,.06)'
    }
  }, done ? /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 17,
    color: "#0E0E0E",
    strokeWidth: 2.6
  }) : /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 18,
    color: "var(--gold-500)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      fontFamily: 'var(--font-ui)',
      fontSize: 14,
      fontWeight: 500,
      color: 'var(--side-cream-2)',
      opacity: done ? 0.65 : 1
    }
  }, title), /*#__PURE__*/React.createElement(Metric, {
    style: {
      fontSize: 12,
      color: 'rgba(245,240,232,.45)'
    }
  }, meta));
}

/* ---------- RANKING ---------- */
function RankingScreen() {
  const [period, setPeriod] = React.useState('hoje');
  const rows = [{
    position: 1,
    name: 'Marina Costa',
    detail: '3º ano · Medicina',
    value: '94%'
  }, {
    position: 2,
    name: 'Rafael Dias',
    detail: 'Pré-vestibular',
    value: '91%'
  }, {
    position: 3,
    name: 'Helena Souza',
    detail: '3º ano · Engenharia',
    value: '88%'
  }, {
    position: 4,
    name: 'Bruno Alves',
    detail: 'Pré-vestibular',
    value: '84%'
  }, {
    position: 5,
    name: 'Clara M.',
    detail: '2º ano',
    value: '82%'
  }, {
    position: 7,
    name: 'Você',
    detail: 'Sequência de 12 dias',
    value: '78%',
    highlight: true
  }];
  const periods = [['hoje', 'Hoje'], ['semana', 'Semana'], ['mes', 'Mês']];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      padding: '4px 20px 28px',
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Comunidade SIDE"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 27,
      color: 'var(--side-cream-2)',
      marginTop: 3,
      letterSpacing: '-0.02em'
    }
  }, "Ranking de Hoje")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      position: 'relative',
      zIndex: 1
    }
  }, periods.map(([v, l]) => /*#__PURE__*/React.createElement("button", {
    key: v,
    onClick: () => setPeriod(v),
    style: {
      flex: 1,
      padding: '9px 0',
      borderRadius: 'var(--radius-pill)',
      border: '1px solid rgba(245,240,232,.1)',
      cursor: 'pointer',
      fontFamily: 'var(--font-ui)',
      fontSize: 13,
      fontWeight: 600,
      color: period === v ? '#0E0E0E' : 'rgba(245,240,232,.6)',
      background: period === v ? 'var(--grad-gold)' : 'transparent',
      transition: 'var(--transition-control)'
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'center',
      gap: 14,
      padding: '8px 0 4px'
    }
  }, [rows[1], rows[0], rows[2]].map((r, i) => {
    const center = i === 1;
    return /*#__PURE__*/React.createElement("div", {
      key: r.position,
      style: {
        flex: center ? 1.15 : 1,
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        width: center ? 76 : 60,
        height: center ? 76 : 60,
        margin: '0 auto'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: -5,
        background: 'var(--grad-dualidade)',
        borderRadius: '58% 42% 50% 50% / 52% 50% 50% 48%',
        animation: `side-morph ${7 + i}s ease-in-out infinite`
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 3,
        borderRadius: '58% 42% 50% 50% / 52% 50% 50% 48%',
        background: 'var(--night-850)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'var(--font-ui)',
        fontWeight: 700,
        fontSize: center ? 20 : 16,
        color: '#F5F0E8'
      }
    }, r.name.split(/\s+/).slice(0, 2).map(w => w[0]).join('')), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        bottom: -6,
        left: '50%',
        transform: 'translateX(-50%)',
        width: 22,
        height: 22,
        borderRadius: '50%',
        background: 'var(--grad-gold)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'var(--font-data)',
        fontSize: 11,
        fontWeight: 600,
        color: '#0E0E0E',
        border: '2px solid var(--night-900)'
      }
    }, r.position)), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 12,
        fontFamily: 'var(--font-ui)',
        fontSize: 12,
        fontWeight: 600,
        color: 'var(--side-cream-2)',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }
    }, r.name.split(' ')[0]), /*#__PURE__*/React.createElement(Metric, {
      style: {
        fontSize: 13,
        color: 'var(--gold-500)'
      }
    }, r.value));
  })), /*#__PURE__*/React.createElement(Capsule, {
    radius: 22,
    style: {
      padding: '10px 10px'
    }
  }, rows.slice(3).map(r => /*#__PURE__*/React.createElement(RankRow, _extends({
    key: r.position
  }, r)))));
}

/* ---------- MENTE ---------- */
function MenteScreen() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      padding: '4px 20px 28px',
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "O outro lado"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 27,
      color: 'var(--side-cream-2)',
      marginTop: 3,
      letterSpacing: '-0.02em'
    }
  }, "Mente & Equil\xEDbrio")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 16,
      padding: '6px 0 2px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: 150,
      height: 150
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'radial-gradient(circle, rgba(31,61,54,.9), rgba(31,61,54,0) 70%)',
      borderRadius: '50%',
      animation: 'side-float 6s ease-in-out infinite'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 24,
      background: 'var(--grad-dualidade)',
      borderRadius: '60% 40% 50% 50% / 55% 50% 50% 45%',
      animation: 'side-morph 8s ease-in-out infinite',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 15,
      color: '#0E0E0E'
    }
  }, "respire"))), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    leadingIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "play",
      size: 16
    }),
    style: {
      color: 'var(--side-cream-2)',
      borderColor: 'rgba(245,240,232,.2)'
    }
  }, "Respiro de 8 min")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12
    }
  }, [['descanso', 'Descanso', '7h32 de sono', 20], ['equilibrio', 'Equilíbrio', 'Humor estável', 20], ['mente', 'Mente', '3 respiros hoje', 20], ['foco', 'Foco', '2:45 hoje', 20]].map(([ic, t, d, rad]) => /*#__PURE__*/React.createElement(Capsule, {
    key: t,
    radius: rad
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: 38,
      height: 38,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '55% 45% 50% 50% / 50%',
      background: 'rgba(245,240,232,.06)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 20,
    color: "var(--gold-500)",
    strokeWidth: 1.5
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 16,
      color: 'var(--side-cream-2)',
      marginTop: 12
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 12,
      color: 'rgba(245,240,232,.5)',
      marginTop: 2
    }
  }, d)))));
}

/* ---------- FLOATING DOCK ---------- */
function BottomNav({
  active,
  onChange
}) {
  const items = [{
    id: 'dashboard',
    icon: 'home',
    label: 'Início'
  }, {
    id: 'ranking',
    icon: 'trophy',
    label: 'Ranking'
  }, {
    id: 'mente',
    icon: 'mente',
    label: 'Mente'
  }, {
    id: 'perfil',
    icon: 'user',
    label: 'Perfil'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      display: 'flex',
      justifyContent: 'center',
      padding: '0 0 20px',
      zIndex: 5,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      pointerEvents: 'auto',
      display: 'flex',
      gap: 4,
      padding: 6,
      borderRadius: 'var(--radius-pill)',
      background: 'rgba(12,16,25,.82)',
      backdropFilter: 'blur(16px)',
      border: '1px solid rgba(245,240,232,.1)',
      boxShadow: '0 18px 50px -12px rgba(0,0,0,.7)'
    }
  }, items.map(it => {
    const on = active === it.id;
    return /*#__PURE__*/React.createElement("button", {
      key: it.id,
      onClick: () => onChange(it.id),
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 3,
        padding: '10px 16px',
        borderRadius: 'var(--radius-pill)',
        border: 'none',
        cursor: 'pointer',
        background: on ? 'var(--grad-gold)' : 'transparent',
        transition: 'var(--transition-control)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: it.icon,
      size: 20,
      color: on ? '#0E0E0E' : 'rgba(245,240,232,.55)',
      strokeWidth: on ? 2.2 : 1.7
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-ui)',
        fontSize: 9,
        fontWeight: 700,
        letterSpacing: '0.04em',
        color: on ? '#0E0E0E' : 'rgba(245,240,232,.55)'
      }
    }, it.label));
  })));
}
Object.assign(window, {
  Aura,
  LoginScreen,
  DashboardScreen,
  RankingScreen,
  MenteScreen,
  BottomNav
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/app-screens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/marketing-sections.jsx
try { (() => {
/* SIDE marketing · landing sections. Light/cream premium.
   Composes DS primitives from window.SideDesignSystem_d0448e. */
const MK = window.SideDesignSystem_d0448e;
const {
  Logo,
  Pillar,
  Icon,
  Button,
  Card,
  Badge,
  Stat,
  Divider
} = MK;
function Eye({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--gold-700)',
      ...style
    }
  }, children);
}

/* Organic mesh gradient — animated gold + green blobs on near-black.
   Replaces photography with a living, brand-built surface. */
function Mesh({
  style,
  blobs
}) {
  const set = blobs || [{
    c: 'rgba(214,189,128,.85)',
    top: '-18%',
    left: '-12%',
    w: '64%',
    h: '60%',
    a: 'side-mesh-a 17s var(--ease-in-out) infinite'
  }, {
    c: 'rgba(31,61,54,.95)',
    bottom: '-22%',
    right: '-16%',
    w: '72%',
    h: '68%',
    a: 'side-mesh-b 22s var(--ease-in-out) infinite'
  }, {
    c: 'rgba(110,139,111,.6)',
    top: '24%',
    right: '-10%',
    w: '50%',
    h: '48%',
    a: 'side-mesh-c 19s var(--ease-in-out) infinite'
  }, {
    c: 'rgba(156,124,60,.55)',
    bottom: '-14%',
    left: '-8%',
    w: '52%',
    h: '50%',
    a: 'side-mesh-d 25s var(--ease-in-out) infinite'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      overflow: 'hidden',
      background: '#0A0D15',
      ...style
    }
  }, set.map((b, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      position: 'absolute',
      top: b.top,
      bottom: b.bottom,
      left: b.left,
      right: b.right,
      width: b.w,
      height: b.h,
      borderRadius: '50%',
      background: `radial-gradient(circle, ${b.c}, rgba(0,0,0,0) 70%)`,
      filter: 'blur(40px)',
      willChange: 'transform',
      animation: b.a
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'radial-gradient(120% 90% at 50% 120%, rgba(8,11,20,.55), rgba(8,11,20,0) 60%)'
    }
  }));
}
function NavBar() {
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 10,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '18px 48px',
      background: 'color-mix(in srgb, var(--paper-100) 82%, transparent)',
      backdropFilter: 'blur(14px)',
      borderBottom: '1px solid var(--hairline)'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "wordmark",
    tone: "ink",
    height: 16
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 34,
      alignItems: 'center'
    }
  }, ['Método', 'O Espaço', 'Mente', 'Planos'].map(t => /*#__PURE__*/React.createElement("a", {
    key: t,
    href: "#",
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 14,
      fontWeight: 500,
      color: 'var(--text-muted)'
    }
  }, t)), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm"
  }, "Agendar visita")));
}
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.05fr 0.95fr',
      gap: 40,
      alignItems: 'center',
      padding: '80px 48px 64px',
      maxWidth: 1280,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eye, null, "O outro lado da alta performance"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 68,
      lineHeight: 1.04,
      letterSpacing: '-0.02em',
      color: 'var(--text)',
      margin: '20px 0 0',
      fontWeight: 500
    }
  }, "Estudar bem \xE9", /*#__PURE__*/React.createElement("br", null), "tamb\xE9m ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--green-700)'
    }
  }, "descansar"), " bem."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 18,
      lineHeight: 1.6,
      color: 'var(--text-muted)',
      maxWidth: '52ch',
      margin: '24px 0 32px'
    }
  }, "A SIDE une m\xE9todo, disciplina e foco com clareza, equil\xEDbrio e sa\xFAde mental. Uma experi\xEAncia de estudos premium para quem busca performance de elite sem se perder no caminho."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    trailingIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 18
    })
  }, "Come\xE7ar agora"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "lg",
    leadingIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "play",
      size: 16
    })
  }, "Conhecer o espa\xE7o")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 40,
      marginTop: 44
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    label: "Foco m\xE9dio",
    value: "81",
    unit: "%"
  }), /*#__PURE__*/React.createElement(Divider, {
    orientation: "vertical"
  }), /*#__PURE__*/React.createElement(Stat, {
    label: "Aprova\xE7\xF5es",
    value: "92",
    unit: "%"
  }), /*#__PURE__*/React.createElement(Divider, {
    orientation: "vertical"
  }), /*#__PURE__*/React.createElement(Stat, {
    label: "Alunos de elite",
    value: "240",
    unit: "+"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      borderRadius: 28,
      overflow: 'hidden',
      boxShadow: 'var(--shadow-xl)',
      aspectRatio: '4/5'
    }
  }, /*#__PURE__*/React.createElement(Mesh, null), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "monogram",
    height: 150,
    style: {
      animation: 'side-float 9s ease-in-out infinite',
      filter: 'drop-shadow(0 20px 50px rgba(0,0,0,.4))'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 28,
      right: 28,
      bottom: 26,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--gold-500)'
    }
  }, "O Espa\xE7o"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 22,
      color: '#F5F0E8',
      marginTop: 4,
      letterSpacing: '-0.01em'
    }
  }, "Educa\xE7\xE3o Inteligente")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-data)',
      fontSize: 13,
      color: 'rgba(245,240,232,.6)',
      letterSpacing: '-0.03em'
    }
  }, "81% foco"))));
}
function Dualidade() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '64px 48px',
      background: 'var(--bg-sunken)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 44
    }
  }, /*#__PURE__*/React.createElement(Eye, {
    style: {
      color: 'var(--gold-700)'
    }
  }, "Conceito"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 40,
      color: 'var(--text)',
      margin: '14px 0 0',
      fontWeight: 500
    }
  }, "Dois lados que se complementam.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "38px",
    style: {
      background: 'var(--grad-gold)',
      border: 'none',
      color: 'var(--ink-900)',
      borderRadius: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      opacity: 0.7
    }
  }, "Estrutura"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 30,
      margin: '12px 0 16px'
    }
  }, "Foco \xB7 Disciplina \xB7 M\xE9todo"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 15,
      lineHeight: 1.6,
      opacity: 0.85,
      margin: 0
    }
  }, "Rotina, precis\xE3o, metas e estrat\xE9gia. O lado que constr\xF3i o desempenho \u2014 guiado por dados e acompanhamento ao vivo.")), /*#__PURE__*/React.createElement(Card, {
    padding: "38px",
    style: {
      background: 'var(--green-700)',
      border: 'none',
      color: 'var(--side-cream-2)',
      borderRadius: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      opacity: 0.6
    }
  }, "Fluidez"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 30,
      margin: '12px 0 16px'
    }
  }, "Equil\xEDbrio \xB7 Clareza \xB7 Respiro"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 15,
      lineHeight: 1.6,
      opacity: 0.85,
      margin: 0
    }
  }, "Sa\xFAde mental, consci\xEAncia e descanso. O lado que sustenta a jornada \u2014 para performance que dura.")))));
}
function Pilares() {
  const items = [['foco', 'Foco', 'Atenção plena no que realmente move a sua nota.'], ['estudo', 'Estudo', 'Plano guiado, método comprovado, sem desperdício.'], ['mente', 'Mente', 'Saúde mental tratada como parte do desempenho.'], ['progresso', 'Progresso', 'Acompanhamento ao vivo e ranking que motiva.'], ['descanso', 'Descanso', 'Pausas conscientes e espaço de relaxamento.'], ['equilibrio', 'Equilíbrio', 'A medida certa entre exigência e cuidado.']];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '72px 48px',
      maxWidth: 1280,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement(Eye, null, "O sistema SIDE"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 40,
      color: 'var(--text)',
      margin: '14px 0 0',
      fontWeight: 500,
      maxWidth: '20ch'
    }
  }, "Seis pilares para uma jornada sustent\xE1vel.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 20
    }
  }, items.map(([n, t, d]) => /*#__PURE__*/React.createElement(Pillar, {
    key: n,
    name: n,
    label: t,
    description: d,
    layout: "tile"
  }))));
}
function Espaco() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '0 48px 72px',
      maxWidth: 1280,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      borderRadius: 'var(--radius-3xl)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-xl)',
      minHeight: 420
    }
  }, /*#__PURE__*/React.createElement(Mesh, {
    blobs: [{
      c: 'rgba(214,189,128,.8)',
      top: '-30%',
      left: '-6%',
      w: '50%',
      h: '120%',
      a: 'side-mesh-a 18s var(--ease-in-out) infinite'
    }, {
      c: 'rgba(31,61,54,.98)',
      bottom: '-30%',
      right: '-12%',
      w: '70%',
      h: '130%',
      a: 'side-mesh-b 23s var(--ease-in-out) infinite'
    }, {
      c: 'rgba(110,139,111,.6)',
      top: '10%',
      right: '6%',
      w: '46%',
      h: '70%',
      a: 'side-mesh-c 20s var(--ease-in-out) infinite'
    }, {
      c: 'rgba(156,124,60,.5)',
      bottom: '-10%',
      left: '18%',
      w: '44%',
      h: '60%',
      a: 'side-mesh-d 26s var(--ease-in-out) infinite'
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(100deg, rgba(8,11,20,.72) 28%, rgba(8,11,20,0) 70%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 48,
      top: 0,
      bottom: 0,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      maxWidth: 460
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--gold-500)'
    }
  }, "Alta performance com conforto"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 38,
      color: '#F5F0E8',
      margin: '14px 0 18px',
      fontWeight: 500,
      lineHeight: 1.1
    }
  }, "Um ambiente premium, pensado para o foco."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 15,
      lineHeight: 1.6,
      color: 'rgba(245,240,232,.8)',
      margin: '0 0 24px'
    }
  }, "Audit\xF3rio, cabines de estudo, salas inteligentes e espa\xE7o de relaxamento. Tecnologia e acolhimento no mesmo lugar."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Pillar, {
    name: "foco",
    layout: "row",
    tone: "gold",
    label: /*#__PURE__*/React.createElement("span", {
      style: {
        color: '#F5F0E8'
      }
    }, "Tecnologia")
  }), /*#__PURE__*/React.createElement(Pillar, {
    name: "equilibrio",
    layout: "row",
    tone: "gold",
    label: /*#__PURE__*/React.createElement("span", {
      style: {
        color: '#F5F0E8'
      }
    }, "Acolhimento")
  })))));
}
function Quote() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '72px 48px',
      background: 'var(--ink-900)',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 900,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "monogram",
    height: 48,
    style: {
      margin: '0 auto 28px'
    }
  }), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 38,
      lineHeight: 1.3,
      color: 'var(--side-cream-2)',
      margin: 0,
      fontWeight: 400,
      letterSpacing: '-0.01em'
    }
  }, "\"Foco e sa\xFAde mental caminham juntos. A SIDE \xE9 o lugar onde a alta performance encontra o equil\xEDbrio.\""), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 13,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--gold-500)',
      marginTop: 26
    }
  }, "Marina Costa \xB7 Aprovada em Medicina")));
}
function CTA() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '88px 48px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Eye, {
    style: {
      justifyContent: 'center'
    }
  }, "Comece sua jornada"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 52,
      color: 'var(--text)',
      margin: '16px 0 12px',
      fontWeight: 500,
      letterSpacing: '-0.02em'
    }
  }, "Foco na sua melhor vers\xE3o."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 17,
      color: 'var(--text-muted)',
      maxWidth: '46ch',
      margin: '0 auto 32px'
    }
  }, "Agende uma visita ao espa\xE7o SIDE e descubra o outro lado da alta performance."), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    trailingIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 18
    })
  }, "Agendar visita"));
}
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      padding: '40px 48px',
      borderTop: '1px solid var(--border)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "wordmark",
    tone: "ink",
    height: 14
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 11,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--text-subtle)'
    }
  }, "Estudo \xB7 Mente \xB7 M\xE9todo"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 13,
      color: 'var(--text-subtle)'
    }
  }, "\xA9 2026 SIDE"));
}
Object.assign(window, {
  NavBar,
  Hero,
  Dualidade,
  Pilares,
  Espaco,
  Quote,
  CTA,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/marketing-sections.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.ICON_NAMES = __ds_scope.ICON_NAMES;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Pillar = __ds_scope.Pillar;

__ds_ns.SIDE_PATHS = __ds_scope.SIDE_PATHS;

__ds_ns.SIDE_VIEWBOX = __ds_scope.SIDE_VIEWBOX;

__ds_ns.RankRow = __ds_scope.RankRow;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.ProgressRing = __ds_scope.ProgressRing;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.RadioGroup = __ds_scope.RadioGroup;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.SegmentedControl = __ds_scope.SegmentedControl;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
