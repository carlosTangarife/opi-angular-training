export interface ITheme {
  custome: IThemeTodo
  defaul: IThemeTodo
}

export interface IThemeTodo {
  primary: string;
  secondary: string;
  tertiary: string;
  fontSize: string;
  padding?: string;
  margin?: string;
}
