"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";
import React from "react";

const PersonalDetailsForm = () => {
  const router = useRouter();

  const handleFormSubmission = (e) => {
    e.preventDefault();
  };
  return (
    <div className="bg-white px-8 py-6 mt-8 rounded-2xl">
      <form onSubmit={handleFormSubmission} className="flex flex-col">
        <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
          <div className="flex flex-col space-y-1">
            <Label htmlFor="nidaNumber">Nida number</Label>
            <Input
              type="number"
              min={0}
              id="nidaNumber"
              placeholder="Nida number"
              className="bg-[#F2F2F2] w-full"
            />
          </div>

          <div className="flex flex-col space-y-1">
            <Label htmlFor="fullName">Full name</Label>
            <Input
              type="text"
              id="fullName"
              placeholder="Full name"
              className="bg-[#F2F2F2]"
            />
          </div>

          <div className="flex flex-col space-y-1">
            <Label htmlFor="phoneNumber">Phone number</Label>
            <Input
              type="number"
              min={0}
              id="phoneNumber"
              placeholder="Phone number"
              className=" bg-[#F2F2F2]"
            />
          </div>

          <div className="flex flex-col space-y-1">
            <Label htmlFor="emailAddress">Email address</Label>
            <Input
              type="email"
              id="emailAddress"
              placeholder="Email address"
              className="bg-[#F2F2F2]"
            />
          </div>

          <div className="flex flex-col space-y-1">
            <Label htmlFor="roles">Your role at the company</Label>
            <Select>
              <SelectTrigger className="bg-[#F2F2F2]">
                <SelectValue placeholder="Your role at the company" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Roles</SelectLabel>
                  <SelectItem value="apple">Chief executive officer (CEO)</SelectItem>
                  <SelectItem value="banana">Chief operating officer (COO)</SelectItem>
                  <SelectItem value="blueberry">Chief financial officer or controller (CFO)</SelectItem>
                  <SelectItem value="grapes">Chief marketing officer (CMO)</SelectItem>
                  <SelectItem value="pineapple">Chief technology officer (CTO)</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col space-y-1">
            <Label htmlFor="businessAddress">Business address</Label>
            <Input
              type="text"
              id="businessAddress"
              placeholder="Business address"
              className="bg-[#F2F2F2]"
            />
          </div>
        </div>

        {/* ACTION BUTTONS */}
        <div className="flex items-center space-x-4 mt-8 max-sm:justify-center max-sm:flex-col max-sm:space-x-0 max-sm:gap-y-3">
          <Button
            onClick={() => router.back()}
            size="sm"
            className="font-medium text-black bg-white border border-gray-300 hover:bg-main-black hover:text-white duration-300 max-sm:w-full"
          >
            Discard
          </Button>
          <Button size="sm" className="font-medium max-sm:w-full">
            Update Profile
          </Button>
        </div>
      </form>
    </div>
  );
};

export default PersonalDetailsForm;
