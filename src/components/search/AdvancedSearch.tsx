import { Calendar, FileType, ChevronDown } from 'lucide-react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { Button } from '@/components/ui/button';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { format } from 'date-fns';

interface AdvancedSearchProps {
  startDate: Date | undefined;
  endDate: Date | undefined;
  documentType: string;
  onStartDateChange: (date: Date | undefined) => void;
  onEndDateChange: (date: Date | undefined) => void;
  onDocumentTypeChange: (type: string) => void;
}

export function AdvancedSearch({
  startDate,
  endDate,
  documentType,
  onStartDateChange,
  onEndDateChange,
  onDocumentTypeChange,
}: AdvancedSearchProps) {
  return (
    <Collapsible>
      <CollapsibleTrigger asChild>
        <Button 
          variant="ghost" 
          size="sm" 
          className="w-full justify-between text-primary hover:bg-primary/20 font-mono"
        >
          ADVANCED QUERY PARAMETERS
          <ChevronDown className="h-4 w-4" />
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="space-y-4 p-4 mt-2 border border-primary/20 bg-secondary/50">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-medium text-primary tracking-wider">TEMPORAL RANGE</label>
            <div className="flex gap-2">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left font-mono border-primary/20 hover:bg-primary/20"
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    {startDate ? format(startDate, 'yyyy-MM-dd') : 'START DATE'}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <CalendarComponent
                    mode="single"
                    selected={startDate}
                    onSelect={onStartDateChange}
                    initialFocus
                    className="bg-card border-primary/20"
                  />
                </PopoverContent>
              </Popover>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left font-mono border-primary/20 hover:bg-primary/20"
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    {endDate ? format(endDate, 'yyyy-MM-dd') : 'END DATE'}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <CalendarComponent
                    mode="single"
                    selected={endDate}
                    onSelect={onEndDateChange}
                    initialFocus
                    className="bg-card border-primary/20"
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-primary tracking-wider">DOCUMENT CLASSIFICATION</label>
            <Select value={documentType} onValueChange={onDocumentTypeChange}>
              <SelectTrigger className="font-mono border-primary/20">
                <SelectValue placeholder="SELECT TYPE" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">ALL CLASSIFICATIONS</SelectItem>
                <SelectItem value="pdf">PDF - LEVEL 1</SelectItem>
                <SelectItem value="doc">DOC - LEVEL 2</SelectItem>
                <SelectItem value="xls">XLS - LEVEL 3</SelectItem>
                <SelectItem value="img">IMG - LEVEL 4</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}