/* eslint-disable @typescript-eslint/no-explicit-any */
import { ComboboxItem, ComboboxLikeRenderOptionInput } from '@mantine/core';

export interface IInputBaseProps {
  value?: any,
  onChange?: any,
  error?: any,
  withAsterisk?: boolean,
}

export interface IMultiSelectInputProps extends IInputBaseProps {
  label?: string,
  placeholder?: string,
  required?: boolean,
  noDataMessage?: string,
  data?: Array<any>,
  searchText: string,
  setSearchText: React.Dispatch<React.SetStateAction<string>>,
  isFetching: boolean,
  renderOption?: (item: ComboboxLikeRenderOptionInput<ComboboxItem>) => React.ReactNode,
}

export interface IMultiSelectPillsInputProps extends IInputBaseProps {
  label?: string,
  selectCount?: number,
  prefetchedData: Array<any>,
  refreshLabel?: string,
  valueData: Array<any>,
  isFetching: boolean,
  onRefresh: CallableFunction,
  renderOption?: (item: ComboboxLikeRenderOptionInput<ComboboxItem>) => React.ReactNode,
}
