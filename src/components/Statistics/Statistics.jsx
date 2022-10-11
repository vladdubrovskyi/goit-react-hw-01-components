import PropTypes from 'prop-types';

import {
  StatisticsWraper,
  StatisticsBox,
  Title,
  StatisticsList,
  StatisticsElement,
} from 'components/Statistics/Statistics.styled';

export const Statistics = ({ title, stats }) => {
    return (    <StatisticsWraper>
      <StatisticsBox>
        {title && <Title>{title}</Title>}
        <StatisticsList>
          {stats.map(data => (
            <StatisticsElement key={data.id}>
              <span>{data.label}</span>
              <span>{data.percentage}%</span>
            </StatisticsElement>
          ))}
        </StatisticsList>
      </StatisticsBox>
    </StatisticsWraper>)
}



