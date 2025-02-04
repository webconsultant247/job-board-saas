import { Button } from "@/components/ui/button";
import { Building2, User2 } from "lucide-react";
import React from "react";

type UserSelectionType = "company" | "jobSeeker";

interface UserTypeSelectionProps {
  onSelect: (type: UserSelectionType) => void;
}
const UserTypeSelection = ({ onSelect }: UserTypeSelectionProps) => {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold">Welcome! Lets get you started!</h2>
        <p className="text-muted-foreground">
          Please choose your role to continue.
        </p>
      </div>
      <div className="grid gap-4">
        <Button
          onClick={() => onSelect("company")}
          variant={"outline"}
          className="w-full h-auto p-6 gap-4 border-2 transition-all duration-200 hover:border-primary hover:bg-primary/5"
        >
          <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center">
            <Building2 className="size-6 text-primary" />
          </div>
          <div className="text-left">
            <h2 className="font-semibold text-lg">Company / Organization</h2>
            <p>Post jobs and find great talent</p>
          </div>
        </Button>
        <Button
          onClick={() => onSelect("jobSeeker")}
          variant={"outline"}
          className="w-full h-auto p-6 gap-4 border-2 transition-all duration-200 hover:border-primary hover:bg-primary/5"
        >
          <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center">
            <User2 className="size-6 text-primary" />
          </div>
          <div className="text-left">
            <h2 className="font-semibold text-lg">
              Candidates / Professionals
            </h2>
            <p>Find your dream job opportunity</p>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default UserTypeSelection;
