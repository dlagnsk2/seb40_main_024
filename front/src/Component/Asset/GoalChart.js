import { ResponsiveBullet } from '@nivo/bullet';

const GoalChart = ({ GoalData }) => {
  return (
    <ResponsiveBullet
      data={GoalData.map((d) => ({
        ...d,
        title: (
          <text dy={5}>
            <tspan
              style={{
                fill: '#000',
                fontWeight: 500,
                fontSize: '14px',
              }}
            >
              {d.id}
            </tspan>
          </text>
        ),
      }))}
      margin={{ top: 50, right: 90, bottom: 50, left: 90 }}
      spacing={46}
      titleAlign="start"
      titleOffsetX={-70}
      rangeColors="#FFD24C"
      measureSize={0.5}
      measureColors="#FFE69A"
    />
  );
};
export default GoalChart;
