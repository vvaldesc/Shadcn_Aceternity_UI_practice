import {Textarea} from "@nextui-org/react";
import AutocompleteAnimals from "./components/ui/nextUI/Autocomplete/Autocomplete";
import GlowingStars from "./components/ui/aceternityUI/glowing-stars/Exampleinstance";
import Evervaultcardinstance from "./components/ui/aceternityUI/evervault-card/Evervaultcardinstance";
import SparklesPreview from "./components/ui/aceternityUI/sparkles/Sparclesinstance";
import {Button} from './components/ui/button'

import './App.css'
import './tailwind.css'


function App() {

  return (
    <>
      <SparklesPreview />
      <Textarea
            isReadOnly
            label="Description"
            variant="bordered"
            labelPlacement="outside"
            placeholder="Enter your description"
            defaultValue="NextUI is a React UI library that provides a set of accessible, reusable, and beautiful components."
            className="max-w-xs"
      />
      <AutocompleteAnimals/>
    </>
  )
}

export default App
