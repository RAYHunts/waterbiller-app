import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { FontAwesome6 } from '@expo/vector-icons';
import { useTheme } from '../../context/ThemeContext';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAuth } from '@/context/auth-context';

const registerSchema = z.object({
  first_name: z.string().min(2, 'First name must be at least 2 characters'),
  last_name: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone_number: z.string().min(10, 'Phone number must be at least 10 digits'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  confirmPassword: z.string(),
  address: z.string().min(5, 'Address must be at least 5 characters'),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

type RegisterFormData = z.infer<typeof registerSchema>;

export default function RegisterScreen() {
  const { theme } = useTheme();
  const { signUp } = useAuth();
  const [isShownPass, setIsShownPass] = useState({ pass: false, c_pass: false });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      first_name: '',
      last_name: '',
      email: '',
      phone_number: '',
      password: '',
      confirmPassword: '',
      address: '',
    },
  });

  const onSubmit = async (data: RegisterFormData) => {
    try {
      await signUp(data);
    } catch (err) {
      console.error('Registration error:', err);
    }
  };

  const togglePasswordVisibility = (field: 'pass' | 'c_pass') => {
    setIsShownPass((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
      contentContainerStyle={styles.contentContainer}
    >
      <Text style={[styles.title, { color: theme.colors.text }]}>Create Account</Text>

      <Controller
        control={control}
        name="first_name"
        render={({ field: { onChange, value } }) => (
          <View style={styles.inputContainer}>
            <TextInput
              style={[styles.input, { backgroundColor: theme.colors.surface, color: theme.colors.text, borderColor: errors.first_name ? theme.colors.error : theme.colors.border }]}
              placeholder="First Name"
              placeholderTextColor={theme.colors.secondary}
              value={value}
              onChangeText={onChange}
            />
            {errors.first_name && <Text style={[styles.errorText, { color: theme.colors.error }]}>{errors.first_name.message}</Text>}
          </View>
        )}
      />

      <Controller
        control={control}
        name="last_name"
        render={({ field: { onChange, value } }) => (
          <View style={styles.inputContainer}>
            <TextInput
              style={[styles.input, { backgroundColor: theme.colors.surface, color: theme.colors.text, borderColor: errors.last_name ? theme.colors.error : theme.colors.border }]}
              placeholder="Last Name"
              placeholderTextColor={theme.colors.secondary}
              value={value}
              onChangeText={onChange}
            />
            {errors.last_name && <Text style={[styles.errorText, { color: theme.colors.error }]}>{errors.last_name.message}</Text>}
          </View>
        )}
      />

      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, value } }) => (
          <View style={styles.inputContainer}>
            <TextInput
              style={[styles.input, { backgroundColor: theme.colors.surface, color: theme.colors.text, borderColor: errors.email ? theme.colors.error : theme.colors.border }]}
              placeholder="Email"
              placeholderTextColor={theme.colors.secondary}
              value={value}
              onChangeText={onChange}
              autoCapitalize="none"
              keyboardType="email-address"
            />
            {errors.email && <Text style={[styles.errorText, { color: theme.colors.error }]}>{errors.email.message}</Text>}
          </View>
        )}
      />

      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, value } }) => (
          <View style={styles.inputContainer}>
            <TextInput
              style={[styles.input, { backgroundColor: theme.colors.surface, color: theme.colors.text, borderColor: errors.password ? theme.colors.error : theme.colors.border }]}
              placeholder="Password"
              placeholderTextColor={theme.colors.secondary}
              value={value}
              onChangeText={onChange}
              secureTextEntry={!isShownPass.pass}
            />
            {errors.password && <Text style={[styles.errorText, { color: theme.colors.error }]}>{errors.password.message}</Text>}
            <TouchableOpacity style={styles.eye} onPress={() => togglePasswordVisibility('pass')}>
              <FontAwesome6 name={isShownPass.pass ? "eye-slash" : "eye"} size={24} color={theme.colors.primary} />
            </TouchableOpacity>
          </View>
        )}
      />

      <Controller
        control={control}
        name="confirmPassword"
        render={({ field: { onChange, value } }) => (
          <View style={styles.inputContainer}>
            <TextInput
              style={[styles.input, { backgroundColor: theme.colors.surface, color: theme.colors.text, borderColor: errors.confirmPassword ? theme.colors.error : theme.colors.border }]}
              placeholder="Confirm Password"
              placeholderTextColor={theme.colors.secondary}
              value={value}
              onChangeText={onChange}
              secureTextEntry={!isShownPass.c_pass}
            />
            {errors.confirmPassword && <Text style={[styles.errorText, { color: theme.colors.error }]}>{errors.confirmPassword.message}</Text>}
            <TouchableOpacity style={styles.eye} onPress={() => togglePasswordVisibility('c_pass')}>
              <FontAwesome6 name={isShownPass.c_pass ? "eye-slash" : "eye"} size={24} color={theme.colors.primary} />
            </TouchableOpacity>
          </View>
        )}
      />

      <Controller
        control={control}
        name="phone_number"
        render={({ field: { onChange, value } }) => (
          <View style={styles.inputContainer}>
            <TextInput
              style={[styles.input, { backgroundColor: theme.colors.surface, color: theme.colors.text, borderColor: errors.phone_number ? theme.colors.error : theme.colors.border }]}
              placeholder="Phone Number"
              placeholderTextColor={theme.colors.secondary}
              value={value}
              onChangeText={onChange}
              keyboardType="phone-pad"
            />
            {errors.phone_number && <Text style={[styles.errorText, { color: theme.colors.error }]}>{errors.phone_number.message}</Text>}
          </View>
        )}
      />

      <View style={styles.addressContainer}>
        <Controller
          control={control}
          name="address"
          render={({ field: { onChange, value } }) => (
            <View style={styles.addressInputContainer}>
              <TextInput
                style={[styles.addressInput, { backgroundColor: theme.colors.surface, color: theme.colors.text, borderColor: errors.address ? theme.colors.error : theme.colors.border }]}
                placeholder="Address"
                placeholderTextColor={theme.colors.secondary}
                value={value}
                onChangeText={onChange}
                multiline
              />
              {errors.address && <Text style={[styles.errorText, { color: theme.colors.error }]}>{errors.address.message}</Text>}
            </View>
          )}
          />
          </View>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: theme.colors.primary }]}
        onPress={handleSubmit(onSubmit)}
      >
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>

      <Link href="/sign-in" asChild>
        <TouchableOpacity style={styles.linkContainer}>
          <Text style={[styles.link, { color: theme.colors.primary }]}>
            Already have an account? Sign in
          </Text>
        </TouchableOpacity>
      </Link>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 16,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
  },
  errorText: {
    fontSize: 12,
    marginTop: 4,
    marginLeft: 4,
  },
  addressContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  addressInputContainer: {
    flex: 1,
  },
  addressInput: {
    height: 80,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    textAlignVertical: 'top',
    paddingTop: 12,
  },
  locationButton: {
    width: 50,
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  propertyTypeContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  propertyTypeButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  propertyTypeButton: {
    flex: 1,
    height: 40,
    borderRadius: 8,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 4,
  },
  propertyTypeText: {
    fontSize: 14,
    fontWeight: '500',
  },
  button: {
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  linkContainer: {
    marginTop: 16,
    alignItems: 'center',
  },
  link: {
    fontSize: 14,
  },
  eye :{
    // center eye
    position: "absolute",
    right: 10,  
    top: "50%",
  }
});