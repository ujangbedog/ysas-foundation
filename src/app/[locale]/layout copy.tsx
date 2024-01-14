// /* eslint-disable @typescript-eslint/no-unsafe-member-access */
// /* eslint-disable @typescript-eslint/no-unsafe-assignment */

// import Head from 'next/head';
// import React, { ReactNode } from 'react';
// import { Inter } from 'next/font/google';
// import { headers } from 'next/headers';
// import { TRPCReactProvider } from '~/trpc/react';
// import { NextIntlClientProvider } from 'next-intl';
// import { notFound } from 'next/navigation';
// import { SpeedInsights } from '@vercel/speed-insights/next';

// const inter = Inter({
//   subsets: ['latin'],
// });

// interface LocaleLayoutProps {
//   children: ReactNode;
//   params: { locale: string };
// }

// export const metadata = {
//   title: 'YSAS Foundation',
//   description: 'YSAS Foundation - Empowering Change, Transforming Lives',
//   icons: [{ rel: 'icon', href: '/logo.ico' }],
//   ogImage: { url: '/logo.png', alt: 'YSAS Foundation Logo' },
//   canonicalUrl: 'https://www.ysas.foundation',
//   keywords: 'YSAS, Foundation, Empowerment, Social Change, Mental Health',
// };

// const LocaleLayout: React.FC<LocaleLayoutProps> = ({ children, params: { locale } }) => {
//   let messages;
//   try {
//     messages = (await import(`../../messages/${locale}.json`)).default;
//   } catch (error) {
//     notFound();
//   }

//   return (
//     <>
//       <Head>
//         <title>{metadata.title}</title>
//         <meta name="description" content={metadata.description} />
//         <link rel="icon" href={metadata.icons?.[0]?.href || '/logo.ico'} />

//         <meta property="og:title" content={metadata.title} />
//         <meta property="og:description" content={metadata.description} />
//         <meta property="og:image" content={metadata.ogImage?.url || ''} />
//         <meta property="og:image:alt" content={metadata.ogImage?.alt || ''} />
//         <meta property="og:url" content={metadata.canonicalUrl} />
//         <meta property="og:type" content="website" />
//         <meta property="og:site_name" content={metadata.title} />

//         <meta name="twitter:title" content={metadata.title} />
//         <meta name="twitter:description" content={metadata.description} />
//         <meta name="twitter:image" content={metadata.ogImage.url} />
//         <meta name="twitter:card" content="summary_large_image" />

//         <meta name="keywords" content={metadata.keywords} />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         <link rel="canonical" href={metadata.canonicalUrl} />
//         <meta name="robots" content="index, follow" />
//       </Head>

//       <body className={inter.className}>
//         <NextIntlClientProvider locale={locale} messages={messages}>
//           <TRPCReactProvider headers={headers()}>
//             {children}
//             <SpeedInsights />
//           </TRPCReactProvider>
//         </NextIntlClientProvider>
//       </body>
//     </>
//   );
// };

// export default LocaleLayout;
