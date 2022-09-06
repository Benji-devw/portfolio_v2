// my-theme.ts
import { DefaultTheme } from 'styled-components';
import data from './schema.json'

// console.log((<any>data).body);



const myTheme: DefaultTheme = {
  borderRadius: '5px',
  backgroundColor: (<any>data).body,

  colors: {
    main: 'cyan',
    secondary: 'magenta',
  },
};

export { myTheme };