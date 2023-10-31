'use client';

import type { Maybe } from '@fuel-explorer/graphql';
import { VStack } from '@fuels/ui';
import { CodeBlock } from '~/systems/Core/components/CodeBlock/CodeBlock';

import type { TransactionNode } from '../../types';

type TxScreenProps = {
  transaction?: Maybe<TransactionNode>;
};

export function TxScreenAdvanced({ transaction: tx }: TxScreenProps) {
  if (!tx) return null;

  return (
    <VStack gap="6">
      <CodeBlock value={tx} type="json" />
    </VStack>
  );
}