/** @jsxImportSource react */

import { qwikify$ } from "@builder.io/qwik-react";
import * as Avatar from "@radix-ui/react-avatar";

interface RadixAvatarProps {
  src: string | undefined;
  alt: string;
  fallback?: string | undefined;
}
export const RadixAvatar = qwikify$((props: RadixAvatarProps) => {
  const { src, alt, fallback } = props;
  return (
    <Avatar.Root className="bg-blackA3 inline-flex h-[45px] w-[45px] select-none items-center justify-center overflow-hidden rounded-full align-middle">
      <Avatar.Image
        className="h-full w-full rounded-[inherit] object-cover"
        src={src}
        alt={alt}
      />
      <Avatar.Fallback
        className="text-violet11 leading-1 flex h-full w-full items-center justify-center bg-white text-[15px] font-medium"
        delayMs={600}
      >
        {fallback}
      </Avatar.Fallback>
    </Avatar.Root>
  );
});
