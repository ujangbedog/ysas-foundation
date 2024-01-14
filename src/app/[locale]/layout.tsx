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
      <head>
        <title>YSAS Foundation</title>
        <meta
          name="description"
          content="YSAS Foundation - Empowering Change, Transforming Lives"
        />
        <link rel="icon" href="/logo.ico" />

        <meta property="og:title" content="YSAS Foundation" />
        <meta
          property="og:description"
          content="YSAS Foundation - Empowering Change, Transforming Lives"
        />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:image:alt" content="YSAS Foundation Logo" />
        <meta property="og:url" content="https://www.ysas.foundation" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="YSAS Foundation" />

        <meta name="twitter:title" content="YSAS Foundation" />
        <meta
          name="twitter:description"
          content="YSAS Foundation - Empowering Change, Transforming Lives"
        />
        <meta name="twitter:image" content="/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="keywords"
          content="YSAS, Foundation, Empowerment, Social Change, Mental Health"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://www.ysas.foundation" />
        <meta name="robots" content="index, follow" />
      </head>
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
