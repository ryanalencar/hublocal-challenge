interface ITheme {
  backgroundColor: string;
  colors: {
    primary: string;
  };
  spacing: number;
}

const theme: ITheme = {
  backgroundColor: '#fff',
  colors: {
    primary: '#4685FE',
  },
  spacing: 10,
};

export default theme;
