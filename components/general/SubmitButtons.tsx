"use client";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import React from "react";
import { useFormStatus } from "react-dom";

interface GeneralSubmitButtonProps {
  text: string;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | null
    | undefined;
  icon?: React.ReactNode;
}

const GeneralSubmitButton = ({
  text,
  variant,
  icon,
}: GeneralSubmitButtonProps) => {
  const { pending } = useFormStatus();
  return (
    <Button variant={variant} className="w-full" disabled={pending}>
      {pending ? (
        <>
          <Loader2 className="size-4 animate-spin" />
          <span>Submitting...</span>
        </>
      ) : (
        <>
          {icon && <>{icon}</>}
          <span>{text}</span>
        </>
      )}
    </Button>
  );
};

export default GeneralSubmitButton;
