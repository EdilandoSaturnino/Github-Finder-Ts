import { Btn } from './styles';

interface ButtonProps {
  [x: string]: any;
}

export function Button({ style, ...props }: ButtonProps) {
  return <Btn style={style} {...props} />;
}