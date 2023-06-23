export const theme = {
  device: {
    xlarge: `
      @media (max-width: 1340px)
    `,
    large: `
      @media (max-width: 950px)
    `,
  },
};
declare module "styled-components" {
  export interface DefaultTheme {
    device: typeof theme.device;
  }
}
