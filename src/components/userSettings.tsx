import { useState } from "react";

interface Props {
  options?: Option[];
  preferences: string[];
  onSave(preferences: string[]): any;
}

interface Option {
  id: string;
  name: string;
}

export const UserSettings: React.FC<Props> = ({
  options,
  preferences,
  onSave,
}) => {
  const [checked, setChecked] = useState(preferences);
  const handleChange = (e) => {
    const set = new Set(checked);
    if (e.target.checked) {
      set.add(e.target.value);
    } else {
      set.delete(e.target.value);
    }
    setChecked(Array.from(set.values()));
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSave(checked);
      }}
    >
      {options &&
        options.map((o) => (
          <label key={o.id}>
            <input
              type="checkbox"
              name={o.name}
              value={o.id}
              checked={checked.includes(o.id)}
              onChange={handleChange}
            />
          </label>
        ))}
    </form>
  );
};
