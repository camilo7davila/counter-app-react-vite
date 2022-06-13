import { FC } from "react";

interface Props {
  title: string;
  subtitle: number;
}

const newMessage = {
  message: 'Camilo',
  title: 'camilo'
};

const getValue = (): string => {
  return 'Esto se devuelve'
}

export const FirstApp: FC<Props> = ({ title, subtitle}) => {
  return (
    <>
      <h1 data-testid="test-title">{title}</h1>
      {/* <code>{ JSON.stringify(newMessage) }</code> */}
      {/* <h1>{ getValue() }</h1> */}
      <p>{ subtitle }</p>
    </>
  )
}
