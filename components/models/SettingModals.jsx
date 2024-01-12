import { useSettings } from "@/hooks/use-setting";
import React from "react";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import ModeToggle from "@/components/ModeToggle";
import { Label } from "@/components/ui/label";

const SettingModals = () => {
  const setting = useSettings();

  return (
    <Dialog open={setting.isOpen} onOpenChange={setting.onClose}>
      <DialogContent>
        <DialogHeader className=" border-b pb-3">
          <h2 className=" text-lg font-medium">My Setting</h2>
        </DialogHeader>
        <div className=" flex items-center justify-between">
          <div className=" flex flex-col gap-y-1">
            <Label>Appearance</Label>
            <span className=" text-[0.8rem] text-muted-foreground">
              Customize how notion looks on your device
            </span>
          </div>
          <ModeToggle />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SettingModals;
