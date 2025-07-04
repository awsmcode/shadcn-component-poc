import { useState } from 'react'
import { Button } from './components/ui/button'
import { SubComponent } from './registry/default/ui/sub-component'


function App() {
  return (
    <>
      <div className="flex min-h-svh flex-col items-center justify-center">
        <Button>Click me</Button>
        <SubComponent />
      </div>
    </>
  )
}

export default App
