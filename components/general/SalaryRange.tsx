import { FormField } from "@/components/ui/form";
import { Slider } from "@/components/ui/slider";
import { formatCurrency } from "@/lib/utils";
import { useState } from "react";
import { Control, useController } from "react-hook-form";
interface SalaryRangeProps {
  control: Control<any>;
  minSalary: number;
  maxSalary: number;
  step: number;
  currency: string;
}

const SalaryRange = ({
  control,
  minSalary,
  maxSalary,
  step,
  currency,
}: SalaryRangeProps) => {
  const { field: fromField } = useController({
    name: "salaryFrom",
    control,
  });
  const { field: toField } = useController({
    name: "salaryTo",
    control,
  });

  const handleChangeRange = (value: number[]) => {
    const newRange: [number, number] = [value[0], value[1]];
    setRange(newRange);
    fromField.onChange(newRange[0]);
    toField.onChange(newRange[1]);
  };

  const [range, setRange] = useState<[number, number]>([
    fromField.value || minSalary,
    toField.value || maxSalary / 2,
  ]);
  return (
    <div className="w-full space-y-4">
      <Slider
        onValueChange={handleChangeRange}
        min={minSalary}
        max={maxSalary}
        step={step}
        value={range}
      />
      <div className="flex justify-between">
        <span>{formatCurrency(range[0], currency)}</span>
        <span>{formatCurrency(range[1], currency)}</span>
      </div>
    </div>
  );
};

export default SalaryRange;
