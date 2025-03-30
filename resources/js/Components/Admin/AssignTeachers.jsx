import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function AssignTeacher() {
  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow rounded-md space-y-4">
      <h2 className="text-xl font-bold text-center">Assign Teacher to Class</h2>

      <div className="space-y-2">
        <Label htmlFor="teacherId">Teacher ID</Label>
        <Input id="teacherId" placeholder="Enter Teacher ID" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="classId">Class ID</Label>
        <Input id="classId" placeholder="Enter Class ID" />
      </div>

      <Button className="w-full mt-4">Assign</Button>
    </div>
  );
}
