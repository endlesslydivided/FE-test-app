import { Checkbox, Select, SimpleGrid, Stack, TextInput, Textarea } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';
import { difference, intersection, reject } from 'lodash';

import { IFormProps } from './model';

// eslint-disable-next-line max-len
const descriptionPlaceholder = 'Tell us the range for the numbers of experts you want us to include for this research and the type of experts in order for us to start expert screening stage.';

export enum EExpert {
  ALL = 'All',
  COMPETITOR = 'Competitor',
  CUSTOMER = 'Customer',
  INDUSTRY_CONSULTAN = 'Industry Consultant',
  FORMER_EXECUTIVE = 'Former Executive',
  PARTNER = 'Partner',
}

export enum EProjectType {
  COMPANY_RESEARCH = 'Company Research',
  MANAGEMENT_RESEARCH = 'Management Research',
  INDUSTRY_RESEARCH = 'Industry Research',
}
export const FormInputs = ({ form }: IFormProps) => {

  const projectTypeSelectOptions = [
    EProjectType.COMPANY_RESEARCH,
    EProjectType.MANAGEMENT_RESEARCH,
    EProjectType.INDUSTRY_RESEARCH,
  ];

  const projectExpertCheckboxOptions = [
    { value: EExpert.ALL, label: EExpert.ALL },
    { value: EExpert.COMPETITOR, label: EExpert.COMPETITOR },
    { value: EExpert.CUSTOMER, label: EExpert.CUSTOMER },
    { value: EExpert.INDUSTRY_CONSULTAN, label: EExpert.INDUSTRY_CONSULTAN },
    { value: EExpert.FORMER_EXECUTIVE, label: EExpert.FORMER_EXECUTIVE },
    { value: EExpert.PARTNER, label: EExpert.PARTNER },
  ];

  const expertValues = projectExpertCheckboxOptions.map(({ value }) => value);

  const handleCheckboxChange = (options: string[]) => {

    const wasMoreValues = form.values.expert.length > options.length;
    const newOption = form.values.expert && form.values.expert?.length !== 0
      ? (wasMoreValues ? difference(form.values.expert, options) : difference(options, form.values.expert))[0]
      : options[0];
    const hadAsterisk = form.values.expert?.includes(EExpert.ALL);

    if (newOption === EExpert.ALL) {
      if (hadAsterisk) {
        form.setFieldValue('expert', []);
        return;
      }
      form.setFieldValue('expert', expertValues);
      return;
    }
    if (hadAsterisk) {
      form.setFieldValue('expert', prev => intersection(options, reject(prev, item => item === EExpert.ALL)));
      return;
    }
    if (options.length === 5) {
      form.setFieldValue('expert', expertValues);
      return;
    }
    form.setFieldValue('expert', options);
  };

  const isCompanySelected = form.values.type === EProjectType.COMPANY_RESEARCH;

  return (
    <Stack gap='20px'>
      <TextInput
        {...form.getInputProps('name')}
        label='Project name'
        withAsterisk placeholder='E.g. Microsoft Research' />
      <Select
        {...form.getInputProps('type')}
        rightSection={<IconChevronDown color='#787C84' strokeWidth='3px' />}
        label='Project type'
        withAsterisk
        data={projectTypeSelectOptions}
        placeholder='E.g. Company Research' />
      {
        isCompanySelected
        && <TextInput
          {...form.getInputProps('companies')}
          label='Companies'
          withAsterisk
          placeholder='E.g.Microsoft' />
      }
      <TextInput
        {...form.getInputProps('description')}
        label='Project Description'
        placeholder='Please define the purpose for this project.' />
      <Textarea
        {...form.getInputProps('scope')}
        label='Project Scope'
        placeholder={descriptionPlaceholder} />

      <Checkbox.Group
        defaultValue={form.getInputProps('expert').value}
        label='Expert'
        withAsterisk w='50%'
        {...form.getInputProps('expert')}
        onChange={handleCheckboxChange}>
        <SimpleGrid cols={2} verticalSpacing='7px'>
          {
            projectExpertCheckboxOptions.map(option =>
              <Checkbox color='#AEADD5' value={option.value} label={option.label} />
            )
          }
        </SimpleGrid>
      </Checkbox.Group>

    </Stack>
  );
};
