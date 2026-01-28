import { STACKS } from "@/data/config";
import { StackAvatarsProps, StackBadgeProps } from "@/lib/types";

export function StackAvatars({ stack, max = 4 }: StackAvatarsProps) {
  const visible = stack.slice(0, max);
  const remaining = stack.length - max;

  return (
    <div className="flex -space-x-3">
      {visible.map((tech) => {
        const stackItem = STACKS[tech];
        const Icon = stackItem.icon;

        return (
          <div
            key={tech}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-surface-alt border border-white dark:border-slate-800 shadow-sm"
            title={stackItem.label}
          >
            <Icon className={`text-lg ${stackItem.color}`} />
          </div>
        );
      })}

      {remaining > 0 && (
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-200 dark:bg-slate-700 text-xs font-medium text-slate-700 dark:text-slate-200 border border-white dark:border-slate-800">
          +{remaining}
        </div>
      )}
    </div>
  );
}

export function StackBadge({ tech, size = "md" }: StackBadgeProps) {
  const stackItem = STACKS[tech];
  const Icon = stackItem.icon;

  return (
    <span
      className={`
        inline-flex items-center gap-1.5 rounded-full
        border border-slate-200 dark:border-slate-700
        bg-surface-alt text-brand-dark
        ${size === "sm" ? "px-2 py-1 text-xs" : "px-3 py-1.5 text-sm"}
      `}
      title={stackItem.label}
    >
      <Icon className={`${stackItem.color} text-sm`} />
      <span className="leading-none">{stackItem.label}</span>
    </span>
  );
}
