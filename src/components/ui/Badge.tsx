type BadgeVariant = 'success' | 'warning' | 'error' | 'info'

const styles: Record<BadgeVariant, string> = {
  success: 'bg-green-50 text-green-700',
  warning: 'bg-yellow-50 text-yellow-700',
  error:   'bg-red-50 text-red-700',
  info:    'bg-blue-50 text-blue-700',
}

export function Badge({ label, variant }: { label: string; variant: BadgeVariant }) {
  return (
    <span className={`inline-flex h-6 items-center px-3 rounded-full text-xs font-medium ${styles[variant]}`}>
      {label}
    </span>
  )
}