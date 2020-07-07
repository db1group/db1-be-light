import React from 'react';

import { Card } from './styles';

interface Props {
  description: string;
}

const ResposibilityCard: React.FC<Props> = ({ description }: Props) => (<Card>{description}</Card>);

export default ResposibilityCard;
