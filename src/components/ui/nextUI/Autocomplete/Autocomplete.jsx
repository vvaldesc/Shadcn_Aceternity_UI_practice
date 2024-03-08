import {  Autocomplete,  AutocompleteItem} from "@nextui-org/autocomplete";import {animals} from "./data";

export default function AutocompleteAnimals() {
    return(
        <Autocomplete
        defaultItems={animals}
        label="Favorite Animal"
        placeholder="Search an animal"
        className="max-w-xs"
      >
        {(animal) => <AutocompleteItem key={animal.value}>{animal.label}</AutocompleteItem>}
      </Autocomplete>
    )
}