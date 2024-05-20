import { z } from 'zod';

import { EProjectType } from './FormInputs';

const REQUIRED_FIELD_ERROR = 'This field is required';

export const newDataValidationSchema = z.object({
  name: z.string().min(1, REQUIRED_FIELD_ERROR).max(256),
  type: z.string().min(1, REQUIRED_FIELD_ERROR).max(256),
  companies: z.string(),
  description: z.string(),
  scope: z.string().min(1, REQUIRED_FIELD_ERROR).max(1028),
  expert: z.array(z.string()).min(1, REQUIRED_FIELD_ERROR),
}).superRefine((schema, ctx) => {
  if (schema.type === EProjectType.COMPANY_RESEARCH) {
    if (schema.companies.length === 0) {
      ctx.addIssue({
        path: ['companies'],
        code: z.ZodIssueCode.too_small,
        minimum: 1,
        type: 'string',
        inclusive: true,
        message: REQUIRED_FIELD_ERROR,
      });
    }
  }
});
