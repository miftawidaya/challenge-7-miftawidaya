/**
 * Home Page
 * @description The main landing page of the Restaurant App.
 */
export default function Home() {
  return (
    <div className='flex flex-col'>
      {/* Scrollable Spacer to test Navbar state transitions */}
      <div className='flex min-h-screen items-center justify-center bg-neutral-100 py-32'>
        <h1 className='text-display-md font-bold text-neutral-400'>
          Scroll down to see Navbar Solid state
        </h1>
      </div>
      <div className='h-screen bg-neutral-200' />
    </div>
  );
}
