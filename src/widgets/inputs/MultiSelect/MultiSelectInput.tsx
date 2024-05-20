import { ComboboxData, Flex, Input, Loader, MultiSelect } from '@mantine/core';
import { useEffect, useState } from 'react';

import classes from './MultiSelectInput.module.css';
import { IMultiSelectInputProps } from './model';

export const MultiSelectInput = (props: IMultiSelectInputProps) => {
  const {
    value = [],
    onChange,
    required = false,
    noDataMessage = 'No matches found',
    error,
    data,
    placeholder,
    setSearchText,
    searchText,
    isFetching,
    renderOption,
  } = props;

  const [selectData, setSelectData] = useState<ComboboxData | undefined>([]);

  useEffect(() => {
    if (data) {
      console.log(data);
      setSelectData(data);
    }
  }, [data]);

  return (
    <Input.Wrapper error={error} mb={0}>
      <Flex direction='column'>
        <MultiSelect
          onSearchChange={searchText => {
            setSearchText(searchText || '');
          }}
          limit={50}
          searchValue={searchText}
          searchable
          placeholder={placeholder}
          data={selectData}
          nothingFoundMessage={data?.length === 0 ? noDataMessage : 'No Entries'}
          onChange={onChange}
          value={value}
          rightSection={<>
            {isFetching && <Loader size='1rem' />}
          </>}
          rightSectionWidth={55}
          renderOption={renderOption}
          classNames={{
            dropdown: classes.noEntriesDropdown,
            option: classes.optionMultiSelect,
          }}
          styles={{
            pill: {
              display: 'none',
            },
            section: {
              rightSection: value ? { pointerEvents: 'none' } : {},
            },
          }}
          required={required}
          clearable
          multiple
        />
      </Flex>
    </Input.Wrapper>
  );
};
