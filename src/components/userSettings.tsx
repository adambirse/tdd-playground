interface Props {
    id?: string;
  }

export const UserSettings: React.FC<Props> = ({id}) => {  
    return (
      <p id={id}>Hello
      </p>
    );
  };