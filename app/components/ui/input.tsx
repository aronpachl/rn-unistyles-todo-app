import React from 'react';
import { TextInput } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

type Props = {
  variant?: 'disabled' | 'error';
};

export const Input = React.forwardRef<
  TextInput,
  React.ComponentPropsWithoutRef<typeof TextInput> & Props
>(({ children, variant, style, ...props }, ref) => {
  const { styles, theme } = useStyles(base, {
    variant,
  });

  return (
    <TextInput
      placeholderTextColor={theme.colors.primary}
      ref={ref}
      style={[styles.base, style]}
      {...props}>
      {children}
    </TextInput>
  );
});

const base = createStyleSheet((theme) => ({
  base: {
    padding: theme.margins.md,
    backgroundColor: theme.colors.background,
    borderRadius: theme.borderRadius.md,
    borderWidth: 2,
    width: '100%',
    variants: {
      variant: {
        default: {
          borderColor: theme.colors.accent,
        },
        disabled: {
          borderColor: theme.colors.muted,
        },
        error: {
          borderColor: theme.colors.descructive,
        },
      },
    },
  },
}));
