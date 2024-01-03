import React from 'react';
import { View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

export const YStack = React.forwardRef<View, React.ComponentPropsWithoutRef<typeof View>>(
  ({ children, style, ...props }, ref) => {
    const { styles } = useStyles(baseStyle);

    return (
      <View style={[styles.base, style]} ref={ref} {...props}>
        {children}
      </View>
    );
  }
);

const baseStyle = createStyleSheet((theme) => ({
  base: {
    flexDirection: 'column',
    gap: theme.margins.md,
  },
}));
