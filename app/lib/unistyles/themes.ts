const globalTheme = {
  margins: {
    sm: 4,
    md: 8,
    lg: 16,
    xl: 32,
  },
  fonSizes: {
    h1: 31,
    h2: 25,
    h3: 19,
    body: 16,
    description: 14,
    caption: 12,
  },
  borderRadius: {
    sm: 4,
    md: 8,
    lg: 16,
    xl: 32,
  },
};

export const lightTheme = {
  colors: {
    primary: '#000',
    secondary: '#fff',
    background: '#fff',
    accent: '#2563eb',
    descructive: '#f34141',
    muted: '#00000030',
  },
  margins: globalTheme.margins,
  fonSizes: globalTheme.fonSizes,
  borderRadius: globalTheme.borderRadius,
} as const;

export const darkTheme = {
  colors: {
    primary: '#fff',
    secondary: '#000',
    background: '#2f2f2f',
    accent: '#ff55bb',
    descructive: '#df1c41',
    muted: '#ffffff30',
  },
  margins: globalTheme.margins,
  fonSizes: globalTheme.fonSizes,
  borderRadius: globalTheme.borderRadius,
} as const;
