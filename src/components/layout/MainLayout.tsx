/**
 * MainLayout Component
 *
 * The primary shell of the application, incorporating the Navbar and Footer.
 * Handles the main scrollable area and provides a consistent structure for pages.
 */

import * as React from 'react';
import type { PropsWithChildren } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

type MainLayoutProps = Readonly<PropsWithChildren>;

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className='relative flex min-h-screen flex-col'>
      <Navbar />
      <main className='grow'>{children}</main>
      <Footer />
    </div>
  );
}
