import { UserSettings } from "../components/userSettings";

export default function Page() {
  const options = [
    { id: "1", name: "Foo" },
    { id: "2", name: "Bar" },
    { id: "3", name: "Baz" },
  ];

  const savedUserPrefs = ["2", "3"];

  const onSave = (preferences: string[]) => {
    console.log(preferences);
  };

  return (
    <>
      <h1>TDD Playground</h1>
      <UserSettings
        options={options}
        preferences={savedUserPrefs}
        onSave={onSave}
      />
    </>
  );
}
