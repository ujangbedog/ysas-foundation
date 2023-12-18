/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import "~/styles/globals.scss";

import { Inter } from "next/font/google";
import { headers } from "next/headers";

import { TRPCReactProvider } from "~/trpc/react";

import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";

import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "YSAS Foundation",
  description: "YSAS Landing Page",
  icons: [{ rel: "icon", url: "/logo.ico" }],
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <TRPCReactProvider headers={headers()}>
            {children}
            <SpeedInsights />
          </TRPCReactProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
