import * as React from "react";

/**
 * One icon family, one stroke weight, one corner treatment. Mixed icon sets are
 * the fastest way to make a careful layout look assembled from parts.
 *
 * All icons are decorative by default (`aria-hidden`) because every control
 * that uses one already carries its own accessible name.
 */
type IconProps = React.SVGProps<SVGSVGElement> & { size?: number };

function Svg({ size = 20, children, ...rest }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {children}
    </svg>
  );
}

export const HomeIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M3.5 10.5 12 4l8.5 6.5V19a1.5 1.5 0 0 1-1.5 1.5h-3.5v-6h-7v6H5A1.5 1.5 0 0 1 3.5 19z" />
  </Svg>
);

export const LearnIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M4 5.5A1.5 1.5 0 0 1 5.5 4H10a2 2 0 0 1 2 2v13a2 2 0 0 0-2-2H5.5A1.5 1.5 0 0 1 4 15.5z" />
    <path d="M20 5.5A1.5 1.5 0 0 0 18.5 4H14a2 2 0 0 0-2 2v13a2 2 0 0 1 2-2h4.5a1.5 1.5 0 0 0 1.5-1.5z" />
  </Svg>
);

export const PracticeIcon = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="8" />
    <circle cx="12" cy="12" r="3.5" />
    <path d="M12 4v2M12 18v2M4 12h2M18 12h2" />
  </Svg>
);

export const ProgressIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M4 19.5V15M9.5 19.5V9M15 19.5v-6M20.5 19.5V5" />
  </Svg>
);

export const ProfileIcon = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="8.5" r="3.75" />
    <path d="M4.5 20a7.5 7.5 0 0 1 15 0" />
  </Svg>
);

export const StudioIcon = (p: IconProps) => (
  <Svg {...p}>
    <rect x="3.5" y="4.5" width="17" height="15" rx="2.5" />
    <path d="M3.5 9h17M8 4.5v4.5" />
  </Svg>
);

export const XIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M6 6l12 12M18 6L6 18" />
  </Svg>
);

/** The header menu trigger -- three horizontal lines, no directional
 * meaning, so unlike ChevronIcon it never needs `.flip-rtl`. */
export const MenuIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M4 6.5h16M4 12h16M4 17.5h16" />
  </Svg>
);

/** A gear -- used for the header menu's "Settings" row only, nowhere else,
 * so it stays a genuine visual cue rather than a repeated decoration. */
export const SettingsIcon = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </Svg>
);

/** An open door with an arrow exiting it -- used only for the header
 * menu's "Sign out" row. */
export const LogoutIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M14 4.5H7A1.5 1.5 0 0 0 5.5 6v12A1.5 1.5 0 0 0 7 19.5h7" />
    <path d="M11 12h9.5M17.5 8.5 21 12l-3.5 3.5" />
  </Svg>
);

export const CheckIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M5 12.5l4.5 4.5L19 7.5" />
  </Svg>
);

export const ChevronIcon = (p: IconProps) => (
  <Svg {...p} className={`flip-rtl ${p.className ?? ""}`}>
    <path d="M9 5l7 7-7 7" />
  </Svg>
);

export const LockIcon = (p: IconProps) => (
  <Svg {...p}>
    <rect x="4.5" y="10" width="15" height="10" rx="2.5" />
    <path d="M8 10V7.5a4 4 0 0 1 8 0V10" />
  </Svg>
);

export const PlayIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M8 5.5v13l10-6.5z" />
  </Svg>
);

export const MicIcon = (p: IconProps) => (
  <Svg {...p}>
    <rect x="9" y="3" width="6" height="11" rx="3" />
    <path d="M5.5 11.5a6.5 6.5 0 0 0 13 0M12 18v3" />
  </Svg>
);

export const ArrowUpIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 19V5M6 11l6-6 6 6" />
  </Svg>
);

export const ArrowDownIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 5v14M18 13l-6 6-6-6" />
  </Svg>
);

