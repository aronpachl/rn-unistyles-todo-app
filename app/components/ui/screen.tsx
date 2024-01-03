import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

type Props = {
  contentPosition?: 'center' | 'bottom';
};

export const Screen = React.forwardRef<View, React.ComponentPropsWithoutRef<typeof View> & Props>(
  ({ children, contentPosition, style, ...props }, ref) => {
    const { styles } = useStyles(base, {
      contentPosition,
    });

    return (
      <SafeAreaView style={[styles.base, style]} ref={ref} {...props}>
        {children}
      </SafeAreaView>
    );
  }
);

const base = createStyleSheet((theme) => ({
  base: {
    flex: 1,
    padding: theme.margins.md,
    backgroundColor: theme.colors.background,
    variants: {
      contentPosition: {
        default: {
          justifyContent: 'flex-start',
          alignItems: 'center',
        },
        center: {
          justifyContent: 'center',
          alignItems: 'center',
        },
        bottom: {
          justifyContent: 'flex-end',
          alignItems: 'center',
        },
      },
    },
  },
}));
