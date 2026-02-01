import { ComponentTest, DesignSystemTest, IconTest } from '@/components/dev';

/**
 * Development Test Page
 * @description Displays design system, icons, and component tests for development verification.
 * Accessible at /dev
 */
export default function DevPage() {
  return (
    <main className='pb-20'>
      <div className='bg-neutral-900 py-4 text-center text-white'>
        <p className='text-sm font-medium'>Development Test Environment</p>
      </div>

      {/* Design System Test - Typography, Colors, Spacing, Radius */}
      <DesignSystemTest />

      {/* Divider */}
      <hr className='max-w-container-max mx-auto border-neutral-800' />

      {/* Icon Test - Untitled UI Icons */}
      <IconTest />

      {/* Divider */}
      <hr className='max-w-container-max mx-auto border-neutral-800' />

      {/* Component Test - Button, Input, Badge, etc. */}
      <ComponentTest />
    </main>
  );
}
