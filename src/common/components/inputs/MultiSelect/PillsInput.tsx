import { Box, ComboboxItem, Flex, Group, Input, Loader, Pill, PillsInput, Text } from '@mantine/core';
import { IconPlus, IconX } from '@tabler/icons-react';
import { uniq } from 'lodash';
import { FC, useEffect, useState } from 'react';

import classes from './PillsInput.module.css';
import { IMultiSelectPillsInputProps } from './model';

export const MultiSelectPillsInput: FC<IMultiSelectPillsInputProps> = props => {
  const {
    value = [],
    onChange,
    onRefresh,
    label,
    valueData,
    prefetchedData,
    error,
    renderOption,
    isFetching,
    refreshLabel = 'Refresh',
  } = props;

  const [pillData, setPillData] = useState<ComboboxItem[]>([]);

  useEffect(() => {
    const prefetchedDataValues = prefetchedData?.map(item => item?.value);
    const data = uniq([...prefetchedDataValues, ...value]);
    const finalData = data
      ?.map((item: string) => [...valueData, ...prefetchedData].find(dataItem => dataItem?.value === item));
    setPillData(finalData);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [valueData, prefetchedData]);

  return (
    <Input.Wrapper mb={0}>
      <Flex direction='column' classNames={{ root: classes.pillInputFlex }}>
        <PillsInput label={label} error={error} classNames={{ input: classes.pillsInput }}>
          <Pill.Group classNames={{ group: classes.pillGroup }}>
            {
              isFetching
                ? <Loader w='100%' color='grape' type='dots'/>
                : pillData?.map(pill => renderPill({ value, pill, renderOption, onChange }))
            }
          </Pill.Group>
        </PillsInput>
        <Group justify='space-between'>
          <Text c='#4E5159'>{value.length} Companies saved</Text>
          <Text c='#4E5159' onClick={() => onRefresh()} style={{ cursor: 'pointer' }}>{refreshLabel}</Text>
        </Group>
      </Flex>
    </Input.Wrapper>
  );
};

interface IRenderPillProps extends Pick<IMultiSelectPillsInputProps, 'value' | 'renderOption' | 'onChange'> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  pill: any,
}

const renderPill = ({ value, pill, renderOption, onChange }: IRenderPillProps) => {
  const isSelected = value?.includes(pill?.value);

  return (
    <Pill
      onClick={() => onChange(pill)} 
      classNames={{
        root: `${classes.pill} ${isSelected ? classes.pillSelected : ''}`,
        label: classes.pillLabel,
      }}>
      <Box w='85%'>
        {renderOption ? renderOption({ option: pill }) : pill.label} 
      </Box>
      <Box w='15%' h='24px'>
        {
          isSelected 
          ? <IconX color='#8886BE' size='24px' strokeWidth='4px'/>
          : <IconPlus color='#8886BE' size='24px' strokeWidth='4px'/>      
        }
      </Box>
    </Pill>);
};
