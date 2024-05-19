import { ComboboxItem, Group, MultiSelectProps, Stack, Text } from '@mantine/core';
import { usePrevious } from '@mantine/hooks';
import { debounce, filter, intersectionWith, uniqBy } from 'lodash';
import { FC, useCallback, useEffect, useState } from 'react';

import { MultiSelectInput } from '../../common/components/inputs/MultiSelect/MultiSelectInput';
import { MultiSelectPillsInput } from '../../common/components/inputs/MultiSelect/PillsInput';
import { useGetGeneralData, usePrefetchGeneralData } from '../../entities/financial/api/getGeneralData';
import { IFinancialSearchData } from '../../entities/financial/financialData.model';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const renderMultiSelectOption: MultiSelectProps['renderOption'] = ({ option }: {option: any}) => (
  <Group gap='8px' wrap='nowrap'>
    <Text fw='bold' fz='md'>{option?.row?.exchangeShortName || '*'}</Text>
    <Text fz='md' truncate='end'>{option?.label}</Text>
  </Group>
);

export const FinancialSearchInput: FC = () => {

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [value, setValue] = useState<string[]>([]);
  const [valueData, setValueData] = useState<ComboboxItem[]>([]);
  const [foundData, setFoundData] = useState<Array<ComboboxItem> | null>(null);
  const [allFoundData, setAllFoundData] = useState<Array<ComboboxItem> | null>(null);

  const [searchText, setSearchText] = useState<string>('');

  const [prefetchedData, setPrefetchedData] = useState<ComboboxItem[]>([]);

  const { isFetching, data: result, refetch } = useGetGeneralData({ query: searchText });
  const { isFetching: isFetchingPrefetch, data: prefetchResult } = usePrefetchGeneralData({ query: searchText });

  const selectMapCallback = (item: IFinancialSearchData) =>
    ({ 
      value: `${item.name}, ${item.symbol}`,
      label: item.name,
      row: item, 
    });

  useEffect(() => {
    setValueData(intersectionWith(allFoundData, value, (first: ComboboxItem, second: string) => first.value === second));
  }, [value, allFoundData]);
 
  const previousValues = usePrevious({ searchText });

  useEffect(() => {
    if (result !== undefined) {
      const mappedResult = result.data?.map(selectMapCallback);
      setAllFoundData(prev => uniqBy(prev ? [...prev, ...mappedResult] : mappedResult, 'value'));
      setFoundData(mappedResult);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFetching]);

  useEffect(() => {
    if (prefetchResult !== undefined) {
      setPrefetchedData(prefetchResult.data.map(selectMapCallback));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFetchingPrefetch]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedRefetch = useCallback(debounce(refetch, 700), [foundData]);

  // Fetch the data on search text change (debounced)
  useEffect(() => {
    if (searchText !== (previousValues?.searchText || '')) {
      if (debouncedRefetch) {
        debouncedRefetch();
      }
    }
  }, [debouncedRefetch, previousValues?.searchText, searchText]);
  
  return (
    <Stack>
      <MultiSelectInput
        value={value}
        onChange={(newValue: string[]) => setValue(newValue)}
        placeholder='Search company or ticker'  
        renderOption={renderMultiSelectOption}
        data={foundData || undefined} 
        searchText={searchText} 
        setSearchText={setSearchText} 
        isFetching={isFetching}/>
      <MultiSelectPillsInput 
        value={value}
        isFetching={isFetchingPrefetch}
        valueData={valueData}
        onRefresh={() => setValue([])}
        selectCount={value.length}
        prefetchedData={prefetchedData} 
        onChange={(item: ComboboxItem) => 
          setValue(prev => prev.includes(item.value) 
          ? filter(prev, prevValue => prevValue !== item.value) 
          : [...prev, item.value]
        )} 
        renderOption={renderMultiSelectOption}/>
    </Stack>
  );
};
