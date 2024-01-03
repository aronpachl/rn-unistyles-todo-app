import React from 'react';
import { Text as RNText } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

type Props = {
  fw?: 'normal' | 'medium' | 'bold';
  fs?: 'h1' | 'h2' | 'h3' | 'body' | 'description' | 'caption';
};

export const Text = React.forwardRef<RNText, React.ComponentPropsWithoutRef<typeof RNText> & Props>(
  ({ style, fw = 'normal', fs = 'body', ...props }, ref) => {
    const { styles } = useStyles(base, {
      fw,
      fs,
    });

    return <RNText style={[styles.base, style]} {...props} ref={ref} />;
  }
);

const base = createStyleSheet((theme) => ({
  base: {
    color: theme.colors.primary,
    variants: {
      fw: {
        normal: {
          fontWeight: 'normal',
        },
        medium: {
          fontWeight: '500',
        },
        bold: {
          fontWeight: 'bold',
        },
      },
      fs: {
        h1: {
          fontSize: theme.fonSizes.h1,
        },
        h2: {
          fontSize: theme.fonSizes.h2,
        },
        h3: {
          fontSize: theme.fonSizes.h3,
        },
        body: {
          fontSize: theme.fonSizes.body,
        },
        description: {
          fontSize: theme.fonSizes.description,
        },
        caption: {
          fontSize: theme.fonSizes.caption,
        },
      },
    },
  },
}));