export const SparkIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 3.5l1.9 4.9 4.9 1.9-4.9 1.9L12 17.1l-1.9-4.9L5.2 10.3l4.9-1.9z" />
    <path d="M18.5 16.5l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8z" />
  </Svg>
);

export const AlertIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 4.5 21 19.5H3z" />
    <path d="M12 10v4M12 17h.01" />
  </Svg>
);

export const InfoIcon = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 11v5M12 8h.01" />
  </Svg>
);

export const BookmarkIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M6.5 4h11v16l-5.5-4-5.5 4z" />
  </Svg>
);

export const GlobeIcon = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M3.5 12h17M12 3.5c2.5 2.6 2.5 14.4 0 17M12 3.5c-2.5 2.6-2.5 14.4 0 17" />
  </Svg>
);

export const ClockIcon = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5V12l3 2" />
  </Svg>
);

export const ShieldIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 3.5l7 2.5v6c0 4-3 7.2-7 8.5-4-1.3-7-4.5-7-8.5v-6z" />
  </Svg>
);

export const UsersIcon = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="9" cy="8.5" r="3.25" />
    <path d="M3.5 19a5.5 5.5 0 0 1 11 0" />
    <path d="M16 5.6a3.25 3.25 0 0 1 0 5.8M17 14.2a5.5 5.5 0 0 1 3.5 4.8" />
  </Svg>
);

export const FolderIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M3.5 6.5A1.5 1.5 0 0 1 5 5h4l2 2.5h6.5A1.5 1.5 0 0 1 19 9v8.5a1.5 1.5 0 0 1-1.5 1.5H5a1.5 1.5 0 0 1-1.5-1.5z" />
  </Svg>
);

export const ChipIcon = (p: IconProps) => (
  <Svg {...p}>
    <rect x="7" y="7" width="10" height="10" rx="2" />
    <path d="M10 3.5v3.5M14 3.5v3.5M10 17v3.5M14 17v3.5M3.5 10H7M3.5 14H7M17 10h3.5M17 14h3.5" />
  </Svg>
);

export const ScaleIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 4v16M7 20h10M4 9h16M4 9l-2.5 5.5h5zM20 9l2.5 5.5h-5z" />
  </Svg>
);

export const HandshakeIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M3.5 11l3-3 4 3 2-1.5 2 1.5 3-3 3 3v3l-4.5 4.5-2.5-2.5-2.5 2.5L3.5 14z" />
  </Svg>
);

export const MessageIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M20.5 12c0 4.1-3.8 7.5-8.5 7.5-1 0-2-.15-2.9-.43L4 20.5l1.5-4A7 7 0 0 1 3.5 12c0-4.1 3.8-7.5 8.5-7.5s8.5 3.4 8.5 7.5z" />
  </Svg>
);

export const GrowthIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M4 17l5-5 3.5 3.5L20 8" />
    <path d="M15 8h5v5" />
  </Svg>
);

export const RefreshIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M20 12a8 8 0 1 1-2.5-5.8" />
    <path d="M20 4v4h-4" />
  </Svg>
);

export const PlusIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 5v14M5 12h14" />
  </Svg>
);

export const BookIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M5 4.5h11a2.5 2.5 0 0 1 2.5 2.5v12.5H7.5A2.5 2.5 0 0 1 5 17z" />
    <path d="M5 17a2.5 2.5 0 0 1 2.5-2.5h11" />
  </Svg>
);

const DOMAIN_ICONS: Record<string, (p: IconProps) => React.JSX.Element> = {
  handshake: HandshakeIcon,
  message: MessageIcon,
  scale: ScaleIcon,
  clock: ClockIcon,
  users: UsersIcon,
  growth: GrowthIcon,
  folder: FolderIcon,
  shield: ShieldIcon,
  chip: ChipIcon,
  globe: GlobeIcon,
  book: BookIcon,
};

export function DomainIcon({ name, size = 20, className }: { name: string; size?: number; className?: string }) {
  const Component = DOMAIN_ICONS[name] ?? ScaleIcon;
  return <Component size={size} className={className} />;
}
