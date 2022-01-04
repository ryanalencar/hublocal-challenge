interface ITheme {
  backgroundColor: string;
  colors: {
    primary: string;
    secondary: string;
  };
  spacing: number;
}

const theme: ITheme = {
  backgroundColor: '#fff',
  colors: {
    primary: '#4685FE',
    secondary: '#00DA91',
  },
  spacing: 10,
};

export default theme;
