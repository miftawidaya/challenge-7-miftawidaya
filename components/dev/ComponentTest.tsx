/**
 * ComponentTest Component
 *
 * Test component to verify UI components (Button, Input, Badge, etc.).
 * Add component tests here as you build them.
 *
 * @remarks
 * For development and testing purposes only.
 */

export function ComponentTest() {
  return (
    <div className='custom-container space-y-10xl py-6xl'>
      {/* Header */}
      <header className='space-y-md'>
        <h1 className='text-display-xl text-foreground font-extrabold'>
          Component Test
        </h1>
        <p className='text-md text-muted-foreground'>
          Verify UI components (Button, Input, Badge, etc.)
        </p>
      </header>

      {/* Buttons Section */}
      <section className='space-y-4xl' aria-labelledby='buttons-heading'>
        <h2
          id='buttons-heading'
          className='text-display-sm text-foreground font-bold'
        >
          Buttons
        </h2>

        <div className='space-y-3xl bg-card p-4xl rounded-2xl'>
          <p className='text-muted-foreground text-sm'>
            Add Button component tests here when components are created.
          </p>
        </div>
      </section>

      {/* Inputs Section */}
      <section className='space-y-4xl' aria-labelledby='inputs-heading'>
        <h2
          id='inputs-heading'
          className='text-display-sm text-foreground font-bold'
        >
          Inputs
        </h2>

        <div className='space-y-3xl bg-card p-4xl rounded-2xl'>
          <p className='text-muted-foreground text-sm'>
            Add Input component tests here when components are created.
          </p>
        </div>
      </section>

      {/* Badges Section */}
      <section className='space-y-4xl' aria-labelledby='badges-heading'>
        <h2
          id='badges-heading'
          className='text-display-sm text-foreground font-bold'
        >
          Badges
        </h2>

        <div className='space-y-3xl bg-card p-4xl rounded-2xl'>
          <p className='text-muted-foreground text-sm'>
            Add Badge component tests here when components are created.
          </p>
        </div>
      </section>

      {/* Cards Section */}
      <section className='space-y-4xl' aria-labelledby='cards-heading'>
        <h2
          id='cards-heading'
          className='text-display-sm text-foreground font-bold'
        >
          Cards
        </h2>

        <div className='space-y-3xl bg-card p-4xl rounded-2xl'>
          <p className='text-muted-foreground text-sm'>
            Add Card component tests here when components are created.
          </p>
        </div>
      </section>

      {/* Modals Section */}
      <section className='space-y-4xl' aria-labelledby='modals-heading'>
        <h2
          id='modals-heading'
          className='text-display-sm text-foreground font-bold'
        >
          Modals
        </h2>

        <div className='space-y-3xl bg-card p-4xl rounded-2xl'>
          <p className='text-muted-foreground text-sm'>
            Add Modal component tests here when components are created.
          </p>
        </div>
      </section>
    </div>
  );
}
