import { NextUIProvider } from "@nextui-org/react";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <NextUIProvider>
      <div>{children}</div>
    </NextUIProvider>
  );
};
