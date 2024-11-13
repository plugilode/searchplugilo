import { X } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export interface Filter {
  id: string;
  type: string;
  value: string;
}

interface FilterChipsProps {
  filters: Filter[];
  onRemove: (id: string) => void;
}

export function FilterChips({ filters, onRemove }: FilterChipsProps) {
  if (filters.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2">
      {filters.map((filter) => (
        <Badge
          key={filter.id}
          variant="outline"
          className="gap-1 px-2 py-1 border-primary/30 bg-primary/5 text-primary uppercase"
        >
          <span className="text-xs font-mono">
            {filter.type}:{filter.value}
          </span>
          <button
            onClick={() => onRemove(filter.id)}
            className="ml-1 rounded hover:bg-primary/20"
          >
            <X className="h-3 w-3" />
          </button>
        </Badge>
      ))}
    </div>
  );
}