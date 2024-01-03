import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { z } from 'zod';

import {
  Form,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../components/ui/form';
import { Input } from '../components/ui/input';
import { Screen } from '../components/ui/screen';
import { Text } from '../components/ui/text';
import { YStack } from '../components/ui/y-stack';

const ContactSchema = z.object({
  name: z.string().min(1, 'Required'),
  email: z.string().email('Invalid email').min(1, 'Required'),
  message: z.string().min(1, 'Required'),
});

type ContactForm = z.infer<typeof ContactSchema>;

export default function Contact() {
  const methods = useForm<ContactForm>({
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
    resolver: zodResolver(ContactSchema),
  });

  const { styles } = useStyles(contact);

  const onSubmit = (data: ContactForm) => {
    console.log(data);
  };

  return (
    <Screen>
      <Text fs="h1" fw="bold">
        Contact
      </Text>
      <Text fs="description" style={styles.description}>
        This is a fake form just to play around with forms and dynamic variant
      </Text>
      <Form {...methods}>
        <YStack style={styles.formContainer}>
          <FormField
            render={({ field: { ref, value, onChange }, fieldState: { error } }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <Input
                  ref={ref}
                  value={value}
                  onChangeText={onChange}
                  onSubmitEditing={() => methods.setFocus('email')}
                  returnKeyType="next"
                  variant={error && 'error'}
                />
                <FormMessage />
              </FormItem>
            )}
            name="name"
          />
          <FormField
            render={({ field: { ref, value, onChange }, fieldState: { error } }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormDescription>Please enter your email so we can get back to you</FormDescription>
                <Input
                  ref={ref}
                  value={value}
                  onChangeText={onChange}
                  onSubmitEditing={() => methods.setFocus('message')}
                  returnKeyType="next"
                  variant={error && 'error'}
                />
                <FormMessage />
              </FormItem>
            )}
            name="email"
          />
          <FormField
            render={({ field: { ref, value, onChange }, fieldState: { error } }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormDescription>Reason for contact, please be short and specific</FormDescription>
                <Input
                  ref={ref}
                  value={value}
                  onChangeText={onChange}
                  returnKeyType="done"
                  variant={error && 'error'}
                />
                <FormMessage />
              </FormItem>
            )}
            name="message"
          />
          <TouchableOpacity onPress={methods.handleSubmit(onSubmit)} style={styles.submitWrapper}>
            <Text fw="bold" style={styles.submitText}>
              Submit
            </Text>
          </TouchableOpacity>
        </YStack>
      </Form>
    </Screen>
  );
}

const contact = createStyleSheet((theme) => ({
  description: {
    opacity: 0.5,
  },
  formContainer: {
    width: '100%',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  submitWrapper: {
    backgroundColor: theme.colors.accent,
    borderRadius: theme.borderRadius.md,
    padding: theme.margins.md,
  },
  submitText: {
    color: theme.colors.secondary,
    textAlign: 'center',
  },
}));
