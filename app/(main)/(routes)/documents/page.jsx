"use client";

import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { useUser } from "@clerk/clerk-react";
import { useMutation } from "convex/react";
import { PlusCircle } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "sonner";

const DocumentsPage = () => {
  const { user } = useUser();
  const create = useMutation(api.documents.create);
  const router = useRouter();

  const onCreate = () => {
    const promise = create({ title: "Untitled" }).then((documentId) => {
      // router.push(`/documents/${documentId}`);
    });

    toast.promise(promise, {
      loading: "Creating a new Note...",
      success: "New note created!",
      error: "Failed to create a new note.",
    });
  };

  return (
    <div className="h-full flex flex-col items-center justify-center space-y-4">
      <Image
        src="/empty.png"
        height="300"
        width="300"
        alt="Empty"
        className=" dark:hidden"
      />
      <Image
        src="/empty.png"
        height="300"
        width="300"
        alt="Empty"
        className="hidden dark:block"
      />
      <h2>Welcome to {user?.firstName} Notion.</h2>
      <Button onClick={onCreate}>
        <PlusCircle className="h-4 w-4 mr-2 " />
        Create a Note
      </Button>
    </div>
  );
};
export default DocumentsPage;
