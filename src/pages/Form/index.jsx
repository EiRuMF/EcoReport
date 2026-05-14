import React from "react";
import { Button } from "@/components/ui/button";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const index = () => {
  return (
    <div>
      <form
        action=""
        className="w-[1200px] relative items-start bg-white rounded-xl justify-start text-black p-6"
      >
        <div className="text-start font-poppins mb-5">
          <h1 className="font-bebas text-4xl text-[#1E3A8A]">
            Buat Laporan Baru
          </h1>
          <p className="text-gray-600">
            Laporkan masalah yang anda temui agar segera ditangani{" "}
          </p>
        </div>

        <Select>
          <FieldLabel htmlFor="input-demo-api-key" className="mb-2">
            Kategori Laporan
          </FieldLabel>
          <SelectTrigger className="w-[300px] mb-3 px-3 py-3 border border-black rounded-lg bg-white text-gray-600 placeholder:text-gray-600">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <Field>
          <FieldLabel htmlFor="input-demo-api-key">Keterangan Detail</FieldLabel>
          <Textarea
            id="textarea-disabled"
            placeholder="Type your message here."
            disabled
          />
        </Field>
      </form>
    </div>
  );
};

export default index;
