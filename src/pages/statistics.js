import StatisticsView from '../js/statistics/statisticsView';
import STATISTICS_MODEL from '../js/statistics/statisticsModel';
import StatisticsController from '../js/statistics/statisticsController';

window.onload = () => {
  const statistics = new StatisticsController(STATISTICS_MODEL, new StatisticsView());
  console.log('222', statistics);
  statistics.init();
};
