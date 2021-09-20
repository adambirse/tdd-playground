interface Props {
  options?: Option[];
}

interface Option {
  id: string;
  name: string;
}

export const UserSettings: React.FC<Props> = ({ options }) => {
  return (
    <form>
      {options &&
        options.map((o) => (
          <label key={o.id}>
            <input type="checkbox" name={o.name} value={o.id} />
          </label>
        ))}
    </form>
  );
};
