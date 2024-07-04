"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CloudDownloadIcon } from "hugeicons-react";
import { useRouter } from "next/navigation";
import React from "react";

const BusinessDetailsForm = () => {
    const router = useRouter();

    const handleFormSubmission = (e) => {
        e.preventDefault();
    }
  return (
    <div className="bg-white px-8 py-6 mt-8 rounded-2xl">
      <form onSubmit={handleFormSubmission} className="flex flex-col">
        <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
          <div className="flex flex-col space-y-1">
            <Label htmlFor="businessName">Business name</Label>
            <Input
              type="text"
              id="businessName"
              placeholder="Business name"
              className="bg-[#F2F2F2]"
            />
          </div>

          <div className="flex flex-col space-y-1">
            <Label htmlFor="businessAddress">Business address</Label>
            <Input
              type="email"
              id="businessAddress"
              placeholder="Business address"
              className="bg-[#F2F2F2]"
            />
          </div>
        </div>

        <div className="mt-8">
          <div className="flex flex-col space-y-6">
            <div className="flex flex-col">
              <h1 className="text-sm">Upload your Business License</h1>
              <label
                htmlFor="businessLicense"
                className="mt-2 border-dashed border-2 border-main-50 rounded-xl p-4"
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                    <CloudDownloadIcon size={32} />

                    <div>
                      <h1 className="text-sm">Select a file or drag and drop here</h1>
                      <p className="text-gray-600 text-xs">
                        JPG, PNG or PDF, file size no more than 10MB
                      </p>
                    </div>
                  </div>

                  <div>
                    <Button
                      size="sm"
                      variant="outline"
                      className="text-main-yellow font-semibold border-main-yellow hover:bg-main-yellow hover:text-white"
                    >
                      <input
                        id="businessLicense"
                        type="file"
                        className="hidden"
                      />
                     <span className="text-xs">Select file</span>
                    </Button>
                  </div>
                </div>
              </label>
            </div>

            <div className="flex flex-col">
              <h1 className="text-sm">Upload your TIN Certificate</h1>
              <label
                htmlFor="tinCertificate"
                className="mt-2 border-dashed border-2 border-main-50 rounded-xl p-4"
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                    <CloudDownloadIcon size={32} />

                    <div>
                      <h1 className="text-sm">Select a file or drag and drop here</h1>
                      <p className="text-gray-600 text-xs">
                        JPG, PNG or PDF, file size no more than 10MB
                      </p>
                    </div>
                  </div>

                  <div>
                    <Button
                      size="sm"
                      variant="outline"
                      className="text-main-yellow font-semibold border-main-yellow hover:bg-main-yellow hover:text-white"
                    >
                      <input
                        id="tinCertificate"
                        type="file"
                        className="hidden"
                      />
                       <span className="text-xs">Select file</span>
                    </Button>
                  </div>
                </div>
              </label>
            </div>

            <div className="flex flex-col">
              <h1 className="text-sm">Upload your Tax Clearance</h1>
              <label
                htmlFor="taxClearance"
                className="mt-2 border-dashed border-2 border-main-50 rounded-xl p-4"
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                    <CloudDownloadIcon size={32} />

                    <div>
                      <h1 className="text-sm">Select a file or drag and drop here</h1>
                      <p className="text-gray-600 text-xs">
                        JPG, PNG or PDF, file size no more than 10MB
                      </p>
                    </div>
                  </div>

                  <div>
                    <Button
                      size="sm"
                      variant="outline"
                      className="text-main-yellow font-semibold border-main-yellow hover:bg-main-yellow hover:text-white"
                    >
                      <input id="taxClearance" type="file" className="hidden" />
                       <span className="text-xs">Select file</span>
                    </Button>
                  </div>
                </div>
              </label>
            </div>
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
            Next
          </Button>
        </div>
      </form>
    </div>
  );
};

export default BusinessDetailsForm;
