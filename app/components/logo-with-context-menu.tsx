"use client";

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { useToast } from "@/hooks/use-toast";

export default function LogoWithContextMenu({
  coloredLogo,
  blackAndWhiteLogo,
  children,
}: {
  coloredLogo: string;
  blackAndWhiteLogo: string;
  children: React.ReactNode;
}) {
  const { toast } = useToast();
  const baseUrl = window.location.origin;

  const downloadImage = async (isColored: boolean) => {
    try {
      const imgUrl = isColored ? coloredLogo : blackAndWhiteLogo;
      const response = await fetch(imgUrl);
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = `logo-${isColored ? "colored" : "bw"}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      URL.revokeObjectURL(blobUrl);

      toast({
        title: "Logo downloaded",
        description: `${
          isColored ? "Colored" : "Black and White"
        } logo has been downloaded`,
      });
    } catch (error) {
      console.error("Failed to download logo:", error);
      toast({
        title: "Error",
        description: "Failed to download logo. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <ContextMenu>
      <ContextMenuTrigger>{children}</ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem onSelect={() => downloadImage(true)}>
          Download colored logo
        </ContextMenuItem>
        <ContextMenuItem onSelect={() => downloadImage(false)}>
          Download Black and White logo
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}
