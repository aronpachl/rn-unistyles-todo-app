import * as React from 'react';
import {
  Controller,
  ControllerProps,
  FieldPath,
  FieldValues,
  FormProvider,
  useFormContext,
} from 'react-hook-form';
import { Text, View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

const Form = FormProvider;

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName;
};

const FormFieldContext = React.createContext<FormFieldContextValue>({} as FormFieldContextValue);

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  );
};

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext);
  const itemContext = React.useContext(FormItemContext);
  const { getFieldState, formState } = useFormContext();

  const fieldState = getFieldState(fieldContext.name, formState);

  if (!fieldContext) {
    throw new Error('useFormField should be used within <FormField>');
  }

  const { id } = itemContext;

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  };
};

type FormItemContextValue = {
  id: string;
};

const FormItemContext = React.createContext<FormItemContextValue>({} as FormItemContextValue);

const FormItem = React.forwardRef<View, React.ComponentPropsWithoutRef<typeof View>>(
  ({ style, ...props }, ref) => {
    const id = React.useId();

    return (
      <FormItemContext.Provider value={{ id }}>
        <View ref={ref} style={style} {...props} />
      </FormItemContext.Provider>
    );
  }
);
FormItem.displayName = 'FormItem';

const FormLabel = React.forwardRef<Text, React.ComponentPropsWithoutRef<typeof Text>>(
  ({ style, ...props }, ref) => {
    const { error, name } = useFormField();
    const { setFocus } = useFormContext();
    const { styles } = useStyles(form);

    return (
      <Text
        onPress={() => {
          console.log('focusing', name);
          setFocus(name);
        }}
        ref={ref}
        style={[styles.label(!!error), style]}
        {...props}
      />
    );
  }
);
FormLabel.displayName = 'FormLabel';

const FormDescription = React.forwardRef<Text, React.ComponentPropsWithoutRef<typeof Text>>(
  ({ style, ...props }, ref) => {
    const { formDescriptionId } = useFormField();
    const { styles } = useStyles(form);

    return <Text ref={ref} id={formDescriptionId} style={[styles.description, style]} {...props} />;
  }
);
FormDescription.displayName = 'FormDescription';

const FormMessage = React.forwardRef<Text, React.ComponentPropsWithoutRef<typeof Text>>(
  ({ className, children, ...props }, ref) => {
    const { error, formMessageId } = useFormField();
    const body = error ? String(error?.message) : children;

    const { styles } = useStyles(form);

    return (
      <View style={styles.errorMessageWrapper}>
        <Text style={[styles.errorMessage]} ref={ref} id={formMessageId} {...props}>
          {body}
        </Text>
      </View>
    );
  }
);
FormMessage.displayName = 'FormMessage';

export { useFormField, Form, FormItem, FormLabel, FormDescription, FormMessage, FormField };

const form = createStyleSheet((theme) => ({
  label: (hasError: boolean) => ({
    color: hasError ? theme.colors.descructive : theme.colors.primary,
    fontSize: theme.fonSizes.description,
  }),
  description: {
    color: theme.colors.primary,
    opacity: 0.8,
    fontSize: theme.fonSizes.caption,
    marginBottom: theme.margins.sm,
  },
  errorMessageWrapper: {
    minHeight: 15,
  },
  errorMessage: {
    color: theme.colors.descructive,
    fontSize: theme.fonSizes.caption,
  },
}));
