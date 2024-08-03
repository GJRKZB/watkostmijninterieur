# Notes

## Add values to array or object

Define a interface or type for the object you want to add values to

```ts
interface Option {
  value: string;
  label: string;
}

interface IFormData {
  selectedValues: string[];
}
```

Then define state for the object

```ts
const [formData, setFormData] = useState<IFormData>({ selectedValues: [] });
```

Finally, update the state when the checkbox is changed

```ts
const handleCheckboxChangeFirst = (
  event: React.ChangeEvent<HTMLInputElement>
) => {
  const { checked, value } = event.target;
  if (checked) {
    setFormData({
      ...formData,
      selectedValues: [...formData.selectedValues, value],
    });
  } else {
    setFormData({
      ...formData,
      selectedValues: formData.selectedValues.filter(
        (option) => option !== value
      ),
    });
  }
};
```
