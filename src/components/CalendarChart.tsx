import { CalendarDatum, ResponsiveCalendar } from '@nivo/calendar';

interface CalendarChartProps {
  data: CalendarDatum[];
}

export const CalendarChart = (props: CalendarChartProps) => {
  const { data } = props;

  return (
    <div className='h-3/4 w-screen'>
      <ResponsiveCalendar
        data={data}
        from={data[data.length - 1].day}
        to={data[0].day}
        emptyColor='#fff'
        colors={['#818cf8', '#a78bfa', '#c084fc', '#e879f9', '#f472b6', '#fb7185']}
        margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
        yearSpacing={40}
        monthBorderWidth={0}
        monthBorderColor='#000'
        monthLegendOffset={8}
        dayBorderWidth={1}
        dayBorderColor='#000'
        theme={{ tooltip: { container: { backgroundColor: '#000' } } }}
        legends={[
          {
            anchor: 'bottom-right',
            direction: 'row',
            translateY: 36,
            itemCount: 4,
            itemWidth: 42,
            itemHeight: 36,
            itemsSpacing: 14,
            itemDirection: 'right-to-left',
          },
        ]}
      />
    </div>
  );
};