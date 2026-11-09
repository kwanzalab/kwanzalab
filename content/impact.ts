/**
 * IMPACT DATA — PLACEHOLDERS.
 *
 * These figures are NOT verified. They exist only so the dashboard can be designed
 * and tested. Replace every `value` and `target` with confirmed data, then set
 * `verified: true` on each metric (and `dataStatus` below) to remove the
 * "placeholder" labels from the site.
 */

export type Metric = {
  id: string;
  label: string;
  unit?: string;
  value: number;
  /** Goal used for the progress ring. */
  target: number;
  verified: boolean;
  hint: string;
};

export const impactMeta = {
  eyebrow: "Our impact",
  title: "Measuring what matters.",
  intro:
    "We track our results openly. Figures marked as placeholders will be replaced with verified numbers as soon as they are confirmed.",
  /** Shown above the dashboard while any metric is unverified. */
  placeholderNotice:
    "Placeholder figures — illustrative only, pending verified data from Campus Lab.",
  asOf: "Update this line with the reporting period, e.g. “January–June 2025”.",
};

export const metrics: Metric[] = [
  { id: "schools", label: "Schools engaged", value: 10, target: 25, verified: false, hint: "Schools & universities taking part" },
  { id: "students", label: "Students reached", value: 500, target: 2000, verified: false, hint: "Students in sessions & activities" },
  { id: "trees", label: "Trees planted", value: 200, target: 1000, verified: false, hint: "Trees planted & cared for" },
  { id: "activities", label: "Activities organised", value: 20, target: 60, verified: false, hint: "Clean-ups, workshops, planting days" },
  { id: "waste", label: "Waste collected / recycled", unit: "kg", value: 1000, target: 5000, verified: false, hint: "Kilograms collected or recycled" },
];

/** Activities per period — placeholder series for the bar chart. */
export const activitySeries = {
  title: "Activities over time",
  verified: false,
  points: [
    { label: "Q1", value: 3 },
    { label: "Q2", value: 5 },
    { label: "Q3", value: 4 },
    { label: "Q4", value: 8 },
  ],
};

export const allVerified = metrics.every((m) => m.verified) && activitySeries.verified;
