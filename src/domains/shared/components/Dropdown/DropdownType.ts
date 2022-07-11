import React from 'react';

type ListNamesAndCallback = { name: string; callbackFn?: () => void };

export interface DropdownProps {
  title?: string;
  TitleComponent?: React.ReactNode;
  listNamesAndCallback: ListNamesAndCallback[];
  ListComponent?: React.FC<{ name: string; onClick: () => void | undefined }>;
  width?: string;
  setTogleIcon?: (booleanStatus: boolean) => void;
}
