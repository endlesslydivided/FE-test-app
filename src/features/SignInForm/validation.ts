import { z } from 'zod';

export const signInValidationSchema = z.object({
  password: z.string().min(1, 'This field is required').max(256),
  email: z.string().email().min(1, 'This field is required').max(256),
});
