import { useState } from "react";

interface Props {
  options?: Option[];
  preferences: string[];
}

interface Option {
  id: string;
  name: string;
}

export const UserSettings: React.FC<Props> = ({ options, preferences }) => {
  const [checked, setChecked] = useState(preferences);

  return (
    <form>
      {options &&
        options.map((o) => (
          <label key={o.id}>
            <input
              type="checkbox"
              name={o.name}
              value={o.id}
              checked={checked.includes(o.id)}
            />
          </label>
        ))}
    </form>
  );
};
